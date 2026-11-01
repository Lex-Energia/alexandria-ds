// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

/**
 * @file Spinner.tsx
 * @input Uses React, StyleX, inline SVG (Alexandria "A")
 * @output Exports Spinner component, SpinnerProps, SpinnerSize, SpinnerShade types
 * @position Core implementation of spinner loading indicator
 *
 * SYNC: When modified, update these files to stay in sync:
 * - /packages/core/src/Spinner/Spinner.doc.mjs
 * - /packages/core/src/Spinner/Spinner.test.tsx
 * - /packages/core/src/Spinner/index.ts
 * - /apps/storybook/stories/Spinner.stories.tsx
 * - /packages/cli/templates/blocks/components/Spinner/ (showcase blocks)
 */

import {useId, type ReactNode} from 'react';
import * as stylex from '@stylexjs/stylex';
import {colorVars, spacingVars} from '../theme/tokens.stylex';
import type {BaseProps} from '../BaseProps';
import {Text} from '../Text/Text';
import {mergeProps} from '../utils';
import {themeProps} from '../utils/themeProps';

// =============================================================================
// Constants
// =============================================================================

const SIZES = {
  sm: {diameter: 10, border: 2},
  md: {diameter: 14, border: 3},
  lg: {diameter: 18, border: 3},
  xl: {diameter: 28, border: 4},
};

/** The Alexandria "A" (viewBox 0 0 137 129). */
const LOGO_PATH =
  'M0.261875 129C2.96054 121.763 5.84321 114.28 8.90988 106.552C12.0992 98.824 15.2272 91.2187 18.2939 83.736C21.4832 76.1307 24.5499 68.7707 27.4939 61.656C30.5605 54.5413 33.3819 48.04 35.9579 42.152C38.5339 36.1413 40.8032 30.8667 42.7659 26.328C44.8512 21.7893 46.5072 18.2933 47.7339 15.84C50.4325 10.0747 53.4379 6.14932 56.7499 4.064C60.0619 1.97866 64.0485 0.935993 68.7099 0.935993C73.4939 0.935993 77.1125 1.61066 79.5659 2.95999C82.1419 4.30933 83.9205 5.47466 84.9019 6.456C87.1099 10.2587 89.7472 15.4107 92.8139 21.912C95.8805 28.2907 99.0699 35.4053 102.382 43.256C105.817 50.984 109.251 59.08 112.686 67.544C116.121 75.8853 119.371 83.9813 122.438 91.832C125.505 99.6827 128.265 106.859 130.718 113.36C133.294 119.861 135.318 125.075 136.79 129H108.454C107.473 126.301 106.062 122.744 104.222 118.328C102.505 113.789 100.419 108.392 97.9659 102.136H37.7979C35.3445 108.392 33.2592 113.728 31.5419 118.144C29.8245 122.56 28.4139 126.179 27.3099 129H0.261875ZM67.9739 27.248C67.3605 28.4747 66.3179 30.8053 64.8459 34.24C63.4965 37.6747 61.8405 41.784 59.8779 46.568C58.0379 51.352 55.9525 56.6267 53.6219 62.392C51.2912 68.0347 49.0219 73.6773 46.8139 79.32H88.9499C86.7419 73.6773 84.4725 68.0347 82.1419 62.392C79.9339 56.6267 77.8485 51.4133 75.8859 46.752C73.9232 41.968 72.2059 37.8587 70.7339 34.424C69.3845 30.9893 68.4645 28.5973 67.9739 27.248Z';

/**
 * Brand gradient of the default shade: blue, purple, orange, amber, yellow,
 * as [offset, light, dark]. The dark column lifts the blue and the purple: the
 * brand blue #034694 is 1.5:1 on the dark page and, at the 10% opacity floor of
 * the pulse, the head of the "A" would vanish. Orange, amber and yellow already
 * read on both.
 */
const LOGO_GRADIENT = [
  ['0', '#034694', '#6BA3F5'],
  ['0.25', '#7C51A1', '#A98BD0'],
  ['0.5', '#EA5B30', '#EA5B30'],
  ['0.75', '#FAA61A', '#FAA61A'],
  ['1', '#FFF200', '#FFF200'],
] as const;

// =============================================================================
// Animation
// =============================================================================

// The logo stays put and only fades and swells slightly: no rotation, and the
// transform never touches the layout around it.
const pulse = stylex.keyframes({
  '0%': {opacity: 0.1, transform: 'scale(1)'},
  '50%': {opacity: 1, transform: 'scale(1.05)'},
  '100%': {opacity: 0.1, transform: 'scale(1)'},
});

// =============================================================================
// Styles
// =============================================================================

const styles = stylex.create({
  wrapper: {
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: spacingVars['--spacing-2'],
  },
  spinner: {
    display: 'inline-grid',
    placeItems: 'center',
    // The pulse scales the logo 5% past its box; the box itself, and so the
    // space the spinner takes, stays the frame size.
    overflow: 'visible',
    verticalAlign: 'middle',
  },
  logo: {
    display: 'block',
    width: '100%',
    height: '100%',
    willChange: 'opacity, transform',
    animationDuration: '3s',
    animationIterationCount: 'infinite',
    animationName: {
      default: pulse,
      '@media (prefers-reduced-motion: reduce)': 'none',
    },
    animationTimingFunction: 'ease-in-out',
    // Reduced motion: a still, fully visible logo. The role="status" and the
    // "Loading" label still convey the busy state.
  },
  // The "A" of the logotype in one color: brand blue on light, white on dark,
  // the same pairing as the `azul` and `white` tones of the logo.
  shadeBrand: {color: 'light-dark(#034694, #FFFFFF)'},
  shadeOnMedia: {color: colorVars['--color-on-dark']},
  shadeSubtle: {color: colorVars['--color-text-secondary']},
});

