// Copyright (c) Meta Platforms, Inc. and affiliates.

/**
 * @file dataTable.ts
 * @output Pure builder for the chart's text alternative (WCAG 1.1.1): turns
 *   `data` + `xKey` + `series` into a header row and one row per x value.
 * @position Used by Chart to render the visually hidden `<table>` that sits
 *   next to the `role="img"` SVG. Mirrors legend.ts / tooltip.ts: data shaping
 *   lives here, presentation lives in Chart.tsx.
 *
 * Utility marks (band, errorBar, referenceLine) are annotations, not data the
 * reader compares, so they get no column — same rule as the legend and the
 * tooltip. A mark that reads several keys (candlestick: open/high/low/close)
 * gets one column per key.
 *
 * SYNC: When modified, update /packages/charts/src/Chart.doc.mjs
 */

import {isUtilityMarkType, type SeriesDef} from './types';

/** Options for the hidden data table rendered by `<Chart>`. */
export interface ChartDataTableOptions {
  /** Header of the first column (the x values). Default: the chart's `xKey`. */
  xLabel?: string;
  /** Formats an x value for its row header cell. Default: `String(value)`. */
  formatX?: (value: unknown) => string;
  /**
   * Formats one value cell. Receives the raw value, the series and the data key
   * being read. Default: locale-formatted numbers, `String()` otherwise and an
   * empty cell for missing values.
   */
  formatValue?: (value: unknown, series: SeriesDef, dataKey: string) => string;
  /**
   * Largest `data.length` that still renders a table. Above it the table is
   * omitted (streaming/WebGL charts with thousands of points) and the chart
   * relies on its accessible name and `description`. Default: `1000`.
   */
  maxRows?: number;
}

export interface ChartDataTableModel {
  headers: string[];
  rows: {key: string; header: string; cells: string[]}[];
}

/** Default row cap — see `ChartDataTableOptions.maxRows`. */
export const DATA_TABLE_MAX_ROWS = 1000;

function defaultFormatValue(value: unknown): string {
  if (value == null) {
    return '';
  }
  if (typeof value === 'number') {
    return Number.isFinite(value) ? value.toLocaleString() : '';
  }
  if (value instanceof Date) {
    return value.toLocaleDateString();
  }
  return String(value);
}

function defaultFormatX(value: unknown): string {
  if (value instanceof Date) {
    return value.toLocaleDateString();
  }
  return value == null ? '' : String(value);
}

/**
 * Build the table model, or `null` when there is nothing to tabulate (no data,
 * no data series) or `data` exceeds `maxRows`.
 */
export function buildDataTable(
  data: readonly Record<string, unknown>[],
  xKey: string,
  series: readonly SeriesDef[],
  options: ChartDataTableOptions = {},
): ChartDataTableModel | null {
  const maxRows = options.maxRows ?? DATA_TABLE_MAX_ROWS;
  if (data.length === 0 || data.length > maxRows) {
    return null;
  }

  const columns: {series: SeriesDef; dataKey: string; header: string}[] = [];
  for (const s of series) {
    if (isUtilityMarkType(s.type)) {
      continue;
    }
    const label = s.label ?? s.key;
    for (const dataKey of s.dataKeys) {
      columns.push({
        series: s,
        dataKey,
        header: s.dataKeys.length > 1 ? `${label} (${dataKey})` : label,
      });
    }
  }
  if (columns.length === 0) {
    return null;
  }

  const formatX = options.formatX ?? defaultFormatX;
  const formatValue = options.formatValue ?? defaultFormatValue;

  return {
    headers: [options.xLabel ?? xKey, ...columns.map(c => c.header)],
    rows: data.map((d, i) => ({
      key: String(i),
      header: formatX(d[xKey]),
      cells: columns.map(c => formatValue(d[c.dataKey], c.series, c.dataKey)),
    })),
  };
}

/**
 * Accessible name fallback when the chart has neither `aria-label` nor
 * `title`: the data series labels, so the name is never empty.
 */
export function fallbackChartLabel(series: readonly SeriesDef[]): string {
  return series
    .filter(s => !isUtilityMarkType(s.type))
    .map(s => s.label ?? s.key)
    .join(', ');
}
