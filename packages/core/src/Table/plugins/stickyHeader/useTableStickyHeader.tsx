// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

/**
 * @file useTableStickyHeader.tsx
 * @input React, StyleX, theme tokens, Table types
 * @output Exports useTableStickyHeader hook and UseTableStickyHeaderConfig type
 * @position Sticky-header plugin; consumed by Table via plugins prop
 *
 * SYNC: When modified, update these files to stay in sync:
 * - /packages/core/src/Table/useTableStickyHeader.doc.mjs (documentation)
 * - /packages/core/src/Table/index.ts (exports)
 */

import {useMemo} from 'react';
import * as stylex from '@stylexjs/stylex';
import {colorVars} from '../../../theme/tokens.stylex';
import type {
  HeaderCellRenderProps,
  ScrollWrapperRenderProps,
  TablePlugin,
} from '../../types';

/** Config for {@link useTableStickyHeader}. */
export interface UseTableStickyHeaderConfig {
  /**
   * Height at which the table body starts scrolling vertically while the
   * header stays pinned. Numbers are pixels; strings are any CSS length
   * (`'70dvh'`). The scroll wrapper is the sticky container, so it needs a
   * bounded height for the header to have something to stick against.
   * @default '70dvh'
   */
  maxHeight?: number | string;
}

const DEFAULT_MAX_HEIGHT = '70dvh';

const stickyStyles = stylex.create({
  headerCell: {
    position: 'sticky',
    insetBlockStart: 0,
    // Opaque base (overridable, shared with useTableStickyColumns) so rows
    // scrolling underneath don't show through the pinned header. Above body
    // cells, including pinned body columns (zIndex 1).
    backgroundColor: `var(--table-sticky-background, ${colorVars['--color-background-card']})`,
    backgroundClip: 'padding-box',
    zIndex: 3,
  },
});

/**
 * Pins the header row to the top of the table's scroll area and bounds the
 * scroll area's height. Composes with {@link useTableStickyColumns}: a pinned
 * column's header cell stays pinned on both axes.
 */
export function useTableStickyHeader<T extends Record<string, unknown>>(
  config: UseTableStickyHeaderConfig = {},
): TablePlugin<T> {
  const {maxHeight = DEFAULT_MAX_HEIGHT} = config;
  const blockSize =
    typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight;

  return useMemo(
    (): TablePlugin<T> => ({
      transformHeaderCell(props: HeaderCellRenderProps): HeaderCellRenderProps {
        return {
          ...props,
          xstyle: [...props.xstyle, stickyStyles.headerCell],
        };
      },

      transformScrollWrapper(
        props: ScrollWrapperRenderProps,
      ): ScrollWrapperRenderProps {
        return {
          ...props,
          htmlProps: {
            ...props.htmlProps,
            style: {
              ...props.htmlProps.style,
              maxBlockSize: blockSize,
              overflowY: 'auto',
            },
          },
        };
      },
    }),
    [blockSize],
  );
}
