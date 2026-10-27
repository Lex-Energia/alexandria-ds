---
'@pharos-ds/core': patch
---

[feat] `Typeahead` ganha `isLoading`: o campo fica inerte como em `isDisabled`, o wrapper recebe `aria-busy` e aparece um `Spinner` com `role="status"` ("Loading" / "Carregando"). Serve para ações disparadas pela escolha da opção, como um envio em `onChange`. Não muda o indicador da busca de sugestões. Fecha o pedido da issue #242 do alexandria.frontend.

@Caio-Silvestre
