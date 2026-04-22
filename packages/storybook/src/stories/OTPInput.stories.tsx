import type { Meta, StoryObj } from '@storybook/react-vite';
import { OTPInput } from '@haydywoo/dave-react';

const meta: Meta<typeof OTPInput> = {
  title: 'Forms/OTPInput',
  component: OTPInput,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  args: { length: 6, size: 'md' },
};

export default meta;
type Story = StoryObj<typeof OTPInput>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <OTPInput size="sm" />
      <OTPInput size="md" />
      <OTPInput size="lg" />
      <OTPInput size="xl" />
    </div>
  ),
};

export const FourDigit: Story = {
  args: { length: 4 },
};

export const Masked: Story = {
  args: { mask: true },
};

export const ErrorState: Story = {
  args: { error: true },
};

export const Disabled: Story = {
  args: { disabled: true, value: '123' },
};
