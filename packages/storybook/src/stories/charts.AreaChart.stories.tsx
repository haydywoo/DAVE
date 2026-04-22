import type { Meta, StoryObj } from '@storybook/react-vite';
import { AreaChart } from '@haydywoo/dave-charts';

const meta: Meta<typeof AreaChart> = {
  title: 'Charts/AreaChart',
  component: AreaChart,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof AreaChart>;

const monthly = [
  { month: 'Jan', revenue: 4200, cost: 2400 },
  { month: 'Feb', revenue: 3800, cost: 1800 },
  { month: 'Mar', revenue: 5100, cost: 2900 },
  { month: 'Apr', revenue: 4700, cost: 2200 },
  { month: 'May', revenue: 6200, cost: 3100 },
  { month: 'Jun', revenue: 5800, cost: 2700 },
  { month: 'Jul', revenue: 6900, cost: 3400 },
  { month: 'Aug', revenue: 7200, cost: 3600 },
];

export const Default: Story = {
  args: {
    data: monthly,
    index: 'month',
    categories: ['revenue'],
    valueFormatter: (v) => `$${(v / 1000).toFixed(1)}k`,
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
    stack: 'stack',
    valueFormatter: (v) => `$${(v / 1000).toFixed(1)}k`,
    height: 300,
  },
};

export const Percentage: Story = {
  args: {
    data: monthly,
    index: 'month',
    categories: ['revenue', 'cost'],
    stack: 'expand',
    height: 300,
  },
};

export const HighFillOpacity: Story = {
  args: {
    data: monthly,
    index: 'month',
    categories: ['revenue'],
    fillOpacity: 0.4,
    valueFormatter: (v) => `$${(v / 1000).toFixed(1)}k`,
    height: 300,
  },
};
