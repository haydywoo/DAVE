'use client';

import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  DropdownLabel,
  DropdownSeparator,
  DropdownSub,
  DropdownSubTrigger,
  DropdownSubContent,
  Button,
} from '@dave/react';
import { Preview } from '@/components/Preview';

function EditIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  );
}

export function DropdownDemos() {
  return (
    <>
      {/* Default */}
      <Preview code={`<Dropdown>
  <DropdownTrigger asChild>
    <Button variant="secondary">Options</Button>
  </DropdownTrigger>
  <DropdownContent>
    <DropdownItem icon={<EditIcon />}>Edit</DropdownItem>
    <DropdownItem icon={<CopyIcon />}>Duplicate</DropdownItem>
    <DropdownSeparator />
    <DropdownItem icon={<TrashIcon />} destructive>Delete</DropdownItem>
  </DropdownContent>
</Dropdown>`}>
        <Dropdown>
          <DropdownTrigger asChild>
            <Button variant="secondary">Options</Button>
          </DropdownTrigger>
          <DropdownContent>
            <DropdownItem icon={<EditIcon />}>Edit</DropdownItem>
            <DropdownItem icon={<CopyIcon />}>Duplicate</DropdownItem>
            <DropdownSeparator />
            <DropdownItem icon={<TrashIcon />} destructive>Delete</DropdownItem>
          </DropdownContent>
        </Dropdown>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">With labels</h3>
      <Preview code={`<Dropdown>
  <DropdownTrigger asChild>
    <Button variant="secondary">Account</Button>
  </DropdownTrigger>
  <DropdownContent>
    <DropdownLabel>Workspace</DropdownLabel>
    <DropdownItem>Settings</DropdownItem>
    <DropdownItem>Billing</DropdownItem>
    <DropdownSeparator />
    <DropdownLabel>Account</DropdownLabel>
    <DropdownItem>Profile</DropdownItem>
    <DropdownItem destructive>Sign out</DropdownItem>
  </DropdownContent>
</Dropdown>`}>
        <Dropdown>
          <DropdownTrigger asChild>
            <Button variant="secondary">Account</Button>
          </DropdownTrigger>
          <DropdownContent>
            <DropdownLabel>Workspace</DropdownLabel>
            <DropdownItem>Settings</DropdownItem>
            <DropdownItem>Billing</DropdownItem>
            <DropdownSeparator />
            <DropdownLabel>Account</DropdownLabel>
            <DropdownItem>Profile</DropdownItem>
            <DropdownItem destructive>Sign out</DropdownItem>
          </DropdownContent>
        </Dropdown>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">With submenu</h3>
      <Preview code={`<Dropdown>
  <DropdownTrigger asChild>
    <Button variant="secondary">File</Button>
  </DropdownTrigger>
  <DropdownContent>
    <DropdownItem icon={<EditIcon />}>New file</DropdownItem>
    <DropdownItem icon={<CopyIcon />}>Duplicate</DropdownItem>
    <DropdownSub>
      <DropdownSubTrigger icon={<ShareIcon />}>Share</DropdownSubTrigger>
      <DropdownSubContent>
        <DropdownItem>Copy link</DropdownItem>
        <DropdownItem>Email</DropdownItem>
      </DropdownSubContent>
    </DropdownSub>
    <DropdownSeparator />
    <DropdownItem icon={<TrashIcon />} destructive>Delete</DropdownItem>
  </DropdownContent>
</Dropdown>`}>
        <Dropdown>
          <DropdownTrigger asChild>
            <Button variant="secondary">File</Button>
          </DropdownTrigger>
          <DropdownContent>
            <DropdownItem icon={<EditIcon />}>New file</DropdownItem>
            <DropdownItem icon={<CopyIcon />}>Duplicate</DropdownItem>
            <DropdownSub>
              <DropdownSubTrigger icon={<ShareIcon />}>Share</DropdownSubTrigger>
              <DropdownSubContent>
                <DropdownItem>Copy link</DropdownItem>
                <DropdownItem>Email</DropdownItem>
              </DropdownSubContent>
            </DropdownSub>
            <DropdownSeparator />
            <DropdownItem icon={<TrashIcon />} destructive>Delete</DropdownItem>
          </DropdownContent>
        </Dropdown>
      </Preview>
    </>
  );
}
