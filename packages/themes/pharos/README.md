# @pharos-ds/theme-pharos

Tema oficial e **padrão** do Pharos (marca Alexandria). Todo app Pharos deve usá-lo; os demais pacotes `@pharos-ds/theme-*` (neutral, butter, chocolate, gothic, matcha, stone, y2k) são apenas temas de exemplo para quem está autorando um tema próprio.

Traz a identidade Alexandria: tipografia Figtree, ação primária e links em azul `#034694`, destaques em roxo `#7C51A1`, laranja `#F26641` e amarelos da marca, texto chumbo `#383838`, fundo branco no claro, dark mode derivado do chumbo e ícones [Lucide](https://lucide.dev) (todos outline).

## Install

```bash
npm install @pharos-ds/core @pharos-ds/theme-pharos
```

## Usage

Importe o CSS na ordem reset → base → tema e envolva o app com `<Theme>`:

```css
@import '@pharos-ds/core/reset.css';
@import '@pharos-ds/core/pharos.css';
@import '@pharos-ds/theme-pharos/fonts.css';
@import '@pharos-ds/theme-pharos/theme.css';
```

`fonts.css` carrega a Figtree (400, 500, 600 e 700) a partir de `@fontsource/figtree`; sem ele o tema cai nas fontes do sistema.

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
  tokens: {'--color-accent': ['#7C51A1', '#A67BC4']},
});
```

Gere o CSS com `npx @pharos-ds/cli theme build src/meuTema.ts --out src/meuTema.css`.

## Logos

```tsx
import {AlexandriaLogo} from '@pharos-ds/theme-pharos/logo';

<AlexandriaLogo height={32} />                  {/* degradê no claro, branco no escuro */}
<AlexandriaLogo kind="slogan" tone="azul" />    {/* caso a caso: azul ou chumbo */}
<AlexandriaLogo kind="symbol" height={24} />    {/* símbolo "A": sidebar recolhida, avatar, favicon */}
```

O símbolo "A" é para redução extrema (o brandbook manda usá-lo quando o logotipo não cabe; tamanho mínimo de 16 px). Os tons dele descrevem o fundo: `gradiente` (A branco sobre o quadrado em degradê), `transparente` (A em degradê, sem fundo) e `branco` (A em degradê sobre quadrado branco). No `auto`, o claro usa `transparente` e o escuro usa `gradiente`, porque o azul do degradê some sobre o chumbo.

O subpath `/logo` é um módulo cliente (`'use client'`); o tema em si continua seguro para Server Components. As logos vêm embutidas no pacote (data URI), sem configurar loader de imagem. `tone="auto"` segue o tema; precisa de um `<Theme>` acima. Os SVGs de origem ficam em `brand/logo`, `brand/slogan` e `brand/symbol`; depois de alterá-los, rode `pnpm -F @pharos-ds/theme-pharos build:logos`.

## Marca

- **Gradiente**: `brandGradient` e `brandGradientStops` (de `@pharos-ds/theme-pharos` ou `/brand`) (as 5 paradas oficiais: azul, roxo, laranja, amarelo #1, amarelo #2) são só decorativos, como em login e estados vazios. Nunca como filtro de cor nem com borda aparente.
- **Slogan**: `brandSlogan` é "tecnologia que move o futuro", sem ponto final em login, rodapés ou qualquer outro lugar.
- **Fundos abstratos**: formas arredondadas e suaves, só em branco com nuances de cinza claro.
- **Séries de gráfico**: os slots seguem a cor: `blue` (azul), `purple` (roxo), `orange` (laranja), `yellow` (amarelo) e `gray` (chumbo), nessa ordem. Depois deles vêm as cores extras (verde, rosa, ciano, vermelho, verde-azulado, marrom, índigo), com os valores padrão do core.
- **Tons de acessibilidade**: os derivados das cores da marca estão documentados no cabeçalho de `src/pharosTheme.ts`. Os valores oficiais do brandbook não são alterados.
- **Preto absoluto**: só na cor da sombra (restrição técnica).
