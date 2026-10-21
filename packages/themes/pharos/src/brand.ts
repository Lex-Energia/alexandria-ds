// Copyright (c) Meta Platforms, Inc. and affiliates.

/**
 * Alexandria brand gradient — the five official stops, in the order the
 * brandbook defines. Decorative only (login, empty states): never as a color
 * filter, never with a visible edge, never with colors outside the palette.
 */
export const brandGradientStops = [
  '#034694', // azul
  '#7C51A1', // roxo
  '#F26641', // laranja
  '#FAA61A', // amarelo #1
  '#FFF200', // amarelo #2
] as const;

/** `background-image` value for the brand gradient. */
export const brandGradient = `linear-gradient(90deg, ${brandGradientStops.join(', ')})`;

/** Official slogan. No trailing period, by brandbook rule. */
export const brandSlogan = 'tecnologia que move o futuro';
