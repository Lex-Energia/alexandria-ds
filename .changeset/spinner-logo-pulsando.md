---
'@pharos-ds/core': patch
---

[feat] `Spinner` passa a ser o "A" da Alexandria pulsando no lugar do anel girando: a opacidade vai de 0,1 a 1 e a escala de 1 a 1,05 em 3 s (`ease-in-out`, infinito), sem rotação. O tamanho que o `Spinner` ocupa não muda (sm 14, md 20, lg 24, xl 36 px). O `shade` padrão usa o gradiente da marca (azul, roxo, laranja, âmbar, amarelo); `onMedia`, `subtle` e `inherit` desenham o "A" numa cor só (`--color-on-dark`, `--color-text-secondary` e `currentColor`). Com `prefers-reduced-motion` a logo fica parada e visível. Sem canvas, então o `Spinner` funciona no servidor sem efeito.

@Caio-Silvestre
