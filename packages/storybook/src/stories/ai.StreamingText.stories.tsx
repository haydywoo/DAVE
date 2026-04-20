import type { Meta, StoryObj } from '@storybook/react-vite';
import { StreamingText } from '@dave/react';

const meta: Meta<typeof StreamingText> = {
  title: 'AI/StreamingText',
  component: StreamingText,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    text:        { control: 'text' },
    isStreaming: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof StreamingText>;

export const Streaming: Story = {
  args: { text: 'Generating a response…', isStreaming: true },
};

export const Complete: Story = {
  args: { text: 'Response complete.', isStreaming: false },
};
