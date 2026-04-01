import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { ContextMenuDemos } from './demos';

export const metadata: Metadata = { title: 'Context Menu' };

const props = [
  { name: 'children', type: 'ReactNode', required: true, description: 'Must contain ContextMenuTrigger and ContextMenuContent.' },
];

const contentProps = [
  { name: 'children',  type: 'ReactNode', required: true, description: 'Menu items, labels, and separators.' },
  { name: 'className', type: 'string',                    description: 'Additional classes on the menu panel.' },
];

const itemProps = [
  { name: 'children',    type: 'ReactNode',              required: true, description: 'Item label.' },
  { name: 'onSelect',    type: '(event: Event) => void',                 description: 'Called when the item is selected.' },
  { name: 'icon',        type: 'ReactNode',                              description: 'Icon rendered before the label.' },
  { name: 'destructive', type: 'boolean', default: 'false',              description: 'Renders the item in error colour.' },
  { name: 'disabled',    type: 'boolean', default: 'false',              description: 'Prevents selection.' },
  { name: 'className',   type: 'string',                                 description: 'Additional classes.' },
];

export default function ContextMenuPage() {
  return (
    <div>
      <h1 className="font-display font-extrabold text-3xl text-foreground mb-2">Context Menu</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        Menu triggered by right-clicking a target area. Shares the same item API as Dropdown — use Context Menu for surface-level actions, Dropdown for button-triggered menus.
      </p>

      <h3 className="text-sm text-fg-secondary mb-2">Anatomy</h3>
      <pre className="font-code text-xs text-fg-secondary bg-surface border border-border rounded-[3px] p-4 mb-8 leading-relaxed">{`<ContextMenu>
  <ContextMenuTrigger />       {/* right-click target */}
  <ContextMenuContent>
    <ContextMenuLabel />       {/* section heading */}
    <ContextMenuItem />        {/* action */}
    <ContextMenuSeparator />   {/* divider */}
    <ContextMenuSub>
      <ContextMenuSubTrigger />
      <ContextMenuSubContent>
        <ContextMenuItem />
      </ContextMenuSubContent>
    </ContextMenuSub>
  </ContextMenuContent>
</ContextMenu>`}</pre>

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Examples</h2>
      <ContextMenuDemos />

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Props</h2>
      <h3 className="text-sm font-medium text-foreground mb-3">ContextMenu</h3>
      <PropsTable props={props} />

      <h3 className="text-sm font-medium text-foreground mt-6 mb-3">ContextMenuContent</h3>
      <PropsTable props={contentProps} />

      <h3 className="text-sm font-medium text-foreground mt-6 mb-3">ContextMenuItem</h3>
      <PropsTable props={itemProps} />
    </div>
  );
}
