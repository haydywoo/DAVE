import type { Meta, StoryObj } from '@storybook/react-vite';
import { ComboChart } from '@dave/charts';

const meta: Meta<typeof ComboChart> = {
  title: 'Charts/ComboChart',
  component: ComboChart,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof ComboChart>;

const monthly = [
  { month: 'Jan', revenue: 4200, cost: 2400, margin: 42 },
  { month: 'Feb', revenue: 3800, cost: 1800, margin: 52 },
  { month: 'Mar', revenue: 5100, cost: 2900, margin: 43 },
  { month: 'Apr', revenue: 4700, cost: 2200, margin: 53 },
  { month: 'May', revenue: 6200, cost: 3100, margin: 50 },
  { month: 'Jun', revenue: 5800, cost: 2700, margin: 53 },
  { month: 'Jul', revenue: 6900, cost: 3400, margin: 51 },
  { month: 'Aug', revenue: 7200, cost: 3600, margin: 50 },
];

export const Default: Story = {
  args: {
    data: monthly,
    index: 'month',
    bars: ['revenue'],
    lines: ['margin'],
    valueFormatter: (v) => `$${(v / 1000).toFixed(1)}k`,
    height: 320,
  },
};

export const DualAxis: Story = {
  args: {
    data: monthly,
    index: 'month',
    bars: ['revenue'],
    lines: ['margin'],
    dualAxis: true,
    valueFormatter: (v) => `$${(v / 1000).toFixed(1)}k`,
    secondaryFormatter: (v) => `${v}%`,
    height: 320,
  },
};

export const MultiBars: Story = {
  args: {
    data: monthly,
    index: 'month',
    bars: ['revenue', 'cost'],
    lines: ['margin'],
    dualAxis: true,
    valueFormatter: (v) => `$${(v / 1000).toFixed(1)}k`,
    secondaryFormatter: (v) => `${v}%`,
    height: 320,
  },
};

export const SharedAxis: Story = {
  args: {
    data: [
      { month: 'Jan', sessions: 8400, conversions: 420 },
      { month: 'Feb', sessions: 7200, conversions: 396 },
      { month: 'Mar', sessions: 9600, conversions: 528 },
      { month: 'Apr', sessions: 8900, conversions: 490 },
      { month: 'May', sessions: 11200, conversions: 616 },
      { month: 'Jun', sessions: 10400, conversions: 572 },
    ],
    index: 'month',
    bars: ['sessions'],
    lines: ['conversions'],
    valueFormatter: (v) => v.toLocaleString(),
    height: 320,
  },
};
