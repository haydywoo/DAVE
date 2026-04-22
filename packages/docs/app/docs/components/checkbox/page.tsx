import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { CheckboxDemos } from './demos';

export const metadata: Metadata = { title: 'Checkbox' };

const props = [
  { name: 'label', type: 'string', description: 'Visible label rendered next to the checkbox.' },
  { name: 'indeterminate', type: 'boolean', default: 'false', description: 'Sets the indeterminate visual state for partially-selected groups.' },
  { name: 'disabled', type: 'boolean', description: 'Disables the checkbox.' },
  { name: 'checked', type: 'boolean', description: 'Controlled checked state.' },
  { name: 'defaultChecked', type: 'boolean', description: 'Initial checked state for uncontrolled usage.' },
  { name: 'onChange', type: '(e: ChangeEvent) => void', description: 'Change handler.' },
];

export default function CheckboxPage() {
  return (
    <div>
      <h1 className="font-display font-semibold text-4xl text-foreground mb-2">Checkbox</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        Binary selection control. Supports indeterminate state for parent-child selection groups.
      </p>

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Examples</h2>
      <CheckboxDemos />

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Props</h2>
      <PropsTable props={props} />
    </div>
  );
}
