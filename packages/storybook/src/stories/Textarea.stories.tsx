import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '@dave/react';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: { placeholder: 'Write something…' },
  decorators: [Story => <div className="w-80"><Story /></div>],
};

export const WithLabel: Story = {
  args: { label: 'Description', placeholder: 'Describe your project…' },
  decorators: [Story => <div className="w-80"><Story /></div>],
};

export const WithHint: Story = {
  args: {
    label: 'Bio',
    placeholder: 'Tell us about yourself…',
    hint: 'Shown on your public profile. Max 200 characters.',
  },
  decorators: [Story => <div className="w-80"><Story /></div>],
};

export const ErrorState: Story = {
  args: {
    label: 'Message',
    placeholder: 'Your message…',
    hint: 'Message cannot be empty.',
    error: true,
  },
  decorators: [Story => <div className="w-80"><Story /></div>],
};

export const WithCharacterCount: Story = {
  args: { showCount: true, maxLength: 200, label: 'Bio', placeholder: 'Tell us about yourself…', hint: 'Keep it concise.' },
  decorators: [Story => <div className="w-80"><Story /></div>],
};

export const Disabled: Story = {
  args: {
    label: 'Notes',
    defaultValue: 'This field is disabled.',
    disabled: true,
  },
  decorators: [Story => <div className="w-80"><Story /></div>],
};
