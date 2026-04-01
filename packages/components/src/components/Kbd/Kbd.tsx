import * as React from 'react';
import { cn } from '../../lib/cn';

export type KbdSize = 'sm' | 'md' | 'lg';

export interface KbdProps {
  children: React.ReactNode;
  size?: KbdSize;
  className?: string;
}

const sizes: Record<KbdSize, string> = {
  sm: 'h-4 min-w-4 px-1 text-[10px]',
  md: 'h-5 min-w-5 px-1.5 text-xs',
  lg: 'h-6 min-w-6 px-2 text-sm',
};

export function Kbd({ children, size = 'md', className }: KbdProps) {
  return (
    <kbd
      className={cn(
        'inline-flex items-center justify-center rounded-[3px]',
        'border border-border bg-surface text-fg-secondary',
        'font-sans font-medium leading-none',
        sizes[size],
        className,
      )}
    >
      {children}
    </kbd>
  );
}
