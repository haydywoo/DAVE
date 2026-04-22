import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { ContextMenuDemos } from './demos';
import { AnatomyBlock } from '@/components/AnatomyBlock';

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
  { name: 'shortcut',    type: 'string',                                 description: 'Keyboard shortcut hint shown right-aligned, e.g. "⌘K". Decorative only.' },
  { name: 'description', type: 'string',                                 description: 'Secondary description line rendered below the label.' },
  { name: 'className',   type: 'string',                                 description: 'Additional classes.' },
];

const checkboxItemProps = [
  { name: 'checked', type: 'boolean', description: 'Whether the item is checked.' },
  { name: 'onCheckedChange', type: '(checked: boolean) => void', description: 'Called when the checked state changes.' },
  { name: 'disabled', type: 'boolean', description: 'Prevents interaction.' },
  { name: 'shortcut', type: 'string', description: 'Keyboard shortcut hint shown right-aligned.' },
];

const radioItemProps = [
  { name: 'value', type: 'string', required: true, description: 'The value this item represents within a ContextMenuRadioGroup.' },
  { name: 'disabled', type: 'boolean', description: 'Prevents interaction.' },
  { name: 'shortcut', type: 'string', description: 'Keyboard shortcut hint shown right-aligned.' },
];

export default function ContextMenuPage() {
  return (
    <div>
      <h1 className="font-display font-semibold text-4xl text-foreground mb-2">Context Menu</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        Menu triggered by right-clicking a target area. Shares the same item API as Dropdown — use Context Menu for surface-level actions, Dropdown for button-triggered menus.
      </p>

      <AnatomyBlock>{`<ContextMenu>
  <ContextMenuTrigger />            {/* right-click target */}
  <ContextMenuContent>
    <ContextMenuLabel />            {/* section heading */}
    <ContextMenuItem />             {/* action */}
    <ContextMenuCheckboxItem />     {/* toggle item */}
    <ContextMenuRadioGroup>
      <ContextMenuRadioItem />      {/* single-select item */}
    </ContextMenuRadioGroup>
    <ContextMenuSeparator />        {/* divider */}
    <ContextMenuSub>
      <ContextMenuSubTrigger />
      <ContextMenuSubContent>
        <ContextMenuItem />
      </ContextMenuSubContent>
    </ContextMenuSub>
  </ContextMenuContent>
</ContextMenu>`}</AnatomyBlock>

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Examples</h2>
      <ContextMenuDemos />

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Props</h2>
      <h3 className="text-sm font-medium text-foreground mb-3">ContextMenu</h3>
      <PropsTable props={props} />

      <h3 className="text-sm font-medium text-foreground mt-6 mb-3">ContextMenuContent</h3>
      <PropsTable props={contentProps} />

      <h3 className="text-sm font-medium text-foreground mt-6 mb-3">ContextMenuItem</h3>
      <PropsTable props={itemProps} />

      <h3 className="text-sm font-medium text-foreground mt-6 mb-3">ContextMenuCheckboxItem</h3>
      <PropsTable props={checkboxItemProps} />

      <h3 className="text-sm font-medium text-foreground mt-6 mb-3">ContextMenuRadioItem</h3>
      <p className="text-xs text-fg-secondary mb-3">Wrap in <code className="font-code">ContextMenuRadioGroup</code> with a <code className="font-code">value</code> and <code className="font-code">onValueChange</code> prop.</p>
      <PropsTable props={radioItemProps} />
    </div>
  );
}
