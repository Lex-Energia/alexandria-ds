---
'@pharos-ds/theme-pharos': patch
---

[feat] O acento passa a ser o laranja de ação `#CD431C`, com texto claro `#FFFFFE` em cima (4,8:1) nos dois modos: Button primary, foco, seleção, StatusDot e ProgressBar `accent`. É um tom mais fechado que o laranja do logotipo (`#F26641`) para o texto claro passar no AA. Informação continua no azul `#034694` (Badge e Banner `info`). Link e texto laranja usam `#B04324` no claro e `#FFA07A` no escuro.

[feat] Neutros quentes: os cinzas ganham a matiz do laranja (OKLCH 55, croma 0,005 a 0,008) na mesma luminosidade, então os contrastes se mantêm. Fundo da página `#F4F0EE`, superfícies e cards `#FFFFFE`; no escuro, `#262321`, `#2E2A28` e `#363230`. A borda dos controles passa a `#898481` / `#9D9895`.

[feat] Títulos e números de destaque (`heading-*`, `display-*`) em Glory, a fonte do site de faturas; o corpo continua em Figtree. O `fonts.css` passa a importar a Glory (`@fontsource/glory`).

[fix] O StatusDot `warning` usa o amarelo de ícone: o `#ffce2f` some no fundo claro (1,5:1). O Badge continua com o amarelo vivo.

Lacuna conhecida: no escuro, o anel de foco no `#CD431C` fica com 3,3:1 sobre a página e 2,7:1 sobre os cards.

@andreflor21
