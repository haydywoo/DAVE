import type { Meta, StoryObj } from '@storybook/react-vite';
import { MessageInput } from '@haydywoo/dave-react';

const meta: Meta<typeof MessageInput> = {
  title: 'AI/MessageInput',
  component: MessageInput,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    isStreaming: { control: 'boolean' },
    hideAttach:  { control: 'boolean' },
    disabled:    { control: 'boolean' },
    placeholder: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof MessageInput>;

export const Default: Story = {
  args: { onSubmit: (v) => console.log('submit', v) },
};

export const Streaming: Story = {
  args: { isStreaming: true, onStop: () => console.log('stop') },
};

export const WithAttachments: Story = {
  args: {
    attachments: [
      { id: '1', name: 'report.pdf', type: 'application/pdf', size: 204800 },
      { id: '2', name: 'notes.txt', type: 'text/plain', size: 1024 },
    ],
    onAttachmentRemove: (id) => console.log('remove', id),
  },
};

export const NoAttach: Story = {
  args: { hideAttach: true },
};
