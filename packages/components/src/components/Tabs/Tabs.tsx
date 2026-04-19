import * as React from 'react';
import * as RadixTabs from '@radix-ui/react-tabs';
import { cn } from '../../lib/cn';

export const Tabs = RadixTabs.Root;

export type TabsVariant = 'line' | 'pill';

// ─── List ─────────────────────────────────────────────────────────────────────

export interface TabsListProps {
  children: React.ReactNode;
  variant?: TabsVariant;
  className?: string;
}

const listVariants: Record<TabsVariant, string> = {
  line: 'flex border-b border-border gap-0',
  pill: 'flex gap-1 bg-surface rounded-[3px] p-1 w-fit',
};

export function TabsList({ children, variant = 'line', className }: TabsListProps) {
  return (
    <RadixTabs.List
      data-variant={variant}
      className={cn(listVariants[variant], className)}
    >
      {children}
    </RadixTabs.List>
  );
}

// ─── Trigger ──────────────────────────────────────────────────────────────────

export interface TabsTriggerProps {
  value: string;
  children: React.ReactNode;
  variant?: TabsVariant;
  disabled?: boolean;
  className?: string;
}

const triggerVariants: Record<TabsVariant, { base: string; active: string; inactive: string }> = {
  line: {
    base:     'px-4 py-2.5 text-sm font-medium border-b-2 -mb-px transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset',
    active:   'border-foreground text-foreground',
    inactive: 'border-transparent text-fg-secondary hover:text-foreground',
  },
  pill: {
    base:     'px-3 py-1.5 text-sm font-medium rounded-[2px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1 focus-visible:ring-offset-surface',
    active:   'bg-card text-foreground shadow-sm',
    inactive: 'text-fg-secondary hover:text-foreground',
  },
};

export function TabsTrigger({ value, children, variant = 'line', disabled, className }: TabsTriggerProps) {
  const lineClasses = cn(
    'px-4 py-2.5 text-sm font-medium border-b-2 -mb-px transition-colors',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset',
    'data-[state=active]:border-foreground data-[state=active]:text-foreground',
    'data-[state=inactive]:border-transparent data-[state=inactive]:text-fg-secondary hover:text-foreground hover:bg-surface',
  );

  const pillClasses = cn(
    'px-3 py-1.5 text-sm font-medium rounded-[2px] transition-colors',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1 focus-visible:ring-offset-surface',
    'data-[state=active]:bg-card data-[state=active]:text-foreground data-[state=active]:shadow-sm',
    'data-[state=inactive]:text-fg-secondary hover:text-foreground data-[state=inactive]:hover:bg-card',
  );

  return (
    <RadixTabs.Trigger
      value={value}
      disabled={disabled}
      className={cn(
        variant === 'line' ? lineClasses : pillClasses,
        disabled && 'pointer-events-none opacity-40',
        className,
      )}
    >
      {children}
    </RadixTabs.Trigger>
  );
}

// ─── Content ──────────────────────────────────────────────────────────────────

export interface TabsContentProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

export function TabsContent({ value, children, className }: TabsContentProps) {
  return (
    <RadixTabs.Content
      value={value}
      className={cn('focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2', className)}
    >
      {children}
    </RadixTabs.Content>
  );
}
