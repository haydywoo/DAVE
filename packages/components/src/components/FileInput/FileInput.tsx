'use client';

import * as React from 'react';
import { cn } from '../../lib/cn';

export type FileInputSize = 'sm' | 'md' | 'lg' | 'xl';

export interface FileInputProps {
  size?: FileInputSize;
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  error?: boolean;
  /** Placeholder shown when no file is selected. */
  placeholder?: string;
  /** Label for the trigger button. */
  buttonLabel?: string;
  onChange?: (files: FileList | null) => void;
  className?: string;
}

const heights: Record<FileInputSize, string> = {
  sm: 'h-7  text-xs',
  md: 'h-9  text-sm',
  lg: 'h-11 text-base',
  xl: 'h-13 text-base',
};

const btnSizes: Record<FileInputSize, string> = {
  sm: 'h-7  px-2.5 text-xs',
  md: 'h-9  px-3   text-sm',
  lg: 'h-11 px-3.5 text-base',
  xl: 'h-13 px-4   text-base',
};

export function FileInput({
  size = 'md',
  accept,
  multiple = false,
  disabled = false,
  error = false,
  placeholder = 'No file chosen',
  buttonLabel = 'Browse',
  onChange,
  className,
}: FileInputProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [label, setLabel] = React.useState<string>('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (files && files.length > 0) {
      setLabel(files.length === 1 ? files[0].name : `${files.length} files`);
    } else {
      setLabel('');
    }
    onChange?.(files);
  }

  return (
    <div className={cn('flex', className)}>
      {/* Hidden native input */}
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        disabled={disabled}
        onChange={handleChange}
        className="sr-only"
        tabIndex={-1}
        aria-hidden="true"
      />

      {/* Display area */}
      <div
        className={cn(
          'flex-1 min-w-0 flex items-center rounded-l-[3px] border bg-card px-3 font-[family-name:var(--font-body)] truncate',
          heights[size],
          error
            ? 'border-error bg-error-subtle text-error-foreground'
            : 'border-border text-foreground',
          disabled && 'bg-surface text-fg-disabled border-border cursor-not-allowed',
        )}
      >
        <span className={cn('truncate', !label && 'text-fg-secondary')}>
          {label || placeholder}
        </span>
      </div>

      {/* Browse button */}
      <button
        type="button"
        disabled={disabled}
        onClick={() => inputRef.current?.click()}
        className={cn(
          'inline-flex shrink-0 items-center justify-center rounded-r-[3px] border border-l-0 bg-surface font-[family-name:var(--font-body)] font-medium text-foreground transition-colors',
          'hover:bg-card focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1 focus:border-accent',
          'disabled:cursor-not-allowed disabled:text-fg-disabled',
          error ? 'border-error' : 'border-border',
          btnSizes[size],
        )}
      >
        {buttonLabel}
      </button>
    </div>
  );
}
