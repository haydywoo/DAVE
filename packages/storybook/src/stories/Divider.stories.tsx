import type { Meta, StoryObj } from '@storybook/react-vite';
import { Divider } from '@dave/react';

const meta: Meta<typeof Divider> = {
  title: 'Layout/Divider',
  component: Divider,
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-foreground">Above</p>
      <Divider />
      <p className="text-sm text-foreground">Below</p>
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-foreground">Section A</p>
      <Divider label="or" />
      <p className="text-sm text-foreground">Section B</p>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex items-center gap-4 h-8">
      <span className="text-sm text-foreground">Left</span>
      <Divider orientation="vertical" />
      <span className="text-sm text-foreground">Right</span>
    </div>
  ),
};
