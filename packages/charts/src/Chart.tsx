// Copyright (c) Meta Platforms, Inc. and affiliates.

/**
 * @file Chart.tsx (v2)
 * @output Root chart — coordinates layout, rendering, and events
 * @position Top-level; delegates everything to series configs and interaction slots
 *
 * The chart root has ZERO knowledge of mark types. It:
 *   1. Runs the layout engine (scales + stacking + grouping)
 *   2. Calls each series' resolve() and render() methods
 *   3. Provides a single event layer for interaction children
 *   4. Exposes the text alternative (WCAG 1.1.1): the SVG is `role="img"` with
 *      an accessible name (`aria-label` → `title` → series labels), optional
 *      `<desc>` from `subtitle`/`description`, and a visually hidden data table
 *      built from `data` (opt out with `dataTable={false}`). Plot internals are
 *      `aria-hidden`.
 *   5. Transposes the plot for `orientation="horizontal"`: marks resolve in the
 *      vertical plot space and are drawn through a 90° transform, while axes
 *      and grid read display-space scales from context.
 *
 * SYNC: When modified, update /packages/charts/src/Chart.doc.mjs and
 *   /packages/charts/README.md
 */

'use client';

import {
  type ReactNode,
  useId,
  useMemo,
  useRef,
  useState,
  useCallback,
  useLayoutEffect,
} from 'react';
import type {SeriesDef, YBaseline, ChartOrientation} from './types';
import type {ChartContext, ChartMargin, ChartPointerEvent} from './types';
import {computeLayout} from './layout';
import {ChartProvider} from './ChartContext';
import {Text} from '@pharos-ds/core';
import {VStack, HStack} from '@pharos-ds/core';
import {VisuallyHidden} from '@pharos-ds/core';
import * as stylex from '@stylexjs/stylex';
import {scaleLinear} from 'd3-scale';
import {
  buildDataTable,
  fallbackChartLabel,
  type ChartDataTableOptions,
} from './dataTable';
import {isBandScale} from './utils';
import {ChartLegend, type ChartLegendProps} from './ChartLegend';
import {deriveLegendItems} from './legend';
import {ChartTooltip, type ChartTooltipProps} from './ChartTooltip';
import {useChartColors} from './useChartColors';
import {isUtilityMarkType} from './types';

export interface ChartProps {
  data: Record<string, unknown>[];
  xKey: string;
  series: SeriesDef[];
  height?: number;
  margin?: Partial<ChartMargin>;
  /** How the y-domain is derived when `yDomain` is not set. Default `'auto'`. */
  yBaseline?: YBaseline;
  /** Explicit y-domain [min, max]. Authoritative — disables baseline/headroom. */
  yDomain?: [number, number];
  /**
   * Explicit x-domain [min, max] for numeric/linear x. Honored even when `data`
   * is empty (stable streaming window). Ignored for categorical (band) scales.
   */
  xDomain?: [number, number];
  grid?: ReactNode;
  axes?: ReactNode;
  legend?: boolean | ChartLegendProps;
  tooltip?: boolean | Omit<ChartTooltipProps, 'series'>;
  interactions?: ReactNode;
  children?: ReactNode;
  /**
   * Visible heading above the chart. Also the chart's accessible name and the
   * hidden data table's caption, unless `aria-label` is given.
   */
  title?: string;
  /** Visible supporting line under the title; exposed as the SVG description. */
  subtitle?: string;
  /**
   * Accessible name for the chart (`role="img"`). Defaults to `title`, then to
   * the data series labels. Use it when the visible title lives outside the
   * chart (e.g. a Card header).
   */
  'aria-label'?: string;
  /**
   * Text alternative summarizing what the chart shows (trend, highlights). Not
   * rendered visibly; exposed via `aria-describedby` alongside `subtitle`.
   */
  description?: string;
  /**
   * Visually hidden `<table>` with the chart's data, for screen readers
   * (caption = accessible name, header row = x label + series labels, one row
   * per x value). Default `true`. Pass `false` to opt out (e.g. when the same
   * data is already on the page as a table) or an object to customize labels
   * and formatting.
   */
  dataTable?: boolean | ChartDataTableOptions;
  /**
   * `'vertical'` (default) or `'horizontal'` — categories on the y-axis and
   * values growing right (horizontal bars). Axes and grid follow automatically;
   * for the tooltip use the `tooltip` prop (not a `ChartTooltip` child).
   */
  orientation?: ChartOrientation;
}

