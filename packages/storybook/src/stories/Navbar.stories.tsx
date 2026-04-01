import type { Meta, StoryObj } from '@storybook/react';
import { Navbar, NavbarBrand, NavbarContent, NavbarActions, NavbarLink, NavbarDivider, Button, Avatar, Badge } from '@dave/react';

const meta: Meta = {
  title: 'Components/Navbar',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
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
  ),
};

export const WithDivider: Story = {
  render: () => (
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
  ),
};

export const Minimal: Story = {
  render: () => (
    <Navbar sticky={false}>
      <NavbarBrand>
        <span className="font-display font-extrabold text-lg text-foreground tracking-tight">DAVE</span>
      </NavbarBrand>
      <NavbarActions>
        <Button variant="ghost" size="sm">Sign in</Button>
        <Button size="sm">Get started</Button>
      </NavbarActions>
    </Navbar>
  ),
};

export const NoBorder: Story = {
  render: () => (
    <Navbar sticky={false} bordered={false}>
      <NavbarBrand>
        <span className="font-display font-extrabold text-lg text-foreground tracking-tight">DAVE</span>
      </NavbarBrand>
      <NavbarContent>
        <NavbarLink href="#" active>Home</NavbarLink>
        <NavbarLink href="#">About</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarContent>
      <NavbarActions>
        <Button size="sm">Get started</Button>
      </NavbarActions>
    </Navbar>
  ),
};
