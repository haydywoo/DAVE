import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { RadioDemos } from './demos';

export const metadata: Metadata = { title: 'Radio' };

const groupProps = [
  { name: 'defaultValue', type: 'string', description: 'Initially selected value (uncontrolled).' },
  { name: 'value', type: 'string', description: 'Controlled selected value.' },
  { name: 'onValueChange', type: '(value: string) => void', description: 'Called when selection changes.' },
  { name: 'orientation', type: "'vertical' | 'horizontal'", default: "'vertical'", description: 'Layout direction.' },
  { name: 'disabled', type: 'boolean', description: 'Disables all items in the group.' },
];

const itemProps = [
  { name: 'value', type: 'string', required: true, description: 'The value this item represents.' },
  { name: 'label', type: 'string', description: 'Short label rendered next to the radio.' },
  { name: 'description', type: 'string', description: 'Secondary line of text below the label.' },
  { name: 'disabled', type: 'boolean', description: 'Disables this individual item.' },
  { name: 'id', type: 'string', description: 'Custom id for the input element.' },
];

export default function RadioPage() {
  return (
    <div>
      <h1 className="font-display font-extrabold text-3xl text-foreground mb-2">Radio</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        Single-selection input. Use <code className="font-code text-[13px] bg-surface text-accent-foreground px-1.5 py-0.5 rounded-[3px] border border-border">RadioGroup</code> as the container and add <code className="font-code text-[13px] bg-surface text-accent-foreground px-1.5 py-0.5 rounded-[3px] border border-border">RadioItem</code> for each option.
      </p>

      <h3 className="text-sm text-fg-secondary mb-2">Anatomy</h3>
      <pre className="font-code text-xs text-fg-secondary bg-surface border border-border rounded-[3px] p-4 mb-8 leading-relaxed overflow-x-auto">{`<RadioGroup defaultValue="member" onValueChange={setValue}>
  <RadioItem value="admin"  label="Admin"  description="Optional description" />
  <RadioItem value="member" label="Member" />
</RadioGroup>`}</pre>

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Examples</h2>
      <RadioDemos />

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">RadioGroup props</h2>
      <PropsTable props={groupProps} />

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">RadioItem props</h2>
      <PropsTable props={itemProps} />
    </div>
  );
}
