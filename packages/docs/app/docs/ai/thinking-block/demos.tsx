'use client';

import { ThinkingBlock } from '@haydywoo/dave-react';
import { Preview } from '@/components/Preview';

const CONTENT = "The user is asking about recursion. I should explain the base case and recursive case clearly, and use factorial as the canonical example.";

export function ThinkingBlockDemos() {
  return (
    <>
      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Streaming (thinking…)</h3>
      <Preview code={`<ThinkingBlock isStreaming>Thinking…</ThinkingBlock>`}>
        <ThinkingBlock isStreaming>Thinking…</ThinkingBlock>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Complete with content</h3>
      <Preview
        code={`<ThinkingBlock duration="4s">
  The user is asking about recursion. I should explain the base case
  and recursive case clearly, and use factorial as the canonical example.
</ThinkingBlock>`}
      >
        <ThinkingBlock duration="4s">{CONTENT}</ThinkingBlock>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Open by default</h3>
      <Preview
        code={`<ThinkingBlock defaultOpen duration="2s">Reasoning content shown by default.</ThinkingBlock>`}
      >
        <ThinkingBlock defaultOpen duration="2s">Reasoning content shown by default.</ThinkingBlock>
      </Preview>
    </>
  );
}
