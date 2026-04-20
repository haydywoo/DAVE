import type { Meta, StoryObj } from '@storybook/react-vite';
import { Slider } from '@dave/react';

const meta: Meta<typeof Slider> = {
  title: 'Forms/Slider',
  component: Slider,
  parameters: { layout: 'padded' },
  decorators: [(Story) => <div className="max-w-sm p-4"><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: { defaultValue: [40] },
};

export const WithLabel: Story = {
  args: {
    label: 'Volume',
    showValue: true,
    defaultValue: [60],
  },
};

export const WithFormat: Story = {
  args: {
    label: 'Price',
    showValue: true,
    defaultValue: [250],
    min: 0,
    max: 1000,
    step: 10,
    formatValue: (v) => `$${v}`,
  },
};

export const Range: Story = {
  args: {
    label: 'Price range',
    showValue: true,
    defaultValue: [200, 800],
    min: 0,
    max: 1000,
    step: 10,
    formatValue: (v) => `$${v}`,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <Slider size="sm" label="Small" showValue defaultValue={[40]} />
      <Slider size="md" label="Medium" showValue defaultValue={[60]} />
      <Slider size="lg" label="Large" showValue defaultValue={[80]} />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    showValue: true,
    defaultValue: [40],
    disabled: true,
  },
};
