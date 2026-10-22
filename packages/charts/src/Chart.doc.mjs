// Copyright (c) Meta Platforms, Inc. and affiliates.

/** @type {import('../../core/src/docs-types').ComponentDoc} */

export const docs = {
  name: 'Chart',
  displayName: 'Chart',
  group: 'Charts',
  category: 'Data Visualization',
  keywords: [
    'chart',
    'graph',
    'bar',
    'line',
    'area',
    'horizontal bar',
    'data visualization',
    'dataviz',
    'accessible chart',
  ],

  usage: {
    description:
      'Config-model chart: pass `data`, the `xKey` that identifies each row and a `series` array of mark factories (`bar`, `line`, `area`, `dot`, `band`, `referenceLine`, `errorBar`, `candlestick` and WebGL variants). One x/y scale is shared by every mark, axis and grid line. Series without an explicit `color` take the theme categorical palette in order (Pharos: azul, roxo, laranja, amarelo, chumbo), resolved for the active light/dark mode. Accessible by default: the SVG is `role="img"` named by `aria-label` → `title` → series labels, `subtitle`/`description` become its description, and a visually hidden data table carries the values for screen readers. Dist consumers import `@pharos-ds/core/pharos.css` and `@pharos-ds/charts/charts.css`; no StyleX compiler is needed.',
    bestPractices: [
      {
        guidance: true,
        description:
          'Give every chart a `title` (or `aria-label` when the visible heading lives outside the chart, e.g. in a Card header).',
      },
      {
        guidance: true,
        description:
          'Add a `description` that states the takeaway ("Instagram lidera com 120 leads") — the hidden table has the numbers, the description has the meaning.',
      },
      {
        guidance: true,
        description:
          'Use `orientation="horizontal"` for long category names or rankings; pair it with `<ChartAxis position="left" />` (categories) and `<ChartAxis position="bottom" />` (values), and widen `margin.left` to fit the labels.',
      },
      {
        guidance: true,
        description:
          'Let series take palette colors (omit `color`) so light/dark mode and the brand order work automatically.',
      },
      {
        guidance: false,
        description:
          'Turn off `dataTable` unless the same data is already on the page as a real table — it is the text alternative for screen-reader users.',
      },
      {
        guidance: false,
        description:
          'Rely on the tooltip to convey values: it is pointer-only (no keyboard focus), so anything essential must be in the table, the description or visible labels.',
      },
      {
        guidance: false,
        description:
          'Share one series array between charts: each `<Chart>` annotates its series defs, so build a fresh array per chart.',
      },
    ],
  },

  props: [
    {
      name: 'data',
      type: 'Record<string, unknown>[]',
      description: 'Rows to plot. Each row has the x value under `xKey` plus one value per series data key.',
      required: true,
    },
    {
      name: 'xKey',
      type: 'string',
      description: 'Key of the x value. Strings make a categorical (band) axis, numbers a linear one.',
      required: true,
    },
    {
      name: 'series',
      type: 'SeriesDef[]',
      description: 'Marks to draw, built with the mark factories (`bar("leads")`, `line("meta", {label: "Meta"})`, …). Order sets palette order and draw order.',
      required: true,
    },
    {
      name: 'title',
      type: 'string',
      description: 'Visible heading above the chart. Also the accessible name and the hidden table caption unless `aria-label` is set.',
    },
    {
      name: 'subtitle',
      type: 'string',
      description: 'Visible supporting line under the title; part of the SVG description (`aria-describedby`).',
    },
    {
      name: 'aria-label',
      type: 'string',
      description: 'Accessible name of the chart image. Defaults to `title`, then to the data series labels joined by commas.',
    },
    {
      name: 'description',
      type: 'string',
      description: 'Text alternative summarizing the chart (trend, highlights). Not visible; exposed through `aria-describedby` after `subtitle`.',
    },
    {
      name: 'dataTable',
      type: 'boolean | { xLabel?: string; formatX?: (value) => string; formatValue?: (value, series, dataKey) => string; maxRows?: number }',
      description: 'Visually hidden `<table>` generated from `data`: caption = accessible name, header row = x label + series labels, one row per x value. Utility marks (band, errorBar, referenceLine) get no column. Omitted above `maxRows` rows (default 1000). Pass `false` to opt out.',
      default: 'true',
    },
    {
      name: 'orientation',
      type: "'vertical' | 'horizontal'",
      description: 'Horizontal puts categories on the y-axis and grows values to the right (horizontal bars). Axes and grid follow; use the `tooltip` prop rather than a `ChartTooltip` child.',
      default: "'vertical'",
    },
    {
      name: 'height',
      type: 'number',
      description: 'Height of the plot SVG in px. Width always fills the container.',
      default: '300',
    },
    {
      name: 'margin',
      type: 'Partial<{top: number; right: number; bottom: number; left: number}>',
      description: 'Space reserved around the plot for axis labels.',
      default: '{top: 24, right: 24, bottom: 32, left: 48}',
    },
    {
      name: 'grid',
      type: 'ReactNode',
      description: 'Grid slot, usually `<ChartGrid />` (follows the value axis by default).',
    },
    {
      name: 'axes',
      type: 'ReactNode',
      description: 'Axis slot, usually `<ChartAxis position="bottom" />` and `<ChartAxis position="left" />`.',
    },
    {
      name: 'legend',
      type: 'boolean | ChartLegendProps',
      description: 'Shows a legend derived from the series (labels + swatches); pass an object for position and alignment.',
    },
    {
      name: 'tooltip',
      type: 'boolean | Omit<ChartTooltipProps, "series">',
      description: 'Pointer tooltip with every series value at the hovered x. Pointer-only and never focusable.',
    },
    {
      name: 'yBaseline',
      type: "'auto' | 'zero' | 'data'",
      description: 'How the value domain is derived when `yDomain` is not set: bars/areas pin zero (`auto`), symmetric around zero (`zero`) or tight to the data (`data`).',
      default: "'auto'",
    },
    {
      name: 'yDomain',
      type: '[number, number]',
      description: 'Explicit value domain. Authoritative — disables baseline and headroom.',
    },
    {
      name: 'xDomain',
      type: '[number, number]',
      description: 'Explicit numeric x domain (streaming windows). Ignored for categorical x.',
    },
    {
      name: 'interactions',
      type: 'ReactNode',
      description: 'Slot for interaction layers that read the chart context (`useChart`).',
    },
    {
      name: 'children',
      type: 'ReactNode',
      description: 'Escape hatch rendered last inside the plot group.',
    },
  ],
};
