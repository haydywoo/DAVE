import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { DropdownDemos } from './demos';

export const metadata: Metadata = { title: 'Dropdown' };

const contentProps = [
  { name: 'align', type: "'start' | 'center' | 'end'", default: "'start'", description: 'Horizontal alignment of the menu relative to the trigger.' },
  { name: 'sideOffset', type: 'number', default: '4', description: 'Gap in pixels between trigger and menu.' },
];

const itemProps = [
  { name: 'onSelect', type: '(event: Event) => void', description: 'Called when the item is selected. Menu closes automatically.' },
  { name: 'disabled', type: 'boolean', description: 'Prevents interaction and dims the item.' },
  { name: 'destructive', type: 'boolean', description: 'Applies error colour — use for delete or irreversible actions.' },
  { name: 'icon', type: 'ReactNode', description: 'Icon rendered before the label.' },
  { name: 'shortcut', type: 'string', description: 'Keyboard shortcut hint shown right-aligned, e.g. "⌘K". Decorative — does not bind the key.' },
  { name: 'description', type: 'string', description: 'Secondary description line rendered below the label in a smaller muted style.' },
];

const checkboxItemProps = [
  { name: 'checked', type: 'boolean', description: 'Whether the item is checked.' },
  { name: 'onCheckedChange', type: '(checked: boolean) => void', description: 'Called when the checked state changes.' },
  { name: 'disabled', type: 'boolean', description: 'Prevents interaction and dims the item.' },
  { name: 'shortcut', type: 'string', description: 'Keyboard shortcut hint shown right-aligned.' },
];

const radioItemProps = [
  { name: 'value', type: 'string', required: true, description: 'The value this item represents within a DropdownRadioGroup.' },
  { name: 'disabled', type: 'boolean', description: 'Prevents interaction and dims the item.' },
  { name: 'shortcut', type: 'string', description: 'Keyboard shortcut hint shown right-aligned.' },
];

export default function DropdownPage() {
  return (
    <div>
      <h1 className="font-display font-extrabold text-3xl text-foreground mb-2">Dropdown</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        A menu that opens from a trigger, showing a list of actions or navigation items. Built on Radix UI with full keyboard and accessibility support.
      </p>

      <h3 className="text-sm text-fg-secondary mb-2">Anatomy</h3>
      <pre className="font-code text-xs text-fg-secondary bg-surface border border-border rounded-[3px] p-4 mb-8 leading-relaxed overflow-x-auto">{`<Dropdown>
  <DropdownTrigger asChild>
    <Button>Open</Button>
  </DropdownTrigger>
  <DropdownContent>
    <DropdownItem onSelect={…}>Action</DropdownItem>
    <DropdownSeparator />
    <DropdownItem destructive onSelect={…}>Delete</DropdownItem>
  </DropdownContent>
</Dropdown>`}</pre>

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Examples</h2>
      <DropdownDemos />

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Props</h2>
      <h3 className="font-semibold text-sm text-foreground mb-3">DropdownContent</h3>
      <PropsTable props={contentProps} />
      <h3 className="font-semibold text-sm text-foreground mt-8 mb-3">DropdownItem</h3>
      <PropsTable props={itemProps} />
      <h3 className="font-semibold text-sm text-foreground mt-8 mb-3">DropdownCheckboxItem</h3>
      <PropsTable props={checkboxItemProps} />
      <h3 className="font-semibold text-sm text-foreground mt-8 mb-3">DropdownRadioItem</h3>
      <p className="text-xs text-fg-secondary mb-3">Wrap in <code className="font-code">DropdownRadioGroup</code> with a <code className="font-code">value</code> and <code className="font-code">onValueChange</code> prop.</p>
      <PropsTable props={radioItemProps} />
    </div>
  );
}
