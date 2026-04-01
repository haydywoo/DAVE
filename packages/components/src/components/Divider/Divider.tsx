import * as React from 'react';
import { cn } from '../../lib/cn';

export type DividerOrientation = 'horizontal' | 'vertical';

export interface DividerProps {
  orientation?: DividerOrientation;
  label?: React.ReactNode;
  className?: string;
}

export function Divider({ orientation = 'horizontal', label, className }: DividerProps) {
  if (orientation === 'vertical') {
    return (
      <div
        role="separator"
        aria-orientation="vertical"
        className={cn('self-stretch w-px bg-border shrink-0', className)}
      />
    );
  }

  if (label) {
    return (
      <div role="separator" className={cn('flex items-center gap-3', className)}>
        <div className="flex-1 h-px bg-border" />
        <span className="text-xs text-fg-secondary whitespace-nowrap">{label}</span>
        <div className="flex-1 h-px bg-border" />
      </div>
    );
  }

  return (
    <hr
      role="separator"
      className={cn('border-none h-px bg-border w-full', className)}
    />
  );
}
