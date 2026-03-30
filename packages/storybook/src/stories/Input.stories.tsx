import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@dave/react';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Height and padding scale',
    },
    error: { control: 'boolean', description: 'Error state' },
    label: { control: 'text' },
    hint: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: 'Email address',
    placeholder: 'you@example.com',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Input size="sm" placeholder="Small" />
      <Input size="md" placeholder="Medium" />
      <Input size="lg" placeholder="Large" />
    </div>
  ),
};

export const WithHint: Story = {
  args: {
    label: 'Email address',
    placeholder: 'you@example.com',
    hint: "We'll never share your email.",
  },
};

export const Error: Story = {
  args: {
    label: 'Email address',
    defaultValue: 'not-an-email',
    error: true,
    hint: 'Please enter a valid email address.',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Email address',
    placeholder: 'you@example.com',
    disabled: true,
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-5 w-80">
      <Input label="Default" placeholder="Placeholder" />
      <Input label="Filled" defaultValue="jane@example.com" />
      <Input label="Error" defaultValue="bad-value" error hint="Invalid email address." />
      <Input label="Disabled" placeholder="Placeholder" disabled />
    </div>
  ),
};
