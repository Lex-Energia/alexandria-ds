// Copyright (c) Meta Platforms, Inc. and affiliates.

/**
 * @file Chart.test.tsx
 * @input Uses vitest, @testing-library/react, Chart + bar/line/area marks,
 *   core's Theme and the Pharos theme source
 * @output Rendering tests: marks per datum, accessible name/description, the
 *   hidden data table, horizontal orientation, and theme colors (light/dark)
 * @position Testing; validates Chart.tsx, marks/bar.tsx, marks/line.tsx
 *
 * SYNC: When Chart.tsx, dataTable.ts or the marks change, update these tests
 */

import {describe, it, expect, vi} from 'vitest';
import {render, screen, within} from '@testing-library/react';
import {renderToString} from 'react-dom/server';
import type {ReactNode} from 'react';
import {Theme} from '@pharos-ds/core/theme';
import {pharosTheme} from '../../themes/pharos/src/pharosTheme';
import {Chart} from './Chart';
import {ChartAxis} from './ChartAxis';
import {ChartGrid} from './ChartGrid';
import {bar, line, area, referenceLine} from './marks';

// jsdom has no layout: report a fixed width so the chart leaves its
// pre-measurement placeholder and draws the SVG.
const WIDTH = 600;
class MockResizeObserver {
  callback: ResizeObserverCallback;
  constructor(callback: ResizeObserverCallback) {
    this.callback = callback;
  }
  observe(target: Element) {
    this.callback(
      [{contentRect: {width: WIDTH}, target} as unknown as ResizeObserverEntry],
      this as unknown as ResizeObserver,
    );
  }
  unobserve() {}
  disconnect() {}
}
vi.stubGlobal('ResizeObserver', MockResizeObserver);

const data = [
  {canal: 'Instagram', leads: 120, meta: 100},
  {canal: 'Google', leads: 80, meta: 90},
  {canal: 'Indicação', leads: 45, meta: 50},
];

function inTheme(mode: 'light' | 'dark', children: ReactNode) {
  return (
    <Theme theme={pharosTheme} mode={mode}>
      {children}
    </Theme>
  );
}

/** Mark paths inside the clipped plot group (excludes grid/axis lines). */
function markPaths(container: HTMLElement): SVGPathElement[] {
  return Array.from(
    container.querySelectorAll<SVGPathElement>('g[clip-path] path'),
  );
}

