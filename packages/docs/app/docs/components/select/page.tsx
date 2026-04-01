import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { SelectDemos } from './demos';

export const metadata: Metadata = { title: 'Select' };

const selectProps = [
  { name: 'placeholder', type: 'string', default: "'Select…'", description: 'Shown when no value is selected.' },
  { name: 'value', type: 'string', description: 'Controlled value.' },
  { name: 'defaultValue', type: 'string', description: 'Uncontrolled initial value.' },
  { name: 'onValueChange', type: '(value: string) => void', description: 'Called when selection changes.' },
  { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Height and text size.' },
  { name: 'error', type: 'boolean', description: 'Applies error border colour.' },
  { name: 'disabled', type: 'boolean', description: 'Disables the trigger.' },
];

const itemProps = [
  { name: 'value', type: 'string', required: true, description: 'The value submitted when this item is selected.' },
  { name: 'disabled', type: 'boolean', description: 'Dims and prevents selection of this item.' },
];

export default function SelectPage() {
  return (
    <div>
      <h1 className="font-display font-extrabold text-3xl text-foreground mb-2">Select</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        Accessible single-value select. Supports groups, labels, sizes, and error state. Built on Radix UI.
      </p>

      <h3 className="text-sm text-fg-secondary mb-2">Anatomy</h3>
      <pre className="font-code text-xs text-fg-secondary bg-surface border border-border rounded-[3px] p-4 mb-8 leading-relaxed">{`<Select placeholder="Pick one…" onValueChange={setValue}>
  <SelectItem value="a">Option A</SelectItem>

  {/* Grouped with label */}
  <SelectGroup>
    <SelectLabel>Group</SelectLabel>
    <SelectItem value="b">Option B</SelectItem>
  </SelectGroup>

  <SelectSeparator />

  {/* With field wrapper */}
  <SelectField label="Role" hint="Controls access level." error={false}>
    <Select placeholder="Select role…">…</Select>
  </SelectField>
</Select>`}</pre>

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Examples</h2>
      <SelectDemos />

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Select props</h2>
      <PropsTable props={selectProps} />

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">SelectItem props</h2>
      <PropsTable props={itemProps} />
    </div>
  );
}
