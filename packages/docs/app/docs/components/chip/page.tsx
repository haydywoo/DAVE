import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { ChipDemos } from './demos';

export const metadata: Metadata = { title: 'Chip' };

const props = [
  { name: 'variant', type: "'neutral' | 'primary' | 'success' | 'warning' | 'error'", default: "'neutral'", description: 'Colour style, applied to both default and selected states.' },
  { name: 'size', type: "'sm' | 'md'", default: "'md'", description: 'Controls text size and padding.' },
  { name: 'selected', type: 'boolean', default: 'false', description: 'Filled selected state — use with onClick for toggleable chips.' },
  { name: 'onClick', type: '() => void', description: 'Makes the chip a button with toggle behaviour. Sets aria-pressed.' },
  { name: 'onRemove', type: '() => void', description: 'Renders a × button. e.stopPropagation is handled internally.' },
  { name: 'icon', type: 'ReactNode', description: 'Optional icon rendered before the label.' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Dims and disables interaction.' },
];

export default function ChipPage() {
  return (
    <div>
      <h1 className="font-display font-extrabold text-3xl text-foreground mb-2">Chip</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        Compact interactive label. Use for filtering, tagging, or multi-select. Supports toggle state, dismiss, and icons.
      </p>

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Examples</h2>
      <ChipDemos />

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Props</h2>
      <PropsTable props={props} />
    </div>
  );
}
