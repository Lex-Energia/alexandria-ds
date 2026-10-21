---
'@pharos-ds/theme-pharos': patch
---

[fix] form controls get a 3:1 border (WCAG 1.4.11): text, number, date, time, textarea, selector, typeahead, tokenizer and file inputs, checkbox, radio list and the switch off track use #858585 in light and #999999 in dark instead of #d4d4d4 and #5e5e5e (1.48:1 on the white page, so a white field almost vanished); applied per control, because the shared emphasized border also draws Divider, Tooltip, Blockquote, chart grids and the ProgressBar track, which stay light
@Caio-Silvestre
