import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { EmptyStateDemos } from './demos';

export const metadata: Metadata = { title: 'Empty State' };

const props = [
  { name: 'title', type: 'string', required: true, description: 'Primary message.' },
  { name: 'description', type: 'string', description: 'Supporting text below the title.' },
  { name: 'icon', type: 'ReactNode', description: 'Icon displayed above the title.' },
  { name: 'action', type: 'ReactNode', description: 'Action element (typically a Button) displayed below the description.' },
  { name: 'className', type: 'string', description: 'Additional classes.' },
];

export default function EmptyStatePage() {
  return (
    <div>
      <h1 className="font-display font-semibold text-4xl text-foreground mb-2">Empty State</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        Placeholder displayed when a list, table, or section has no content. Communicates what's missing and what to do next.
      </p>

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Examples</h2>
      <EmptyStateDemos />

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Props</h2>
      <PropsTable props={props} />
    </div>
  );
}
