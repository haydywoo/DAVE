import type { Meta, StoryObj } from '@storybook/react-vite';
import { LineChart } from '@dave/charts';

const meta: Meta<typeof LineChart> = {
  title: 'Charts/LineChart',
  component: LineChart,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof LineChart>;

const monthly = [
  { month: 'Jan', revenue: 4200, target: 4000 },
  { month: 'Feb', revenue: 3800, target: 4200 },
  { month: 'Mar', revenue: 5100, target: 4400 },
  { month: 'Apr', revenue: 4700, target: 4600 },
  { month: 'May', revenue: 6200, target: 4800 },
  { month: 'Jun', revenue: 5800, target: 5000 },
  { month: 'Jul', revenue: 6900, target: 5200 },
  { month: 'Aug', revenue: 7200, target: 5400 },
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
    categories: ['revenue', 'target'],
    valueFormatter: (v) => `$${(v / 1000).toFixed(1)}k`,
    height: 300,
  },
};

export const WithDots: Story = {
  args: {
    data: monthly,
    index: 'month',
    categories: ['revenue', 'target'],
    showDots: true,
    valueFormatter: (v) => `$${(v / 1000).toFixed(1)}k`,
    height: 300,
  },
};

export const Stepped: Story = {
  args: {
    data: [
      { week: 'W1', active: 120 },
      { week: 'W2', active: 120 },
      { week: 'W3', active: 145 },
      { week: 'W4', active: 145 },
      { week: 'W5', active: 160 },
      { week: 'W6', active: 182 },
      { week: 'W7', active: 182 },
      { week: 'W8', active: 210 },
    ],
    index: 'week',
    categories: ['active'],
    curveType: 'step',
    height: 300,
  },
};

export const ThreeSeries: Story = {
  render: () => (
    <LineChart
      data={[
        { month: 'Jan', north: 4200, south: 3100, west: 2800 },
        { month: 'Feb', north: 5100, south: 3800, west: 3200 },
        { month: 'Mar', north: 4700, south: 4200, west: 3600 },
        { month: 'Apr', north: 6200, south: 4800, west: 4100 },
        { month: 'May', north: 5800, south: 5100, west: 4600 },
        { month: 'Jun', north: 7100, south: 5600, west: 5000 },
      ]}
      index="month"
      categories={['north', 'south', 'west']}
      valueFormatter={(v) => `$${(v / 1000).toFixed(1)}k`}
      height={300}
    />
  ),
};
