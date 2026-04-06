import type { Meta, StoryObj } from '@storybook/react';
import { ToolCall, ToolResult } from '@dave/react';

const meta: Meta<typeof ToolCall> = {
  title: 'AI/ToolCall',
  component: ToolCall,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof ToolCall>;

export const Running: Story = {
  args: {
    name: 'search_web',
    input: { query: 'DAVE design system', max_results: 5 },
    status: 'running',
  },
};

export const Success: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <ToolCall name="read_file" input={{ path: '/config/settings.json' }} status="success" defaultOpen />
      <ToolResult output={{ name: 'settings', theme: 'dark', version: '2.0' }} status="success" />
    </div>
  ),
};

export const Error: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <ToolCall name="read_file" input={{ path: '/config/missing.json' }} status="error" />
      <ToolResult output="File not found: /config/missing.json" status="error" />
    </div>
  ),
};

export const Pending: Story = {
  args: {
    name: 'execute_code',
    input: { language: 'python', code: 'print("hello")' },
    status: 'pending',
  },
};
