// Copyright (c) Meta Platforms, Inc. and affiliates.

import {describe, expect, it} from 'vitest';
import {buildDataTable, fallbackChartLabel} from './dataTable';
import {bar, line, band, candlestick, errorBar} from './marks';

const data = [
  {mes: 'jan', leads: 1200, custo: 300.5},
  {mes: 'fev', leads: null, custo: 280},
];

describe('buildDataTable', () => {
  it('builds headers from xKey + series labels and one row per datum', () => {
    const model = buildDataTable(data, 'mes', [
      bar('leads', {label: 'Leads'}),
      line('custo'),
    ]);
    expect(model?.headers).toEqual(['mes', 'Leads', 'custo']);
    expect(model?.rows.map(r => r.header)).toEqual(['jan', 'fev']);
    expect(model?.rows[0].cells).toEqual([
      (1200).toLocaleString(),
      (300.5).toLocaleString(),
    ]);
    // Missing values become empty cells, never "null"/"NaN".
    expect(model?.rows[1].cells[0]).toBe('');
  });

  it('skips utility marks and splits multi-key marks into columns', () => {
    const model = buildDataTable(
      [{d: 'seg', open: 1, high: 3, low: 0, close: 2, lo: 0, hi: 1}],
      'd',
      [
        candlestick({
          open: 'open',
          high: 'high',
          low: 'low',
          close: 'close',
        }),
        band({lower: 'lo', upper: 'hi'}),
        errorBar({low: 'lo', high: 'hi'}),
      ],
    );
    expect(model?.headers).toEqual([
      'd',
      'ohlc-close (open)',
      'ohlc-close (high)',
      'ohlc-close (low)',
      'ohlc-close (close)',
    ]);
  });

  it('applies custom labels and formatters', () => {
    const model = buildDataTable(data, 'mes', [bar('leads')], {
      xLabel: 'Mês',
      formatX: v => String(v).toUpperCase(),
      formatValue: (v, s, key) => `${s.type}:${key}:${String(v)}`,
    });
    expect(model?.headers[0]).toBe('Mês');
    expect(model?.rows[0]).toMatchObject({
      header: 'JAN',
      cells: ['bar:leads:1200'],
    });
  });

  it('returns null for empty data, no data series, or more rows than maxRows', () => {
    expect(buildDataTable([], 'mes', [bar('leads')])).toBeNull();
    expect(
      buildDataTable(data, 'mes', [band({lower: 'leads', upper: 'custo'})]),
    ).toBeNull();
    expect(
      buildDataTable(data, 'mes', [bar('leads')], {maxRows: 1}),
    ).toBeNull();
  });
});

describe('fallbackChartLabel', () => {
  it('joins the data series labels, skipping utility marks', () => {
    expect(
      fallbackChartLabel([
        bar('leads', {label: 'Leads'}),
        line('custo'),
        band({lower: 'a', upper: 'b'}),
      ]),
    ).toBe('Leads, custo');
  });
});
