---
'@pharos-ds/core': patch
'@pharos-ds/cli': patch
'@pharos-ds/theme-pharos': patch
---

[fix] theme-pharos clears WCAG AA on light surfaces: text/icon accent darkened to #B84626, categorical orange text to #B04324 and the Button primary label is dark on the brand laranja in both modes; TextInput gains an autoComplete prop; the pharos init cheat sheet installs the theme with the detected package manager (pnpm add / yarn add / bun add) instead of a hardcoded npm i
@Caio-Silvestre
