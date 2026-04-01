import type { Meta, StoryObj } from '@storybook/react';
import { TagInput } from '@dave/react';

const meta: Meta<typeof TagInput> = {
  title: 'Forms/TagInput',
  component: TagInput,
  parameters: { layout: 'centered' },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof TagInput>;

export const Default: Story = {
  args: {
    label: 'Tags',
    placeholder: 'Add tag…',
    defaultValue: ['design', 'system'],
  },
};

export const WithHint: Story = {
  args: {
    label: 'Skills',
    hint: 'Press Enter or comma to add. Backspace to remove.',
    defaultValue: ['React', 'TypeScript'],
  },
};

export const WithMax: Story = {
  args: {
    label: 'Labels',
    hint: 'Maximum 3 labels.',
    defaultValue: ['bug', 'urgent'],
    max: 3,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <TagInput size="sm" label="Small"  defaultValue={['tag']} />
      <TagInput size="md" label="Medium" defaultValue={['tag']} />
      <TagInput size="lg" label="Large"  defaultValue={['tag']} />
    </div>
  ),
};

export const Error: Story = {
  args: {
    label: 'Tags',
    hint: 'At least one tag is required.',
    error: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Tags',
    defaultValue: ['readonly', 'disabled'],
    disabled: true,
  },
};
