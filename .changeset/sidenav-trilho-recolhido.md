---
'@pharos-ds/core': patch
'@pharos-ds/cli': patch
---

[feat] `SideNav` recolhido (trilho de ícones) deixa de renderizar `footer`: o conteúdo de largura cheia não cabe no trilho. `footerIcons` e o botão de recolher continuam visíveis; ações que precisam ficar no trilho (configurações, conta, tema, sair) vão em `footerIcons` como botões de ícone. Os templates de app shell da CLI (AppShell Showcase, SideNavOnly, TopNavWithSideNav, WithBanner e a página Side Nav) passam a usar `collapsible`, e a página Side Nav move configurações e conta de `footer` para `footerIcons`. Docs do `SideNav` recomendam `collapsible` em app shells e ícone em todo item.

@Caio-Silvestre
