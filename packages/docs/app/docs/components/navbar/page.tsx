import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { NavbarDemos } from './demos';

export const metadata: Metadata = { title: 'Navbar' };

const navbarProps = [
  { name: 'sticky',    type: 'boolean',                                    default: 'true',      description: 'Sticks the navbar to the top of the viewport on scroll.' },
  { name: 'bordered',  type: 'boolean',                                    default: 'true',      description: 'Shows a bottom border.' },
  { name: 'color',     type: "'default' | 'subtle' | 'primary' | 'inverse'", default: "'default'", description: 'Background colour variant.' },
  { name: 'maxWidth',  type: 'string',                                     default: "'max-w-screen-xl'", description: 'Tailwind max-width class for the inner container.' },
  { name: 'children',  type: 'ReactNode',                                  description: 'NavbarBrand, NavbarContent, NavbarActions.' },
  { name: 'className', type: 'string',                                     description: 'Additional classes on the header element.' },
];

const contentProps = [
  { name: 'align',     type: "'start' | 'center' | 'end'", default: "'start'", description: 'Aligns the nav links within the available space.' },
  { name: 'children',  type: 'ReactNode', required: true,                  description: 'NavbarLink elements.' },
  { name: 'className', type: 'string',                                     description: 'Additional classes.' },
];

const linkProps = [
  { name: 'active',    type: 'boolean',   default: 'false', description: 'Marks this link as the current page (aria-current="page").' },
  { name: 'icon',      type: 'ReactNode',                   description: 'Icon rendered before the label.' },
  { name: 'badge',     type: 'ReactNode',                   description: 'Badge rendered after the label — use a number or short string.' },
  { name: 'as',        type: 'React.ElementType', default: "'a'", description: 'Swap the rendered element — pass a router Link component for client-side navigation.' },
  { name: 'href',      type: 'string',                      description: 'Link destination.' },
  { name: 'children',  type: 'ReactNode', required: true,   description: 'Link label.' },
];

const searchProps = [
  { name: 'placeholder',   type: 'string',                          default: "'Search…'", description: 'Input placeholder.' },
  { name: 'value',         type: 'string',                          description: 'Controlled value.' },
  { name: 'defaultValue',  type: 'string',                          description: 'Initial value for uncontrolled usage.' },
  { name: 'onValueChange', type: '(value: string) => void',         description: 'Called on every keystroke.' },
  { name: 'className',     type: 'string',                          description: 'Additional classes on the wrapper.' },
];

const menuButtonProps = [
  { name: 'open',      type: 'boolean',   default: 'false', description: 'Controls the icon — hamburger when false, X when true.' },
  { name: 'onClick',   type: '() => void',                  description: 'Toggle handler.' },
  { name: 'className', type: 'string',                      description: 'Additional classes.' },
];

const mobileMenuProps = [
  { name: 'open',      type: 'boolean',   default: 'false',  description: 'Shows or hides the mobile menu panel.' },
  { name: 'children',  type: 'ReactNode', required: true,    description: 'NavbarMobileLink elements.' },
  { name: 'className', type: 'string',                       description: 'Additional classes.' },
];

export default function NavbarPage() {
  return (
    <div>
      <h1 className="font-display font-extrabold text-3xl text-foreground mb-2">Navbar</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        Horizontal navigation bar with brand, nav links, and actions. Supports icons, badges, search, colour variants, and a built-in mobile menu pattern.
      </p>

      <h3 className="text-sm text-fg-secondary mb-2">Anatomy</h3>
      <pre className="font-code text-xs text-fg-secondary bg-surface border border-border rounded-[3px] p-4 mb-8 leading-relaxed overflow-x-auto">{`<Navbar>
  <NavbarBrand />
  <NavbarContent align="start">
    <NavbarLink href="…" active icon={…} badge="3" />
    <NavbarDivider />
    <NavbarLink href="…" />
  </NavbarContent>
  <NavbarActions>
    <NavbarSearch />
    <NavbarMenuButton open={open} onClick={toggle} />  {/* mobile only */}
  </NavbarActions>
</Navbar>
<NavbarMobileMenu open={open}>                         {/* mobile panel */}
  <NavbarMobileLink href="…" active icon={…} />
</NavbarMobileMenu>`}</pre>

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Examples</h2>
      <NavbarDemos />

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Props</h2>
      <h3 className="font-semibold text-sm text-foreground mb-3">Navbar</h3>
      <PropsTable props={navbarProps} />
      <h3 className="font-semibold text-sm text-foreground mt-8 mb-3">NavbarContent</h3>
      <PropsTable props={contentProps} />
      <h3 className="font-semibold text-sm text-foreground mt-8 mb-3">NavbarLink / NavbarMobileLink</h3>
      <PropsTable props={linkProps} />
      <h3 className="font-semibold text-sm text-foreground mt-8 mb-3">NavbarSearch</h3>
      <PropsTable props={searchProps} />
      <h3 className="font-semibold text-sm text-foreground mt-8 mb-3">NavbarMenuButton</h3>
      <PropsTable props={menuButtonProps} />
      <h3 className="font-semibold text-sm text-foreground mt-8 mb-3">NavbarMobileMenu</h3>
      <PropsTable props={mobileMenuProps} />
    </div>
  );
}
