import type { Meta, StoryObj } from '@storybook/react';
import { ChatContainer, Message, MessageInput } from '@dave/react';

const MESSAGES = [
  { role: 'user' as const,      content: 'What is the capital of France?' },
  { role: 'assistant' as const, content: 'The capital of France is **Paris**.' },
  { role: 'user' as const,      content: 'And Germany?' },
  { role: 'assistant' as const, content: 'The capital of Germany is **Berlin**.' },
  { role: 'user' as const,      content: 'What about Japan?' },
  { role: 'assistant' as const, content: 'The capital of Japan is **Tokyo**.' },
];

const meta: Meta<typeof ChatContainer> = {
  title: 'AI/ChatContainer',
  component: ChatContainer,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof ChatContainer>;

export const WithMessages: Story = {
  render: () => (
    <div className="h-screen flex flex-col">
      <ChatContainer className="flex-1">
        {MESSAGES.map((msg, i) => (
          <Message key={i} role={msg.role} content={msg.content} />
        ))}
      </ChatContainer>
      <div className="p-4 border-t border-border">
        <MessageInput onSubmit={(v) => console.log(v)} />
      </div>
    </div>
  ),
};
