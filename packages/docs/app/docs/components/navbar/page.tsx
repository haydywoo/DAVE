import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { NavbarDemos } from './demos';

export const metadata: Metadata = { title: 'Navbar' };

const navbarProps = [
  { name: 'sticky', type: 'boolean', default: 'true', description: 'Sticks the navbar to the top of the viewport on scroll.' },
  { name: 'bordered', type: 'boolean', default: 'true', description: 'Shows a bottom border.' },
  { name: 'children', type: 'ReactNode', required: true, description: 'NavbarBrand, NavbarContent, NavbarActions.' },
  { name: 'className', type: 'string', description: 'Additional classes on the header element.' },
];

const contentProps = [
  { name: 'align', type: "'start' | 'center' | 'end'", default: "'start'", description: 'Aligns the nav links within the available space.' },
  { name: 'children', type: 'ReactNode', required: true, description: 'NavbarLink elements.' },
];

const linkProps = [
  { name: 'active', type: 'boolean', default: 'false', description: 'Marks this link as the current page.' },
  { name: 'href', type: 'string', description: 'Link destination.' },
  { name: 'children', type: 'ReactNode', required: true, description: 'Link label.' },
];

export default function NavbarPage() {
  return (
    <div>
      <h1 className="font-display font-extrabold text-3xl text-foreground mb-2">Navbar</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        Horizontal navigation bar with brand, nav links, and actions. Sticky by default, collapses nav links on mobile.
      </p>

      <h3 className="text-sm text-fg-secondary mb-2">Anatomy</h3>
      <pre className="font-code text-xs text-fg-secondary bg-surface border border-border rounded-[3px] p-4 mb-8 leading-relaxed">{`<Navbar>
  <NavbarBrand />
  <NavbarContent align="start">
    <NavbarLink href="…" active />
    <NavbarDivider />             {/* optional */}
    <NavbarLink href="…" />
  </NavbarContent>
  <NavbarActions />
</Navbar>`}</pre>

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Examples</h2>
      <NavbarDemos />

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Props</h2>
      <h3 className="font-semibold text-sm text-foreground mb-3">Navbar</h3>
      <PropsTable props={navbarProps} />
      <h3 className="font-semibold text-sm text-foreground mt-8 mb-3">NavbarContent</h3>
      <PropsTable props={contentProps} />
      <h3 className="font-semibold text-sm text-foreground mt-8 mb-3">NavbarLink</h3>
      <PropsTable props={linkProps} />
    </div>
  );
}
