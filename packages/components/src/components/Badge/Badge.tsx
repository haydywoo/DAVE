import * as React from 'react';
import { cn } from '../../lib/cn';

export type BadgeVariant    = 'neutral' | 'primary' | 'success' | 'warning' | 'error';
export type BadgeSize       = 'xs' | 'sm' | 'md' | 'lg';
export type BadgeAppearance = 'solid' | 'outline' | 'dashed';

export interface BadgeProps {
  variant?:    BadgeVariant;
  size?:       BadgeSize;
  appearance?: BadgeAppearance;
  dot?:        boolean;
  children:    React.ReactNode;
  className?:  string;
}

const solid: Record<BadgeVariant, string> = {
  neutral: 'bg-surface border border-border text-fg-secondary',
  primary: 'bg-accent-subtle border border-accent-subtle-border text-accent-foreground',
  success: 'bg-success-subtle border border-success-border text-success-foreground',
  warning: 'bg-warning-subtle border border-warning-border text-warning-foreground',
  error:   'bg-error-subtle border border-error-border text-error-foreground',
};

const outline: Record<BadgeVariant, string> = {
  neutral: 'bg-transparent border border-border text-fg-secondary',
  primary: 'bg-transparent border border-accent-border text-accent-foreground',
  success: 'bg-transparent border border-success-border text-success-foreground',
  warning: 'bg-transparent border border-warning-border text-warning-foreground',
  error:   'bg-transparent border border-error-border text-error-foreground',
};

const dashed: Record<BadgeVariant, string> = {
  neutral: 'bg-transparent border border-dashed border-border text-fg-secondary',
  primary: 'bg-transparent border border-dashed border-accent-border text-accent-foreground',
  success: 'bg-transparent border border-dashed border-success-border text-success-foreground',
  warning: 'bg-transparent border border-dashed border-warning-border text-warning-foreground',
  error:   'bg-transparent border border-dashed border-error-border text-error-foreground',
};

const appearances = { solid, outline, dashed };

const dots: Record<BadgeVariant, string> = {
  neutral: 'bg-fg-subdued',
  primary: 'bg-accent',
  success: 'bg-success',
  warning: 'bg-warning',
  error:   'bg-error',
};

const sizes: Record<BadgeSize, string> = {
  xs: 'px-1 py-px text-[9px] leading-none gap-1',
  sm: 'px-1.5 py-0.5 text-[10px] leading-none gap-1',
  md: 'px-2.5 py-1 text-xs leading-none gap-1.5',
  lg: 'px-3 py-1.5 text-sm leading-none gap-1.5',
};

const dotSizes: Record<BadgeSize, string> = {
  xs: 'w-1 h-1',
  sm: 'w-1 h-1',
  md: 'w-1.5 h-1.5',
  lg: 'w-2 h-2',
};

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(function Badge(
  { variant = 'neutral', size = 'md', appearance = 'solid', dot = false, children, className, ...props },
  ref,
) {
  return (
    <span
      ref={ref}
      className={cn(
        'inline-flex items-center rounded-[3px] font-semibold',
        appearances[appearance][variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn('rounded-full shrink-0', dots[variant], dotSizes[size])}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
});
