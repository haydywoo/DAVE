import type { Meta, StoryObj } from '@storybook/react';
import { BarChart } from '@dave/charts';

const meta: Meta<typeof BarChart> = {
  title: 'Charts/BarChart',
  component: BarChart,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof BarChart>;

const monthly = [
  { month: 'Jan', revenue: 4200, cost: 2400 },
  { month: 'Feb', revenue: 3800, cost: 1800 },
  { month: 'Mar', revenue: 5100, cost: 2900 },
  { month: 'Apr', revenue: 4700, cost: 2200 },
  { month: 'May', revenue: 6200, cost: 3100 },
  { month: 'Jun', revenue: 5800, cost: 2700 },
];

const single = [
  { month: 'Jan', visitors: 12400 },
  { month: 'Feb', visitors: 9800 },
  { month: 'Mar', visitors: 14200 },
  { month: 'Apr', visitors: 13100 },
  { month: 'May', visitors: 17600 },
  { month: 'Jun', visitors: 15900 },
];

export const Default: Story = {
  args: {
    data: single,
    index: 'month',
    categories: ['visitors'],
    height: 300,
  },
};

export const MultiSeries: Story = {
  args: {
    data: monthly,
    index: 'month',
    categories: ['revenue', 'cost'],
    valueFormatter: (v) => `$${(v / 1000).toFixed(1)}k`,
    height: 300,
  },
};

export const Stacked: Story = {
  args: {
    data: monthly,
    index: 'month',
    categories: ['revenue', 'cost'],
    stacked: true,
    valueFormatter: (v) => `$${(v / 1000).toFixed(1)}k`,
    height: 300,
  },
};

export const Horizontal: Story = {
  args: {
    data: [
      { product: 'Pro plan',     sales: 4200 },
      { product: 'Starter plan', sales: 3100 },
      { product: 'Enterprise',   sales: 2800 },
      { product: 'Add-ons',      sales: 1400 },
      { product: 'Services',     sales: 900  },
    ],
    index: 'product',
    categories: ['sales'],
    layout: 'horizontal',
    valueFormatter: (v) => `$${(v / 1000).toFixed(1)}k`,
    height: 280,
  },
};

export const ThreeSeries: Story = {
  render: () => (
    <BarChart
      data={[
        { quarter: 'Q1', north: 4200, south: 3100, west: 2800 },
        { quarter: 'Q2', north: 5100, south: 3800, west: 3200 },
        { quarter: 'Q3', north: 4700, south: 4200, west: 3600 },
        { quarter: 'Q4', north: 6200, south: 4800, west: 4100 },
      ]}
      index="quarter"
      categories={['north', 'south', 'west']}
      valueFormatter={(v) => `$${(v / 1000).toFixed(1)}k`}
      height={300}
    />
  ),
};
