import type { Meta, StoryObj } from '@storybook/react';
import { ThinkingBlock } from '@dave/react';

const meta: Meta<typeof ThinkingBlock> = {
  title: 'AI/ThinkingBlock',
  component: ThinkingBlock,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    isStreaming:  { control: 'boolean' },
    defaultOpen:  { control: 'boolean' },
    duration:     { control: 'number' },
    content:      { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof ThinkingBlock>;

export const Streaming: Story = {
  args: { isStreaming: true },
};

export const Complete: Story = {
  args: {
    content: 'The user is asking about recursion. I should explain the base case and recursive case clearly, and use factorial as the canonical example since it\'s universally understood.',
    duration: 4.2,
  },
};

export const OpenByDefault: Story = {
  args: {
    content: 'This reasoning block is expanded by default.',
    defaultOpen: true,
    duration: 1.8,
  },
};
