// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

/**
 * @file SideNavSection.tsx
 * @input Uses React, StyleX
 * @output Exports SideNavSection component and SideNavSectionProps
 * @position Core implementation; used inside SideNav children
 *
 * Section grouping for navigation items with optional title and end content.
 *
 * SYNC: When modified, update these files to stay in sync:
 * - /packages/core/src/SideNav/SideNav.doc.mjs
 * - /packages/core/src/SideNav/SideNav.test.tsx
 * - /packages/core/src/SideNav/index.ts
 * - /apps/storybook/stories/SideNav.stories.tsx
 * - /packages/cli/templates/blocks/components/SideNav/ (showcase blocks)
 */

import React, {
  useCallback,
  useId,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import * as stylex from '@stylexjs/stylex';
import {
  colorVars,
  spacingVars,
  fontWeightVars,
  typeScaleVars,
  durationVars,
  easeVars,
  radiusVars,
} from '../theme/tokens.stylex';
import {mergeProps} from '../utils';
import type {BaseProps} from '../BaseProps';
import {useSideNavCollapse} from './SideNavCollapseContext';
import {getIcon} from '../Icon/globalIconRegistry';
import {themeProps} from '../utils/themeProps';
// =============================================================================
// Styles
// =============================================================================

const styles = stylex.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    paddingBlock: spacingVars['--spacing-1'],
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: spacingVars['--spacing-2'],
    paddingInline: spacingVars['--spacing-2'],
    paddingBlock: spacingVars['--spacing-1'],
    cursor: 'default',
    userSelect: 'none',
  },

  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    minWidth: 0,
  },
  title: {
    fontSize: typeScaleVars['--text-supporting-size'],
    fontWeight: fontWeightVars['--font-weight-semibold'],
    lineHeight: typeScaleVars['--text-supporting-leading'],
    color: colorVars['--color-text-secondary'],
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  subtitle: {
    fontSize: typeScaleVars['--text-supporting-size'],
    lineHeight: typeScaleVars['--text-supporting-leading'],
    color: colorVars['--color-text-secondary'],
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  endContent: {
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
  },

  items: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacingVars['--spacing-0-5'],
  },

  // ── Collapsible section ──
  // The header row loses its own padding so the toggle button can own it
  // (giving the hover overlay the full title area) while the text stays
  // aligned exactly where the static header puts it.
  headerCollapsible: {
    paddingInline: 0,
    paddingBlock: 0,
  },
  headerToggle: {
    display: 'flex',
    alignItems: 'center',
    gap: spacingVars['--spacing-2'],
    flex: 1,
    minWidth: 0,
    width: '100%',
    paddingInline: spacingVars['--spacing-2'],
    paddingBlock: spacingVars['--spacing-1'],
    margin: 0,
    borderWidth: 0,
    borderStyle: 'none',
    borderRadius: radiusVars['--radius-element'],
    backgroundColor: 'transparent',
    color: 'inherit',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    fontWeight: 'inherit',
    lineHeight: 'inherit',
    textAlign: 'start',
    cursor: 'pointer',
    userSelect: 'none',
    ':hover': {
      '@media (hover: hover)': {
        backgroundColor: colorVars['--color-overlay-hover'],
      },
    },
    ':active': {
      backgroundColor: colorVars['--color-overlay-pressed'],
    },
    outline: {
      default: 'none',
      ':focus-visible': `2px solid ${colorVars['--color-accent']}`,
    },
    outlineOffset: {
      default: '0',
      ':focus-visible': '-2px',
    },
  },
  endContentCollapsible: {
    paddingInlineEnd: spacingVars['--spacing-2'],
  },
  expandChevron: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: spacingVars['--spacing-6'],
    height: spacingVars['--spacing-6'],
    color: colorVars['--color-text-secondary'],
    transitionProperty: 'transform',
    transitionDuration: {
      default: durationVars['--duration-fast'],
      '@media (prefers-reduced-motion: reduce)': '0s',
    },
    transitionTimingFunction: easeVars['--ease-standard'],
    flexShrink: 0,
  },
  expandChevronExpanded: {
    transform: 'rotate(180deg)',
  },
  itemsCollapsible: {
    display: 'grid',
    gridTemplateRows: '1fr',
    transitionProperty: 'grid-template-rows',
    transitionDuration: {
      default: durationVars['--duration-medium'],
      '@media (prefers-reduced-motion: reduce)': '0s',
    },
    transitionTimingFunction: easeVars['--ease-standard'],
  },
  itemsCollapsed: {
    gridTemplateRows: '0fr',
  },
  itemsInner: {
    overflow: 'hidden',
    minHeight: 0,
  },
});

// =============================================================================
// Types
// =============================================================================

export interface SideNavSectionProps extends BaseProps<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
  /**
   * Section title.
   */
  title: string;
  /**
   * Section subtitle.
   */
  subtitle?: string;
  /**
   * Section items.
   */
  children: ReactNode;
  /**
   * Right-side content in the section header.
   */
  endContent?: ReactNode;
  /**
   * Whether the section header is visually hidden.
   * The section title is still accessible to screen readers.
   * @default false
   */
  isHeaderHidden?: boolean;
  /**
   * Lets the user collapse the section's items by clicking its title.
   * The title area becomes a toggle button (`aria-expanded`) with a chevron;
   * `endContent` stays outside the button.
   *
   * - `true` — collapsible with defaults (starts expanded)
   * - Object — controlled/configured:
   *   - `defaultIsCollapsed` — start collapsed (default: false)
   *   - `isCollapsed` + `onCollapsedChange` — controlled mode
   *
   * Ignored when `isHeaderHidden` is set or the SideNav itself is collapsed
   * to its icon rail (items stay visible so their icons remain reachable).
   *
   * @default false
   */
  collapsible?:
    | boolean
    | {
        defaultIsCollapsed?: boolean;
        isCollapsed?: boolean;
        onCollapsedChange?: (isCollapsed: boolean) => void;
      };
}

