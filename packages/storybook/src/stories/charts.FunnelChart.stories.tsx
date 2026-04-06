import type { Meta, StoryObj } from '@storybook/react';
import { FunnelChart } from '@dave/charts';

const meta: Meta<typeof FunnelChart> = {
  title: 'Charts/FunnelChart',
  component: FunnelChart,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof FunnelChart>;

const pipeline = [
  { name: 'Visitors',    value: 24800 },
  { name: 'Sign-ups',    value: 8600  },
  { name: 'Activated',   value: 4200  },
  { name: 'Subscribed',  value: 1800  },
  { name: 'Retained',    value: 940   },
];

export const Default: Story = {
  args: {
    data: pipeline,
    valueFormatter: (v) => v.toLocaleString(),
  },
};

export const SingleColor: Story = {
  args: {
    data: pipeline,
    colorMode: 'single',
    valueFormatter: (v) => v.toLocaleString(),
  },
};

export const NoConversions: Story = {
  args: {
    data: pipeline,
    showConversions: false,
    valueFormatter: (v) => v.toLocaleString(),
  },
};

export const Sales: Story = {
  args: {
    data: [
      { name: 'Leads',      value: 3200 },
      { name: 'Qualified',  value: 1400 },
      { name: 'Proposed',   value: 680  },
      { name: 'Negotiating',value: 310  },
      { name: 'Closed',     value: 148  },
    ],
    valueFormatter: (v) => v.toLocaleString(),
  },
};

export const Revenue: Story = {
  args: {
    data: [
      { name: 'Pipeline',   value: 1_200_000 },
      { name: 'Qualified',  value: 840_000   },
      { name: 'Proposed',   value: 520_000   },
      { name: 'Committed',  value: 280_000   },
      { name: 'Closed',     value: 164_000   },
    ],
    valueFormatter: (v) => `$${(v / 1000).toFixed(0)}k`,
  },
};