describe('Chart — bar', () => {
  it('renders one bar per datum', () => {
    const {container} = render(
      <Chart data={data} xKey="canal" series={[bar('leads')]} />,
    );
    const bars = markPaths(container);
    expect(bars).toHaveLength(data.length);
    for (const b of bars) {
      expect(b.getAttribute('d')).toMatch(/^M[\d.]+,[\d.]+/);
    }
  });

  it('exposes the chart as an image named by its title', () => {
    render(
      <Chart
        title="Leads por canal"
        data={data}
        xKey="canal"
        series={[bar('leads', {label: 'Leads'})]}
      />,
    );
    const img = screen.getByRole('img', {name: 'Leads por canal'});
    expect(img.tagName.toLowerCase()).toBe('svg');
    // Plot internals are decorative — the text alternative is the table.
    expect(img.querySelector('g[aria-hidden="true"]')).not.toBeNull();
    // No SVG <title>: it would show a native tooltip over the custom one.
    expect(img.querySelector('title')).toBeNull();
  });

  it('renders a hidden data table with caption, headers and one row per x', () => {
    render(
      <Chart
        title="Leads por canal"
        data={data}
        xKey="canal"
        series={[
          bar('leads', {label: 'Leads'}),
          line('meta', {label: 'Meta'}),
          referenceLine({y: 100, label: 'Alvo'}),
        ]}
        dataTable={{xLabel: 'Canal'}}
      />,
    );
    const table = screen.getByRole('table', {name: 'Leads por canal'});
    const headers = within(table)
      .getAllByRole('columnheader')
      .map(h => h.textContent);
    // Utility marks (referenceLine) get no column.
    expect(headers).toEqual(['Canal', 'Leads', 'Meta']);
    const rows = within(table).getAllByRole('row').slice(1);
    expect(rows).toHaveLength(data.length);
    expect(
      within(rows[0])
        .getAllByRole('cell')
        .map(c => c.textContent),
    ).toEqual([(120).toLocaleString(), (100).toLocaleString()]);
    expect(within(rows[2]).getByRole('rowheader').textContent).toBe(
      'Indicação',
    );
  });

  it('omits the table when dataTable={false}', () => {
    render(
      <Chart
        title="Leads"
        data={data}
        xKey="canal"
        series={[bar('leads')]}
        dataTable={false}
      />,
    );
    expect(screen.queryByRole('table')).toBeNull();
    expect(screen.getByRole('img', {name: 'Leads'})).toBeInTheDocument();
  });

  it('includes the text alternative in server HTML (before measurement)', () => {
    const html = renderToString(
      <Chart title="Leads" data={data} xKey="canal" series={[bar('leads')]} />,
    );
    expect(html).toContain('<table');
    expect(html).toContain('<caption>Leads</caption>');
    expect(html).toContain('Instagram');
  });

  it('draws horizontal bars through a transpose, with categories on the left axis', () => {
    const {container} = render(
      <Chart
        title="Leads por canal"
        orientation="horizontal"
        data={data}
        xKey="canal"
        series={[bar('leads')]}
        grid={<ChartGrid />}
        axes={
          <>
            <ChartAxis position="left" />
            <ChartAxis position="bottom" />
          </>
        }
      />,
    );
    expect(markPaths(container)).toHaveLength(data.length);
    const transposed = container.querySelector('g[clip-path] > g[transform]');
    expect(transposed?.getAttribute('transform')).toMatch(/^matrix\(0,1,-1,0,/);
    const left = container.querySelector('g[aria-label="left axis"]');
    const labels = Array.from(left?.querySelectorAll('text') ?? []).map(
      t => t.textContent,
    );
    expect(labels).toEqual(data.map(d => d.canal));
    // Value axis at the bottom shows numbers, starting at zero.
    const bottom = container.querySelector('g[aria-label="bottom axis"]');
    expect(bottom?.querySelector('text')?.textContent).toBe('0');
    // Default grid follows the value axis: vertical lines only.
    const gridLines = Array.from(container.querySelectorAll('svg line')).filter(
      l => l.getAttribute('x1') === l.getAttribute('x2'),
    );
    expect(gridLines.length).toBeGreaterThan(0);
  });
});

describe('Chart — line', () => {
  it('renders one path for the series, plus dots when asked', () => {
    const {container} = render(
      <Chart data={data} xKey="canal" series={[line('leads', {dots: true})]} />,
    );
    const paths = markPaths(container);
    expect(paths).toHaveLength(1);
    expect(paths[0].getAttribute('fill')).toBe('none');
    expect(paths[0].getAttribute('d')).toMatch(/^M/);
    expect(container.querySelectorAll('g[clip-path] circle')).toHaveLength(
      data.length,
    );
  });

  it('prefers aria-label and wires subtitle + description', () => {
    render(
      <Chart
        title="Evolução"
        subtitle="Últimos 3 canais"
        aria-label="Evolução de leads por canal"
        description="Instagram lidera com 120 leads."
        data={data}
        xKey="canal"
        series={[line('leads', {label: 'Leads'})]}
      />,
    );
    const img = screen.getByRole('img', {
      name: 'Evolução de leads por canal',
    });
    expect(img).toHaveAccessibleDescription(
      'Últimos 3 canais. Instagram lidera com 120 leads.',
    );
    // The table caption follows the accessible name.
    expect(
      screen.getByRole('table', {name: 'Evolução de leads por canal'}),
    ).toBeInTheDocument();
  });

  it('falls back to the series labels for the accessible name', () => {
    render(
      <Chart
        data={data}
        xKey="canal"
        series={[
          line('leads', {label: 'Leads'}),
          area('meta', {label: 'Meta'}),
        ]}
      />,
    );
    expect(screen.getByRole('img', {name: 'Leads, Meta'})).toBeInTheDocument();
  });
});

describe('Chart — theme colors', () => {
  const LIGHT = ['#034694', '#7C51A1', '#F26641'];
  const DARK = ['#6BA3F5', '#A67BC4', '#F26641'];

  it.each([
    ['light', LIGHT],
    ['dark', DARK],
  ] as const)(
    'colors auto series in the Pharos categorical order (%s)',
    (mode, expected) => {
      const {container} = render(
        inTheme(
          mode,
          <Chart
            data={data}
            xKey="canal"
            series={[
              bar('leads', {group: 'g'}),
              bar('meta', {group: 'g'}),
              line('leads'),
            ]}
          />,
        ),
      );
      const paths = markPaths(container);
      const barFills = new Set(
        paths
          .filter(p => p.getAttribute('fill') !== 'none')
          .map(p => p.getAttribute('fill')?.toUpperCase()),
      );
      expect([...barFills]).toEqual(expected.slice(0, 2));
      const linePath = paths.find(p => p.getAttribute('fill') === 'none');
      expect(linePath?.getAttribute('stroke')?.toUpperCase()).toBe(expected[2]);
    },
  );
});
