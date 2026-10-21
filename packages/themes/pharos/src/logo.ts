// Copyright (c) Meta Platforms, Inc. and affiliates.

/**
 * @file logo.ts
 * @output Client entry for the Alexandria logo component
 * @position Published as `@pharos-ds/theme-pharos/logo`. Kept apart from the
 *   theme entry on purpose: the component reads the theme mode through a hook,
 *   so the built file carries "use client" (see tsup.config.ts) and the theme
 *   entry stays safe to import from Server Components.
 */

export {AlexandriaLogo} from './AlexandriaLogo';
export type {
  AlexandriaLogoKind,
  AlexandriaLogoProps,
  AlexandriaLogoTone,
} from './AlexandriaLogo';
