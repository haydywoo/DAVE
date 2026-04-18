'use client';

import * as React from 'react';
import { cn } from '../../lib/cn';

export type TextareaResize = 'none' | 'y' | 'x' | 'both';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;
  error?: boolean;
  /** Displays a character count below the textarea. Shows "n / max" when maxLength is set. */
  showCount?: boolean;
  /** Controls resize handle. Defaults to 'y' (vertical only). */
  resize?: TextareaResize;
}

const resizeClasses: Record<TextareaResize, string> = {
  none: 'resize-none',
  y:    'resize-y',
  x:    'resize-x',
  both: 'resize',
};

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { label, hint, error, showCount = false, resize = 'y', className, id, value, defaultValue, onChange, maxLength, ...props },
  ref,
) {
  const textareaId = id ?? label?.toLowerCase().replace(/\s+/g, '-');

  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = React.useState<string>((defaultValue as string) ?? '');
  const currentValue = isControlled ? (value as string) : internalValue;

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    if (!isControlled) setInternalValue(e.target.value);
    onChange?.(e);
  }

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={textareaId} className="text-sm font-semibold text-foreground">
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        id={textareaId}
        value={isControlled ? value : internalValue}
        onChange={handleChange}
        maxLength={maxLength}
        className={cn(
          'w-full min-h-[80px] rounded-[3px] border bg-card text-foreground text-sm',
          'px-3 py-2 font-[family-name:var(--font-body)] transition-colors',
          resizeClasses[resize],
          'placeholder:text-fg-secondary',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-0 focus:border-accent',
          'disabled:cursor-not-allowed disabled:bg-surface disabled:text-fg-disabled disabled:border-border',
          error ? 'border-error bg-error-subtle focus:ring-error focus:border-error' : 'border-border',
          className,
        )}
        {...props}
      />
      {(hint || showCount) && (
        <div className="flex items-center justify-between gap-2">
          {hint ? (
            <p className={cn('text-xs', error ? 'text-error-foreground' : 'text-fg-secondary')}>
              {hint}
            </p>
          ) : <span />}
          {showCount && (
            <p className="text-xs text-fg-secondary tabular-nums shrink-0">
              {maxLength ? `${currentValue.length} / ${maxLength}` : currentValue.length}
            </p>
          )}
        </div>
      )}
    </div>
  );
});
