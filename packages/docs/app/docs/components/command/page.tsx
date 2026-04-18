import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { CommandDemos } from './demos';

export const metadata: Metadata = { title: 'Command' };

const dialogProps = [
  { name: 'open', type: 'boolean', description: 'Controlled open state.' },
  { name: 'onOpenChange', type: '(open: boolean) => void', description: 'Called when open state changes.' },
  { name: 'title', type: 'string', default: "'Command palette'", description: 'Accessible dialog title (visually hidden).' },
  { name: 'children', type: 'ReactNode', required: true, description: 'CommandInput, CommandList, etc.' },
];

const inputProps = [
  { name: 'placeholder', type: 'string', default: "'Search…'", description: 'Placeholder text.' },
];

const itemProps = [
  { name: 'onSelect', type: '() => void', description: 'Called when the item is selected by click or Enter.' },
  { name: 'value', type: 'string', description: 'String used for filtering. Defaults to the text content of children.' },
  { name: 'disabled', type: 'boolean', description: 'Prevents interaction and hides from filtered results.' },
  { name: 'icon', type: 'ReactNode', description: 'Icon rendered before the label.' },
  { name: 'shortcut', type: 'string', description: 'Keyboard shortcut hint shown right-aligned.' },
  { name: 'children', type: 'ReactNode', required: true, description: 'Item label.' },
];

const groupProps = [
  { name: 'heading', type: 'string', description: 'Group label rendered above the items. Hidden when the group has no visible items.' },
  { name: 'children', type: 'ReactNode', required: true, description: 'CommandItem elements.' },
];

export default function CommandPage() {
  return (
    <div>
      <h1 className="font-display font-extrabold text-3xl text-foreground mb-2">Command</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        Spotlight-style command palette with real-time search filtering, grouped results, keyboard navigation, and optional ⌘K dialog wrapper.
      </p>

      <h3 className="text-sm text-fg-secondary mb-2">Anatomy</h3>
      <pre className="font-code text-xs text-fg-secondary bg-surface border border-border rounded-[3px] p-4 mb-8 leading-relaxed overflow-x-auto">{`<CommandDialog open={open} onOpenChange={setOpen}>
  <CommandInput placeholder="Type a command…" />
  <CommandList>
    <CommandEmpty />
    <CommandGroup heading="Navigation">
      <CommandItem icon={…} shortcut="G H" onSelect={…}>Go to dashboard</CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Actions">
      <CommandItem onSelect={…}>New file</CommandItem>
    </CommandGroup>
  </CommandList>
</CommandDialog>`}</pre>

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Examples</h2>
      <CommandDemos />

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Props</h2>
      <h3 className="font-semibold text-sm text-foreground mb-3">CommandDialog</h3>
      <PropsTable props={dialogProps} />
      <h3 className="font-semibold text-sm text-foreground mt-8 mb-3">CommandInput</h3>
      <PropsTable props={inputProps} />
      <h3 className="font-semibold text-sm text-foreground mt-8 mb-3">CommandItem</h3>
      <PropsTable props={itemProps} />
      <h3 className="font-semibold text-sm text-foreground mt-8 mb-3">CommandGroup</h3>
      <PropsTable props={groupProps} />
    </div>
  );
}
