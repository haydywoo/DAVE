import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { KbdDemos } from './demos';

export const metadata: Metadata = { title: 'Kbd' };

const props = [
  { name: 'children',  type: 'ReactNode',              required: true, description: 'Key label — typically a symbol, letter, or word.' },
  { name: 'size',      type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Height and text size.' },
  { name: 'className', type: 'string',                                description: 'Additional classes.' },
];

export default function KbdPage() {
  return (
    <div>
      <h1 className="font-display font-semibold text-4xl text-foreground mb-2">Kbd</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        Keyboard key display. Use inline in text, in tooltips, or in command palette footers to communicate keyboard shortcuts.
      </p>

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Examples</h2>
      <KbdDemos />

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Props</h2>
      <PropsTable props={props} />
    </div>
  );
}
