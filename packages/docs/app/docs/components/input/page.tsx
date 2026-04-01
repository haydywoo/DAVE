import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { InputDemos } from './demos';

export const metadata: Metadata = { title: 'Input' };

const props = [
  { name: 'label', type: 'string', description: 'Visible label rendered above the input.' },
  { name: 'hint', type: 'string', description: 'Helper or error text rendered below the input.' },
  { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Controls height and padding.' },
  { name: 'error', type: 'boolean', default: 'false', description: 'Applies error styles and colours the hint text red.' },
  { name: 'leftIcon', type: 'ReactNode', description: 'Icon rendered inside the left edge of the input.' },
  { name: 'rightIcon', type: 'ReactNode', description: 'Icon rendered inside the right edge of the input.' },
  { name: 'prefix', type: 'ReactNode', description: 'Text or element attached to the left outside edge (e.g. "https://").' },
  { name: 'suffix', type: 'ReactNode', description: 'Text or element attached to the right outside edge (e.g. ".com").' },
  { name: 'disabled', type: 'boolean', description: 'Disables the input.' },
  { name: 'placeholder', type: 'string', description: 'Placeholder text shown when empty.' },
];

export default function InputPage() {
  return (
    <div>
      <h1 className="font-display font-extrabold text-3xl text-foreground mb-2">Input</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        Single-line text field with optional label, hint, error state, icon slots, and text addons. Accepts all native input attributes.
      </p>

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Examples</h2>
      <InputDemos />

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Props</h2>
      <PropsTable props={props} />
    </div>
  );
}
