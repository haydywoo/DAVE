'use client';

import { StreamingText } from '@dave/react';
import { Preview } from '@/components/Preview';

export function StreamingTextDemos() {
  return (
    <>
      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Streaming</h3>
      <Preview code={`<StreamingText text="Generating a response…" isStreaming />`}>
        <StreamingText text="Generating a response…" isStreaming />
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Complete (no cursor)</h3>
      <Preview code={`<StreamingText text="Response complete." isStreaming={false} />`}>
        <StreamingText text="Response complete." isStreaming={false} />
      </Preview>
    </>
  );
}
