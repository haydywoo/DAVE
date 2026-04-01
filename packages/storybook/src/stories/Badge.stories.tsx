import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@dave/react';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['neutral', 'primary', 'success', 'warning', 'error'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    children: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: { children: 'Badge' },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Badge variant="neutral">Neutral</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  ),
};

export const InContext: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold text-foreground">Pull request merged</span>
        <Badge variant="success">Merged</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold text-foreground">Build failed</span>
        <Badge variant="error">Failed</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold text-foreground">Review pending</span>
        <Badge variant="warning">Pending</Badge>
      </div>
    </div>
  ),
};
