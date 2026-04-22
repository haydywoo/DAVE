import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import * as React from 'react';
import { Nav, NavSection, NavItem, NavGroup, NavSeparator } from '@haydywoo/dave-react';

const meta: Meta<typeof Nav> = {
  title: 'Navigation/Nav',
  component: Nav,
  parameters: { layout: 'padded' },
  decorators: [(Story) => <div className="w-56 border border-border rounded-[3px] p-3"><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof Nav>;

const HomeIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
);
const InboxIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>
);
const UsersIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);
const SettingsIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
);
const FileIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
);
const FolderIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>
);

export const Default: Story = {
  render: () => (
    <Nav>
      <NavItem href="#" active icon={<HomeIcon />}>Dashboard</NavItem>
      <NavItem href="#" icon={<InboxIcon />} badge="4">Inbox</NavItem>
      <NavItem href="#" icon={<UsersIcon />}>Team</NavItem>
      <NavItem href="#" icon={<SettingsIcon />}>Settings</NavItem>
    </Nav>
  ),
};

export const WithSections: Story = {
  render: () => (
    <Nav>
      <NavSection title="Main">
        <NavItem href="#" active icon={<HomeIcon />}>Dashboard</NavItem>
        <NavItem href="#" icon={<InboxIcon />} badge="4">Inbox</NavItem>
      </NavSection>
      <NavSection title="Manage">
        <NavItem href="#" icon={<UsersIcon />}>Team</NavItem>
        <NavItem href="#" icon={<FileIcon />}>Documents</NavItem>
        <NavItem href="#" icon={<SettingsIcon />}>Settings</NavItem>
      </NavSection>
    </Nav>
  ),
};

export const WithGroups: Story = {
  render: () => (
    <Nav>
      <NavItem href="#" active icon={<HomeIcon />}>Dashboard</NavItem>
      <NavItem href="#" icon={<InboxIcon />} badge="4">Inbox</NavItem>
      <NavGroup title="Projects" icon={<FolderIcon />} defaultOpen>
        <NavItem href="#">Alpha</NavItem>
        <NavItem href="#">Beta</NavItem>
        <NavItem href="#">Gamma</NavItem>
      </NavGroup>
      <NavGroup title="Documents" icon={<FileIcon />}>
        <NavItem href="#">Reports</NavItem>
        <NavItem href="#">Invoices</NavItem>
      </NavGroup>
      <NavSeparator />
      <NavItem href="#" icon={<SettingsIcon />}>Settings</NavItem>
    </Nav>
  ),
};

export const WithBadges: Story = {
  render: () => (
    <Nav>
      <NavSection title="Workspace">
        <NavItem href="#" active>Dashboard</NavItem>
        <NavItem href="#" badge="12">Inbox</NavItem>
        <NavItem href="#" badge="New">Releases</NavItem>
        <NavItem href="#" badge="99+">Notifications</NavItem>
      </NavSection>
    </Nav>
  ),
};

export const WithDisabled: Story = {
  render: () => (
    <Nav>
      <NavItem href="#" active icon={<HomeIcon />}>Dashboard</NavItem>
      <NavItem href="#" icon={<InboxIcon />}>Inbox</NavItem>
      <NavItem href="#" icon={<UsersIcon />} disabled>Team (disabled)</NavItem>
      <NavItem href="#" icon={<SettingsIcon />}>Settings</NavItem>
    </Nav>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="text-xs text-fg-secondary mb-2 px-1">Small</p>
        <Nav size="sm">
          <NavItem href="#" active icon={<HomeIcon />}>Dashboard</NavItem>
          <NavItem href="#" icon={<InboxIcon />} badge="4">Inbox</NavItem>
          <NavItem href="#" icon={<SettingsIcon />}>Settings</NavItem>
        </Nav>
      </div>
      <div>
        <p className="text-xs text-fg-secondary mb-2 px-1">Medium (default)</p>
        <Nav size="md">
          <NavItem href="#" active icon={<HomeIcon />}>Dashboard</NavItem>
          <NavItem href="#" icon={<InboxIcon />} badge="4">Inbox</NavItem>
          <NavItem href="#" icon={<SettingsIcon />}>Settings</NavItem>
        </Nav>
      </div>
      <div>
        <p className="text-xs text-fg-secondary mb-2 px-1">Large</p>
        <Nav size="lg">
          <NavItem href="#" active icon={<HomeIcon />}>Dashboard</NavItem>
          <NavItem href="#" icon={<InboxIcon />} badge="4">Inbox</NavItem>
          <NavItem href="#" icon={<SettingsIcon />}>Settings</NavItem>
        </Nav>
      </div>
    </div>
  ),
  decorators: [(Story) => <div className="w-64 p-4"><Story /></div>],
};

