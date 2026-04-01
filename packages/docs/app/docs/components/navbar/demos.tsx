'use client';

import { Navbar, NavbarBrand, NavbarContent, NavbarActions, NavbarLink, NavbarDivider, Button, Avatar } from '@dave/react';
import { Preview } from '@/components/Preview';

export function NavbarDemos() {
  return (
    <>
      <Preview
        center={false}
        code={`<Navbar>
  <NavbarBrand>
    <span className="font-bold text-lg">DAVE</span>
  </NavbarBrand>
  <NavbarContent>
    <NavbarLink href="#" active>Dashboard</NavbarLink>
    <NavbarLink href="#">Projects</NavbarLink>
    <NavbarLink href="#">Team</NavbarLink>
  </NavbarContent>
  <NavbarActions>
    <Button size="sm">New project</Button>
    <Avatar initials="HP" size="sm" />
  </NavbarActions>
</Navbar>`}
      >
        <div className="-mx-6 -mt-4">
          <Navbar sticky={false}>
            <NavbarBrand>
              <span className="font-display font-extrabold text-lg text-foreground tracking-tight">DAVE</span>
            </NavbarBrand>
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

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">With divider</h3>
      <Preview
        center={false}
        code={`<Navbar>
  <NavbarBrand>…</NavbarBrand>
  <NavbarContent>
    <NavbarLink href="#" active>Dashboard</NavbarLink>
    <NavbarLink href="#">Projects</NavbarLink>
    <NavbarDivider />
    <NavbarLink href="#">Docs</NavbarLink>
  </NavbarContent>
  <NavbarActions>
    <Button variant="ghost" size="sm">Sign in</Button>
    <Button size="sm">Get started</Button>
  </NavbarActions>
</Navbar>`}
      >
        <div className="-mx-6 -mt-4">
          <Navbar sticky={false}>
            <NavbarBrand>
              <span className="font-display font-extrabold text-lg text-foreground tracking-tight">DAVE</span>
            </NavbarBrand>
            <NavbarContent>
              <NavbarLink href="#" active>Dashboard</NavbarLink>
              <NavbarLink href="#">Projects</NavbarLink>
              <NavbarDivider />
              <NavbarLink href="#">Docs</NavbarLink>
            </NavbarContent>
            <NavbarActions>
              <Button variant="ghost" size="sm">Sign in</Button>
              <Button size="sm">Get started</Button>
            </NavbarActions>
          </Navbar>
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Minimal</h3>
      <Preview
        center={false}
        code={`<Navbar>
  <NavbarBrand>…</NavbarBrand>
  <NavbarActions>
    <Button variant="ghost" size="sm">Sign in</Button>
    <Button size="sm">Get started</Button>
  </NavbarActions>
</Navbar>`}
      >
        <div className="-mx-6 -mt-4">
          <Navbar sticky={false}>
            <NavbarBrand>
              <span className="font-display font-extrabold text-lg text-foreground tracking-tight">DAVE</span>
            </NavbarBrand>
            <NavbarActions>
              <Button variant="ghost" size="sm">Sign in</Button>
              <Button size="sm">Get started</Button>
            </NavbarActions>
          </Navbar>
        </div>
      </Preview>
    </>
  );
}
