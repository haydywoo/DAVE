import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from '@dave/react';

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: { width: 200, height: 16 },
};

export const Text: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-64">
      <Skeleton height={16} className="w-3/4" />
      <Skeleton height={12} className="w-full" />
      <Skeleton height={12} className="w-5/6" />
    </div>
  ),
};

export const Card: Story = {
  render: () => (
    <div className="w-72 rounded-[3px] border border-border bg-card p-4 flex flex-col gap-4">
      <Skeleton height={160} className="w-full" rounded="sm" />
      <div className="flex gap-3 items-center">
        <Skeleton width={36} height={36} rounded="full" />
        <div className="flex flex-col gap-1.5 flex-1">
          <Skeleton height={14} className="w-2/3" />
          <Skeleton height={11} className="w-1/2" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Skeleton height={12} className="w-full" />
        <Skeleton height={12} className="w-4/5" />
        <Skeleton height={12} className="w-3/5" />
      </div>
    </div>
  ),
};

export const TableRows: Story = {
  render: () => (
    <div className="flex flex-col gap-3 w-96">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="flex items-center gap-4">
          <Skeleton width={32} height={32} rounded="full" />
          <div className="flex flex-col gap-1.5 flex-1">
            <Skeleton height={13} className="w-1/2" />
            <Skeleton height={11} className="w-1/3" />
          </div>
          <Skeleton height={22} width={60} rounded="full" />
        </div>
      ))}
    </div>
  ),
};
