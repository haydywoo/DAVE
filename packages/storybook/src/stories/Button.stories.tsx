import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@dave/react';

const PlusIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'soft', 'link', 'inverse'],
      description: 'Visual style',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Height and padding scale',
    },
    isLoading: {
      control: 'boolean',
      description: 'Shows spinner and disables interaction',
    },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { variant: 'primary', children: 'Button' },
};

export const Secondary: Story = {
  args: { variant: 'secondary', children: 'Button' },
};

export const Ghost: Story = {
  args: { variant: 'ghost', children: 'Button' },
};

export const Inverse: Story = {
  args: { variant: 'inverse', children: 'Button' },
};

export const Soft: Story = {
  args: { variant: 'soft', children: 'Button' },
};

export const Link: Story = {
  args: { variant: 'link', children: 'Read the docs' },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="soft">Soft</Button>
      <Button variant="link">Link</Button>
      <Button variant="inverse">Inverse</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">X-Large</Button>
    </div>
  ),
};

export const Loading: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button variant="primary" isLoading>Saving</Button>
      <Button variant="secondary" isLoading>Loading</Button>
      <Button variant="ghost" isLoading>Loading</Button>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button variant="primary" leftIcon={<PlusIcon />}>New item</Button>
      <Button variant="secondary" rightIcon={<ArrowIcon />}>Continue</Button>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button variant="primary" disabled>Primary</Button>
      <Button variant="secondary" disabled>Secondary</Button>
      <Button variant="ghost" disabled>Ghost</Button>
      <Button variant="soft" disabled>Soft</Button>
    </div>
  ),
};

export const IconOnly: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button variant="primary" icon={<PlusIcon />} aria-label="Add item" size="sm" />
      <Button variant="primary" icon={<PlusIcon />} aria-label="Add item" />
      <Button variant="primary" icon={<PlusIcon />} aria-label="Add item" size="lg" />
      <Button variant="secondary" icon={<PlusIcon />} aria-label="Add item" />
      <Button variant="ghost" icon={<PlusIcon />} aria-label="Add item" />
      <Button variant="soft" icon={<PlusIcon />} aria-label="Add item" />
    </div>
  ),
};
