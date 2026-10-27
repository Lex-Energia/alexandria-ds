// Copyright (c) Meta Platforms, Inc. and affiliates.

/** @type {import('../docs-types').ComponentDoc} */

export const docs = {
  name: 'useTableStickyHeader',
  subComponentOf: 'Table',
  displayName: 'useTableStickyHeader',
  description:
    'Hook that returns a TablePlugin which pins the header row to the top of the table scroll area and bounds the scroll area height, so tables that scroll in both directions keep their column headings visible. Composes with useTableStickyColumns: pinned column headers stay pinned on both axes.',
  props: [
    {
      name: 'maxHeight',
      type: 'number | string',
      description:
        'Height at which the body starts scrolling vertically while the header stays pinned. Numbers are pixels; strings are any CSS length.',
      default: "'70dvh'",
    },
  ],
};

export const docsZh = {
  name: 'useTableStickyHeader',
  displayName: 'useTableStickyHeader',
  description:
    '返回 TablePlugin 的 Hook，将表头行固定在表格滚动区域顶部，并限制滚动区域的高度，使双向滚动的表格始终显示列标题。可与 useTableStickyColumns 组合：固定列的表头在两个方向上都保持固定。',
  props: [
    {
      name: 'maxHeight',
      type: 'number | string',
      description:
        '正文开始垂直滚动、表头保持固定时的高度。数字为像素；字符串为任意 CSS 长度。',
      default: "'70dvh'",
    },
  ],
};

export const docsDense = {
  name: 'useTableStickyHeader',
  displayName: 'useTableStickyHeader',
  description:
    'Hook returning TablePlugin that pins the header row + bounds scroll-area height (maxHeight, default 70dvh). Composes with useTableStickyColumns.',
  propDescriptions: {
    maxHeight:
      'Height where the body scrolls vertically (number = px, string = CSS length). Default 70dvh.',
  },
};
