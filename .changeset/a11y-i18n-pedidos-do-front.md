---
'@pharos-ds/core': patch
---

[fix] Pedidos de acessibilidade e i18n do backoffice e do Líder Lex: "Optional"/"Required" do `FieldLabel`, o texto do `FileInput` (placeholder, anúncio de seleção, erros de tipo, tamanho e quantidade) e o "Skip to content" do `AppShell` vão para o catálogo (`en` e `pt-BR`); o `Selector` com `hasSearch` deixa de pôr `aria-required` no botão e o põe no combobox da busca; o `ref` do `FileInput` passa a focar o botão visível quando se chama `focus()` (react-hook-form), assim como o "Limpar"; o campo e o "Limpar tudo" do `Tokenizer`/`PowerSearch` mantêm 24px (WCAG 2.5.8). Fecha #12 (item 1), #35 e #31 (itens 2 e 5).

@Caio-Silvestre
