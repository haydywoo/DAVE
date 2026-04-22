import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { SwitchDemos } from './demos';

export const metadata: Metadata = { title: 'Switch' };

const switchProps = [
  { name: 'defaultChecked', type: 'boolean', description: 'Initial state (uncontrolled).' },
  { name: 'checked', type: 'boolean', description: 'Controlled checked state.' },
  { name: 'onCheckedChange', type: '(checked: boolean) => void', description: 'Called when state changes.' },
  { name: 'size', type: "'sm' | 'md'", default: "'md'", description: 'Track size.' },
  { name: 'label', type: 'string', description: 'Label text rendered next to the switch.' },
  { name: 'description', type: 'string', description: 'Secondary text below the label.' },
  { name: 'disabled', type: 'boolean', description: 'Prevents interaction.' },
  { name: 'id', type: 'string', description: 'Custom id for the input element.' },
];

export default function SwitchPage() {
  return (
    <div>
      <h1 className="font-display font-semibold text-4xl text-foreground mb-2">Switch</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        A toggle control for binary on/off settings. Prefer Switch over Checkbox when the action takes effect immediately without requiring a form submit.
      </p>

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Examples</h2>
      <SwitchDemos />

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Props</h2>
      <PropsTable props={switchProps} />
    </div>
  );
}
