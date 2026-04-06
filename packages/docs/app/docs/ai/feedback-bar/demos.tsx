'use client';

import { useState } from 'react';
import { FeedbackBar } from '@dave/react';
import { Preview } from '@/components/Preview';

export function FeedbackBarDemos() {
  const [feedback, setFeedback] = useState<'up' | 'down' | null>(null);

  return (
    <>
      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Default</h3>
      <Preview
        code={`<FeedbackBar
  copyValue="The assistant's response text…"
  feedback={feedback}
  onThumbsUp={() => setFeedback('up')}
  onThumbsDown={() => setFeedback('down')}
  onRegenerate={() => console.log('regenerate')}
/>`}
      >
        <FeedbackBar
          copyValue="The assistant's response text…"
          feedback={feedback}
          onThumbsUp={() => setFeedback(f => f === 'up' ? null : 'up')}
          onThumbsDown={() => setFeedback(f => f === 'down' ? null : 'down')}
          onRegenerate={() => console.log('regenerate')}
        />
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Copy only</h3>
      <Preview
        code={`<FeedbackBar copyValue="Content to copy" hideFeedback hideRegenerate />`}
      >
        <FeedbackBar copyValue="Content to copy" hideFeedback hideRegenerate />
      </Preview>
    </>
  );
}
