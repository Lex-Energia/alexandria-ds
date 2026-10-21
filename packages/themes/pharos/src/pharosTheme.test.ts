// Copyright (c) Meta Platforms, Inc. and affiliates.

import {describe, expect, it} from 'vitest';
import {resolveThemeTokens} from '@pharos-ds/core/theme/tokens';
import {pharosTheme} from './pharosTheme';
import {brandGradient, brandGradientStops, brandSlogan} from './brand';

/** WCAG 2.x relative luminance of a #rrggbb color. */
function luminance(hex: string): number {
  const channel = (i: number) => {
    const v = parseInt(hex.slice(i, i + 2), 16) / 255;
    return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * channel(1) + 0.7152 * channel(3) + 0.0722 * channel(5);
}

function contrast(a: string, b: string): number {
  const [light, dark] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (light + 0.05) / (dark + 0.05);
}

type Mode = 'light' | 'dark';

const AA_TEXT = 4.5;
const AA_NON_TEXT = 3;
const SURFACES = [
  '--color-background-surface',
  '--color-background-body',
  '--color-background-card',
];

describe.each<Mode>(['light', 'dark'])('Pharos theme contrast (%s)', mode => {
  const tokens = resolveThemeTokens(pharosTheme, {mode});

  function color(name: string): string {
    const value = tokens[name];
    if (!value || !/^#[0-9a-f]{6}$/i.test(value)) {
      throw new Error(
        `${name} (${mode}) is not a solid hex color: ${String(value)}`,
      );
    }
    return value;
  }

  it.each(SURFACES)('accent text (links) on %s meets AA', surface => {
    expect(
      contrast(color('--color-text-accent'), color(surface)),
    ).toBeGreaterThanOrEqual(AA_TEXT);
  });

  it.each(SURFACES)('accent icon on %s meets AA non-text', surface => {
    expect(
      contrast(color('--color-icon-accent'), color(surface)),
    ).toBeGreaterThanOrEqual(AA_NON_TEXT);
  });

  it('Button primary label (on-accent) on the accent fill meets AA', () => {
    expect(
      contrast(color('--color-on-accent'), color('--color-accent')),
    ).toBeGreaterThanOrEqual(AA_TEXT);
  });

  it.each(SURFACES)('secondary text on %s meets AA', surface => {
    expect(
      contrast(color('--color-text-secondary'), color(surface)),
    ).toBeGreaterThanOrEqual(AA_TEXT);
  });

  it('never uses absolute black or the old #1b1b1b for surfaces and text', () => {
    for (const name of [...SURFACES, '--color-text-primary']) {
      expect(color(name).toLowerCase()).not.toBe('#000000');
      expect(color(name).toLowerCase()).not.toBe('#1b1b1b');
    }
  });

  it.each(SURFACES)('primary text on %s meets AA', surface => {
    expect(
      contrast(color('--color-text-primary'), color(surface)),
    ).toBeGreaterThanOrEqual(AA_TEXT);
  });
});

describe('Pharos theme contrast (light, categorical orange)', () => {
  // Dark mode paints the orange background as an alpha overlay, so only the
  // solid light pastel can be checked without compositing.
  const tokens = resolveThemeTokens(pharosTheme, {mode: 'light'});

  it('orange text on the orange pastel background meets AA', () => {
    expect(
      contrast(
        tokens['--color-text-orange'],
        tokens['--color-background-orange'],
      ),
    ).toBeGreaterThanOrEqual(AA_TEXT);
  });
});

describe('Pharos theme brand fidelity', () => {
  const light = resolveThemeTokens(pharosTheme, {mode: 'light'});
  const dark = resolveThemeTokens(pharosTheme, {mode: 'dark'});

  it('page and cards are absolute white in light mode', () => {
    expect(light['--color-background-body']).toBe('#ffffff');
    expect(light['--color-background-card']).toBe('#ffffff');
  });

  it('keeps light gray for muted surfaces only', () => {
    expect(light['--color-background-muted']).toBe('#f1f1f1');
  });

  it('derives the dark canvas from chumbo #383838', () => {
    expect(dark['--color-background-body']).toBe('#383838');
  });

  it('uses brand azul as the primary action in light mode', () => {
    expect(light['--color-accent']).toBe('#034694');
    expect(
      contrast(light['--color-on-accent'], light['--color-accent']),
    ).toBeGreaterThanOrEqual(AA_TEXT);
  });

  it('starts chart series with azul, roxo, laranja, amarelo, chumbo', () => {
    expect(
      [
        '--color-data-categorical-blue',
        '--color-data-categorical-orange',
        '--color-data-categorical-purple',
        '--color-data-categorical-green',
        '--color-data-categorical-pink',
      ].map(name => light[name].toUpperCase()),
    ).toEqual(['#034694', '#7C51A1', '#F26641', '#FAA61A', '#383838']);
  });
});

describe('Pharos brand constants', () => {
  it('exposes the five official gradient stops', () => {
    expect(brandGradientStops).toEqual([
      '#034694',
      '#7C51A1',
      '#F26641',
      '#FAA61A',
      '#FFF200',
    ]);
    expect(brandGradient).toContain('#034694');
  });

  it('keeps the slogan without a trailing period', () => {
    expect(brandSlogan).toBe('tecnologia que move o futuro');
    expect(brandSlogan.endsWith('.')).toBe(false);
  });
});

describe('Pharos icon registry', () => {
  it('has no filled icons (brand rule: outline only)', async () => {
    const {pharosIconRegistry} = await import('./icons');
    for (const [name, icon] of Object.entries(pharosIconRegistry)) {
      const props = (icon as {props?: Record<string, unknown>}).props ?? {};
      expect(props.fill, name).toBeUndefined();
    }
  });
});
