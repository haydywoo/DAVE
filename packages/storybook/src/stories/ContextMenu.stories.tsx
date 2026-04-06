import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
} from '@dave/react';

const meta: Meta = {
  title: 'Overlays/ContextMenu',
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj;

const EditIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

const CopyIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

const TrashIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" /><path d="M10 11v6M14 11v6" /><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
  </svg>
);

const ShareIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
);

const Trigger = () => (
  <div className="flex h-32 w-64 items-center justify-center rounded-[3px] border-2 border-dashed border-border text-sm text-fg-secondary select-none">
    Right-click here
  </div>
);

export const Default: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger><Trigger /></ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuLabel>Actions</ContextMenuLabel>
        <ContextMenuItem icon={<EditIcon />} shortcut="⌘E">Edit</ContextMenuItem>
        <ContextMenuItem icon={<CopyIcon />} shortcut="⌘D">Duplicate</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuSub>
          <ContextMenuSubTrigger icon={<ShareIcon />}>Share</ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>Copy link</ContextMenuItem>
            <ContextMenuItem>Share via email</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuItem icon={<TrashIcon />} destructive shortcut="⌘⌫">Delete</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

export const WithCheckboxItems: Story = {
  render: () => {
    const [showGrid, setShowGrid] = useState(true);
    const [snapToGrid, setSnapToGrid] = useState(false);
    const [rulers, setRulers] = useState(false);
    return (
      <ContextMenu>
        <ContextMenuTrigger><Trigger /></ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuLabel>View</ContextMenuLabel>
          <ContextMenuCheckboxItem checked={showGrid} onCheckedChange={setShowGrid}>Show grid</ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem checked={snapToGrid} onCheckedChange={setSnapToGrid}>Snap to grid</ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem checked={rulers} onCheckedChange={setRulers}>Show rulers</ContextMenuCheckboxItem>
        </ContextMenuContent>
      </ContextMenu>
    );
  },
};

export const WithRadioItems: Story = {
  render: () => {
    const [density, setDensity] = useState('comfortable');
    return (
      <ContextMenu>
        <ContextMenuTrigger><Trigger /></ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuLabel>Density</ContextMenuLabel>
          <ContextMenuRadioGroup value={density} onValueChange={setDensity}>
            <ContextMenuRadioItem value="compact">Compact</ContextMenuRadioItem>
            <ContextMenuRadioItem value="comfortable">Comfortable</ContextMenuRadioItem>
            <ContextMenuRadioItem value="spacious">Spacious</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuContent>
      </ContextMenu>
    );
  },
};
