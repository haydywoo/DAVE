import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { BadgeDemos } from './demos';

export const metadata: Metadata = { title: 'Badge' };

const props = [
  { name: 'variant', type: "'neutral' | 'primary' | 'success' | 'warning' | 'error'", default: "'neutral'", description: 'Colour style of the badge.' },
  { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Controls text size and padding.' },
  { name: 'children', type: 'ReactNode', required: true, description: 'Badge label content.' },
];

export default function BadgePage() {
  return (
    <div>
      <h1 className="font-display font-extrabold text-3xl text-foreground mb-2">Badge</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        Compact label used to highlight status, category, or metadata. Non-interactive.
      </p>

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Variants</h2>
      <BadgeDemos />

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Props</h2>
      <PropsTable props={props} />
    </div>
  );
}
