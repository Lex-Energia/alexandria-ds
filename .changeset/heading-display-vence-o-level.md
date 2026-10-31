---
'@pharos-ds/core': patch
---

[fix] `Heading` com `type="display-*"` volta a ter o tamanho, o peso e a entrelinha do display. A regra `.pharos-heading.level-N` do tema ficava na camada do tema, acima da classe do `type`, e vencia; o tema agora gera também `.pharos-heading.display-N`, com a mesma especificidade e depois do `level`, e o `type` vence como a doc do `Heading` diz. Permite ao front tirar o contorno do `globals.css`. Fecha #45.

@Caio-Silvestre
