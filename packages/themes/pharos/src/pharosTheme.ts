// Copyright (c) Meta Platforms, Inc. and affiliates.

/**
 * Pharos Theme — Alexandria brand
 *
 * Brandbook (Março/2026) as source of truth for palette:
 *   Azul             #034694  (brand primary: Button primary fill, links,
 *                              focus, info)
 *   Roxo destaque    #7C51A1  (secondary highlight)
 *   Laranja          #F26641  (moderate highlight: icons, accents, series)
 *   Amarelo #1/#2    #FAA61A / #FFF200
 *   Chumbo texto     #383838  (text, and the base of the dark theme)
 *
 * Surfaces: absolute white is the page background in light mode; light gray
 * only appears on sidebars, headers and zebra rows (--color-background-muted),
 * and cards separate from the page with a thin border, not a tint. Dark mode
 * derives from chumbo #383838. Absolute black is avoided for text and
 * backgrounds; it survives only as the shadow color, a technical constraint
 * of rendering shadows.
 *
 * Accessibility tones (approved derivatives of brand colors, used where the
 * vivid brand value fails WCAG AA; the brandbook values themselves are never
 * altered):
 *   #B04324 / #B84626  laranja darkened  — orange text/icons on light surfaces
 *   #FF8A5C / #FFA07A / #FFC4A8  laranja lifted — orange on dark surfaces
 *   #6BA3F5 / #8BB8F8 / #A9CBFA / #C5DBFC  azul lifted — blue fill/text/icons on dark
 *   #A67BC4 / #C4A3E0 / #DCC8F0  roxo lifted — purple on dark
 *   #5C3A7A            roxo darkened — purple text on light pastel
 *   #B87400 / #946000  amarelo darkened — yellow icons / text on light
 *   #FFD066 / #FFE08A  amarelo lifted — yellow on dark
 *   <hue>29            16% alpha overlays of the lifted tones — tinted
 *                      surfaces in dark mode (banner, badge backgrounds)
 *   #616161 / #cccccc  chumbo-derived grays — secondary text and icons on
 *                      light / dark (AA on every surface, tinted or neutral)
 * Status colors (green, red, amber) are technical colors outside the brand
 * palette, allowed for success / error / warning only.
 *
 * Token pairs are [light, dark] unless a single value is shared.
 */

import {defineTheme, defineSyntaxTheme} from '@pharos-ds/core/theme';
import {pharosIconRegistry} from './icons';

/**
 * Neutral syntax palette — pulled from the OKLCH T30 (light) / T80 (dark)
 * stops of the categorical ramps. Same colors used by --color-icon-* tokens.
 */
const pharosSyntax = defineSyntaxTheme({
  name: 'pharos',
  tokens: {
    keyword: ['#7C51A1', '#C4A3E0'], // brand purple
    string: ['#005600', '#a6d2a2'], // green
    comment: ['#737373', '#a3a3a3'], // neutral
    number: ['#C44A28', '#FFA07A'], // brand orange
    function: ['#034694', '#8BB8F8'], // brand azul
    type: ['#7C51A1', '#C4A3E0'], // brand purple
    variable: ['#383838', '#e5e5e5'], // chumbo / near-white
    operator: ['#737373', '#a3a3a3'], // neutral
    constant: ['#C44A28', '#FFA07A'], // brand orange
    tag: ['#89001a', '#ffaeaa'], // red
    attribute: ['#B87400', '#FFD066'], // brand yellow
    property: ['#005348', '#83dac9'], // teal
    punctuation: ['#a3a3a3', '#7a7a7a'], // neutral
    background: ['#fafafa', '#2e2e2e'],
  },
});

