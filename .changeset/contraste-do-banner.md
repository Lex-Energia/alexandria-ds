---
'@pharos-ds/theme-pharos': patch
---

[fix] Banner: o texto de aviso no tema claro passa de 3,94:1 para 5,0:1 (`--color-text-yellow` `#946000` → `#7D5200`), e o `Link` dentro de um Banner herda a cor do status (`--color-text-accent` por status), com 5,0 a 7,1:1 sobre os fundos de info, sucesso, aviso e erro. Testes de contraste novos cobrem os quatro fundos sobre cada superfície. Fecha #22 e #34.

@Caio-Silvestre
