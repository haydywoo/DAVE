import type { Meta, StoryObj } from '@storybook/react';
import { ApprovalGate } from '@dave/react';

const meta: Meta<typeof ApprovalGate> = {
  title: 'AI/ApprovalGate',
  component: ApprovalGate,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    isLoading: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof ApprovalGate>;

export const Default: Story = {
  args: {
    title: 'Run shell command',
    description: 'The agent wants to execute a shell command on your machine.',
    tool: 'bash',
    input: { command: 'rm -rf ./dist && npm run build' },
    onApprove: () => console.log('approved'),
    onDeny:    () => console.log('denied'),
  },
};

export const Loading: Story = {
  args: {
    title: 'Write to database',
    tool: 'db_write',
    input: { table: 'users', data: { email: 'user@example.com' } },
    isLoading: true,
  },
};

export const NoInput: Story = {
  args: {
    title: 'Send notification',
    description: 'The agent wants to send a push notification to all users.',
    tool: 'notify',
  },
};
