import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tooltip, Button, Badge } from '@haydywoo/dave-react';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    side: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
    },
    delayDuration: { control: 'number' },
    sideOffset: { control: 'number' },
  },
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    content: 'This is a tooltip',
    side: 'top',
    sideOffset: 6,
    delayDuration: 300,
  },
  render: (args) => (
    <Tooltip {...args}>
      <Button variant="secondary">Hover me</Button>
    </Tooltip>
  ),
};

export const Sides: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      {(['top', 'right', 'bottom', 'left'] as const).map((side) => (
        <Tooltip key={side} content={`Side: ${side}`} side={side}>
          <Button variant="secondary" size="sm">{side}</Button>
        </Tooltip>
      ))}
    </div>
  ),
};

export const RichContent: Story = {
  render: () => (
    <Tooltip
      content={
        <span>
          Press <kbd className="rounded bg-background/20 px-1 font-mono text-[11px]">⌘K</kbd> to open
        </span>
      }
    >
      <Button variant="secondary">Rich tooltip</Button>
    </Tooltip>
  ),
};

export const OnBadge: Story = {
  render: () => (
    <Tooltip content="This item is currently active" side="right">
      <Badge variant="success">Active</Badge>
    </Tooltip>
  ),
};
