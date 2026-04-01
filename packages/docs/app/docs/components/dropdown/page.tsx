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
  { name: 'icon', type: 'ReactNode', description: 'Optional icon rendered before the label.' },
];

export default function DropdownPage() {
  return (
    <div>
      <h1 className="font-display font-extrabold text-3xl text-foreground mb-2">Dropdown</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        A menu that opens from a trigger, showing a list of actions or navigation items. Built on Radix UI with full keyboard and accessibility support.
      </p>

      <h3 className="text-sm text-fg-secondary mb-2">Anatomy</h3>
      <pre className="font-code text-xs text-fg-secondary bg-surface border border-border rounded-[3px] p-4 mb-8 leading-relaxed">{`<Dropdown>
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

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">DropdownContent props</h2>
      <PropsTable props={contentProps} />

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">DropdownItem props</h2>
      <PropsTable props={itemProps} />
    </div>
  );
}