// =============================================================================
// Types
// =============================================================================

export type SpinnerSize = keyof typeof SIZES;

export type SpinnerShade =
  'default' | 'brand' | 'onMedia' | 'subtle' | 'inherit';

export interface SpinnerProps extends BaseProps<HTMLSpanElement> {
  /** Ref forwarded to the root element */
  ref?: React.Ref<HTMLSpanElement>;
  /**
   * Spinner size.
   * - 'sm': 10px diameter
   * - 'md': 14px diameter
   * - 'lg': 18px diameter
   * - 'xl': 36px diameter
   * @default 'md'
   */
  size?: SpinnerSize;
  /**
   * Color shade.
   * - 'default': the Alexandria "A" in its brand gradient
   * - 'brand': the "A" in the logo's single color: brand blue on light,
   *   white on dark
   * - 'onMedia': white on dark/accent backgrounds
   * - 'subtle': secondary text color, less prominent — for inline use in lists
   * - 'inherit': inherits the parent's `currentColor` (with a translucent
   *   track) — use inside colored elements like buttons so the ring matches
   *   the resolved foreground regardless of theme/variant
   * @default 'default'
   */
  shade?: SpinnerShade;
  /**
   * Visible content displayed below the spinner.
   * Accepts a string or ReactNode for rich content.
   *
   * When `label` is a string, the visible text also provides the accessible
   * name of the status element (via aria-labelledby, avoiding a duplicate
   * announcement) unless `aria-label` is explicitly set.
   *
   * @example
   * ```
   * <Spinner label="Loading..." />
   * <Spinner label={<><strong>Fetching data</strong><br/>This may take a moment</>} aria-label="Fetching data" />
   * ```
   */
  label?: ReactNode;
  /**
   * Test ID for the root element.
   */
  'data-testid'?: string;
}

// =============================================================================
// Component
// =============================================================================

/**
 * An animated loading indicator: the Alexandria "A" pulsing in place, in the
 * same box the ring spinner used.
 *
 * @example
 * ```
 * <Spinner />
 * <Spinner size="sm" />
 * <Spinner shade="brand" />
 * <Spinner size="lg" shade="onMedia" />
 * <Spinner label="Loading..." />
 * <Spinner aria-label="Loading data" />
 * ```
 */
export function Spinner({
  size = 'md',
  shade = 'default',
  label,
  xstyle,
  className,
  style,
  'aria-label': ariaLabel,
  'data-testid': testId,
  ref,
  ...restProps
}: SpinnerProps) {
  const gradientId = `pharos-spinner-${useId().replace(/:/g, '')}`;

  const {border, diameter} = SIZES[size];
  const frameSize = diameter + border * 2;
  const hasLabel = label != null;
  const labelId = useId();

  // When a visible string label renders (and no explicit aria-label is set),
  // name the status element from the visible Text via aria-labelledby instead
  // of duplicating the same string as aria-label — the duplicate would be
  // announced twice by screen readers (WCAG 4.1.2).
  const namedByVisibleLabel =
    hasLabel && typeof label === 'string' && ariaLabel == null;

  // Resolve accessible name: explicit aria-label > string label > "Loading"
  const resolvedAriaLabel =
    ariaLabel ?? (typeof label === 'string' ? label : undefined) ?? 'Loading';

  const spinner = (
    <span
      ref={hasLabel ? undefined : ref}
      role="status"
      aria-label={namedByVisibleLabel ? undefined : resolvedAriaLabel}
      aria-labelledby={namedByVisibleLabel ? labelId : undefined}
      data-testid={hasLabel ? undefined : testId}
      {...(hasLabel ? {} : restProps)}
      {...mergeProps(
        hasLabel ? '' : themeProps('spinner', {size, shade}),
        stylex.props(styles.spinner, !hasLabel && xstyle),
        hasLabel ? undefined : className,
        {...(hasLabel ? {} : style), width: frameSize, height: frameSize},
      )}>
      <svg
        viewBox="0 0 137 129"
        fill="none"
        aria-hidden="true"
        focusable="false"
        {...stylex.props(
          styles.logo,
          shade === 'brand' && styles.shadeBrand,
          shade === 'onMedia' && styles.shadeOnMedia,
          shade === 'subtle' && styles.shadeSubtle,
        )}>
        {shade === 'default' && (
          <defs>
            <linearGradient
              id={gradientId}
              x1="40"
              y1="30.5"
              x2="127"
              y2="129"
              gradientUnits="userSpaceOnUse">
              {LOGO_GRADIENT.map(([offset, light, dark]) => (
                <stop
                  key={offset}
                  offset={offset}
                  style={{stopColor: `light-dark(${light}, ${dark})`}}
                />
              ))}
            </linearGradient>
          </defs>
        )}
        <path
          d={LOGO_PATH}
          fill={shade === 'default' ? `url(#${gradientId})` : 'currentColor'}
        />
      </svg>
    </span>
  );

  if (!hasLabel) {
    return spinner;
  }

  return (
    <div
      ref={ref as React.Ref<HTMLDivElement>}
      data-testid={testId}
      {...restProps}
      {...mergeProps(
        themeProps('spinner', {size, shade}),
        stylex.props(styles.wrapper, xstyle),
        className,
        style,
      )}>
      {spinner}
      {typeof label === 'string' ? (
        <Text id={labelId} type="body" weight="bold">
          {label}
        </Text>
      ) : (
        label
      )}
    </div>
  );
}

Spinner.displayName = 'Spinner';
