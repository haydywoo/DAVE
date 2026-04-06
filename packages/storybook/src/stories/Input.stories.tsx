import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@dave/react';

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const LockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

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

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Input leftIcon={<SearchIcon />} placeholder="Search…" />
      <Input leftIcon={<MailIcon />} placeholder="you@example.com" label="Email" />
      <Input leftIcon={<LockIcon />} rightIcon={<SearchIcon />} placeholder="With both icons" />
    </div>
  ),
};

export const WithAddons: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Input prefix="https://" placeholder="yoursite.com" />
      <Input suffix=".com" placeholder="yoursite" />
      <Input prefix="https://" suffix="/path" placeholder="yoursite.com" />
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-5 w-80">
      <Input label="Default" placeholder="Placeholder" />
      <Input label="Filled" defaultValue="jane@example.com" />
      <Input label="Error" defaultValue="bad-value" error hint="Invalid email address." />
      <Input label="Disabled" placeholder="Placeholder" disabled />
      <Input label="With icon" leftIcon={<SearchIcon />} placeholder="Search…" />
      <Input label="With addon" prefix="https://" placeholder="yoursite.com" />
    </div>
  ),
};

export const Clearable: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Input clearable placeholder="Type to see the clear button…" defaultValue="Hello, world!" />
      <Input clearable leftIcon={<SearchIcon />} placeholder="Search…" defaultValue="react components" />
    </div>
  ),
};

export const CharacterCount: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Input showCount placeholder="Type something…" />
      <Input showCount maxLength={100} placeholder="Max 100 characters" defaultValue="Start typing here…" hint="Keep it concise." />
    </div>
  ),
};
