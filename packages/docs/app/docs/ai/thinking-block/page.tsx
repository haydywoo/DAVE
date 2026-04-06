import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { ThinkingBlockDemos } from './demos';

export const metadata: Metadata = { title: 'ThinkingBlock' };

const props = [
  { name: 'content', type: 'string', description: 'The reasoning text. Hidden while streaming.' },
  { name: 'isStreaming', type: 'boolean', default: 'false', description: 'Shows a spinner and disables collapsing while the model is thinking.' },
  { name: 'duration', type: 'number', description: 'Elapsed time in seconds — displayed as "Thought for Xs" when complete.' },
  { name: 'defaultOpen', type: 'boolean', default: 'false', description: 'Expands the block by default.' },
  { name: 'className', type: 'string', description: 'Applied to the outer container.' },
];

export default function ThinkingBlockPage() {
  return (
    <div>
      <h1 className="font-display font-extrabold text-3xl text-foreground mb-2">ThinkingBlock</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        A collapsible card that exposes the model&apos;s internal reasoning. While streaming, it shows a spinner and is non-interactive. Once complete, the user can expand it to read the full chain-of-thought.
      </p>

      <ThinkingBlockDemos />

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Props</h2>
      <PropsTable props={props} />
    </div>
  );
}
