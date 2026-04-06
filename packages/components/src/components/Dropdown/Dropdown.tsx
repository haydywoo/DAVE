import * as React from 'react';
import * as RadixDropdown from '@radix-ui/react-dropdown-menu';
import { cn } from '../../lib/cn';

// Re-export primitives that need no styling
export const Dropdown        = RadixDropdown.Root;
export const DropdownTrigger = RadixDropdown.Trigger;
export const DropdownGroup   = RadixDropdown.Group;
export const DropdownSub     = RadixDropdown.Sub;
export const DropdownRadioGroup = RadixDropdown.RadioGroup;

// Shared item base classes
const itemBase = [
  'relative flex cursor-default select-none items-center gap-2 rounded-[2px] px-2.5 py-1.5 outline-none transition-colors',
  'focus:bg-surface',
].join(' ');

// ─── Content ─────────────────────────────────────────────────────────────────

export interface DropdownContentProps {
  children: React.ReactNode;
  align?: 'start' | 'center' | 'end';
  sideOffset?: number;
  className?: string;
}

export function DropdownContent({
  children,
  align = 'start',
  sideOffset = 4,
  className,
}: DropdownContentProps) {
  return (
    <RadixDropdown.Portal>
      <RadixDropdown.Content
        align={align}
        sideOffset={sideOffset}
        className={cn(
          'z-50 min-w-[10rem] rounded-[3px] border border-border bg-card shadow-md',
          'p-1 text-sm text-foreground',
          'data-[state=open]:animate-in data-[state=closed]:animate-out',
          'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
          'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
          'data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2',
          className,
        )}
      >
        {children}
      </RadixDropdown.Content>
    </RadixDropdown.Portal>
  );
}

// ─── Item ─────────────────────────────────────────────────────────────────────

export interface DropdownItemProps {
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

export function DropdownItem({
  children,
  onSelect,
  disabled,
  destructive,
  icon,
  shortcut,
  description,
  className,
}: DropdownItemProps) {
  return (
    <RadixDropdown.Item
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
    </RadixDropdown.Item>
  );
}

// ─── CheckboxItem ─────────────────────────────────────────────────────────────

export interface DropdownCheckboxItemProps {
  children: React.ReactNode;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  shortcut?: string;
  className?: string;
}

export function DropdownCheckboxItem({
  children,
  checked,
  onCheckedChange,
  disabled,
  shortcut,
  className,
}: DropdownCheckboxItemProps) {
  return (
    <RadixDropdown.CheckboxItem
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
        <RadixDropdown.ItemIndicator>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </RadixDropdown.ItemIndicator>
      </span>
      <span className="flex-1">{children}</span>
      {shortcut && (
        <span className="ml-auto pl-4 text-xs text-fg-secondary tracking-widest shrink-0">
          {shortcut}
        </span>
      )}
    </RadixDropdown.CheckboxItem>
  );
}

// ─── RadioItem ────────────────────────────────────────────────────────────────

export interface DropdownRadioItemProps {
  children: React.ReactNode;
  value: string;
  disabled?: boolean;
  shortcut?: string;
  className?: string;
}

export function DropdownRadioItem({
  children,
  value,
  disabled,
  shortcut,
  className,
}: DropdownRadioItemProps) {
  return (
    <RadixDropdown.RadioItem
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
        <RadixDropdown.ItemIndicator>
          <svg width="8" height="8" viewBox="0 0 8 8" aria-hidden="true">
            <circle cx="4" cy="4" r="4" fill="currentColor" />
          </svg>
        </RadixDropdown.ItemIndicator>
      </span>
      <span className="flex-1">{children}</span>
      {shortcut && (
        <span className="ml-auto pl-4 text-xs text-fg-secondary tracking-widest shrink-0">
          {shortcut}
        </span>
      )}
    </RadixDropdown.RadioItem>
  );
}

// ─── Label ────────────────────────────────────────────────────────────────────

export function DropdownLabel({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <RadixDropdown.Label
      className={cn('px-2.5 py-1.5 text-xs font-semibold text-fg-secondary uppercase tracking-wider', className)}
    >
      {children}
    </RadixDropdown.Label>
  );
}

// ─── Separator ────────────────────────────────────────────────────────────────

export function DropdownSeparator({ className }: { className?: string }) {
  return (
    <RadixDropdown.Separator className={cn('-mx-1 my-1 h-px bg-border', className)} />
  );
}

// ─── Sub trigger ──────────────────────────────────────────────────────────────

export interface DropdownSubTriggerProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export function DropdownSubTrigger({ children, icon, className }: DropdownSubTriggerProps) {
  return (
    <RadixDropdown.SubTrigger
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
    </RadixDropdown.SubTrigger>
  );
}

// ─── Sub content ──────────────────────────────────────────────────────────────

export function DropdownSubContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <RadixDropdown.Portal>
      <RadixDropdown.SubContent
        sideOffset={4}
        alignOffset={-4}
        className={cn(
          'z-50 min-w-[10rem] rounded-[3px] border border-border bg-card shadow-md',
          'p-1 text-sm text-foreground',
          'data-[state=open]:animate-in data-[state=closed]:animate-out',
          'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
          'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
          'data-[side=right]:slide-in-from-left-2 data-[side=left]:slide-in-from-right-2',
          className,
        )}
      >
        {children}
      </RadixDropdown.SubContent>
    </RadixDropdown.Portal>
  );
}
