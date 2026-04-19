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
const LogoInverse = () => (
  <span className="font-display font-extrabold text-lg text-accent-on tracking-tight">DAVE</span>
);

const HomeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
);
const GridIcon2 = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
);

function DefaultDemo() {
  const [open, setOpen] = useState(false);
  return (
    <>
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
          <NavbarMenuButton open={open} onClick={() => setOpen(o => !o)} />
        </NavbarActions>
      </Navbar>
      <NavbarMobileMenu open={open}>
        <NavbarMobileLink href="#" active>Dashboard</NavbarMobileLink>
        <NavbarMobileLink href="#">Projects</NavbarMobileLink>
        <NavbarMobileLink href="#">Team</NavbarMobileLink>
      </NavbarMobileMenu>
    </>
  );
}

function IconsDemo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Navbar sticky={false}>
        <NavbarBrand><Logo /></NavbarBrand>
        <NavbarContent>
          <NavbarLink href="#" active icon={<HomeIcon />}>Dashboard</NavbarLink>
          <NavbarLink href="#" icon={<GridIcon2 />}>Projects</NavbarLink>
          <NavbarLink href="#" badge="New">Beta</NavbarLink>
        </NavbarContent>
        <NavbarActions>
          <Avatar initials="HP" size="sm" />
          <NavbarMenuButton open={open} onClick={() => setOpen(o => !o)} />
        </NavbarActions>
      </Navbar>
      <NavbarMobileMenu open={open}>
        <NavbarMobileLink href="#" active icon={<HomeIcon />}>Dashboard</NavbarMobileLink>
        <NavbarMobileLink href="#" icon={<GridIcon2 />}>Projects</NavbarMobileLink>
        <NavbarMobileLink href="#" badge="New">Beta</NavbarMobileLink>
      </NavbarMobileMenu>
    </>
  );
}

function SearchDemo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Navbar sticky={false}>
        <NavbarBrand><Logo /></NavbarBrand>
        <NavbarContent>
          <NavbarLink href="#" active>Dashboard</NavbarLink>
          <NavbarLink href="#">Projects</NavbarLink>
        </NavbarContent>
        <NavbarActions>
          <NavbarSearch placeholder="Search…" />
          <Avatar initials="HP" size="sm" />
          <NavbarMenuButton open={open} onClick={() => setOpen(o => !o)} />
        </NavbarActions>
      </Navbar>
      <NavbarMobileMenu open={open}>
        <NavbarMobileLink href="#" active>Dashboard</NavbarMobileLink>
        <NavbarMobileLink href="#">Projects</NavbarMobileLink>
      </NavbarMobileMenu>
    </>
  );
}

function DividerDemo() {
  const [open, setOpen] = useState(false);
  return (
    <>
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
          <Button variant="ghost" size="sm" className="hidden md:inline-flex">Sign in</Button>
          <Button size="sm">Get started</Button>
          <NavbarMenuButton open={open} onClick={() => setOpen(o => !o)} />
        </NavbarActions>
      </Navbar>
      <NavbarMobileMenu open={open}>
        <NavbarMobileLink href="#" active>Dashboard</NavbarMobileLink>
        <NavbarMobileLink href="#">Projects</NavbarMobileLink>
        <NavbarMobileLink href="#">Docs</NavbarMobileLink>
        <NavbarMobileLink href="#">Blog</NavbarMobileLink>
      </NavbarMobileMenu>
    </>
  );
}

export function NavbarDemos() {
  return (
    <>
      <Preview bleed code={`<Navbar>
  <NavbarBrand>…</NavbarBrand>
  <NavbarContent>
    <NavbarLink href="/" active>Dashboard</NavbarLink>
    <NavbarLink href="/projects">Projects</NavbarLink>
    <NavbarLink href="/team">Team</NavbarLink>
  </NavbarContent>
  <NavbarActions>
    <Button size="sm" className="hidden md:inline-flex">New project</Button>
    <Avatar initials="HP" size="sm" />
    <NavbarMenuButton open={open} onClick={() => setOpen(o => !o)} />
  </NavbarActions>
</Navbar>
<NavbarMobileMenu open={open}>
  <NavbarMobileLink href="/" active>Dashboard</NavbarMobileLink>
  <NavbarMobileLink href="/projects">Projects</NavbarMobileLink>
  <NavbarMobileLink href="/team">Team</NavbarMobileLink>
</NavbarMobileMenu>`}>
        <DefaultDemo />
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">With icons and badges</h3>
      <Preview bleed code={`<NavbarLink href="/" active icon={<HomeIcon />}>Dashboard</NavbarLink>
<NavbarLink href="/projects" icon={<GridIcon />}>Projects</NavbarLink>
<NavbarLink href="/beta" badge="New">Beta</NavbarLink>`}>
        <IconsDemo />
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">With search</h3>
      <Preview bleed code={`<NavbarSearch placeholder="Search…" />`}>
        <SearchDemo />
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">With divider</h3>
      <Preview bleed code={`<NavbarDivider />`}>
        <DividerDemo />
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Center logo</h3>
      <Preview bleed code={`<Navbar>
  <NavbarContent align="start">
    <NavbarLink href="/products">Products</NavbarLink>
    <NavbarLink href="/pricing">Pricing</NavbarLink>
  </NavbarContent>
  <NavbarBrand>…</NavbarBrand>
  <NavbarContent align="end">
    <NavbarLink href="/docs">Docs</NavbarLink>
    <NavbarLink href="/login">Sign in</NavbarLink>
  </NavbarContent>
</Navbar>`}>
        <Navbar sticky={false}>
          <NavbarContent align="start">
            <NavbarLink href="#">Products</NavbarLink>
            <NavbarLink href="#">Pricing</NavbarLink>
          </NavbarContent>
          <NavbarBrand className="mx-auto"><Logo /></NavbarBrand>
          <NavbarContent align="end">
            <NavbarLink href="#">Docs</NavbarLink>
            <NavbarLink href="#">Sign in</NavbarLink>
          </NavbarContent>
        </Navbar>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Color variants</h3>
      <Preview bleed code={`<Navbar color="default" />
<Navbar color="subtle" />
<Navbar color="primary" />`}>
        <div className="flex flex-col gap-px">
          <Navbar sticky={false} color="default">
            <NavbarBrand><Logo /></NavbarBrand>
            <NavbarActions><span className="text-xs text-fg-secondary">default</span></NavbarActions>
          </Navbar>
          <Navbar sticky={false} color="subtle" bordered={false}>
            <NavbarBrand><Logo /></NavbarBrand>
            <NavbarActions><span className="text-xs text-fg-secondary">subtle</span></NavbarActions>
          </Navbar>
          <Navbar sticky={false} color="primary" bordered={false}>
            <NavbarBrand><LogoInverse /></NavbarBrand>
            <NavbarActions><span className="text-xs text-white/60">primary</span></NavbarActions>
          </Navbar>
        </div>
      </Preview>
    </>
  );
}
