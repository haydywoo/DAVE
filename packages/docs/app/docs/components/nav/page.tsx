import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { NavDemos } from './demos';
import { AnatomyBlock } from '@/components/AnatomyBlock';

export const metadata: Metadata = { title: 'Nav' };

const navProps = [
  { name: 'size',      type: "'sm' | 'md' | 'lg'", default: "'md'",   description: 'Sets text size and item padding across all children.' },
  { name: 'collapsed', type: 'boolean',             default: 'false',  description: 'Collapses all items to icon-only mode. NavGroups are hidden. Pair NavItem tooltip for accessibility.' },
  { name: 'children',  type: 'ReactNode',           required: true,    description: 'NavSection, NavGroup, NavItem, NavSeparator.' },
  { name: 'className', type: 'string',                                 description: 'Additional classes on the nav element.' },
];

const sectionProps = [
  { name: 'title',     type: 'string',                               description: 'Uppercase section label rendered above the items.' },
  { name: 'children',  type: 'ReactNode', required: true,            description: 'NavItem elements.' },
  { name: 'className', type: 'string',                               description: 'Additional classes.' },
];

const itemProps = [
  { name: 'active',    type: 'boolean',          default: 'false',   description: 'Highlights the item as the current page (aria-current="page").' },
  { name: 'disabled',  type: 'boolean',          default: 'false',   description: 'Dims and blocks interaction.' },
  { name: 'icon',      type: 'ReactNode',                            description: 'Icon rendered before the label.' },
  { name: 'badge',     type: 'ReactNode',                            description: 'Badge rendered after the label — hidden in icon-only mode.' },
  { name: 'iconOnly',  type: 'boolean',          default: 'false',   description: 'Hides label and badge, renders a square centred icon button. Automatically set when Nav is collapsed.' },
  { name: 'tooltip',   type: 'string',                               description: 'Label shown in a Tooltip (side="right") when icon-only. Also sets aria-label.' },
  { name: 'as',        type: 'React.ElementType', default: "'a'",   description: 'Swap the rendered element — pass a router Link component for client-side navigation.' },
  { name: 'href',      type: 'string',                               description: 'Link destination.' },
  { name: 'children',  type: 'ReactNode',        required: true,     description: 'Item label (hidden in icon-only mode but read by screen readers via aria-label).' },
];

const groupProps = [
  { name: 'title',       type: 'string',   required: true,  description: 'Group heading shown as the toggle button.' },
  { name: 'icon',        type: 'ReactNode',                 description: 'Icon beside the group heading.' },
  { name: 'defaultOpen', type: 'boolean',  default: 'false', description: 'Whether the group starts expanded.' },
  { name: 'children',    type: 'ReactNode', required: true, description: 'NavItem elements shown inside the group.' },
  { name: 'className',   type: 'string',                    description: 'Additional classes.' },
];

export default function NavPage() {
  return (
    <div>
      <h1 className="font-display font-extrabold text-3xl text-foreground mb-2">Nav</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        Vertical navigation menu for sidebars and dashboards. Supports sections, collapsible groups, icons, badges, active and disabled states, and router link integration via <code className="font-code text-xs">asChild</code>.
      </p>

      <AnatomyBlock>{`<Nav>
  <NavSection title="Main">
    <NavItem href="…" active icon={…} badge="4">Label</NavItem>
    <NavItem href="…" disabled>Label</NavItem>
  </NavSection>
  <NavGroup title="Projects" icon={…} defaultOpen>
    <NavItem href="…">Sub-item</NavItem>
  </NavGroup>
  <NavSeparator />
  <NavItem href="…">Settings</NavItem>
</Nav>`}</AnatomyBlock>

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Examples</h2>
      <NavDemos />

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Props</h2>
      <h3 className="font-semibold text-sm text-foreground mb-3">Nav</h3>
      <PropsTable props={navProps} />
      <h3 className="font-semibold text-sm text-foreground mt-8 mb-3">NavSection</h3>
      <PropsTable props={sectionProps} />
      <h3 className="font-semibold text-sm text-foreground mt-8 mb-3">NavItem</h3>
      <PropsTable props={itemProps} />
      <h3 className="font-semibold text-sm text-foreground mt-8 mb-3">NavGroup</h3>
      <PropsTable props={groupProps} />
    </div>
  );
}
