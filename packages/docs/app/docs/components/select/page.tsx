import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { SelectDemos } from './demos';
import { AnatomyBlock } from '@/components/AnatomyBlock';

export const metadata: Metadata = { title: 'Select' };

const selectProps = [
  { name: 'placeholder', type: 'string', default: "'Select…'", description: 'Shown when no value is selected.' },
  { name: 'value', type: 'string', description: 'Controlled value.' },
  { name: 'defaultValue', type: 'string', description: 'Uncontrolled initial value.' },
  { name: 'onValueChange', type: '(value: string) => void', description: 'Called when selection changes.' },
  { name: 'variant', type: "'outline' | 'secondary' | 'ghost'", default: "'outline'", description: 'outline — form input. secondary — bordered button. ghost — borderless button.' },
  { name: 'icon', type: 'ReactNode', description: 'Leading icon shown inside the trigger.' },
  { name: 'iconOnly', type: 'boolean', default: 'false', description: 'Square icon-only trigger — hides value text and chevron. Requires icon.' },
  { name: 'width', type: "'full' | 'auto'", description: "Trigger width. Defaults to 'full' for outline, 'auto' for secondary/ghost." },
  { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Height and text size.' },
  { name: 'error', type: 'boolean', description: 'Applies error border colour (outline variant).' },
  { name: 'disabled', type: 'boolean', description: 'Disables the trigger.' },
];

const itemProps = [
  { name: 'value', type: 'string', required: true, description: 'The value submitted when this item is selected.' },
  { name: 'icon', type: 'ReactNode', description: 'Leading icon shown beside the item label.' },
  { name: 'disabled', type: 'boolean', description: 'Dims and prevents selection of this item.' },
];

export default function SelectPage() {
  return (
    <div>
      <h1 className="font-display font-extrabold text-3xl text-foreground mb-2">Select</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        Accessible single-value select with three trigger styles: form input, bordered button, and ghost. Supports leading icons, item icons, groups, labels, sizes, and error state. Built on Radix UI.
      </p>

      <AnatomyBlock>{`<Select placeholder="Pick one…" onValueChange={setValue}>
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
</Select>`}</AnatomyBlock>

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Examples</h2>
      <SelectDemos />

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Select props</h2>
      <PropsTable props={selectProps} />

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">SelectItem props</h2>
      <PropsTable props={itemProps} />
    </div>
  );
}
