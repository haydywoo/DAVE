import type { Meta, StoryObj } from '@storybook/react-vite';
import { Spinner, Button } from '@dave/react';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg'] },
  },
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: { size: 'md' },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Spinner size="xs" />
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
  ),
};

export const InButton: Story = {
  render: () => (
    <div className="flex gap-3">
      <Button isLoading>Saving</Button>
      <Button variant="secondary" isLoading>Processing</Button>
    </div>
  ),
};

export const InlineWithText: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 text-sm text-fg-secondary">
        <Spinner size="sm" />
        <span>Loading data…</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-fg-secondary">
        <Spinner size="xs" />
        <span>Syncing</span>
      </div>
    </div>
  ),
};

export const FullPage: Story = {
  render: () => (
    <div className="flex h-40 w-64 items-center justify-center rounded-[3px] border border-border bg-card">
      <div className="flex flex-col items-center gap-3">
        <Spinner size="lg" />
        <p className="text-sm text-fg-secondary">Loading…</p>
      </div>
    </div>
  ),
};
