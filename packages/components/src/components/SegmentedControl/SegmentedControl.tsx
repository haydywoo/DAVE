'use client';

import * as React from 'react';
import * as RadixTabs from '@radix-ui/react-tabs';
import { cn } from '../../lib/cn';

export type SegmentedControlSize = 'sm' | 'md' | 'lg';

export interface SegmentedControlOption {
  value: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export interface SegmentedControlProps {
  options: SegmentedControlOption[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  size?: SegmentedControlSize;
  /** Stretches all segments to fill the container width equally */
  fullWidth?: boolean;
  disabled?: boolean;
  className?: string;
}

const sizes: Record<SegmentedControlSize, { root: string; trigger: string }> = {
  sm: { root: 'p-0.5 gap-0.5', trigger: 'h-7 px-2.5 text-xs' },
  md: { root: 'p-0.5 gap-0.5', trigger: 'h-9 px-3 text-sm' },
  lg: { root: 'p-1 gap-1',     trigger: 'h-11 px-4 text-base' },
};

export function SegmentedControl({
  options,
  value,
  defaultValue,
  onValueChange,
  size = 'md',
  fullWidth = false,
  disabled = false,
  className,
}: SegmentedControlProps) {
  const { root, trigger } = sizes[size];

  return (
    <RadixTabs.Root value={value} defaultValue={defaultValue} onValueChange={onValueChange}>
      <RadixTabs.List
        aria-label="Segmented control"
        className={cn(
          'inline-flex items-center rounded-[4px] bg-surface border border-border',
          root,
          fullWidth && 'w-full',
          disabled && 'pointer-events-none opacity-40',
          className,
        )}
      >
        {options.map(opt => (
          <RadixTabs.Trigger
            key={opt.value}
            value={opt.value}
            disabled={opt.disabled}
            className={cn(
              'inline-flex items-center justify-center gap-1.5 rounded-[3px] font-medium whitespace-nowrap select-none',
              'transition-all duration-150',
              'text-fg-secondary',
              'hover:text-foreground',
              'data-[state=active]:bg-card data-[state=active]:text-foreground data-[state=active]:shadow-sm',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1',
              'disabled:pointer-events-none disabled:opacity-40',
              trigger,
              fullWidth && 'flex-1',
            )}
          >
            {opt.icon && <span className="shrink-0" aria-hidden="true">{opt.icon}</span>}
            {opt.label}
          </RadixTabs.Trigger>
        ))}
      </RadixTabs.List>
    </RadixTabs.Root>
  );
}
