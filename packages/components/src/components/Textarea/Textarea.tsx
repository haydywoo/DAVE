import * as React from 'react';
import { cn } from '../../lib/cn';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;
  error?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { label, hint, error, className, id, ...props },
  ref,
) {
  const textareaId = id ?? label?.toLowerCase().replace(/\s+/g, '-');

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
        className={cn(
          'w-full min-h-[80px] rounded-[3px] border bg-card text-foreground text-sm',
          'px-3 py-2 font-[family-name:var(--font-body)] transition-colors resize-y',
          'placeholder:text-fg-secondary',
          'focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-0 focus:border-accent',
          'disabled:cursor-not-allowed disabled:bg-surface disabled:text-fg-disabled disabled:border-border',
          error ? 'border-error bg-error-subtle focus:ring-error focus:border-error' : 'border-border',
          className,
        )}
        {...props}
      />
      {hint && (
        <p className={cn('text-xs', error ? 'text-error-foreground' : 'text-fg-secondary')}>
          {hint}
        </p>
      )}
    </div>
  );
});
