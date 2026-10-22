---
'@pharos-ds/charts': patch
---

[feat] `@pharos-ds/charts` passa a ser publicado no npm junto com o core (mesma versão, peer exato `@pharos-ds/core`, CSS pronto em `@pharos-ds/charts/charts.css`). O `Chart` fica acessível por padrão: SVG com `role="img"` e nome (`aria-label` → `title` → séries), `description` no `aria-describedby` e tabela de dados escondida visualmente (`dataTable`, desligável). Novo `orientation="horizontal"` para barras horizontais, com eixos e grade acompanhando.

@Caio-Silvestre
