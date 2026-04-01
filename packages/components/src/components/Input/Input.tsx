import * as React from 'react';
import { cn } from '../../lib/cn';

export type InputSize = 'sm' | 'md' | 'lg' | 'xl';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
  size?: InputSize;
  error?: boolean;
  label?: string;
  hint?: string;
  /** Icon rendered inside the left edge of the input */
  leftIcon?: React.ReactNode;
  /** Icon rendered inside the right edge of the input */
  rightIcon?: React.ReactNode;
  /** Text/label attached to the left outside edge (e.g. "https://") */
  prefix?: React.ReactNode;
  /** Text/label attached to the right outside edge (e.g. ".com") */
  suffix?: React.ReactNode;
}

const base =
  'w-full rounded-[3px] border bg-card text-foreground font-[family-name:var(--font-body)] transition-colors placeholder:text-fg-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-0 focus:border-accent disabled:cursor-not-allowed disabled:bg-surface disabled:text-fg-disabled disabled:border-border';

const sizes: Record<InputSize, string> = {
  sm: 'h-7 text-xs',
  md: 'h-9 text-sm',
  lg: 'h-11 text-base',
  xl: 'h-13 text-base',
};

// Horizontal padding varies based on whether icons are present
const paddingLeft: Record<InputSize, { default: string; icon: string }> = {
  sm: { default: 'pl-2.5', icon: 'pl-7'  },
  md: { default: 'pl-3',   icon: 'pl-9'  },
  lg: { default: 'pl-4',   icon: 'pl-10' },
  xl: { default: 'pl-5',   icon: 'pl-12' },
};

const paddingRight: Record<InputSize, { default: string; icon: string }> = {
  sm: { default: 'pr-2.5', icon: 'pr-7'  },
  md: { default: 'pr-3',   icon: 'pr-9'  },
  lg: { default: 'pr-4',   icon: 'pr-10' },
  xl: { default: 'pr-5',   icon: 'pr-12' },
};

// Icon container sizes
const iconSizes: Record<InputSize, string> = {
  sm: 'w-7',
  md: 'w-9',
  lg: 'w-10',
  xl: 'w-12',
};

const iconElementSizes: Record<InputSize, string> = {
  sm: '[&>svg]:h-3.5 [&>svg]:w-3.5',
  md: '[&>svg]:h-4 [&>svg]:w-4',
  lg: '[&>svg]:h-4 [&>svg]:w-4',
  xl: '[&>svg]:h-5 [&>svg]:w-5',
};

const addonSizes: Record<InputSize, string> = {
  sm: 'h-7 px-2.5 text-xs',
  md: 'h-9 px-3 text-sm',
  lg: 'h-11 px-3.5 text-base',
  xl: 'h-13 px-4 text-base',
};

export function Input({
  size = 'md',
  error = false,
  label,
  hint,
  leftIcon,
  rightIcon,
  prefix,
  suffix,
  className,
  id,
  ...props
}: InputProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-');
  const hasPrefix = Boolean(prefix);
  const hasSuffix = Boolean(suffix);

  const addonBase = cn(
    'inline-flex items-center border border-border bg-surface text-fg-secondary font-[family-name:var(--font-body)] select-none shrink-0',
    addonSizes[size],
  );

  const inputEl = (
    <div className="relative flex-1 min-w-0">
      {leftIcon && (
        <span aria-hidden="true" className={cn(
          'pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center text-fg-secondary',
          iconSizes[size], iconElementSizes[size],
        )}>
          {leftIcon}
        </span>
      )}
      <input
        id={inputId}
        className={cn(
          base,
          sizes[size],
          paddingLeft[size][leftIcon ? 'icon' : 'default'],
          paddingRight[size][rightIcon ? 'icon' : 'default'],
          error ? 'border-error bg-error-subtle focus:ring-error focus:border-error' : 'border-border',
          hasPrefix && 'rounded-l-none border-l-0',
          hasSuffix && 'rounded-r-none border-r-0',
          className,
        )}
        {...props}
      />
      {rightIcon && (
        <span aria-hidden="true" className={cn(
          'pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center text-fg-secondary',
          iconSizes[size], iconElementSizes[size],
        )}>
          {rightIcon}
        </span>
      )}
    </div>
  );

  const wrapped = (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={inputId} className="text-sm font-semibold text-foreground">
          {label}
        </label>
      )}
      {(hasPrefix || hasSuffix) ? (
        <div className="flex">
          {hasPrefix && (
            <span className={cn(addonBase, 'rounded-l-[3px] border-r-0')}>
              {prefix}
            </span>
          )}
          {inputEl}
          {hasSuffix && (
            <span className={cn(addonBase, 'rounded-r-[3px] border-l-0')}>
              {suffix}
            </span>
          )}
        </div>
      ) : (
        inputEl
      )}
      {hint && (
        <p className={cn('text-xs', error ? 'text-error-foreground' : 'text-fg-secondary')}>
          {hint}
        </p>
      )}
    </div>
  );

  return wrapped;
}
