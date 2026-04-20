import type { Meta, StoryObj } from '@storybook/react-vite';
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
    appearance: {
      control: 'select',
      options: ['solid', 'outline', 'dashed'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
    },
    dot: { control: 'boolean' },
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

export const Outline: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Badge appearance="outline" variant="neutral">Neutral</Badge>
      <Badge appearance="outline" variant="primary">Primary</Badge>
      <Badge appearance="outline" variant="success">Success</Badge>
      <Badge appearance="outline" variant="warning">Warning</Badge>
      <Badge appearance="outline" variant="error">Error</Badge>
    </div>
  ),
};

export const Dashed: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Badge appearance="dashed" variant="neutral">Draft</Badge>
      <Badge appearance="dashed" variant="primary">In review</Badge>
      <Badge appearance="dashed" variant="success">Provisional</Badge>
      <Badge appearance="dashed" variant="warning">Pending</Badge>
      <Badge appearance="dashed" variant="error">Blocked</Badge>
    </div>
  ),
};

export const WithDot: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Badge dot variant="neutral">Offline</Badge>
      <Badge dot variant="primary">Syncing</Badge>
      <Badge dot variant="success">Active</Badge>
      <Badge dot variant="warning">Degraded</Badge>
      <Badge dot variant="error">Incident</Badge>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Badge size="xs">Extra small</Badge>
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
        <span className="text-sm font-semibold text-foreground">Draft feature</span>
        <Badge appearance="dashed" variant="neutral">Draft</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold text-foreground">Service status</span>
        <Badge dot variant="success">Operational</Badge>
      </div>
    </div>
  ),
};
