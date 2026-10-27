---
'@pharos-ds/core': patch
---

[feat] `AlertDialog` ganha `errorMessage`: quando a ação confirmada falha (como um 409 do servidor), a mensagem aparece dentro do diálogo num Banner de erro (`role="alert"`), anunciada pelo leitor de tela e sem sair do modal. Sem a prop, nada muda. Atende o pedido da issue #242 do alexandria.frontend.

@Caio-Silvestre
