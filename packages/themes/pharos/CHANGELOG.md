# @xds/theme-neutral

# 1.0.9

#### New Features

- Dark mode mais fundo, ainda derivado do chumbo: página #242424, superfície #2b2b2b e cards, popovers e muted #333333 (antes #383838 e #454545). O scrim dos diálogos passa a #171717CC e o fundo de código a #1e1e1e para continuarem abaixo da página. O claro não muda.

#### Contributors

Thanks to everyone who contributed to this release:

- @Caio-Silvestre

---

# 1.0.8

#### Fixes

- form controls get a 3:1 border (WCAG 1.4.11): text, number, date, time, textarea, selector, typeahead, tokenizer and file inputs, checkbox, radio list and the switch off track use #858585 in light and #999999 in dark instead of #d4d4d4 and #5e5e5e (1.48:1 on the white page, so a white field almost vanished); applied per control, because the shared emphasized border also draws Divider, Tooltip, Blockquote, chart grids and the ProgressBar track, which stay light

#### Contributors

Thanks to everyone who contributed to this release:

- @Caio-Silvestre

---

# 1.0.7

#### Fixes

- Badge de erro, status dot e progress bar de erro usam #d32f3c no claro: o branco sobre #e33f4a ficava em 4,13:1, abaixo do AA.

#### Contributors

Thanks to everyone who contributed to this release:

- @Caio-Silvestre

---

# 1.0.6

#### New Features

- AlexandriaLogo gains kind="symbol": the "A" in three versions (gradient tile, transparent, white tile) for the collapsed sidebar, avatars and favicons; auto picks the transparent "A" on light and the gradient tile on dark

#### Fixes

- dark theme passes WCAG AA on the lighter surface (axe flagged the destructive Button at 4.24:1 on dialogs and the app shell): tinted backgrounds go from 24% to 16% alpha, accent text and icons lift to #A9CBFA, secondary text and icons become #cccccc, the neutral wash 8%; light theme secondary text darkens to #616161 and yellow text to #946000 so they clear AA on the muted gray and the pastel; a new test checks every tinted pair over body, surface, card and muted in both modes

#### Contributors

Thanks to everyone who contributed to this release:

- @Caio-Silvestre

---

# 1.0.5

#### New Features

- theme-pharos follows the Alexandria brandbook: white page with bordered cards, azul #034694 as the primary action, links and focus, dark theme derived from chumbo #383838, brand-first chart series, Figtree shipped via fonts.css, brandGradient and brandSlogan exports, and the black Pharos logo removed; core gains the pt-BR locale

#### Contributors

Thanks to everyone who contributed to this release:

- @Caio-Silvestre

---

# 1.0.4

#### Fixes

- theme-pharos clears WCAG AA on light surfaces: text/icon accent darkened to #B84626, categorical orange text to #B04324 and the Button primary label is dark on the brand laranja in both modes; TextInput gains an autoComplete prop; the pharos init cheat sheet installs the theme with the detected package manager (pnpm add / yarn add / bun add) instead of a hardcoded npm i

#### Contributors

Thanks to everyone who contributed to this release:

- @Caio-Silvestre

---

# 1.0.3

---

# 1.0.2

#### New Features

- Pharos (Alexandria brand) is now the default theme everywhere: `pharos init` next steps and the AGENTS.md/CLAUDE.md cheat sheet install and wire `@pharos-ds/theme-pharos` as a required step, `pharos doctor` points at it, `pharos theme list` marks it as the maintained theme, the CLI docs (getting-started, theme, styling, migration), core comments, example apps and Storybook default to it. Other `@pharos-ds/theme-*` packages are documented as examples only.

#### Contributors

Thanks to everyone who contributed to this release:

- @Caio-Silvestre

---

# 1.0.1

#### Fixes

- Accent/primary passa a usar laranja Alexandria `#F26641` (dark `#FF8A5C`); azul `#034694` permanece na escala categórica / badge info

---

# 1.0.0

#### New Features

- Theme Pharos: alinhar accent, texto e tons categóricos à paleta oficial da Alexandria (#034694 azul, #383838 chumbo, destaques roxo/laranja/amarelo)

#### Contributors

Thanks to everyone who contributed to this release:

- @Caio-Silvestre

---

# 0.1.9

---

# 0.1.8

---

# 0.1.7

#### Fixes

- StatusDot now uses the same vivid fills as the filled Badge in the neutral theme. Previously the dots mapped to the dark text/icon stops (dark green, maroon, brown), which read muddy in light mode; success/warning/error/accent now match their badge counterparts so a dot and its badge share one status color.

#### Contributors

Thanks to everyone who contributed to this release:

- @ernestt

---

# 0.1.6

---

# 0.1.5

---

# 0.1.4

---

# 0.1.3

---

# 0.1.2

---

# 0.1.1

---

# 0.1.0

---

# 0.0.15

#### Changes

- Tracks `@xds/core@0.0.15` (bare-name migration + data-attribute selector surface).

# 0.0.13

#### Changes

- Icon renames: `checkCircle`/`xCircle` → `success`/`error` (#1503)

#### Patch Changes

- Updated dependencies
  - @xds/core@0.0.13

---

# 0.0.5

#### Changes

- Updated token names to match naming audit (shadow, radius, elevation renames)
- Motion token primitives: duration and easing values
- Dynamic radius and type scale support via `defineTheme` config

#### Patch Changes

- Updated dependencies
  - @xds/core@0.0.5

---

# 0.0.4

#### Patch Changes

- Updated dependencies — aligned with @xds/core@0.0.4

---

# 0.0.3

#### Patch Changes

- Fix theme package to produce proper JS/TS module output via tsup (#541)

---

# 0.0.2

#### Changes

- Migrated to CSS-based theming with `defineTheme()`

---

# 0.0.1

- Initial release — neutral theme with Lucide icons
