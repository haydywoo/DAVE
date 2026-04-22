import type { Meta, StoryObj } from '@storybook/react-vite';
import { DonutChart } from '@haydywoo/dave-charts';

const meta: Meta<typeof DonutChart> = {
  title: 'Charts/DonutChart',
  component: DonutChart,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof DonutChart>;

const traffic = [
  { name: 'Organic',  value: 4200 },
  { name: 'Direct',   value: 2800 },
  { name: 'Referral', value: 1900 },
  { name: 'Social',   value: 1100 },
  { name: 'Email',    value: 600  },
];

export const Default: Story = {
  args: {
    data: traffic,
    valueFormatter: (v) => v.toLocaleString(),
    height: 300,
  },
};

export const WithCentreLabel: Story = {
  args: {
    data: traffic,
    centerLabel: (
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 24, fontWeight: 700, color: 'var(--color-foreground)', lineHeight: 1 }}>
          10.6k
        </div>
        <div style={{ fontSize: 12, color: 'var(--color-foreground-secondary)', marginTop: 4 }}>
          visitors
        </div>
      </div>
    ),
    valueFormatter: (v) => v.toLocaleString(),
    height: 300,
  },
};

export const NoLegend: Story = {
  args: {
    data: traffic,
    showLegend: false,
    centerLabel: (
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 22, fontWeight: 700, color: 'var(--color-foreground)', lineHeight: 1 }}>
          10.6k
        </div>
        <div style={{ fontSize: 11, color: 'var(--color-foreground-secondary)', marginTop: 4 }}>
          total
        </div>
      </div>
    ),
    height: 260,
  },
};

export const ThinRing: Story = {
  args: {
    data: traffic,
    innerRadius: '72%',
    outerRadius: '84%',
    centerLabel: (
      <span style={{ fontSize: 20, fontWeight: 700, color: 'var(--color-foreground)' }}>
        10.6k
      </span>
    ),
    height: 280,
  },
};

export const ThreeSlices: Story = {
  args: {
    data: [
      { name: 'Pro',       value: 5200 },
      { name: 'Starter',   value: 3100 },
      { name: 'Free',      value: 1400 },
    ],
    valueFormatter: (v) => `${v.toLocaleString()} users`,
    height: 280,
  },
};
