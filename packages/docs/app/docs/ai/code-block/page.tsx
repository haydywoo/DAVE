import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { CodeBlockDemos } from './demos';

export const metadata: Metadata = { title: 'CodeBlock' };

const props = [
  { name: 'code', type: 'string', required: true, description: 'The source code to display.' },
  { name: 'language', type: 'string', description: 'Language identifier for syntax highlighting (e.g. "typescript", "python").' },
  { name: 'className', type: 'string', description: 'Applied to the outer container.' },
];

export default function CodeBlockPage() {
  return (
    <div>
      <h1 className="font-display font-semibold text-4xl text-foreground mb-2">CodeBlock</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        Syntax-highlighted code powered by Shiki. Supports 20+ languages with a language label and a copy button that appears on hover. Used automatically inside Message when assistant content contains fenced code blocks.
      </p>

      <CodeBlockDemos />

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Props</h2>
      <PropsTable props={props} />
    </div>
  );
}
