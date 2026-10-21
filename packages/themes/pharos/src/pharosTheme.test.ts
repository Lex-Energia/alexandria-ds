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
  '--color-background-muted',
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

  // Dark mode keeps neutrals derived from chumbo #383838 (no hue cast), but
  // darker: the canvas sits well below chumbo and cards rise one step under it.
  it('derives a darker neutral dark canvas from chumbo #383838', () => {
    expect(dark['--color-background-body']).toBe('#242424');
    expect(dark['--color-background-surface']).toBe('#2b2b2b');
    expect(dark['--color-background-card']).toBe('#333333');
    expect(dark['--color-background-popover']).toBe('#333333');
    expect(dark['--color-background-muted']).toBe('#333333');
    for (const name of [
      '--color-background-body',
      '--color-background-surface',
      '--color-background-card',
    ]) {
      const hex = dark[name];
      expect(
        new Set([hex.slice(1, 3), hex.slice(3, 5), hex.slice(5, 7)]).size,
      ).toBe(1);
      expect(luminance(hex)).toBeLessThan(luminance('#383838'));
    }
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
        '--color-data-categorical-purple',
        '--color-data-categorical-orange',
        '--color-data-categorical-yellow',
        '--color-data-categorical-gray',
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

/** A parsed `#rgb`, `#rrggbb` or `#rrggbbaa` color; `var(--token)` is followed. */
type Rgba = {r: number; g: number; b: number; a: number};

function parseRgba(tokens: Record<string, string>, value: string): Rgba {
  const alias = /^var\((--[\w-]+)\)$/.exec(value.trim());
  if (alias) {
    return parseRgba(tokens, tokens[alias[1]]);
  }
  let hex = value.trim().replace('#', '');
  if (hex.length === 3) {
    hex = [...hex].map(c => c + c).join('');
  }
  const channel = (i: number) => parseInt(hex.slice(i, i + 2), 16);
  return {
    r: channel(0),
    g: channel(2),
    b: channel(4),
    a: hex.length >= 8 ? channel(6) / 255 : 1,
  };
}

/** The opaque color `fg` paints over an opaque `bg`, as the browser blends it. */
function over(fg: Rgba, bg: Rgba): Rgba {
  const mix = (f: number, b: number) => fg.a * f + (1 - fg.a) * b;
  return {r: mix(fg.r, bg.r), g: mix(fg.g, bg.g), b: mix(fg.b, bg.b), a: 1};
}

function toHex({r, g, b}: Rgba): string {
  return `#${[r, g, b].map(v => Math.round(v).toString(16).padStart(2, '0')).join('')}`;
}

const HUES = [
  'red',
  'orange',
  'yellow',
  'green',
  'teal',
  'cyan',
  'blue',
  'purple',
  'pink',
  'gray',
] as const;
const STATUSES = ['success', 'error', 'warning'] as const;

// Tinted backgrounds (banners, badges, tokens, the destructive Button) are
// translucent in dark mode, so what the text sits on depends on the surface
// underneath: body #242424, the surface #2b2b2b of dialogs and the app shell,
// or the #333333 cards and muted areas. axe caught the destructive Button at
// 4.24:1 on the old, lighter surface once.
describe.each<Mode>(['light', 'dark'])(
  'Pharos theme contrast of tinted surfaces (%s)',
  mode => {
    const tokens = resolveThemeTokens(pharosTheme, {mode});
    const rgba = (name: string) => parseRgba(tokens, tokens[name]);
    const ratio = (fgToken: string, bgToken: string, baseToken: string) => {
      const bg = over(rgba(bgToken), rgba(baseToken));
      return contrast(toHex(over(rgba(fgToken), bg)), toHex(bg));
    };

    const hueCases = HUES.flatMap(hue =>
      SURFACES.map(base => [hue, base] as const),
    );
    const statusCases = STATUSES.flatMap(status =>
      SURFACES.map(base => [status, base] as const),
    );

    it.each(hueCases)('text-%s on its tint over %s meets AA', (hue, base) => {
      expect(
        ratio(`--color-text-${hue}`, `--color-background-${hue}`, base),
      ).toBeGreaterThanOrEqual(AA_TEXT);
    });

    it.each(hueCases)(
      'icon-%s on its tint over %s meets AA non-text',
      (hue, base) => {
        expect(
          ratio(`--color-icon-${hue}`, `--color-background-${hue}`, base),
        ).toBeGreaterThanOrEqual(AA_NON_TEXT);
      },
    );

    it.each(statusCases)(
      '%s text on its muted tint over %s meets AA',
      (s, base) => {
        expect(
          ratio(`--color-${s}`, `--color-${s}-muted`, base),
        ).toBeGreaterThanOrEqual(AA_TEXT);
      },
    );

    it.each(SURFACES)(
      'accent and primary text on accent-muted over %s',
      base => {
        for (const text of ['--color-text-accent', '--color-text-primary']) {
          expect(
            ratio(text, '--color-accent-muted', base),
          ).toBeGreaterThanOrEqual(AA_TEXT);
        }
      },
    );

    // Kbd and Pagination set secondary text on the neutral wash.
    it.each(SURFACES)('primary and secondary text on neutral over %s', base => {
      for (const text of ['--color-text-primary', '--color-text-secondary']) {
        expect(ratio(text, '--color-neutral', base)).toBeGreaterThanOrEqual(
          AA_TEXT,
        );
      }
    });
  },
);

// Filled status badges carry their own colors as component overrides, outside
// the token pairs above; axe caught white on the old error red at 4.13:1.
describe.each<Mode>(['light', 'dark'])(
  'Pharos theme contrast of filled badges (%s)',
  mode => {
    const pick = (value: string) => {
      const pair = /^light-dark\((#[0-9a-f]{6}), (#[0-9a-f]{6})\)$/i.exec(
        value,
      );
      return pair ? pair[mode === 'light' ? 1 : 2] : value;
    };

    it.each(['info', 'success', 'warning', 'error'])(
      'badge %s label on its fill meets AA',
      variant => {
        const style = pharosTheme.components?.badge?.[`variant:${variant}`] as
          {backgroundColor: string; color: string} | undefined;
        expect(style).toBeDefined();
        expect(
          contrast(pick(style!.color), pick(style!.backgroundColor)),
        ).toBeGreaterThanOrEqual(AA_TEXT);
      },
    );
  },
);
