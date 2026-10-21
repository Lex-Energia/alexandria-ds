// Copyright (c) Meta Platforms, Inc. and affiliates.

/** @type {import('../docs-types').ComponentDoc} */

export const docs = {
  name: 'SideNavSection',
  subComponentOf: 'SideNav',
  displayName: 'Side Nav Section',
  isHiddenFromOverview: true,
  description: 'Section grouping with an optional title, subtitle, and end content.',
  props: [
    {
      name: 'title',
      type: 'string',
      description: 'Section title.',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'string',
      description: 'Section subtitle.',
    },
    {
      name: 'children',
      type: 'ReactNode',
      description: 'Section items.',
      slotElements: [
        {
          __element: 'SideNavItem',
          props: {
            label: 'Item',
          },
        },
      ],
    },
    {
      name: 'endContent',
      type: 'ReactNode',
      description: 'Right-side content in the section header.',
      slotElements: [
        {
          __element: 'Icon',
          props: {
            icon: 'chevronDown',
            size: 'sm',
          },
        },
        {
          __element: 'Badge',
          props: {
            label: '3',
          },
        },
      ],
    },
    {
      name: 'isHeaderHidden',
      type: 'boolean',
      description: 'Visually hides the section header while keeping it accessible to screen readers.',
      default: 'false',
    },
    {
      name: 'collapsible',
      type: 'boolean | { defaultIsCollapsed?: boolean; isCollapsed?: boolean; onCollapsedChange?: (isCollapsed: boolean) => void }',
      description: 'Lets users collapse the section items by clicking the title. The title area becomes a toggle button (aria-expanded, chevron) and endContent stays outside it. true for uncontrolled (starts expanded), or an object with defaultIsCollapsed, or isCollapsed + onCollapsedChange for controlled mode. Ignored when isHeaderHidden is set or the SideNav is collapsed to its icon rail.',
      default: 'false',
    },
    {
      name: 'xstyle',
      type: 'StyleXStyles',
      description: 'StyleX styles for layout customization (margins, positioning, sizing). Must be a stylex.create() value: not an inline style object like style={{}}.',
    },
  ],
};

export const docsZh = {
  name: 'SideNavSection',
  isHiddenFromOverview: true,
  displayName: 'Side Nav Section',
  description: '分组，支持可选的标题、副标题和尾部内容。',
  props: [
    {
      name: 'title',
      type: 'string',
      description: '分组标题。',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'string',
      description: '分组副标题。',
    },
    {
      name: 'children',
      type: 'ReactNode',
      description: '分组项目。',
    },
    {
      name: 'endContent',
      type: 'ReactNode',
      description: '分组头部的右侧内容。',
    },
    {
      name: 'isHeaderHidden',
      type: 'boolean',
      description: '视觉上隐藏分组头部，同时保持屏幕阅读器可访问。',
      default: 'false',
    },
    {
      name: 'collapsible',
      type: 'boolean | { defaultIsCollapsed?: boolean; isCollapsed?: boolean; onCollapsedChange?: (isCollapsed: boolean) => void }',
      description: '允许点击标题折叠分组项目。标题区域变为切换按钮（aria-expanded，带箭头），endContent 保持在按钮之外。true 为非受控模式（默认展开），或传入对象：defaultIsCollapsed，或 isCollapsed + onCollapsedChange 受控模式。设置 isHeaderHidden 或 SideNav 折叠为图标栏时忽略。',
      default: 'false',
    },
  ],
};

export const docsDense = {
  name: 'SideNavSection',
  isHiddenFromOverview: true,
  displayName: 'Side Nav Section',
  description: 'Section grouping w/ optional title, subtitle, end content.',
  propDescriptions: {
    title: 'Section title.',
    subtitle: 'Section subtitle.',
    children: 'Section items.',
    endContent: 'Right-side content in section header.',
    isHeaderHidden: 'Visually hides section header while keeping accessible to screen readers.',
    collapsible: 'true | {defaultIsCollapsed?, isCollapsed?, onCollapsedChange?}. Title becomes toggle button collapsing items; endContent stays outside. Ignored if header hidden or nav rail-collapsed.',
    xstyle: 'StyleX styles for layout customization.',
  },
};
