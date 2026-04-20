import type { Meta, StoryObj } from '@storybook/react-vite';
import { Message } from '@dave/react';

const meta: Meta<typeof Message> = {
  title: 'AI/Message',
  component: Message,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    role:       { control: 'select', options: ['user', 'assistant', 'system'] },
    content:    { control: 'text' },
    isStreaming:{ control: 'boolean' },
    hideFeedback: { control: 'boolean' },
    feedback:   { control: 'select', options: ['up', 'down', null] },
  },
};

export default meta;
type Story = StoryObj<typeof Message>;

export const User: Story = {
  args: { role: 'user', content: 'Hey, can you explain how React Server Components work?' },
};

export const Assistant: Story = {
  args: {
    role: 'assistant',
    content: 'React Server Components (RSC) let you render components **on the server** at request time.\n\nKey benefits:\n- Zero client-side JS for server components\n- Direct access to databases and file systems\n- Smaller bundle sizes',
  },
};

export const System: Story = {
  args: { role: 'system', content: 'Conversation started' },
};

export const Streaming: Story = {
  args: { role: 'assistant', content: 'Generating a response', isStreaming: true },
};

export const WithTimestamp: Story = {
  args: { role: 'user', content: 'What time is it?', timestamp: new Date() },
};

export const WithCode: Story = {
  args: {
    role: 'assistant',
    content: 'Here\'s a TypeScript example:\n\n```typescript\nfunction greet(name: string): string {\n  return `Hello, ${name}!`;\n}\n```',
  },
};