export const IconOnly: Story = {
  render: () => (
    <Nav>
      <NavItem href="#" active iconOnly icon={<HomeIcon />}>Dashboard</NavItem>
      <NavItem href="#" iconOnly icon={<InboxIcon />}>Inbox</NavItem>
      <NavItem href="#" iconOnly icon={<UsersIcon />}>Team</NavItem>
      <NavItem href="#" iconOnly icon={<SettingsIcon />}>Settings</NavItem>
    </Nav>
  ),
  decorators: [(Story) => <div className="w-14 border border-border rounded-[3px] p-2"><Story /></div>],
};

export const IconOnlyWithTooltips: Story = {
  render: () => (
    <Nav>
      <NavItem href="#" active iconOnly icon={<HomeIcon />} tooltip="Dashboard">Dashboard</NavItem>
      <NavItem href="#" iconOnly icon={<InboxIcon />} tooltip="Inbox">Inbox</NavItem>
      <NavItem href="#" iconOnly icon={<UsersIcon />} tooltip="Team">Team</NavItem>
      <NavItem href="#" iconOnly icon={<SettingsIcon />} tooltip="Settings">Settings</NavItem>
    </Nav>
  ),
  decorators: [(Story) => <div className="w-14 border border-border rounded-[3px] p-2"><Story /></div>],
};

export const Collapsed: Story = {
  render: () => (
    <Nav collapsed>
      <NavSection title="Main">
        <NavItem href="#" active icon={<HomeIcon />} tooltip="Dashboard">Dashboard</NavItem>
        <NavItem href="#" icon={<InboxIcon />} tooltip="Inbox" badge="4">Inbox</NavItem>
        <NavItem href="#" icon={<UsersIcon />} tooltip="Team">Team</NavItem>
      </NavSection>
      <NavSection title="More">
        <NavItem href="#" icon={<FolderIcon />} tooltip="Projects">Projects</NavItem>
        <NavItem href="#" icon={<SettingsIcon />} tooltip="Settings">Settings</NavItem>
      </NavSection>
    </Nav>
  ),
  decorators: [(Story) => <div className="w-14 border border-border rounded-[3px] p-2"><Story /></div>],
};

export const CollapsibleSidebar: Story = {
  render: () => {
    const [collapsed, setCollapsed] = React.useState(false);
    return (
      <div className={`border border-border rounded-[3px] p-3 transition-all duration-200 ${collapsed ? 'w-14' : 'w-56'}`}>
        <div className="mb-3 flex justify-end">
          <button
            onClick={() => setCollapsed(c => !c)}
            className="flex h-7 w-7 items-center justify-center rounded-[3px] text-fg-secondary hover:bg-surface hover:text-foreground transition-colors"
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {collapsed
                ? <><path d="m9 18 6-6-6-6"/><path d="M3 6h1M3 12h1M3 18h1"/></>
                : <><path d="m15 18-6-6 6-6"/><path d="M20 6h1M20 12h1M20 18h1"/></>
              }
            </svg>
          </button>
        </div>
        <Nav collapsed={collapsed}>
          <NavSection title="Main">
            <NavItem href="#" active icon={<HomeIcon />} tooltip="Dashboard">Dashboard</NavItem>
            <NavItem href="#" icon={<InboxIcon />} tooltip="Inbox" badge="4">Inbox</NavItem>
            <NavItem href="#" icon={<UsersIcon />} tooltip="Team">Team</NavItem>
          </NavSection>
          <NavGroup title="Projects" icon={<FolderIcon />} defaultOpen>
            <NavItem href="#">Alpha</NavItem>
            <NavItem href="#">Beta</NavItem>
          </NavGroup>
          <NavSeparator />
          <NavItem href="#" icon={<SettingsIcon />} tooltip="Settings">Settings</NavItem>
        </Nav>
      </div>
    );
  },
  decorators: [(Story) => <div className="p-4"><Story /></div>],
};
