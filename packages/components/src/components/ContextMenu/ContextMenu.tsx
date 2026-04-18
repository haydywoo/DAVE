'use client';

import * as React from 'react';
import * as RadixContextMenu from '@radix-ui/react-context-menu';
import { cn } from '../../lib/cn';

// Re-export primitives that need no styling
export const ContextMenu        = RadixContextMenu.Root;
export const ContextMenuTrigger = RadixContextMenu.Trigger;
export const ContextMenuGroup   = RadixContextMenu.Group;
export const ContextMenuSub     = RadixContextMenu.Sub;
export const ContextMenuRadioGroup = RadixContextMenu.RadioGroup;

// Shared menu surface classes (mirrors Dropdown)
const surfaceClasses = [
  'z-50 min-w-[10rem] rounded-[3px] border border-border bg-raised shadow-raised',
  'p-1 text-sm text-foreground',
  'data-[state=open]:animate-in data-[state=closed]:animate-out',
  'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
  'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
].join(' ');

// Shared item base classes
const itemBase = [
  'relative flex cursor-default select-none items-center gap-2 rounded-[2px] px-2.5 py-1.5 outline-none transition-colors',
  'focus:bg-surface',
].join(' ');

// ─── Content ──────────────────────────────────────────────────────────────────

export interface ContextMenuContentProps {
  children: React.ReactNode;
  className?: string;
}

export function ContextMenuContent({ children, className }: ContextMenuContentProps) {
  return (
    <RadixContextMenu.Portal>
      <RadixContextMenu.Content
        className={cn(surfaceClasses, 'data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2', className)}
      >
        {children}
      </RadixContextMenu.Content>
    </RadixContextMenu.Portal>
  );
}

// ─── Item ─────────────────────────────────────────────────────────────────────

export interface ContextMenuItemProps {
  children: React.ReactNode;
  onSelect?: (event: Event) => void;
  disabled?: boolean;
  destructive?: boolean;
  icon?: React.ReactNode;
  /** Keyboard shortcut hint shown on the right, e.g. "⌘K" */
  shortcut?: string;
  /** Secondary description line below the label */
  description?: string;
  className?: string;
}

export function ContextMenuItem({
  children,
  onSelect,
  disabled,
  destructive,
  icon,
  shortcut,
  description,
  className,
}: ContextMenuItemProps) {
  return (
    <RadixContextMenu.Item
      onSelect={onSelect}
      disabled={disabled}
      className={cn(
        itemBase,
        destructive ? 'text-error focus:bg-error-subtle focus:text-error' : 'text-foreground',
        disabled && 'pointer-events-none opacity-40',
        className,
      )}
    >
      {icon && <span className="shrink-0 text-fg-secondary" aria-hidden="true">{icon}</span>}
      <span className="flex flex-1 flex-col min-w-0">
        <span>{children}</span>
        {description && <span className="text-xs text-fg-secondary font-normal leading-tight mt-0.5">{description}</span>}
      </span>
      {shortcut && (
        <span className="ml-auto pl-4 text-xs text-fg-secondary tracking-widest shrink-0" aria-label={`Shortcut: ${shortcut}`}>
          {shortcut}
        </span>
      )}
    </RadixContextMenu.Item>
  );
}

// ─── CheckboxItem ─────────────────────────────────────────────────────────────

export interface ContextMenuCheckboxItemProps {
  children: React.ReactNode;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  shortcut?: string;
  className?: string;
}

