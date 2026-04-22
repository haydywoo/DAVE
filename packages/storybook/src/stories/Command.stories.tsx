import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import * as React from 'react';
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandDialog,
  Button,
} from '@haydywoo/dave-react';

const meta: Meta = {
  title: 'Components/Command',
  parameters: { layout: 'centered' },
};

export default meta;

const HomeIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>;
const SettingsIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></svg>;
const UsersIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const FileIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>;
const SearchIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>;

export const Inline: StoryObj = {
  render: () => (
    <div className="w-[420px] border border-border rounded-[6px] bg-card shadow-raised">
      <Command>
        <CommandInput placeholder="Search commands…" />
        <CommandList>
          <CommandEmpty />
          <CommandGroup heading="Navigation">
            <CommandItem icon={<HomeIcon />} shortcut="G H" onSelect={() => {}}>Go to dashboard</CommandItem>
            <CommandItem icon={<UsersIcon />} shortcut="G T" onSelect={() => {}}>Go to team</CommandItem>
            <CommandItem icon={<SettingsIcon />} shortcut="G S" onSelect={() => {}}>Go to settings</CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Actions">
            <CommandItem icon={<FileIcon />} shortcut="⌘N" onSelect={() => {}}>New document</CommandItem>
            <CommandItem icon={<SearchIcon />} shortcut="⌘F" onSelect={() => {}}>Find in files</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  ),
};

export const Dialog: StoryObj = {
  render: function DialogDemo() {
    const [open, setOpen] = useState(false);

    React.useEffect(() => {
      function handler(e: KeyboardEvent) {
        if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
          e.preventDefault();
          setOpen(o => !o);
        }
      }
      window.addEventListener('keydown', handler);
      return () => window.removeEventListener('keydown', handler);
    }, []);

    return (
      <>
        <Button variant="secondary" onClick={() => setOpen(true)}>
          Open command palette <span className="ml-2 text-xs text-fg-secondary">⌘K</span>
        </Button>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Type a command or search…" />
          <CommandList>
            <CommandEmpty />
            <CommandGroup heading="Navigation">
              <CommandItem icon={<HomeIcon />} shortcut="G H" onSelect={() => setOpen(false)}>Go to dashboard</CommandItem>
              <CommandItem icon={<UsersIcon />} shortcut="G T" onSelect={() => setOpen(false)}>Go to team</CommandItem>
              <CommandItem icon={<SettingsIcon />} shortcut="G S" onSelect={() => setOpen(false)}>Go to settings</CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Actions">
              <CommandItem icon={<FileIcon />} shortcut="⌘N" onSelect={() => setOpen(false)}>New document</CommandItem>
              <CommandItem icon={<SearchIcon />} shortcut="⌘F" onSelect={() => setOpen(false)}>Find in files</CommandItem>
              <CommandItem icon={<UsersIcon />} onSelect={() => setOpen(false)}>Invite team member</CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </>
    );
  },
};

export const WithDisabledItems: StoryObj = {
  render: () => (
    <div className="w-[420px] border border-border rounded-[6px] bg-card shadow-raised">
      <Command>
        <CommandInput placeholder="Search…" />
        <CommandList>
          <CommandEmpty />
          <CommandGroup heading="Actions">
            <CommandItem icon={<FileIcon />} onSelect={() => {}}>New document</CommandItem>
            <CommandItem icon={<UsersIcon />} disabled onSelect={() => {}}>Invite member (upgrade required)</CommandItem>
            <CommandItem icon={<SettingsIcon />} onSelect={() => {}}>Settings</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  ),
};
