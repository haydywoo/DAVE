import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import {
  Navbar, NavbarBrand, NavbarContent, NavbarActions,
  NavbarLink, NavbarDivider, NavbarSearch, NavbarMenuButton,
  NavbarMobileMenu, NavbarMobileLink,
  Button, Avatar, Badge,
} from '@haydywoo/dave-react';

const meta: Meta = {
  title: 'Navigation/Navbar',
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj;

const Logo = () => (
  <span className="font-display font-extrabold text-lg text-foreground tracking-tight">DAVE</span>
);

const HomeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
);
const GridIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
);
const BellIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
);

export const Default: Story = {
  render: () => (
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
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Navbar sticky={false}>
      <NavbarBrand><Logo /></NavbarBrand>
      <NavbarContent>
        <NavbarLink href="#" active icon={<HomeIcon />}>Dashboard</NavbarLink>
        <NavbarLink href="#" icon={<GridIcon />}>Projects</NavbarLink>
        <NavbarLink href="#">Team</NavbarLink>
      </NavbarContent>
      <NavbarActions>
        <Button size="sm">New project</Button>
        <Avatar initials="HP" size="sm" />
      </NavbarActions>
    </Navbar>
  ),
};

export const WithBadges: Story = {
  render: () => (
    <Navbar sticky={false}>
      <NavbarBrand><Logo /></NavbarBrand>
      <NavbarContent>
        <NavbarLink href="#" active>Dashboard</NavbarLink>
        <NavbarLink href="#" badge="3">Projects</NavbarLink>
        <NavbarLink href="#" badge="New">Beta</NavbarLink>
      </NavbarContent>
      <NavbarActions>
        <Button variant="ghost" size="sm" icon={<BellIcon />} />
        <Avatar initials="HP" size="sm" />
      </NavbarActions>
    </Navbar>
  ),
};

export const WithSearch: Story = {
  render: () => (
    <Navbar sticky={false}>
      <NavbarBrand><Logo /></NavbarBrand>
      <NavbarContent>
        <NavbarLink href="#" active>Dashboard</NavbarLink>
        <NavbarLink href="#">Projects</NavbarLink>
        <NavbarLink href="#">Team</NavbarLink>
      </NavbarContent>
      <NavbarActions>
        <NavbarSearch placeholder="Search…" />
        <Avatar initials="HP" size="sm" />
      </NavbarActions>
    </Navbar>
  ),
};

export const WithDivider: Story = {
  render: () => (
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
  ),
};

export const CenterLogo: Story = {
  render: () => (
    <Navbar sticky={false}>
      <NavbarContent align="start">
        <NavbarLink href="#" active>Products</NavbarLink>
        <NavbarLink href="#">Pricing</NavbarLink>
      </NavbarContent>
      <NavbarBrand><Logo /></NavbarBrand>
      <NavbarContent align="end">
        <NavbarLink href="#">Docs</NavbarLink>
        <NavbarLink href="#">Sign in</NavbarLink>
      </NavbarContent>
    </Navbar>
  ),
};

export const WithMobileMenu: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div>
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
          <NavbarMobileLink href="#" active icon={<HomeIcon />}>Dashboard</NavbarMobileLink>
          <NavbarMobileLink href="#" icon={<GridIcon />}>Projects</NavbarMobileLink>
          <NavbarMobileLink href="#">Team</NavbarMobileLink>
        </NavbarMobileMenu>
      </div>
    );
  },
};

export const ColorSubtle: Story = {
  render: () => (
    <Navbar sticky={false} color="subtle">
      <NavbarBrand><Logo /></NavbarBrand>
      <NavbarContent>
        <NavbarLink href="#" active>Dashboard</NavbarLink>
        <NavbarLink href="#">Projects</NavbarLink>
      </NavbarContent>
      <NavbarActions>
        <Button size="sm">New project</Button>
      </NavbarActions>
    </Navbar>
  ),
};

export const ColorPrimary: Story = {
  render: () => (
    <Navbar sticky={false} color="primary" bordered={false}>
      <NavbarBrand>
        <span className="font-display font-extrabold text-lg text-accent-on tracking-tight">DAVE</span>
      </NavbarBrand>
      <NavbarContent>
        <NavbarLink href="#" active className="text-accent-on font-semibold bg-white/10 hover:bg-white/20">Dashboard</NavbarLink>
        <NavbarLink href="#" className="text-accent-on/70 hover:text-accent-on hover:bg-white/10">Projects</NavbarLink>
        <NavbarLink href="#" className="text-accent-on/70 hover:text-accent-on hover:bg-white/10">Team</NavbarLink>
      </NavbarContent>
      <NavbarActions>
        <Button size="sm" className="bg-white/20 text-accent-on border-transparent hover:bg-white/30">New project</Button>
      </NavbarActions>
    </Navbar>
  ),
};

export const Minimal: Story = {
  render: () => (
    <Navbar sticky={false}>
      <NavbarBrand><Logo /></NavbarBrand>
      <NavbarActions>
        <Button variant="ghost" size="sm">Sign in</Button>
        <Button size="sm">Get started</Button>
      </NavbarActions>
    </Navbar>
  ),
};
