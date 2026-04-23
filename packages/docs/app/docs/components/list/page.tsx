import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { AnatomyBlock } from '@/components/AnatomyBlock';
import { ListDemos } from './demos';

export const metadata: Metadata = { title: 'List' };

const listProps = [
  { name: 'divided',  type: 'boolean',         default: 'false', description: 'Draws horizontal dividers between items.' },
  { name: 'bordered', type: 'boolean',         default: 'false', description: 'Wraps the list in a rounded border + card surface.' },
  { name: 'ordered',  type: 'boolean',         default: 'false', description: 'Renders as `<ol>` instead of `<ul>`.' },
  { name: 'size',     type: "'sm' | 'md'",     default: "'md'",  description: 'Row padding density.' },
  { name: 'children', type: 'ReactNode',       required: true,   description: 'One or more `ListItem` elements.' },
];

const listItemProps = [
  { name: 'onClick',  type: '() => void',      description: 'Makes the item a button. Adds hover + focus ring.' },
  { name: 'href',     type: 'string',          description: 'Makes the item an anchor. Takes precedence over onClick.' },
  { name: 'selected', type: 'boolean',         default: 'false', description: 'Applies `bg-accent-subtle` to indicate selection.' },
  { name: 'children', type: 'ReactNode',       required: true,   description: 'Row content. Compose with flex inline — no named slots.' },
];

export default function ListPage() {
  return (
    <div>
      <h1 className="font-display font-semibold text-4xl text-foreground mb-2">List</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        Stacked rows for settings, activity feeds, inboxes, or file listings. Minimal by default —
        compose leading icons, trailing badges, or descriptions with plain flex markup.
      </p>

      <AnatomyBlock>{`<List divided bordered size="md" ordered>
  <ListItem>Static row</ListItem>
  <ListItem onClick={...}>Clickable row</ListItem>
  <ListItem href="...">Link row</ListItem>
  <ListItem selected>Selected row</ListItem>
</List>`}</AnatomyBlock>

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Examples</h2>
      <ListDemos />

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">List props</h2>
      <PropsTable props={listProps} />

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">ListItem props</h2>
      <PropsTable props={listItemProps} />
    </div>
  );
}