// =============================================================================
// Component
// =============================================================================

/**
 * Section grouping for SideNav items.
 *
 * Renders a labeled group of navigation items.
 * Uses `role="group"` with `aria-labelledby` for accessibility.
 *
 * @example
 * ```
 * <SideNavSection title="Main">
 *   <SideNavItem label="Dashboard" icon={HomeIcon} isSelected />
 *   <SideNavItem label="Projects" icon={FolderIcon} />
 * </SideNavSection>
 * ```
 */
export function SideNavSection({
  ref,
  title,
  subtitle,
  children,
  endContent,
  isHeaderHidden = false,
  collapsible,
  xstyle,
  className,
  style,
  'data-testid': testId,
  ...rest
}: SideNavSectionProps) {
  const {isCollapsed} = useSideNavCollapse();
  const id = useId();
  const titleId = `${id}-title`;
  const itemsId = `${id}-items`;

  // Section collapse state (mirrors SideNavItem's `collapsible`)
  const collapsibleConfig = useMemo(
    () => (typeof collapsible === 'object' ? collapsible : {}),
    [collapsible],
  );
  const controlledCollapsed = collapsibleConfig.isCollapsed;
  const isControlled = controlledCollapsed !== undefined;
  const [uncontrolledCollapsed, setUncontrolledCollapsed] = useState(
    collapsibleConfig.defaultIsCollapsed ?? false,
  );
  const isSectionCollapsed = isControlled
    ? controlledCollapsed
    : uncontrolledCollapsed;

  const toggleSectionCollapse = useCallback(() => {
    const next = !isSectionCollapsed;
    if (!isControlled) {
      setUncontrolledCollapsed(next);
    }
    collapsibleConfig.onCollapsedChange?.(next);
  }, [isSectionCollapsed, isControlled, collapsibleConfig]);

  const shouldHideHeader = isHeaderHidden || isCollapsed;
  // Collapse only applies while the header is visible: a hidden header has
  // no toggle, and the icon rail must keep every item reachable.
  const isSectionCollapsible =
    collapsible != null && collapsible !== false && !shouldHideHeader;
  const isItemsCollapsed = isSectionCollapsible && isSectionCollapsed;

  const titleContent = (
    <span {...stylex.props(styles.titleContainer)}>
      <span id={titleId} {...stylex.props(styles.title)}>
        {title}
      </span>
      {subtitle && <span {...stylex.props(styles.subtitle)}>{subtitle}</span>}
    </span>
  );

  const endContentElement = endContent && (
    <span
      {...stylex.props(
        styles.endContent,
        isSectionCollapsible && styles.endContentCollapsible,
      )}>
      {endContent}
    </span>
  );

  const headerContent = isSectionCollapsible ? (
    <>
      <button
        type="button"
        onClick={toggleSectionCollapse}
        aria-expanded={!isSectionCollapsed}
        aria-controls={itemsId}
        {...stylex.props(styles.headerToggle)}>
        {titleContent}
        <span
          aria-hidden
          {...stylex.props(
            styles.expandChevron,
            !isSectionCollapsed && styles.expandChevronExpanded,
          )}>
          {getIcon('chevronDown')}
        </span>
      </button>
      {endContentElement}
    </>
  ) : (
    <>
      {titleContent}
      {endContentElement}
    </>
  );

  const visuallyHiddenStyle: React.CSSProperties = shouldHideHeader
    ? {
        position: 'absolute',
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        whiteSpace: 'nowrap',
        borderWidth: 0,
      }
    : {};

  return (
    <div
      ref={ref}
      {...mergeProps(
        themeProps(
          'side-nav-section',
          isSectionCollapsible
            ? {collapsed: isSectionCollapsed ? 'collapsed' : null}
            : undefined,
        ),
        stylex.props(styles.root, xstyle),
        className,
        style,
      )}
      {...rest}
      role="group"
      aria-labelledby={titleId}
      data-testid={testId}>
      <div
        {...mergeProps(
          stylex.props(
            styles.header,
            isSectionCollapsible && styles.headerCollapsible,
          ),
          {
            style: shouldHideHeader ? visuallyHiddenStyle : undefined,
          },
        )}>
        {headerContent}
      </div>
      {isSectionCollapsible ? (
        <div
          id={itemsId}
          aria-hidden={isItemsCollapsed || undefined}
          inert={isItemsCollapsed ? true : undefined}
          {...stylex.props(
            styles.itemsCollapsible,
            isItemsCollapsed && styles.itemsCollapsed,
          )}>
          <div {...stylex.props(styles.itemsInner)}>
            <div {...stylex.props(styles.items)}>{children}</div>
          </div>
        </div>
      ) : (
        <div {...stylex.props(styles.items)}>{children}</div>
      )}
    </div>
  );
}

SideNavSection.displayName = 'SideNavSection';
