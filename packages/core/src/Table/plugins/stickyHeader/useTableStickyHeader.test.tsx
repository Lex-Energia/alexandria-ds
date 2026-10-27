// Copyright (c) Meta Platforms, Inc. and affiliates.

/**
 * @file useTableStickyHeader.test.tsx
 * @input useTableStickyHeader, Table, React testing utilities
 * @output Functional tests for the sticky-header plugin
 * @position Test file; validates the bounded scroll area
 *
 * Note: `position: sticky` is applied via StyleX classNames, which jsdom does
 * not resolve; the plugin-owned inline `max-block-size` on the scroll wrapper
 * is the jsdom-visible signal.
 */

import {describe, it, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import {Table} from '../../Table';
import {useTableStickyHeader} from './useTableStickyHeader';
import {useTableStickyColumns} from '../stickyColumns';
import {pixel} from '../../columnUtils';
import type {TableColumn} from '../../types';

interface Row extends Record<string, unknown> {
  id: string;
  name: string;
  team: string;
}

const data: Row[] = [
  {id: '1', name: 'Alice', team: 'DS'},
  {id: '2', name: 'Bob', team: 'Plat'},
];

const columns: TableColumn<Row>[] = [
  {key: 'name', header: 'Name', width: pixel(180)},
  {key: 'team', header: 'Team', width: pixel(160)},
];

function scrollWrapper(): HTMLElement {
  const wrapper = screen.getByRole('table').parentElement;
  if (!wrapper) {
    throw new Error('table has no scroll wrapper');
  }
  return wrapper;
}

describe('useTableStickyHeader', () => {
  it('bounds the scroll area at 70dvh by default', () => {
    function Harness() {
      const header = useTableStickyHeader<Row>();
      return (
        <Table
          data={data}
          columns={columns}
          idKey="id"
          plugins={{stickyHeader: header}}
        />
      );
    }
    render(<Harness />);
    expect(scrollWrapper().style.maxBlockSize).toBe('70dvh');
    expect(scrollWrapper().style.overflowY).toBe('auto');
  });

  it('accepts a pixel number or any CSS length', () => {
    function Harness() {
      const header = useTableStickyHeader<Row>({maxHeight: 320});
      return (
        <Table
          data={data}
          columns={columns}
          idKey="id"
          plugins={{stickyHeader: header}}
        />
      );
    }
    render(<Harness />);
    expect(scrollWrapper().style.maxBlockSize).toBe('320px');
  });

  it('composes with sticky columns without losing the column offset', () => {
    function Harness() {
      const header = useTableStickyHeader<Row>({maxHeight: '50vh'});
      const columnsPlugin = useTableStickyColumns<Row>({startKeys: ['name']});
      return (
        <Table
          data={data}
          columns={columns}
          idKey="id"
          plugins={{stickyHeader: header, stickyColumns: columnsPlugin}}
        />
      );
    }
    render(<Harness />);
    expect(scrollWrapper().style.maxBlockSize).toBe('50vh');
    expect(
      screen.getByRole('columnheader', {name: 'Name'}).style.insetInlineStart,
    ).toBe('0px');
  });
});
