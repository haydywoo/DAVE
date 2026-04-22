import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { StreamingTextDemos } from './demos';

export const metadata: Metadata = { title: 'StreamingText' };

const props = [
  { name: 'text', type: 'string', required: true, description: 'The text to display.' },
  { name: 'isStreaming', type: 'boolean', default: 'false', description: 'Appends an animated blinking cursor while true.' },
  { name: 'className', type: 'string', description: 'Applied to the wrapper span.' },
];

export default function StreamingTextPage() {
  return (
    <div>
      <h1 className="font-display font-semibold text-4xl text-foreground mb-2">StreamingText</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        Renders text with an animated blinking cursor appended when <code className="font-mono text-xs bg-surface px-1 py-0.5 rounded border border-border">isStreaming</code> is true. The cursor disappears automatically when streaming ends.
      </p>

      <StreamingTextDemos />

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Props</h2>
      <PropsTable props={props} />
    </div>
  );
}
