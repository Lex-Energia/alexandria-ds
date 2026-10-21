---
'@pharos-ds/theme-pharos': patch
---

[fix] dark theme passes WCAG AA on the lighter surface (axe flagged the destructive Button at 4.24:1 on dialogs and the app shell): tinted backgrounds go from 24% to 16% alpha, accent text and icons lift to #A9CBFA, secondary text and icons become #cccccc, the neutral wash 8%; light theme secondary text darkens to #616161 and yellow text to #946000 so they clear AA on the muted gray and the pastel; a new test checks every tinted pair over body, surface, card and muted in both modes
@Caio-Silvestre
