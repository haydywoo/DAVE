import * as React from 'react';
import { cn } from '../../lib/cn';

export type BadgeVariant = 'neutral' | 'primary' | 'success' | 'warning' | 'error';
export type BadgeSize    = 'xs' | 'sm' | 'md' | 'lg';

export interface BadgeProps {
  variant?: BadgeVariant;
  size?: BadgeSize;
  children: React.ReactNode;
  className?: string;
}

const variants: Record<BadgeVariant, string> = {
  neutral: 'bg-surface text-fg-subdued',
  primary: 'bg-accent-subtle text-accent-foreground',
  success: 'bg-success-subtle text-success-foreground',
  warning: 'bg-warning-subtle text-warning-foreground',
  error:   'bg-error-subtle text-error-foreground',
};

const sizes: Record<BadgeSize, string> = {
  xs: 'px-1 py-px text-[9px]',
  sm: 'px-1.5 py-0.5 text-[10px]',
  md: 'px-2.5 py-1 text-xs',
  lg: 'px-3 py-1.5 text-sm',
};

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(function Badge(
  { variant = 'neutral', size = 'md', children, className, ...props },
  ref,
) {
  return (
    <span ref={ref} className={cn('inline-flex items-center rounded-[3px] font-semibold', variants[variant], sizes[size], className)} {...props}>
      {children}
    </span>
  );
});
