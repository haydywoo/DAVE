import type { Meta, StoryObj } from '@storybook/react';
import { Stat } from '@dave/react';

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const meta: Meta<typeof Stat> = {
  title: 'Components/Stat',
  component: Stat,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Stat>;

export const Default: Story = {
  args: {
    label: 'Total revenue',
    value: '$45,231',
    change: 20.1,
    changeLabel: 'vs last month',
  },
};

export const Negative: Story = {
  args: {
    label: 'Bounce rate',
    value: '54.2%',
    change: -3.4,
    changeLabel: 'vs last month',
  },
};

export const WithIcon: Story = {
  args: {
    label: 'Active users',
    value: '2,350',
    change: 12.5,
    changeLabel: 'vs last week',
    icon: <UsersIcon />,
  },
};

export const NoChange: Story = {
  args: {
    label: 'Total orders',
    value: '1,284',
  },
};

export const Grid: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 w-[500px]">
      <Stat label="Revenue"      value="$45,231" change={20.1}  changeLabel="vs last month" />
      <Stat label="Orders"       value="1,284"   change={-2.3}  changeLabel="vs last month" />
      <Stat label="Active users" value="2,350"   change={12.5}  changeLabel="vs last week" icon={<UsersIcon />} />
      <Stat label="Churn rate"   value="3.2%"    change={-0.8}  changeLabel="vs last month" />
    </div>
  ),
};
