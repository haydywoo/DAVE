import type { Meta, StoryObj } from '@storybook/react-vite';
import { Progress } from '@dave/react';

const meta: Meta<typeof Progress> = {
  title: 'Components/Progress',
  component: Progress,
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'success', 'warning', 'error'] },
  },
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: { value: 60, size: 'md', variant: 'default' },
  render: (args) => <div className="w-72"><Progress {...args} /></div>,
};

export const WithLabel: Story = {
  args: { value: 45, label: 'Storage used', showValue: true },
  render: (args) => <div className="w-72"><Progress {...args} /></div>,
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-72">
      <Progress value={60} size="sm" label="Small" />
      <Progress value={60} size="md" label="Medium" />
      <Progress value={60} size="lg" label="Large" />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-72">
      <Progress value={70} variant="default" label="Uploading…" showValue />
      <Progress value={100} variant="success" label="Complete" showValue />
      <Progress value={85} variant="warning" label="Storage nearly full" showValue />
      <Progress value={20} variant="error" label="Failed — 3 errors" showValue />
    </div>
  ),
};

export const Steps: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-72">
      {[25, 50, 75, 100].map((v) => (
        <div key={v} className="flex flex-col gap-1">
          <Progress value={v} showValue />
        </div>
      ))}
    </div>
  ),
};
