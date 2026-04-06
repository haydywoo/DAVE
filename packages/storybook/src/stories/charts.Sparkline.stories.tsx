import type { Meta, StoryObj } from '@storybook/react';
import { Sparkline } from '@dave/charts';

const meta: Meta<typeof Sparkline> = {
  title: 'Charts/Sparkline',
  component: Sparkline,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof Sparkline>;

const trend = [12, 18, 14, 22, 19, 28, 24, 31, 27, 35, 30, 38];
const volatile = [40, 22, 38, 15, 42, 28, 50, 18, 44, 33, 48, 26];

export const Default: Story = {
  args: { data: trend, height: 48, width: 120 },
};

export const Bar: Story = {
  args: { data: trend, type: 'bar', height: 48, width: 120 },
};

export const WithReferenceLine: Story = {
  args: {
    data: volatile,
    referenceLine: 30,
    height: 48,
    width: 120,
    valueFormatter: (v) => `${v}%`,
  },
};

export const InContext: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {[
        { label: 'Revenue',   value: '$38.2k',  change: '+12%', color: 'var(--color-chart-1)', data: trend },
        { label: 'Users',     value: '4,821',   change: '+8%',  color: 'var(--color-chart-5)', data: [8,12,10,15,13,18,16,22,19,24,21,26] },
        { label: 'Churn',     value: '2.4%',    change: '-0.3%',color: 'var(--color-chart-4)', data: [5,4,6,5,4,3,4,3,3,2,3,2] },
      ].map(({ label, value, change, color, data }) => (
        <div
          key={label}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            padding: '12px 16px',
            background: 'var(--color-card)',
            border: '1px solid var(--color-border)',
            borderRadius: 4,
          }}
        >
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11, color: 'var(--color-foreground-secondary)', marginBottom: 2 }}>{label}</div>
            <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--color-foreground)', lineHeight: 1 }}>{value}</div>
          </div>
          <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-success)', minWidth: 40, textAlign: 'right' }}>{change}</div>
          <Sparkline data={data} color={color} height={40} width={80} />
        </div>
      ))}
    </div>
  ),
};

export const BarInContext: Story = {
  render: () => (
    <div
      style={{
        padding: '16px',
        background: 'var(--color-card)',
        border: '1px solid var(--color-border)',
        borderRadius: 4,
        display: 'inline-flex',
        flexDirection: 'column',
        gap: 4,
      }}
    >
      <div style={{ fontSize: 11, color: 'var(--color-foreground-secondary)' }}>Weekly signups</div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12 }}>
        <span style={{ fontSize: 24, fontWeight: 700, color: 'var(--color-foreground)' }}>284</span>
        <Sparkline data={[40, 55, 48, 62, 70, 58, 80]} type="bar" height={32} width={80} />
      </div>
    </div>
  ),
};
