// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

/**
 * @file AlexandriaLogo.tsx
 * @input alexandriaLogoSources (generated from /brand), useTheme from core
 * @output Exports AlexandriaLogo, the brand logo / slogan that follows the theme
 * @position Brand asset component for the Pharos theme; consumed by source.ts
 *
 * Brandbook order: gradient first, white second; azul or chumbo only case by
 * case. `tone="auto"` picks the gradient on light and white on dark. Needs a
 * Theme above it to read the mode; without one it assumes light.
 */

import React from 'react';
import {useTheme} from '@pharos-ds/core/theme';
import {alexandriaLogoSources} from './logos.generated';

export type AlexandriaLogoKind = keyof typeof alexandriaLogoSources;
export type AlexandriaLogoTone =
  'auto' | 'colorido' | 'white' | 'azul' | 'chumbo';

export interface AlexandriaLogoProps {
  /** `logo` is the isolated logotype; `slogan` is the horizontal lockup with the slogan. */
  kind?: AlexandriaLogoKind;
  /** `auto` follows the theme: gradient on light, white on dark. */
  tone?: AlexandriaLogoTone;
  /** CSS height of the image. Width follows the aspect ratio. Brand minimum is 16px. */
  height?: number | string;
  /** Accessible name. Pass an empty string when the logo is decorative. */
  alt?: string;
}

export function AlexandriaLogo({
  kind = 'logo',
  tone = 'auto',
  height = 32,
  alt = 'Alexandria',
}: AlexandriaLogoProps) {
  const {mode} = useTheme();
  const resolved =
    tone === 'auto' ? (mode === 'dark' ? 'white' : 'colorido') : tone;
  return (
    <img
      src={alexandriaLogoSources[kind][resolved]}
      alt={alt}
      style={{height, width: 'auto', display: 'block'}}
    />
  );
}
