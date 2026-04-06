'use client';

import { useState } from 'react';
import {
  Navbar, NavbarBrand, NavbarContent, NavbarActions,
  NavbarLink, NavbarDivider, NavbarSearch, NavbarMenuButton,
  NavbarMobileMenu, NavbarMobileLink,
  Button, Avatar,
} from '@dave/react';
import { Preview } from '@/components/Preview';

const Logo = () => (
  <span className="font-display font-extrabold text-lg text-foreground tracking-tight">DAVE</span>
);

const HomeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
);
const GridIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
);

export function NavbarDemos() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <Preview
        center={false}
        code={`<Navbar>
  <NavbarBrand>…</NavbarBrand>
  <NavbarContent>
    <NavbarLink href="/" active>Dashboard</NavbarLink>
    <NavbarLink href="/projects">Projects</NavbarLink>
    <NavbarLink href="/team">Team</NavbarLink>
  </NavbarContent>
  <NavbarActions>
    <Button size="sm">New project</Button>
    <Avatar initials="HP" size="sm" />
  </NavbarActions>
</Navbar>`}
      >
        <div className="-mx-6 -mt-4">
          <Navbar sticky={false}>
            <NavbarBrand><Logo /></NavbarBrand>
            <NavbarContent>
              <NavbarLink href="#" active>Dashboard</NavbarLink>
              <NavbarLink href="#">Projects</NavbarLink>
              <NavbarLink href="#">Team</NavbarLink>
            </NavbarContent>
            <NavbarActions>
              <Button size="sm">New project</Button>
              <Avatar initials="HP" size="sm" />
            </NavbarActions>
          </Navbar>
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">With icons and badges</h3>
      <Preview
        center={false}
        code={`<NavbarLink href="/" active icon={<HomeIcon />}>Dashboard</NavbarLink>
<NavbarLink href="/projects" badge="3">Projects</NavbarLink>`}
      >
        <div className="-mx-6 -mt-4">
          <Navbar sticky={false}>
            <NavbarBrand><Logo /></NavbarBrand>
            <NavbarContent>
              <NavbarLink href="#" active icon={<HomeIcon />}>Dashboard</NavbarLink>
              <NavbarLink href="#" icon={<GridIcon />}>Projects</NavbarLink>
              <NavbarLink href="#" badge="New">Beta</NavbarLink>
            </NavbarContent>
            <NavbarActions>
              <Button size="sm">New project</Button>
              <Avatar initials="HP" size="sm" />
            </NavbarActions>
          </Navbar>
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">With search</h3>
      <Preview
        center={false}
        code={`<NavbarSearch placeholder="Search…" onValueChange={setQuery} />`}
      >
        <div className="-mx-6 -mt-4">
          <Navbar sticky={false}>
            <NavbarBrand><Logo /></NavbarBrand>
            <NavbarContent>
              <NavbarLink href="#" active>Dashboard</NavbarLink>
              <NavbarLink href="#">Projects</NavbarLink>
            </NavbarContent>
            <NavbarActions>
              <NavbarSearch placeholder="Search…" />
              <Avatar initials="HP" size="sm" />
            </NavbarActions>
          </Navbar>
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">With divider</h3>
      <Preview
        center={false}
        code={`<NavbarLink href="/">Dashboard</NavbarLink>
<NavbarDivider />
<NavbarLink href="/docs">Docs</NavbarLink>`}
      >
        <div className="-mx-6 -mt-4">
          <Navbar sticky={false}>
            <NavbarBrand><Logo /></NavbarBrand>
            <NavbarContent>
              <NavbarLink href="#" active>Dashboard</NavbarLink>
              <NavbarLink href="#">Projects</NavbarLink>
              <NavbarDivider />
              <NavbarLink href="#">Docs</NavbarLink>
              <NavbarLink href="#">Blog</NavbarLink>
            </NavbarContent>
            <NavbarActions>
              <Button variant="ghost" size="sm">Sign in</Button>
              <Button size="sm">Get started</Button>
            </NavbarActions>
          </Navbar>
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Center logo</h3>
      <Preview
        center={false}
        code={`<Navbar>
  <NavbarContent align="start">
    <NavbarLink href="/products">Products</NavbarLink>
    <NavbarLink href="/pricing">Pricing</NavbarLink>
  </NavbarContent>
  <NavbarBrand>…</NavbarBrand>
  <NavbarContent align="end">
    <NavbarLink href="/docs">Docs</NavbarLink>
    <NavbarLink href="/login">Sign in</NavbarLink>
  </NavbarContent>
</Navbar>`}
      >
        <div className="-mx-6 -mt-4">
          <Navbar sticky={false}>
            <NavbarContent align="start">
              <NavbarLink href="#">Products</NavbarLink>
              <NavbarLink href="#">Pricing</NavbarLink>
            </NavbarContent>
            <NavbarBrand><Logo /></NavbarBrand>
            <NavbarContent align="end">
              <NavbarLink href="#">Docs</NavbarLink>
              <NavbarLink href="#">Sign in</NavbarLink>
            </NavbarContent>
          </Navbar>
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Responsive with mobile menu</h3>
      <Preview
        center={false}
        code={`const [open, setOpen] = useState(false);

<Navbar>
  <NavbarBrand>…</NavbarBrand>
  <NavbarContent>…</NavbarContent>
  <NavbarActions>
    <NavbarMenuButton open={open} onClick={() => setOpen(o => !o)} />
  </NavbarActions>
</Navbar>
<NavbarMobileMenu open={open}>
  <NavbarMobileLink href="/" active>Dashboard</NavbarMobileLink>
  <NavbarMobileLink href="/projects">Projects</NavbarMobileLink>
</NavbarMobileMenu>`}
      >
        <div className="-mx-6 -mt-4">
          <Navbar sticky={false}>
            <NavbarBrand><Logo /></NavbarBrand>
            <NavbarContent>
              <NavbarLink href="#" active>Dashboard</NavbarLink>
              <NavbarLink href="#">Projects</NavbarLink>
              <NavbarLink href="#">Team</NavbarLink>
            </NavbarContent>
            <NavbarActions>
              <Button size="sm" className="hidden md:inline-flex">New project</Button>
              <Avatar initials="HP" size="sm" />
              <NavbarMenuButton open={mobileOpen} onClick={() => setMobileOpen(o => !o)} />
            </NavbarActions>
          </Navbar>
          <NavbarMobileMenu open={mobileOpen}>
            <NavbarMobileLink href="#" active icon={<HomeIcon />}>Dashboard</NavbarMobileLink>
            <NavbarMobileLink href="#" icon={<GridIcon />}>Projects</NavbarMobileLink>
            <NavbarMobileLink href="#">Team</NavbarMobileLink>
          </NavbarMobileMenu>
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Color variants</h3>
      <Preview
        center={false}
        code={`<Navbar color="default" />  {/* default */}
<Navbar color="subtle" />
<Navbar color="primary" />`}
      >
        <div className="-mx-6 -mt-4 flex flex-col gap-px">
          <Navbar sticky={false} color="default">
            <NavbarBrand><Logo /></NavbarBrand>
            <NavbarActions><span className="text-xs text-fg-secondary">default</span></NavbarActions>
          </Navbar>
          <Navbar sticky={false} color="subtle" bordered={false}>
            <NavbarBrand><Logo /></NavbarBrand>
            <NavbarActions><span className="text-xs text-fg-secondary">subtle</span></NavbarActions>
          </Navbar>
          <Navbar sticky={false} color="primary" bordered={false}>
            <NavbarBrand>
              <span className="font-display font-extrabold text-lg text-accent-on tracking-tight">DAVE</span>
            </NavbarBrand>
            <NavbarActions><span className="text-xs text-accent-on/70">primary</span></NavbarActions>
          </Navbar>
        </div>
      </Preview>
    </>
  );
}
