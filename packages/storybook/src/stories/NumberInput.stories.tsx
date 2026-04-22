import type { Meta, StoryObj } from '@storybook/react-vite';
import { NumberInput } from '@haydywoo/dave-react';

const meta: Meta<typeof NumberInput> = {
  title: 'Forms/NumberInput',
  component: NumberInput,
  parameters: { layout: 'centered' },
  decorators: [(Story) => <div className="w-64"><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof NumberInput>;

export const Default: Story = {
  args: { defaultValue: 5 },
};

export const WithLabel: Story = {
  args: {
    label: 'Quantity',
    defaultValue: 1,
    min: 0,
    max: 99,
  },
};

export const WithHint: Story = {
  args: {
    label: 'Seats',
    hint: 'Maximum 10 seats per plan.',
    defaultValue: 3,
    min: 1,
    max: 10,
  },
};

export const WithStep: Story = {
  args: {
    label: 'Price',
    defaultValue: 10,
    min: 0,
    max: 100,
    step: 5,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-64">
      <NumberInput size="sm" label="Small"  defaultValue={1} />
      <NumberInput size="md" label="Medium" defaultValue={1} />
      <NumberInput size="lg" label="Large"  defaultValue={1} />
    </div>
  ),
};

export const Error: Story = {
  args: {
    label: 'Quantity',
    hint: 'Must be at least 1.',
    defaultValue: 0,
    error: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Quantity',
    defaultValue: 5,
    disabled: true,
  },
};
