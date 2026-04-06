import type { Meta, StoryObj } from '@storybook/react';
import { FileInput } from '@dave/react';

const meta: Meta<typeof FileInput> = {
  title: 'Forms/FileInput',
  component: FileInput,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  args: { size: 'md' },
};

export default meta;
type Story = StoryObj<typeof FileInput>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-3 w-72">
      <FileInput size="sm" />
      <FileInput size="md" />
      <FileInput size="lg" />
      <FileInput size="xl" />
    </div>
  ),
};

export const AcceptImages: Story = {
  args: { accept: 'image/*', placeholder: 'No image chosen' },
};

export const Multiple: Story = {
  args: { multiple: true, placeholder: 'No files chosen' },
};

export const ErrorState: Story = {
  args: { error: true },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const CustomLabel: Story = {
  args: { buttonLabel: 'Choose file' },
};
