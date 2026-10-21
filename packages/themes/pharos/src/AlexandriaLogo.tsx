// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

/**
 * @file AlexandriaLogo.tsx
 * @input alexandriaLogoSources (generated from /brand), useTheme from core
 * @output Exports AlexandriaLogo, the brand logo / slogan / "A" symbol that follows the theme
 * @position Brand asset component for the Pharos theme; published as
 *   `@pharos-ds/theme-pharos/logo` (see logo.ts)
 *
 * Brandbook order: gradient first, white second; azul or chumbo only case by
 * case. `tone="auto"` picks the gradient on light and white on dark. The "A"
 * symbol is for extreme reduction (collapsed sidebar, avatar, favicon): its
 * `auto` is the gradient "A" with no background on light and the gradient tile
 * with a white "A" on dark. Needs a Theme above it to read the mode; without
 * one it assumes light.
 */

import React from 'react';
import {useTheme} from '@pharos-ds/core/theme';
import {alexandriaLogoSources} from './logos.generated';

export type AlexandriaLogoKind = keyof typeof alexandriaLogoSources;
export type AlexandriaLogoTone =
  'auto' | 'colorido' | 'white' | 'azul' | 'chumbo';
/**
 * Symbol tones describe the background: `gradiente` is a white "A" on the
 * gradient tile, `transparente` is the gradient "A" with no background, and
 * `branco` is the gradient "A" on a white tile.
 */
export type AlexandriaSymbolTone =
  'auto' | 'gradiente' | 'transparente' | 'branco';

interface AlexandriaLogoBaseProps {
  /** CSS height of the image. Width follows the aspect ratio. Brand minimum is 16px. */
  height?: number | string;
  /** Accessible name. Pass an empty string when the logo is decorative. */
  alt?: string;
}

export interface AlexandriaWordmarkProps extends AlexandriaLogoBaseProps {
  /** `logo` is the isolated logotype; `slogan` is the horizontal lockup with the slogan. */
  kind?: 'logo' | 'slogan';
  /** `auto` follows the theme: gradient on light, white on dark. */
  tone?: AlexandriaLogoTone;
}

export interface AlexandriaSymbolProps extends AlexandriaLogoBaseProps {
  /** The "A" symbol, for tight spots such as the collapsed sidebar. */
  kind: 'symbol';
  /** `auto` follows the theme: no background on light, gradient tile on dark. */
  tone?: AlexandriaSymbolTone;
}

export type AlexandriaLogoProps =
  AlexandriaWordmarkProps | AlexandriaSymbolProps;

export function AlexandriaLogo(props: AlexandriaLogoProps) {
  const {height = 32, alt = 'Alexandria'} = props;
  const dark = useTheme().mode === 'dark';

  let src: string;
  if (props.kind === 'symbol') {
    const tone = props.tone ?? 'auto';
    src =
      alexandriaLogoSources.symbol[
        tone === 'auto' ? (dark ? 'gradiente' : 'transparente') : tone
      ];
  } else {
    const tone = props.tone ?? 'auto';
    src =
      alexandriaLogoSources[props.kind ?? 'logo'][
        tone === 'auto' ? (dark ? 'white' : 'colorido') : tone
      ];
  }

  return (
    <img
      src={src}
      alt={alt}
      style={{height, width: 'auto', display: 'block'}}
    />
  );
}