const DEFAULT_MARGIN: ChartMargin = {top: 24, right: 24, bottom: 32, left: 48};

const styles = stylex.create({
  container: {
    width: '100%',
  },
  title: {
    marginBottom: 16,
  },
  chartArea: {
    flex: 1,
    minWidth: 0,
    overflow: 'hidden',
  },
});

export function Chart({
  data,
  xKey,
  series,
  height = 300,
  margin: marginOverride,
  yBaseline,
  yDomain,
  xDomain,
  grid,
  axes,
  legend,
  tooltip,
  interactions,
  children,
  title,
  subtitle,
  'aria-label': ariaLabel,
  description,
  dataTable = true,
  orientation = 'vertical',
}: ChartProps) {
  const chartId = useId();
  const descId = `${chartId}-desc`;
  const isHorizontal = orientation === 'horizontal';
  // useId() can contain ':' which is invalid in an SVG url(#id) reference.
  const clipId = `plot-${chartId.replace(/:/g, '')}`;
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const pointerHandlers = useRef<Set<(e: ChartPointerEvent) => void>>(
    new Set(),
  );

  useLayoutEffect(() => {
    if (!containerRef.current) {
      return;
    }
    const observer = new ResizeObserver(entries => {
      const entry = entries[0];
      if (entry) {
        setContainerWidth(entry.contentRect.width);
      }
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const margin = useMemo(
    () => ({...DEFAULT_MARGIN, ...marginOverride}),
    [marginOverride],
  );
  // Clamp plot dimensions to finite, non-negative values. layout.ts hardens
  // against NaN in the *data*, but a non-finite `height` prop or margin override
  // would still collapse every scale range — and the clipPath/event-rect
  // geometry — into NaN. `containerWidth` is always finite (from ResizeObserver).
  const safeHeight = Number.isFinite(height) ? Math.max(0, height) : 0;
  const rawInnerWidth = containerWidth - margin.left - margin.right;
  const rawInnerHeight = safeHeight - margin.top - margin.bottom;
  const innerWidth = Number.isFinite(rawInnerWidth)
    ? Math.max(0, rawInnerWidth)
    : 0;
  const innerHeight = Number.isFinite(rawInnerHeight)
    ? Math.max(0, rawInnerHeight)
    : 0;
  // Plot space: marks always resolve as if the chart were vertical. For a
  // horizontal chart the category axis runs along the display height and the
  // value axis along the display width, so the plot box is transposed.
  const plotWidth = isHorizontal ? innerHeight : innerWidth;
  const plotHeight = isHorizontal ? innerWidth : innerHeight;

  // ─── Color assignment ─────────────────────────────────────────────────
  // Give every primary series that doesn't supply a static color (auto-colored
  // or accessor-colored) a distinct color from the theme's categorical palette.
  // Utility marks (band/errorBar/referenceLine) don't consume palette slots.
  // Assigned during render (like the layout pass annotates `_uid`) so the first
  // paint is already colored; intentionally not a `useMemo` — it mutates the
  // caller's series defs, and useMemo is allowed to drop its cached result.
  const chartColors = useChartColors();
  const needsColor = series.filter(
    s => !isUtilityMarkType(s.type) && s.color == null,
  );
  const palette = chartColors.categorical(Math.max(needsColor.length, 1));
  for (let i = 0; i < needsColor.length; i++) {
    needsColor[i]._resolvedColor = palette[i % palette.length];
  }

  // ─── Layout pass ──────────────────────────────────────────────────────
  const layout = useMemo(
    () =>
      computeLayout({
        data,
        xKey,
        series,
        width: plotWidth,
        height: plotHeight,
        yBaseline,
        yDomain,
        xDomain,
      }),
    [data, xKey, series, plotWidth, plotHeight, yBaseline, yDomain, xDomain],
  );

  const seriesCtx = useMemo(
    () => ({
      data,
      xKey,
      xScale: layout.xScale,
      yScale: layout.yScale,
      yBandScale: layout.yBandScale,
      width: plotWidth,
      height: plotHeight,
    }),
    [data, xKey, layout, plotWidth, plotHeight],
  );

  // ─── Event dispatch ───────────────────────────────────────────────────
  const onPointer = useCallback((handler: (e: ChartPointerEvent) => void) => {
    pointerHandlers.current.add(handler);
    return () => {
      pointerHandlers.current.delete(handler);
    };
  }, []);

  const dispatch = useCallback((e: ChartPointerEvent) => {
    for (const handler of pointerHandlers.current) {
      handler(e);
    }
  }, []);

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<SVGRectElement>) => {
      const svg = svgRef.current;
      if (!svg) {
        return;
      }
      const point = svg.createSVGPoint();
      point.x = e.clientX;
      point.y = e.clientY;
      const ctm = e.currentTarget.getScreenCTM()?.inverse();
      if (!ctm) {
        return;
      }
      const cursor = point.matrixTransform(ctm);

      // Find nearest point by category distance only (the full column — or
      // row, when horizontal — is the hover zone). Resolved points live in
      // plot space, where the category position is always `px`.
      const cursorCategory = isHorizontal ? cursor.y : cursor.x;
      let nearest: ChartPointerEvent['nearest'] = null;
      let bestXDist = Infinity;
      for (const [seriesKey, points] of layout.resolved) {
        for (const p of points) {
          const xDist = Math.abs(p.px - cursorCategory);
          if (xDist < bestXDist) {
            bestXDist = xDist;
            nearest = {...p, seriesKey};
          }
        }
      }
      dispatch({x: cursor.x, y: cursor.y, nearest, active: e.buttons > 0});
    },
    [layout.resolved, dispatch, isHorizontal],
  );

  const handlePointerLeave = useCallback(() => {
    dispatch({x: -1, y: -1, nearest: null, active: false});
  }, [dispatch]);

  // ─── Context for interactions + v1 chrome ─────────────────────────────
  // `plotCtx` is the vertical plot space marks resolve in (it is also the
  // display space for vertical charts). For horizontal charts, chrome gets a
  // display-space view: the value scale runs along x (left → right) and the
  // category scale along y (top → bottom).
  const plotCtx: ChartContext = useMemo(
    () => ({
      orientation,
      width: plotWidth,
      height: plotHeight,
      margin,
      data,
      xKey,
      xScale: layout.xScale,
      yScale: layout.yScale,
      yBandScale: layout.yBandScale,
      resolved: layout.resolved,
      onPointer,
      svgRef,
    }),
    [orientation, plotWidth, plotHeight, margin, data, xKey, layout, onPointer],
  );

  const ctx: ChartContext = useMemo(() => {
    if (!isHorizontal) {
      return plotCtx;
    }
    const valueScale = layout.yScale.copy().range([0, innerWidth]);
    const plotX = layout.xScale;
    return {
      ...plotCtx,
      width: innerWidth,
      height: innerHeight,
      xScale: valueScale,
      ...(isBandScale(plotX)
        ? {
            yBandScale: plotX.copy().range([0, innerHeight]),
            // Unused for a categorical y; kept so `yScale` stays a valid scale.
            yScale: scaleLinear().range([innerHeight, 0]),
          }
        : {
            yBandScale: undefined,
            yScale: plotX.copy().range([0, innerHeight]),
          }),
    };
  }, [plotCtx, isHorizontal, layout, innerWidth, innerHeight]);

  // ─── Accessibility ────────────────────────────────────────────────────
  const accessibleName =
    ariaLabel || title || fallbackChartLabel(series) || undefined;
  const descriptionText = [subtitle, description].filter(Boolean).join('. ');
  const tableModel = useMemo(
    () =>
      dataTable === false
        ? null
        : buildDataTable(
            data,
            xKey,
            series,
            dataTable === true ? {} : dataTable,
          ),
    [data, xKey, series, dataTable],
  );
  const tableElement = tableModel ? (
    <VisuallyHidden as="div">
      <table>
        {accessibleName && <caption>{accessibleName}</caption>}
        <thead>
          <tr>
            {tableModel.headers.map((h, i) => (
              <th key={i} scope="col">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableModel.rows.map(row => (
            <tr key={row.key}>
              <th scope="row">{row.header}</th>
              {row.cells.map((cell, i) => (
                <td key={i}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </VisuallyHidden>
  ) : null;

  // ─── Legend ────────────────────────────────────────────────────────────
  const legendConfig = legend === true ? {} : legend || null;

  const legendElement = legendConfig ? (
    <ChartLegend
      items={legendConfig.items ?? deriveLegendItems(series)}
      position={legendConfig.position}
      alignment={legendConfig.alignment}
    />
  ) : null;

  const legendPosition = legendConfig?.position ?? 'bottom';
  const isLegendHorizontal =
    legendPosition === 'start' || legendPosition === 'end';

  // ─── Render ───────────────────────────────────────────────────────────
  // Before the first measurement (and during SSR) only the sized placeholder
  // renders — plus the hidden data table, which doesn't depend on width, so
  // the text alternative is in the server HTML too.
  if (containerWidth === 0) {
    return (
      <div
        ref={containerRef}
        {...stylex.props(styles.container)}
        style={{height: safeHeight}}>
        {tableElement}
      </div>
    );
  }

  return (
    <div ref={containerRef} {...stylex.props(styles.container)}>
      {(title || subtitle) && (
        <div {...stylex.props(styles.title)}>
          {title && (
            <Text type="body" weight="semibold" display="block">
              {title}
            </Text>
          )}
          {subtitle && (
            <Text type="supporting" display="block">
              {subtitle}
            </Text>
          )}
        </div>
      )}
      <ChartProvider value={ctx}>
        {legendConfig == null ? (
          renderSvg()
        ) : isLegendHorizontal ? (
          <HStack gap={4}>
            {legendPosition === 'start' && legendElement}
            <div {...stylex.props(styles.chartArea)}>{renderSvg()}</div>
            {legendPosition === 'end' && legendElement}
          </HStack>
        ) : (
          <VStack gap={4}>
            {legendPosition === 'top' && legendElement}
            {renderSvg()}
            {legendPosition === 'bottom' && legendElement}
          </VStack>
        )}
      </ChartProvider>
      {tableElement}
    </div>
  );

  function renderSvg() {
    const plotTransform = isHorizontal
      ? `matrix(0,1,-1,0,${innerWidth},0)`
      : undefined;
    return (
      <svg
        ref={svgRef}
        width="100%"
        height={safeHeight}
        role="img"
        aria-label={accessibleName}
        aria-describedby={descriptionText ? descId : undefined}>
        {descriptionText && <desc id={descId}>{descriptionText}</desc>}
        <defs>
          <clipPath id={clipId}>
            <rect x={0} y={0} width={innerWidth} height={innerHeight} />
          </clipPath>
        </defs>
        <g transform={`translate(${margin.left},${margin.top})`}>
          {/* 1-3. Decorative plot internals — the text alternative is the
              accessible name + hidden data table, so these stay out of the
              accessibility tree. */}
          <g aria-hidden="true">
            {/* 1. Grid */}
            {grid}

            {/* 2. Marks — each series renders itself. Clipped to the plot area
                so curve overshoot (monotone/natural) can't escape into the
                margins. Horizontal charts draw the vertical plot space through
                a transpose: plot (px, py) → display (innerWidth − py, px). */}
            <g clipPath={`url(#${clipId})`}>
              <g transform={plotTransform}>
                {series.map(s => {
                  const resolved = s._uid
                    ? layout.resolved.get(s._uid)
                    : undefined;
                  if (!resolved) {
                    return null;
                  }
                  return <g key={s._uid}>{s.render(resolved, seriesCtx)}</g>;
                })}
              </g>
            </g>

            {/* 3. Axes */}
            {axes}
          </g>

          {/* 4. Event capture + interactions */}
          <rect
            x={0}
            y={0}
            width={innerWidth}
            height={innerHeight}
            fill="transparent"
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
          />
          {interactions}

          {/* 5. Tooltip — declarative shortcut. For full control, render
              <ChartTooltip> directly via the `children` slot. Pointer-only
              and never focusable (the card is pointer-events: none), so it
              can't trap keyboard focus; its hover marks are decorative. */}
          {tooltip && (
            <g aria-hidden="true" transform={plotTransform}>
              <ChartProvider value={plotCtx}>
                <ChartTooltip
                  series={series}
                  {...(tooltip === true ? {} : tooltip)}
                />
              </ChartProvider>
            </g>
          )}

          {/* 6. Escape hatch */}
          {children}
        </g>
      </svg>
    );
  }
}
