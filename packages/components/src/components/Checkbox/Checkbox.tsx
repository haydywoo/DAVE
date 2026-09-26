import * as React from 'react';
import { cn } from '../../lib/cn';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: string;
  indeterminate?: boolean;
}

export function Checkbox({ label, indeterminate, className, id, ...props }: CheckboxProps) {
  const ref = React.useRef<HTMLInputElement>(null);
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-');

  React.useEffect(() => {
    if (ref.current) ref.current.indeterminate = indeterminate ?? false;
  }, [indeterminate]);

  return (
    <label
      htmlFor={inputId}
      className={cn(
        'inline-flex items-center gap-2 cursor-pointer',
        props.disabled && 'cursor-not-allowed opacity-40',
        className,
      )}
    >
      <span className="relative inline-flex h-4 w-4 shrink-0">
        <input
          ref={ref}
          id={inputId}
          type="checkbox"
          className="peer m-0 h-4 w-4 cursor-[inherit] appearance-none rounded-[3px] border border-border-strong bg-card shadow-control transition-[background-color,border-color,box-shadow] duration-150 checked:border-accent checked:bg-accent checked:shadow-solid indeterminate:border-accent indeterminate:bg-accent indeterminate:shadow-solid focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1"
          {...props}
        />
        <svg
          className="pointer-events-none absolute inset-0 m-auto h-3 w-3 text-accent-on opacity-0 transition-opacity duration-150 peer-checked:opacity-100 peer-indeterminate:opacity-0"
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
        >
          <path d="M5 12.5l4.5 4.5L19 7.5" />
        </svg>
        <svg
          className="pointer-events-none absolute inset-0 m-auto h-3 w-3 text-accent-on opacity-0 transition-opacity duration-150 peer-indeterminate:opacity-100"
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" aria-hidden="true"
        >
          <path d="M6 12h12" />
        </svg>
      </span>
      {label && (
        <span className="text-sm text-foreground select-none">{label}</span>
      )}
    </label>
  );
}