export function ContextMenuCheckboxItem({
  children,
  checked,
  onCheckedChange,
  disabled,
  shortcut,
  className,
}: ContextMenuCheckboxItemProps) {
  return (
    <RadixContextMenu.CheckboxItem
      checked={checked}
      onCheckedChange={onCheckedChange}
      disabled={disabled}
      className={cn(
        'relative flex cursor-default select-none items-center gap-2 rounded-[2px] pl-8 pr-2.5 py-1.5 outline-none transition-colors',
        'text-foreground focus:bg-surface',
        disabled && 'pointer-events-none opacity-40',
        className,
      )}
    >
      <span className="absolute left-2 flex h-4 w-4 items-center justify-center text-accent">
        <RadixContextMenu.ItemIndicator>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </RadixContextMenu.ItemIndicator>
      </span>
      <span className="flex-1">{children}</span>
      {shortcut && (
        <span className="ml-auto pl-4 text-xs text-fg-secondary tracking-widest shrink-0">
          {shortcut}
        </span>
      )}
    </RadixContextMenu.CheckboxItem>
  );
}

// ─── RadioItem ────────────────────────────────────────────────────────────────

export interface ContextMenuRadioItemProps {
  children: React.ReactNode;
  value: string;
  disabled?: boolean;
  shortcut?: string;
  className?: string;
}

export function ContextMenuRadioItem({
  children,
  value,
  disabled,
  shortcut,
  className,
}: ContextMenuRadioItemProps) {
  return (
    <RadixContextMenu.RadioItem
      value={value}
      disabled={disabled}
      className={cn(
        'relative flex cursor-default select-none items-center gap-2 rounded-[2px] pl-8 pr-2.5 py-1.5 outline-none transition-colors',
        'text-foreground focus:bg-surface',
        disabled && 'pointer-events-none opacity-40',
        className,
      )}
    >
      <span className="absolute left-2 flex h-4 w-4 items-center justify-center text-accent">
        <RadixContextMenu.ItemIndicator>
          <svg width="8" height="8" viewBox="0 0 8 8" aria-hidden="true">
            <circle cx="4" cy="4" r="4" fill="currentColor" />
          </svg>
        </RadixContextMenu.ItemIndicator>
      </span>
      <span className="flex-1">{children}</span>
      {shortcut && (
        <span className="ml-auto pl-4 text-xs text-fg-secondary tracking-widest shrink-0">
          {shortcut}
        </span>
      )}
    </RadixContextMenu.RadioItem>
  );
}

// ─── Label ────────────────────────────────────────────────────────────────────

export function ContextMenuLabel({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <RadixContextMenu.Label
      className={cn('px-2.5 py-1.5 text-xs font-semibold text-fg-secondary uppercase tracking-wider', className)}
    >
      {children}
    </RadixContextMenu.Label>
  );
}

// ─── Separator ────────────────────────────────────────────────────────────────

export function ContextMenuSeparator({ className }: { className?: string }) {
  return (
    <RadixContextMenu.Separator
      className={cn('-mx-1 my-1 h-px bg-border', className)}
    />
  );
}

// ─── Sub trigger ──────────────────────────────────────────────────────────────

export function ContextMenuSubTrigger({ children, icon, className }: { children: React.ReactNode; icon?: React.ReactNode; className?: string }) {
  return (
    <RadixContextMenu.SubTrigger
      className={cn(
        itemBase,
        'text-foreground focus:bg-surface data-[state=open]:bg-surface',
        className,
      )}
    >
      {icon && <span className="shrink-0 text-fg-secondary" aria-hidden="true">{icon}</span>}
      <span className="flex-1">{children}</span>
      <svg className="ml-auto h-4 w-4 text-fg-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m9 18 6-6-6-6" />
      </svg>
    </RadixContextMenu.SubTrigger>
  );
}

// ─── Sub content ──────────────────────────────────────────────────────────────

export function ContextMenuSubContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <RadixContextMenu.Portal>
      <RadixContextMenu.SubContent
        sideOffset={4}
        alignOffset={-4}
        className={cn(
          surfaceClasses,
          'data-[side=right]:slide-in-from-left-2 data-[side=left]:slide-in-from-right-2',
          className,
        )}
      >
        {children}
      </RadixContextMenu.SubContent>
    </RadixContextMenu.Portal>
  );
}
