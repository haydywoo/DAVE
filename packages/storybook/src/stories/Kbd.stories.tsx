import type { Meta, StoryObj } from '@storybook/react-vite';
import { Kbd } from '@dave/react';

const meta: Meta<typeof Kbd> = {
  title: 'Components/Kbd',
  component: Kbd,
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<typeof Kbd>;

export const Default: Story = {
  args: { children: '⌘K' },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Kbd size="sm">⌘K</Kbd>
      <Kbd size="md">⌘K</Kbd>
      <Kbd size="lg">⌘K</Kbd>
    </div>
  ),
};

export const Combo: Story = {
  render: () => (
    <div className="flex items-center gap-1.5">
      <Kbd>⌘</Kbd>
      <Kbd>Shift</Kbd>
      <Kbd>P</Kbd>
    </div>
  ),
};

export const InContext: Story = {
  render: () => (
    <p className="text-sm text-foreground">
      Press <Kbd>⌘K</Kbd> to open search, or <Kbd>Esc</Kbd> to close.
    </p>
  ),
};
