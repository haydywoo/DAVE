'use client';

import { ChatContainer, Message, MessageInput } from '@dave/react';
import { Preview } from '@/components/Preview';

const MESSAGES = [
  { role: 'user' as const,      content: 'What is the capital of France?' },
  { role: 'assistant' as const, content: 'The capital of France is **Paris**. It has been the capital since the late 10th century.' },
  { role: 'user' as const,      content: 'And what about Germany?' },
  { role: 'assistant' as const, content: 'The capital of Germany is **Berlin**. It became the capital of reunified Germany in 1990.' },
];

export function ChatContainerDemos() {
  return (
    <>
      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Basic chat layout</h3>
      <Preview
        code={`<div className="h-[400px] flex flex-col border border-border rounded-[4px] overflow-hidden">
  <ChatContainer className="flex-1">
    {messages.map((msg, i) => <Message key={i} {...msg} />)}
  </ChatContainer>
  <div className="p-3 border-t border-border">
    <MessageInput onSubmit={(v) => console.log(v)} />
  </div>
</div>`}
      >
        <div className="h-[400px] flex flex-col border border-border rounded-[4px] overflow-hidden">
          <ChatContainer className="flex-1">
            {MESSAGES.map((msg, i) => (
              <Message key={i} role={msg.role} content={msg.content} />
            ))}
          </ChatContainer>
          <div className="p-3 border-t border-border">
            <MessageInput onSubmit={(v) => console.log(v)} />
          </div>
        </div>
      </Preview>
    </>
  );
}
