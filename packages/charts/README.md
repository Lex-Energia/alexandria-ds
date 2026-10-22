# @pharos-ds/charts

Pharos charts — a config-model data visualization library built on d3, themed by
Pharos tokens and accessible by default.

```tsx
import {Chart, ChartAxis, ChartGrid, bar, line} from '@pharos-ds/charts';

<Chart
  title="Leads por mês"
  description="Março teve o maior volume do trimestre."
  data={data}
  xKey="mes"
  series={[bar('leads', {label: 'Leads'}), line('meta', {label: 'Meta'})]}
  grid={<ChartGrid />}
  axes={
    <>
      <ChartAxis position="bottom" />
      <ChartAxis position="left" />
    </>
  }
  legend
  tooltip
/>;
```

Marks are factory functions (`bar`, `line`, `area`, `dot`, `band`, `candlestick`,
`errorBar`, `referenceLine`, and WebGL variants) that return config objects passed
via the `series` prop. The chart root owns **one** x/y scale that every mark, axis,
and grid line reads, so they can never disagree.

## Install

`@pharos-ds/charts` is versioned together with `@pharos-ds/core` (same version
number, exact peer). Install matching versions:

```bash
npm install @pharos-ds/charts@1.0.x @pharos-ds/core@1.0.x @stylexjs/stylex
```

Peers: `@pharos-ds/core` (exact version), `@stylexjs/stylex` (runtime only — no
compiler needed), `react` and `react-dom` ≥ 19.

## Styles

The package ships prebuilt CSS, the same way core does. Import it once, after
core's stylesheet — no StyleX compiler is needed in your app:

```css
@import '@pharos-ds/core/pharos.css';
@import '@pharos-ds/theme-pharos/theme.css';
@import '@pharos-ds/charts/charts.css';
```

Render charts inside core's `<Theme>` (e.g. with `pharosTheme`). Series without
an explicit `color` take the theme's categorical palette in order — for Pharos:
azul, roxo, laranja, amarelo, chumbo — resolved for the active light/dark mode.

`Chart` is a client component (`'use client'`): it measures its container, so the
plot draws after hydration. The hidden data table is part of the server HTML.

## Horizontal bars

```tsx
<Chart
  title="Leads por canal"
  orientation="horizontal"
  data={porCanal}
  xKey="canal"
  series={[bar('leads', {label: 'Leads'})]}
  margin={{left: 96}}
  grid={<ChartGrid />}
  axes={
    <>
      <ChartAxis position="left" />
      <ChartAxis position="bottom" />
    </>
  }
  tooltip
/>
```

Categories go on the y-axis and values grow to the right. The grid follows the
value axis by default. Use the `tooltip` prop (not a `ChartTooltip` child) in
horizontal charts.

## Accessibility

Every chart is exposed as one image with a text alternative (WCAG 1.1.1):

- The SVG has `role="img"` and an accessible name: `aria-label` → `title` → the
  data series labels.
- `subtitle` and `description` become the image description (`aria-describedby`).
  Use `description` for the takeaway.
- A visually hidden `<table>` is generated from `data`: caption = accessible name,
  header row = x label + series labels, one row per x value. Utility marks
  (`band`, `errorBar`, `referenceLine`) get no column. Customize with
  `dataTable={{xLabel, formatX, formatValue, maxRows}}`, or opt out with
  `dataTable={false}` when the same data is already on the page as a table. Charts
  with more than `maxRows` rows (default 1000) skip the table.
- Grid, marks and axes are `aria-hidden`.
- The tooltip is pointer-only: it is never focusable and never traps focus.
  There is no keyboard tooltip; keyboard and screen-reader users get the values
  from the data table.

## Development

Inside the monorepo (storybook/sandbox), imports resolve via pnpm workspaces.
Stories live in `apps/storybook/stories/charts/`. Run the tests with:

```bash
corepack pnpm exec vitest run packages/charts
```

> Note: this package is the successor to the experimental `Chart` (formerly
> `ChartV2`) that used to live in `@pharos-ds/lab`; that code has moved here and
> d3 is a direct dependency. See the repo-root `docs/CHARTV2_*` docs for the
> original plan and verification checklist.
