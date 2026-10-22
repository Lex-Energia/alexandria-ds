// Copyright (c) Meta Platforms, Inc. and affiliates.

import type {Meta, StoryObj} from '@storybook/react';
import {Chart, bar, ChartGrid, ChartAxis, currency} from '@pharos-ds/charts';
import {monthlyData, groupedStackData, profitLossData} from './_data';

const meta: Meta<typeof Chart> = {
  title: 'Charts/Bar',
  component: Chart,
};
export default meta;

const axes = (
  <>
    <ChartAxis position="bottom" />
    <ChartAxis position="left" />
  </>
);

export const Simple: StoryObj = {
  render: () => (
    <Chart
      data={monthlyData}
      xKey="month"
      title="Monthly Revenue"
      series={[bar('revenue', {color: '#3b82f6'})]}
      tooltip
      grid={<ChartGrid />}
      axes={
        <>
          <ChartAxis position="bottom" />
          <ChartAxis position="left" tickFormat={currency()} />
        </>
      }
      height={300}
    />
  ),
};

export const Stacked: StoryObj = {
  render: () => (
    <Chart
      data={monthlyData}
      xKey="month"
      title="Revenue & Costs"
      subtitle="Stacked by category"
      series={[
        bar('revenue', {color: '#3b82f6', stack: 'totals', label: 'Revenue'}),
        bar('costs', {color: '#ef4444', stack: 'totals', label: 'Costs'}),
      ]}
      legend={{position: 'bottom', alignment: 'center'}}
      grid={<ChartGrid />}
      axes={axes}
      height={300}
    />
  ),
};

export const Grouped: StoryObj = {
  render: () => (
    <Chart
      data={monthlyData}
      xKey="month"
      title="Revenue vs Costs"
      series={[
        bar('revenue', {color: '#3b82f6', group: 'compare', label: 'Revenue'}),
        bar('costs', {color: '#ef4444', group: 'compare', label: 'Costs'}),
      ]}
      legend={{position: 'top', alignment: 'end'}}
      grid={<ChartGrid />}
      axes={axes}
      height={300}
    />
  ),
};

export const GroupedStacked: StoryObj = {
  render: () => (
    <Chart
      data={groupedStackData}
      xKey="month"
      title="Grouped + stacked"
      series={[
        bar('revenueA', {color: '#3b82f6', stack: 'a', group: 'cmp'}),
        bar('costsA', {color: '#93c5fd', stack: 'a', group: 'cmp'}),
        bar('revenueB', {color: '#ef4444', stack: 'b', group: 'cmp'}),
        bar('costsB', {color: '#fca5a5', stack: 'b', group: 'cmp'}),
      ]}
      grid={<ChartGrid />}
      axes={axes}
      height={300}
    />
  ),
};

export const NegativeValues: StoryObj = {
  render: () => (
    <Chart
      data={profitLossData}
      xKey="month"
      title="Profit / Loss"
      series={[bar('profit', {color: '#3b82f6'})]}
      grid={<ChartGrid />}
      axes={axes}
      height={300}
    />
  ),
};

const leadsByChannel = [
  {channel: 'Instagram', leads: 120},
  {channel: 'Google Ads', leads: 96},
  {channel: 'Referral', leads: 64},
  {channel: 'LinkedIn', leads: 41},
  {channel: 'Events', leads: 18},
];

/** Categories on the y-axis, values growing right. Grid follows the value axis. */
export const Horizontal: StoryObj = {
  render: () => (
    <Chart
      data={leadsByChannel}
      xKey="channel"
      orientation="horizontal"
      title="Leads by channel"
      description="Instagram leads with 120 leads, more than double LinkedIn."
      series={[bar('leads', {label: 'Leads'})]}
      margin={{left: 88}}
      tooltip
      grid={<ChartGrid />}
      axes={
        <>
          <ChartAxis position="left" />
          <ChartAxis position="bottom" />
        </>
      }
      dataTable={{xLabel: 'Channel'}}
      height={260}
    />
  ),
};

/**
 * Accessible by default: `role="img"` named by `title` (or `aria-label`),
 * `description` as the image description, and a visually hidden data table.
 * Theme palette colors (no `color`) follow light/dark mode.
 */
export const Accessible: StoryObj = {
  render: () => (
    <Chart
      data={monthlyData}
      xKey="month"
      aria-label="Revenue and costs per month"
      description="Revenue stays above costs every month."
      series={[
        bar('revenue', {group: 'compare', label: 'Revenue'}),
        bar('costs', {group: 'compare', label: 'Costs'}),
      ]}
      dataTable={{xLabel: 'Month', formatValue: currency()}}
      legend
      tooltip
      grid={<ChartGrid />}
      axes={axes}
      height={300}
    />
  ),
};
