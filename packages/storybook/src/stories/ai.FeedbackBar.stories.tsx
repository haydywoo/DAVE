import type { Meta, StoryObj } from '@storybook/react';
import { FeedbackBar } from '@dave/react';

const meta: Meta<typeof FeedbackBar> = {
  title: 'AI/FeedbackBar',
  component: FeedbackBar,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    feedback:        { control: 'select', options: ['up', 'down', null] },
    hideCopy:        { control: 'boolean' },
    hideRegenerate:  { control: 'boolean' },
    hideFeedback:    { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof FeedbackBar>;

export const Default: Story = {
  args: {
    copyValue: "The assistant's response text.",
    onThumbsUp:   () => console.log('up'),
    onThumbsDown: () => console.log('down'),
    onRegenerate: () => console.log('regenerate'),
  },
};

export const ThumbsUp: Story = {
  args: { copyValue: 'Content', feedback: 'up' },
};

export const ThumbsDown: Story = {
  args: { copyValue: 'Content', feedback: 'down' },
};

export const CopyOnly: Story = {
  args: { copyValue: 'Content to copy', hideFeedback: true, hideRegenerate: true },
};
