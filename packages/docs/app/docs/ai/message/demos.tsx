'use client';

import { Message } from '@haydywoo/dave-react';
import { Preview } from '@/components/Preview';

export function MessageDemos() {
  return (
    <>
      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">User message</h3>
      <Preview
        code={`<Message role="user" content="Hey, can you explain how React Server Components work?" />`}
      >
        <Message role="user" content="Hey, can you explain how React Server Components work?" />
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Assistant message</h3>
      <Preview
        code={`<Message
  role="assistant"
  content="React Server Components (RSC) let you render components **on the server** at request time.\\n\\nKey benefits:\\n- Zero client-side JS for server components\\n- Direct access to databases and file systems\\n- Smaller bundle sizes"
/>`}
      >
        <Message
          role="assistant"
          content={"React Server Components (RSC) let you render components **on the server** at request time.\n\nKey benefits:\n- Zero client-side JS for server components\n- Direct access to databases and file systems\n- Smaller bundle sizes"}
        />
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">System message</h3>
      <Preview code={`<Message role="system" content="Conversation started" />`}>
        <Message role="system" content="Conversation started" />
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">With timestamp</h3>
      <Preview
        code={`<Message role="user" content="What time is it?" timestamp={new Date()} />`}
      >
        <Message role="user" content="What time is it?" timestamp={new Date()} />
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Streaming</h3>
      <Preview
        code={`<Message role="assistant" content="Generating a response" isStreaming />`}
      >
        <Message role="assistant" content="Generating a response" isStreaming />
      </Preview>
    </>
  );
}