export const pharosTheme = defineTheme({
  name: 'pharos',

  // Typography: Figtree across body, heading, and display sizes (display
  // size tokens inherit from heading.family). Monospace stays as the
  // platform default for code. The font files ship with this package: import
  // '@pharos-ds/theme-pharos/fonts.css' once in the app entry.
  // Scale: base=14, ratio=1.2. Bold weights on h3/h4 for subsection hierarchy.
  typography: {
    scale: {base: 14, ratio: 1.2},
    body: {
      family: 'Figtree',
      fallbacks:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    },
    heading: {
      family: 'Figtree',
      fallbacks:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      weights: {3: 'bold', 4: 'bold'},
    },
    code: {
      family: 'ui-monospace',
      fallbacks:
        '"SF Mono", Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    },
  },

  // Motion: snappier than default to match shadcn/Tailwind conventions.
  // Produces: fast-min=95ms, fast=125ms, fast-max=165ms,
  //           medium-min=225ms, medium=300ms, medium-max=400ms.
  motion: {fast: 125, medium: 300, slow: 700, ratio: 0.75},

  syntax: pharosSyntax,

  tokens: {
    // =========================================================================
    // Core — pure grayscale spine (Tailwind neutral)
    // 50:#fafafa 100:#f5f5f5 200:#e5e5e5 300:#d4d4d4 400:#a3a3a3
    // 500:#737373 600:#525252 700:#404040 800:#262626 900:#171717 950:#0a0a0a
    // =========================================================================

    // =========================================================================
    // Backgrounds — flat, white page in light mode.
    //
    // Light: the page (body) and cards are absolute white; cards separate by a
    // thin border (see components.card). Light gray (#f1f1f1) is reserved for
    // --color-background-muted: sidebars, table/section headers, zebra rows.
    //
    // Dark: derived from chumbo #383838. Cards, popovers and muted collapse to
    // body and lift via shadow + inset highlight (see --shadow-*). Surface is
    // lighter than body so controls on top of it read as foreground.
    //
    //   surface  light #ffffff   dark #454545 — controls, dialogs, app shells
    //   body     light #ffffff   dark #383838 — main canvas
    //   card     light #ffffff   dark #383838
    //   popover  light #ffffff   dark #383838
    //   muted    light #f1f1f1   dark #383838 — only gray in light mode
    // =========================================================================
    '--color-background-surface': ['#ffffff', '#454545'],
    '--color-background-body': ['#ffffff', '#383838'],
    '--color-background-card': ['#ffffff', '#383838'],
    '--color-background-popover': ['#ffffff', '#383838'],
    '--color-background-muted': ['#f1f1f1', '#383838'],

    // Accent — brand azul Alexandria (#034694): primary action, links, focus
    // and information. Dark mode lifts for contrast on the chumbo canvas.
    '--color-accent': ['#034694', '#6BA3F5'],
    '--color-accent-muted': ['#D6E4F5', '#6BA3F524'],
    '--color-neutral': ['#3838380F', '#FFFFFF14'],

    // Overlays (modal scrims, hover/pressed tints) — tinted with chumbo, not
    // absolute black.
    '--color-overlay': ['#38383880', '#242424CC'],
    '--color-overlay-hover': ['#3838380D', '#FFFFFF0D'],
    '--color-overlay-pressed': ['#3838381A', '#FFFFFF1A'],

    // Text — chumbo #383838 (brandbook); avoid absolute black
    '--color-text-primary': ['#383838', '#fafafa'],
    '--color-text-secondary': ['#616161', '#cccccc'],
    '--color-text-disabled': ['#a3a3a3', '#7a7a7a'],
    // Brand azul clears AA as text on white (9.1:1) and on muted #f1f1f1; dark
    // mode uses the lifted stop (5.8:1 on body, 4.7:1 on surface).
    '--color-text-accent': ['#034694', '#A9CBFA'],
    '--color-on-dark': '#ffffff',
    '--color-on-light': '#383838',
    // White on brand azul is 9.1:1; dark text on the lifted dark-mode azul
    // (#6BA3F5) is 7.0:1.
    '--color-on-accent': ['#ffffff', '#171717'],
    '--color-on-success': ['#ffffff', '#171717'],
    '--color-on-error': ['#ffffff', '#171717'],
    '--color-on-warning': '#383838',

    // Icon
    '--color-icon-accent': ['#034694', '#A9CBFA'],
    '--color-icon-primary': ['#383838', '#fafafa'],
    '--color-icon-secondary': ['#616161', '#cccccc'],
    '--color-icon-disabled': ['#a3a3a3', '#7a7a7a'],

    // Status / Sentiment — dark mode follows the issue #2150 rubric:
    //
    //   Light mode: pastel T90 banner bg + dark T30/T40 text/icon. Locked
    //               light values for cards/banners/inputs/destructive btn.
    //   Dark mode : tinted-dark T20 bg + light pastel T80 text. INVERTED
    //               from light. Avoids the §5 "pastel-in-both-modes"
    //               anti-pattern (locked pastels glow against a dark body).
    //
    //   --color-X         = "saturated text/icon stop":
    //                         light = T40 dark colored (sits on light pastel)
    //                         dark  = T80 light pastel  (sits on dark tinted bg)
    //                       Used by destructive button text, input border/icon
    //                       (in light), banner-status-* text overrides.
    //   --color-X-muted   = "muted bg stop":
    //                         light = T90 light pastel
    //                         dark  = hue-tinted alpha overlay (T70 stop @ 16%)
    //                       Used by banner bg, status-input message bg,
    //                       destructive button bg. Dark mode uses an alpha
    //                       overlay rather than a solid T20 tinted bg so
    //                       the surface composes onto whatever sits behind
    //                       it (body, card, popover) rather than reading
    //                       as a hard colored panel.
    //
    //   16% alpha = '29' suffix. Hue values match --color-icon-{X} dark
    //   slots (palette T70). The tint composites onto whatever sits behind
    //   it, and the text on it has to clear AA (4.5:1) on every dark base —
    //   body #383838 and the lighter surface #454545 that dialogs and the app
    //   shell use. At the earlier 24% the pastel text fell to ~4.2:1 on the
    //   surface (axe flagged the destructive Button), so the tint is lighter.
    '--color-success': ['#007004', '#9fe59b'],
    '--color-error': ['#a50c25', '#ffc6c1'],
    '--color-warning': ['#745b00', '#fdcf4f'],
    '--color-success-muted': ['#c5e5c0', '#84c98029'],
    '--color-error-muted': ['#facecb', '#ff9e9729'],
    '--color-warning-muted': ['#f8da9d', '#deb43329'],

    // Border
    '--color-border': ['#00000014', '#FFFFFF1A'],
    '--color-border-emphasized': ['#d4d4d4', '#5e5e5e'],

    // Effects
    '--color-skeleton': ['#ebebeb', '#4d4d4d'],
    // Shadows are the one place absolute black stays: a technical constraint.
    '--color-shadow': ['#0000001A', '#0000004D'],
    '--color-tint-hover': ['#383838', 'white'],

    // =========================================================================
    // Categorical — light mode uses pastel surfaces + dark colored text;
    //               dark mode INVERTS to a hue-tinted alpha overlay surface +
    //               light pastel text (per #2150 rubric §3 — pick the tone
    //               that satisfies required contrast against every surface
    //               the token touches).
    //
    // Per-token tone choice (CIELab L*):
    //   bg     light=T87-T90 pastel       dark=T70 hue @ 16% alpha overlay
    //                                       (a colored surface lighter than a
    //                                        solid T20 panel; same hue as the
    //                                        --color-icon-X dark slot, just at
    //                                        lower opacity)
    //   border light=T80 pastel           dark=T60 mid-bright (>=5.8:1 vs body)
    //   icon   light=T30 dark colored     dark=T70 light pastel
    //   text   light=T30 dark colored     dark=T80 light pastel (>=7:1 on bg)
    //
    // Light pastels still use the per-hue chroma table (red/blue C=0.05,
    // orange/green/purple/pink C=0.06, teal/cyan C=0.07, yellow H=85 C=0.10)
    // for equal PERCEIVED saturation. Dark stops (T60/T70/T80) come from
    // the dark-mode tonal palette (chroma×0.85, +5 tone lift tapering 80-95).
    // =========================================================================

    // Each row's dark slots are HCT-derived from the source hex listed in
    // apps/sandbox/src/app/(fullscreen)/pages/neutral-palette/page.tsx via
    // the canonical dark-ramp transform (chroma×0.85, +5 tone-lift taper)
    // — same algorithm the Tonal Palettes preview renders. Border=T60,
    // icon=T70, text=T80. Background uses the T70 hue at 16% alpha, the most
    // tint that keeps the T80 text at AA on both dark bases.

    // Red  H=22 — source #eb183a
    '--color-background-red': ['#facecb', '#ff9e9729'],
    '--color-border-red': ['#e6bab8', '#ff6f6c'],
    '--color-icon-red': ['#89001a', '#ff9e97'],
    '--color-text-red': ['#89001a', '#ffc6c1'],

    // Orange — brand #F26641 (Pantone 7579 C)
    '--color-background-orange': ['#FDE0D6', '#F2664129'],
    '--color-border-orange': ['#F5C4B3', '#F26641'],
    // #C44A28 was 3.9:1 on the pastel #FDE0D6 (badge/banner text); #B04324
    // reaches 4.6:1 there and 5.1:1 on body.
    '--color-icon-orange': ['#B04324', '#FFA07A'],
    '--color-text-orange': ['#B04324', '#FFC4A8'],

    // Yellow — brand #FAA61A / #FFF200
    '--color-background-yellow': ['#FFF0CC', '#FAA61A29'],
    '--color-border-yellow': ['#F5D78A', '#FAA61A'],
    '--color-icon-yellow': ['#B87400', '#FFD066'],
    '--color-text-yellow': ['#946000', '#FFE08A'],

    // Green  H=144 — source #358a3a
    '--color-background-green': ['#c5e5c0', '#84c98029'],
    '--color-border-green': ['#b2d1ac', '#69ad67'],
    '--color-icon-green': ['#0c5700', '#84c980'],
    '--color-text-green': ['#0c5700', '#9fe59b'],

    // Teal  H=180 — source #0c7365
    // Light pastel uses L=0.87 C=0.065 (a step darker + less chroma than
    // the L=0.888 C=0.07 used by other hues) to compensate for the
    // green-cyan luminance overshoot — at the same OKLCH L, teal/cyan read
    // ~5% brighter than red/blue because the eye's luminance response
    // peaks in this band. Dropping L+C brings perceived brightness in
    // line with the rest of the palette without losing hue identity.
    '--color-background-teal': ['#a5e3d6', '#7ec6b829'],
    '--color-border-teal': ['#94d6c8', '#63ab9d'],
    '--color-icon-teal': ['#005348', '#7ec6b8'],
    '--color-text-teal': ['#005348', '#99e2d3'],

    // Cyan  H=215 — source #0c6f82
    // Same L=0.87 C=0.065 pastel as teal (luminance overshoot compensation).
    '--color-background-cyan': ['#a3e0ef', '#83c2d429'],
    '--color-border-cyan': ['#91d3e3', '#67a7b8'],
    '--color-icon-cyan': ['#00505f', '#83c2d4'],
    '--color-text-cyan': ['#00505f', '#9edef0'],

    // Blue — brand azul categórico / info #034694 (Pantone 286 C)
    '--color-background-blue': ['#D6E4F5', '#6BA3F529'],
    '--color-border-blue': ['#A8C4E8', '#6BA3F5'],
    '--color-icon-blue': ['#034694', '#8BB8F8'],
    '--color-text-blue': ['#034694', '#C5DBFC'],

    // Purple — brand destaque #7C51A1 (Pantone 7441 C)
    '--color-background-purple': ['#EDE4F4', '#7C51A129'],
    '--color-border-purple': ['#D0BBE3', '#A67BC4'],
    '--color-icon-purple': ['#7C51A1', '#C4A3E0'],
    '--color-text-purple': ['#5C3A7A', '#DCC8F0'],

    // Pink  H=355 — source #b10e69
    '--color-background-pink': ['#fccadc', '#ff99c329'],
    '--color-border-pink': ['#e7b7c8', '#f273aa'],
    '--color-icon-pink': ['#83004b', '#ff99c3'],
    '--color-text-pink': ['#83004b', '#ffc3da'],

    // Gray (categorical neutral, chroma 0)
    //   Light: #e5e5e5 (Neutral 200) so it's visibly distinct from the
    //          lighter body / muted surface (both #f5f5f5).
    //   Dark : var(--color-neutral) — semi-transparent white wash
    //          (#FFFFFF14, 8%). Matches the same treatment the gray
    //          badge uses; distinct from the chumbo body while staying
    //          chroma-0 neutral, and light enough that secondary text on it
    //          (Kbd, Pagination) keeps AA on the surface tone too.
    '--color-background-gray': ['#e5e5e5', 'var(--color-neutral)'],
    '--color-border-gray': ['#d4d4d4', '#4d4d4d'],
    '--color-icon-gray': ['#525252', '#b3b3b3'],
    '--color-text-gray': ['#383838', '#e5e5e5'],

    // =========================================================================
    // Chart series — slots follow the brand order, and each slot name matches
    // its color: azul, roxo, laranja, amarelo, chumbo. The seven extra slots
    // (green, pink, cyan, red, teal, brown, indigo) keep the core defaults and
    // only appear after the five brand series. Dark mode lifts the stops for
    // contrast on chumbo; the chumbo series flips to light gray.
    // =========================================================================
    '--color-data-categorical-blue': ['#034694', '#6BA3F5'],
    '--color-data-categorical-purple': ['#7C51A1', '#A67BC4'],
    '--color-data-categorical-orange': ['#F26641', '#F26641'],
    '--color-data-categorical-yellow': ['#FAA61A', '#FAA61A'],
    '--color-data-categorical-gray': ['#383838', '#d4d4d4'],

    // =========================================================================
    // Radius — slightly larger than default (kept as-is)
    // =========================================================================
    '--radius-none': '0.25rem',
    '--radius-inner': '0.375rem',
    '--radius-element': '0.625rem',
    '--radius-container': '0.75rem',
    '--radius-page': '1.75rem',
    '--radius-full': '9999px',

    // =========================================================================
    // Shadows
    //
    // Light mode: matches origin/main exactly (5%/10% low+med, 10%/15% high).
    // Subtle drops; light surfaces don't need rim highlights.
    //
    // Dark mode: deepened drops + an all-around 1px white inset that wraps
    // every edge ("Figma-style bezel"). The inset mimics ambient light
    // catching the surface's rim on every side, giving cards/popovers/modals
    // a substantial "lit from above" feel that drop shadows alone can't
    // achieve against a dark canvas.
    //   low  :  drops 25%/40% + 8%  white all-around inset
    //   med  :  drops 35%/50% + 12% white all-around inset
    //   high :  drops 50%/70% + 15% white all-around inset
    //
    // The inset layer uses light-dark(transparent, ...) so light mode is
    // unaffected — main's exact light values are preserved.
    // =========================================================================
    '--shadow-low':
      '0 2px 4px light-dark(oklch(0 0 0 / 5%), oklch(0 0 0 / 25%)), ' +
      '0 4px 8px light-dark(oklch(0 0 0 / 10%), oklch(0 0 0 / 40%)), ' +
      'inset 0 0 0 1px light-dark(transparent, oklch(1 0 0 / 8%))',
    '--shadow-med':
      '0 2px 4px light-dark(oklch(0 0 0 / 5%), oklch(0 0 0 / 35%)), ' +
      '0 4px 12px light-dark(oklch(0 0 0 / 10%), oklch(0 0 0 / 50%)), ' +
      'inset 0 0 0 1px light-dark(transparent, oklch(1 0 0 / 12%))',
    '--shadow-high':
      '0 4px 6px light-dark(oklch(0 0 0 / 10%), oklch(0 0 0 / 50%)), ' +
      '0 12px 24px light-dark(oklch(0 0 0 / 15%), oklch(0 0 0 / 70%)), ' +
      'inset 0 0 0 1px light-dark(transparent, oklch(1 0 0 / 15%))',
    '--shadow-inset-hover':
      'inset 0px 0px 0px 2px light-dark(#0346944D, #6BA3F54D)',
    '--shadow-inset-selected':
      'inset 0px 0px 0px 2px light-dark(#03469480, #6BA3F580)',
    '--shadow-inset-success': 'inset 0px 0px 0px 2px #1981004D',
    '--shadow-inset-warning': 'inset 0px 0px 0px 2px #ffce2f4D',
    '--shadow-inset-error': 'inset 0px 0px 0px 2px #e33f4a4D',
  },

  components: {
    // =========================================================================
    // Button — primary gets white text, secondary gets a border, destructive
    // uses the OKLCH red filled treatment.
    // =========================================================================
    button: {
      'variant:destructive': {
        backgroundColor: 'var(--color-error-muted)', // locked pastel red bg
        color: 'var(--color-error)', // locked T30 red — matches banner/input error text
      },
    },

    // =========================================================================
    // Badge —
    //   Semantic (info/success/warning/error): filled saturated T50 + contrasting
    //     text (white, or dark on yellow). The filled-button rule from #2150
    //     §3 — text contrast locks the bg tone, so this stays at T50 in
    //     BOTH modes, unlike pastel surfaces which invert by mode.
    //   Categorical (blue/green/red/orange/etc.): pastel-tinted hue surface +
    //     colored text — light mode = soft T87-T90 + dark T30 text; dark mode
    //     = T20 tinted + T80 light pastel text (sources: --color-background-X
    //     and --color-text-X tokens).
    //   Neutral: light gray bg + dark text (or inverted in dark mode).
    // =========================================================================
    badge: {
      // Semantic — filled saturated bg + contrasting text.
      //   Light: vivid T45-T55 from the OKLCH palette + white text
      //          (~4.5-5:1 — Material/Linear/Vercel pop).
      //   Dark : T60 stop from the dark-mode tonal palette (chroma×0.85,
      //          +5 tone-lift taper from issue #2150 §4) + DARK text.
      //          T60+white fails AA-large (~2.7:1); T60+dark hits 6.6-7:1
      //          and tames the §4 vibration. Same dark-text-on-bright-bg
      //          treatment that warning yellow uses in both modes.
      'variant:info': {
        // Brand azul Alexandria
        backgroundColor: 'light-dark(#034694, #6BA3F5)',
        color: 'light-dark(#ffffff, #171717)',
      },
      'variant:neutral': {
        // Mirrors the gray categorical badge — same neutral chip treatment
        // (Neutral 200 light / semi-transparent white wash dark) sourced
        // from the gray hue tokens, so a single change at the token layer
        // updates both variants.
        backgroundColor: 'var(--color-background-gray)',
        color: 'var(--color-text-gray)',
      },
      'variant:success': {
        // Light: T45 #198100 (palette saturated stop)
        // Dark : T60 stop from dark-mode tonal palette of source #198100
        backgroundColor: 'light-dark(#198100, #64af4c)',
        color: 'light-dark(#ffffff, #171717)',
      },
      'variant:warning': {
        // Yellow stays at the same hex in both modes — chroma reduction
        // is barely visible at T85, and dark text on yellow doesn't
        // suffer from the §4 vibration concern.
        backgroundColor: '#ffce2f',
        color: '#171717',
      },
      'variant:error': {
        // Light: #d32f3c, a shade under the T55 #e33f4a stop: white on
        //        #e33f4a was 4.13:1 and axe flagged the badge text.
        // Dark : T60 stop from dark-mode tonal palette of Tailwind red-600
        //        source #dc2626 (kept on H=27 alarm-red rather than coral)
        backgroundColor: 'light-dark(#d32f3c, #ff705d)',
        color: 'light-dark(#ffffff, #171717)',
      },

      // Categorical — bg + text reference the per-hue tokens, so behavior
      // tracks the categorical palette automatically:
      //   Light: pastel T87-T90 bg + dark T30 colored text (low-key chip)
      //   Dark : tinted T20 bg + light T80 colored text (per #2150 §5,
      //          inverted from light to avoid the "pastel-in-both-modes"
      //          anti-pattern that makes locked light pastels glow on a
      //          dark body)
      'variant:red': {
        backgroundColor: 'var(--color-background-red)',
        color: 'var(--color-text-red)',
      },
      'variant:orange': {
        backgroundColor: 'var(--color-background-orange)',
        color: 'var(--color-text-orange)',
      },
      'variant:yellow': {
        backgroundColor: 'var(--color-background-yellow)',
        color: 'var(--color-text-yellow)',
      },
      'variant:green': {
        backgroundColor: 'var(--color-background-green)',
        color: 'var(--color-text-green)',
      },
      'variant:teal': {
        backgroundColor: 'var(--color-background-teal)',
        color: 'var(--color-text-teal)',
      },
      'variant:cyan': {
        backgroundColor: 'var(--color-background-cyan)',
        color: 'var(--color-text-cyan)',
      },
      'variant:blue': {
        backgroundColor: 'var(--color-background-blue)',
        color: 'var(--color-text-blue)',
      },
      'variant:purple': {
        backgroundColor: 'var(--color-background-purple)',
        color: 'var(--color-text-purple)',
      },
      'variant:pink': {
        backgroundColor: 'var(--color-background-pink)',
        color: 'var(--color-text-pink)',
      },
      'variant:gray': {
        backgroundColor: 'var(--color-background-gray)',
        color: 'var(--color-text-gray)',
      },
    },

    // =========================================================================
    // StatusDot — fill uses the SAME vivid stops as the filled semantic Badge
    // (and ProgressBar), so a dot and its badge read as one status language.
    //
    // The default component maps each variant to a raw semantic token
    // (--color-success / --color-error / --color-warning / --color-icon-
    // secondary), which in light mode are the dark T30/T40 stops meant to
    // sit as TEXT on a pastel surface — as a solid dot they read muddy
    // (dark green / maroon / brown). Redirect them to the badge fills.
    //
    //   success → badge success bg  (green T45 / dark-ramp T60)
    //   warning → badge warning bg  (yellow T85, same hex both modes)
    //   error   → badge error bg    (red T55 / dark-ramp T60)
    //   accent  → brand azul primary — StatusDot "accent" follows
    //             --color-accent (Button primary), not semantic info.
    //
    // `neutral` is intentionally NOT overridden: the neutral badge bg is a
    // near-invisible light gray (--color-background-gray #e5e5e5 / 10% white
    // wash), fine as a large pill but unreadable as an 8px dot. It keeps the
    // component default's visible mid-gray (--color-icon-secondary), which is
    // not among the "too dark" cases.
    // =========================================================================
    statusdot: {
      'variant:success': {backgroundColor: 'light-dark(#198100, #64af4c)'},
      'variant:warning': {backgroundColor: '#ffce2f'},
      'variant:error': {backgroundColor: 'light-dark(#d32f3c, #ff705d)'},
      'variant:accent': {backgroundColor: 'light-dark(#034694, #6BA3F5)'},
    },

    // =========================================================================
    // Banner — sits on a hue-tinted surface with colored text/icon:
    //   Light: pastel T90 bg (pulled from --color-{X}-muted / --color-background-blue)
    //          + dark T30 colored text (--color-text-{hue}).
    //   Dark : tinted T20 bg (same tokens, dark slot) + light T80 colored text.
    //          Per #2150 §5 — large hue-tinted surfaces in dark mode invert
    //          to a deep tinted bg + light text rather than locking the
    //          light-mode pastel.
    //
    // The inner-header *-muted token is forced transparent so the outer
    // tinted background shows through cleanly.
    //
    // Status overrides reference --color-text-{hue} so text/icon colors
    // stay in sync with the palette anchors automatically.
    banner: {
      'status:info': {
        backgroundColor: 'var(--color-background-blue)',
        '--color-accent-muted': 'transparent',
        '--color-text-primary': 'var(--color-text-blue)',
        '--color-text-secondary': 'var(--color-text-blue)',
        '--color-accent': 'var(--color-text-blue)',
      },
      // success/warning/error banner bgs come from --color-{X}-muted, which
      // already carries the correct light/dark tinted values. We only need
      // to redirect the text/icon to the palette colored stop.
      'status:success': {
        '--color-text-primary': 'var(--color-text-green)',
        '--color-text-secondary': 'var(--color-text-green)',
        '--color-success': 'var(--color-text-green)',
      },
      'status:warning': {
        '--color-text-primary': 'var(--color-text-yellow)',
        '--color-text-secondary': 'var(--color-text-yellow)',
        '--color-warning': 'var(--color-text-yellow)',
      },
      'status:error': {
        '--color-text-primary': 'var(--color-text-red)',
        '--color-text-secondary': 'var(--color-text-red)',
        '--color-error': 'var(--color-text-red)',
      },
    },

    // =========================================================================
    // TextInput — no per-status overrides needed. The global tokens
    // --color-{success,error,warning} carry the correct values in both
    // modes (light=T40 dark colored, dark=T80 light pastel) for both
    // surfaces the input border/icon touches: the input surface
    // (white/T15-dark) and the status message bubble (light pastel T90 /
    // dark T20). Verified all six combinations clear AA non-text 3:1.
    // =========================================================================

    // =========================================================================
    // Switch — off-state track uses the same lifted-neutral surface as the
    // ProgressBar track (--color-border-emphasized). Aligns the two
    // "channel-on-body" components so their off-states share one visual
    // language: light T85 #d4d4d4 sits one step darker than the body T95
    // bg, dark T35 #525252 sits one step lighter than the body T10. Each
    // is a defined channel, not a wash that blends in.
    // =========================================================================
    switch: {
      base: {
        '--color-background-gray': 'var(--color-border-emphasized)',
      },
    },

    progressbar: {
      base: {
        // Track uses --color-background-muted; override it to
        // --color-border-emphasized (Neutral T85 #d4d4d4 in light mode) so
        // the track is clearly darker than the body bg (Neutral T95 #f1f1f1)
        // and reads as a defined channel rather than blending in. Dark
        // mode inherits T35 #525252 — same one-step-lighter behavior.
        '--color-background-muted': 'var(--color-border-emphasized)',
      },
      // Vivid stops match the filled semantic badge colors (info/success/
      // warning/error variants in the badge override above). Same hex
      // values; documented per role with palette provenance.
      'variant:accent': {
        // Brand azul (= primary / Button primary)
        '--color-accent': 'light-dark(#034694, #6BA3F5)',
      },
      'variant:success': {
        // Green T45 saturated stop (= variant:success badge bg)
        '--color-success': '#198100',
      },
      'variant:warning': {
        // Yellow T85 saturated stop (= variant:warning badge bg)
        '--color-warning': '#ffce2f',
      },
      'variant:error': {
        // Same red as the variant:error badge bg
        '--color-error': '#d32f3c',
      },
    },

    // =========================================================================
    // Card — tighter padding via public card padding token, thin border
    // =========================================================================
    card: {
      base: {
        padding: 'var(--spacing-3)',
        // Light mode separates cards from the white page with a thin border;
        // dark mode keeps the shadow + inset highlight lift.
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'var(--color-border)',
      },
    },

    // =========================================================================
    // Section — tighter padding via public section padding token
    // =========================================================================
    section: {
      base: {
        padding: 'var(--spacing-3)',
      },
    },

    // Heading and text component overrides are auto-generated by typography.scale.
    // h3/h4 bold weights come from typography.heading.weights above.
  },

  icons: pharosIconRegistry,
});
