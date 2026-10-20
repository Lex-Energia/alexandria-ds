# @pharos-ds/theme-pharos

Tema oficial e **padrão** do Pharos (marca Alexandria). Todo app Pharos deve usá-lo; os demais pacotes `@pharos-ds/theme-*` (neutral, butter, chocolate, gothic, matcha, stone, y2k) são apenas temas de exemplo para quem está autorando um tema próprio.

Traz a identidade Alexandria: tipografia Figtree, accent laranja `#F26641`, azul `#034694`, roxo `#7C51A1`, amarelos da marca, texto chumbo `#383838`, dark mode e ícones [Lucide](https://lucide.dev).

## Install

```bash
npm install @pharos-ds/core @pharos-ds/theme-pharos
```

## Usage

Importe o CSS na ordem reset → base → tema e envolva o app com `<Theme>`:

```css
@import '@pharos-ds/core/reset.css';
@import '@pharos-ds/core/pharos.css';
@import '@pharos-ds/theme-pharos/theme.css';
```

```tsx
import {Theme} from '@pharos-ds/core/theme';
import {pharosTheme} from '@pharos-ds/theme-pharos/built';

function App() {
  return (
    <Theme theme={pharosTheme} mode="system">
      {/* your app */}
    </Theme>
  );
}
```

### Import paths

| Path                                | Use case                              |
| ----------------------------------- | ------------------------------------- |
| `@pharos-ds/theme-pharos/built`     | Tema pré-compilado (recomendado)      |
| `@pharos-ds/theme-pharos/theme.css` | CSS pré-compilado com todos os tokens |
| `@pharos-ds/theme-pharos`           | Fonte (StyleX via `@pharos-ds/build`) |

## Estender

```tsx
import {defineTheme} from '@pharos-ds/core/theme';
import {pharosTheme} from '@pharos-ds/theme-pharos';

export const meuTema = defineTheme({
  name: 'meu-tema',
  extends: pharosTheme,
  tokens: {'--color-accent': ['#F26641', '#FF8A5C']},
});
```

Gere o CSS com `npx @pharos-ds/cli theme build src/meuTema.ts --out src/meuTema.css`.
