'use client';

import * as React from 'react';
import * as RadixCollapsible from '@radix-ui/react-collapsible';
import { cn } from '../../lib/cn';

// ─── Root ─────────────────────────────────────────────────────────────────────

export interface CollapsibleProps {
  children: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  disabled?: boolean;
  className?: string;
}

export function Collapsible({ children, open, defaultOpen, onOpenChange, disabled, className }: CollapsibleProps) {
  return (
    <RadixCollapsible.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      disabled={disabled}
      className={cn('w-full', className)}
    >
      {children}
    </RadixCollapsible.Root>
  );
}

// ─── Trigger ──────────────────────────────────────────────────────────────────

export interface CollapsibleTriggerProps {
  children: React.ReactNode;
  /** Show a rotating chevron on the right */
  showChevron?: boolean;
  className?: string;
}

export function CollapsibleTrigger({ children, showChevron = true, className }: CollapsibleTriggerProps) {
  return (
    <RadixCollapsible.Trigger
      className={cn(
        'flex w-full items-center justify-between py-3 text-sm font-medium text-foreground',
        'transition-colors hover:text-fg-secondary',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
        'disabled:pointer-events-none disabled:opacity-40',
        '[&[data-state=open]>svg]:rotate-180',
        className,
      )}
    >
      {children}
      {showChevron && (
        <svg
          width="16" height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="shrink-0 text-fg-secondary transition-transform duration-200"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      )}
    </RadixCollapsible.Trigger>
  );
}

// ─── Content ──────────────────────────────────────────────────────────────────

export interface CollapsibleContentProps {
  children: React.ReactNode;
  className?: string;
}

export function CollapsibleContent({ children, className }: CollapsibleContentProps) {
  return (
    <RadixCollapsible.Content
      className={cn(
        'overflow-hidden',
        'data-[state=open]:animate-collapsible-down',
        'data-[state=closed]:animate-collapsible-up',
        className,
      )}
    >
      <div className="pb-3 text-sm text-fg-secondary">
        {children}
      </div>
    </RadixCollapsible.Content>
  );
}
