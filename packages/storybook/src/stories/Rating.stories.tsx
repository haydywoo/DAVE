import type { Meta, StoryObj } from '@storybook/react-vite';
import { Rating } from '@dave/react';

const meta: Meta<typeof Rating> = {
  title: 'Forms/Rating',
  component: Rating,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  args: { max: 5, size: 'md' },
};

export default meta;
type Story = StoryObj<typeof Rating>;

export const Default: Story = {
  args: { defaultValue: 3 },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Rating size="sm" defaultValue={4} />
      <Rating size="md" defaultValue={4} />
      <Rating size="lg" defaultValue={4} />
    </div>
  ),
};

export const CustomMax: Story = {
  args: { max: 10, defaultValue: 7 },
};

export const ReadOnly: Story = {
  args: { readOnly: true, defaultValue: 4 },
};

export const Disabled: Story = {
  args: { disabled: true, defaultValue: 3 },
};

export const Empty: Story = {
  args: { defaultValue: 0 },
};
