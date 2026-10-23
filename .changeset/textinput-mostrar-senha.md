---
'@pharos-ds/core': patch
---

[feat] `TextInput` com `type="password"` mostra um botão de olho que revela e esconde a senha. O botão tem um rótulo fixo ("Mostrar senha" / "Show password") e informa o estado com `aria-pressed`; ao clicar, o foco volta para o campo. Some com o campo desabilitado e pode ser desligado com `hasPasswordToggle={false}`. Novo ícone semântico `eye`.

@Caio-Silvestre
