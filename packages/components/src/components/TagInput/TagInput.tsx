'use client';

import * as React from 'react';
import { cn } from '../../lib/cn';

export type TagInputSize = 'sm' | 'md' | 'lg' | 'xl';

export interface TagInputProps {
  value?: string[];
  defaultValue?: string[];
  onChange?: (tags: string[]) => void;
  /** Keys that confirm a tag. Default: Enter and comma */
  delimiters?: string[];
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  size?: TagInputSize;
  label?: string;
  hint?: string;
  /** Max number of tags allowed */
  max?: number;
  /** Validate a tag before adding — return false to reject */
  validate?: (tag: string) => boolean;
  id?: string;
  className?: string;
}

const containerSizes: Record<TagInputSize, string> = {
  sm: 'min-h-7 px-2 py-1 gap-1 text-xs',
  md: 'min-h-9 px-2.5 py-1.5 gap-1.5 text-sm',
  lg: 'min-h-11 px-3 py-2 gap-2 text-base',
  xl: 'min-h-13 px-4 py-2.5 gap-2 text-base',
};

const tagSizes: Record<TagInputSize, string> = {
  sm: 'px-1.5 py-0 text-[10px]',
  md: 'px-2 py-0.5 text-xs',
  lg: 'px-2.5 py-1 text-sm',
  xl: 'px-3 py-1 text-sm',
};

const removeSizes: Record<TagInputSize, string> = {
  sm: 'h-2.5 w-2.5',
  md: 'h-3 w-3',
  lg: 'h-3.5 w-3.5',
  xl: 'h-4 w-4',
};

export function TagInput({
  value: controlledValue,
  defaultValue = [],
  onChange,
  delimiters = ['Enter', ','],
  placeholder = 'Add tag…',
  disabled = false,
  error = false,
  size = 'md',
  label,
  hint,
  max,
  validate,
  id,
  className,
}: TagInputProps) {
  const uid = React.useId();
  const inputId = id ?? uid;
  const labelId = `${inputId}-label`;
  const inputRef = React.useRef<HTMLInputElement>(null);

  const isControlled = controlledValue !== undefined;
  const [internalTags, setInternalTags] = React.useState<string[]>(defaultValue);
  const tags = isControlled ? controlledValue : internalTags;

  const [inputValue, setInputValue] = React.useState('');

  function setTags(next: string[]) {
    if (!isControlled) setInternalTags(next);
    onChange?.(next);
  }

  function addTag(raw: string) {
    const tag = raw.trim();
    if (!tag) return;
    if (tags.includes(tag)) { setInputValue(''); return; }
    if (max !== undefined && tags.length >= max) return;
    if (validate && !validate(tag)) return;
    setTags([...tags, tag]);
    setInputValue('');
  }

  function removeTag(index: number) {
    setTags(tags.filter((_, i) => i !== index));
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (delimiters.includes(e.key)) {
      e.preventDefault();
      addTag(inputValue);
      return;
    }
    if (e.key === 'Backspace' && !inputValue && tags.length > 0) {
      removeTag(tags.length - 1);
    }
  }

  function handleBlur() {
    if (inputValue) addTag(inputValue);
  }

  function handlePaste(e: React.ClipboardEvent<HTMLInputElement>) {
    const text = e.clipboardData.getData('text');
    const parts = text.split(/[,\n]+/).map((p) => p.trim()).filter(Boolean);
    if (parts.length > 1) {
      e.preventDefault();
      const next = [...tags];
      for (const part of parts) {
        if (next.includes(part)) continue;
        if (max !== undefined && next.length >= max) break;
        if (validate && !validate(part)) continue;
        next.push(part);
      }
      setTags(next);
    }
  }

  const atMax = max !== undefined && tags.length >= max;

  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      {label && (
        <label id={labelId} htmlFor={inputId} className="text-sm font-semibold text-foreground">
          {label}
        </label>
      )}

      <div
        className={cn(
          'flex flex-wrap items-center w-full rounded-[3px] border bg-card transition-colors',
          'focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-0 focus-within:border-accent',
          containerSizes[size],
          error
            ? 'border-error bg-error-subtle focus-within:ring-error focus-within:border-error'
            : 'border-border',
          disabled && 'cursor-not-allowed bg-surface opacity-40',
        )}
        onClick={() => inputRef.current?.focus()}
      >
        {tags.map((tag, i) => (
          <span
            key={i}
            className={cn(
              'inline-flex items-center gap-1 rounded-full border border-border bg-surface text-foreground font-medium shrink-0',
              tagSizes[size],
            )}
          >
            {tag}
            {!disabled && (
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); removeTag(i); }}
                aria-label={`Remove ${tag}`}
                className="touch-target shrink-0 opacity-50 hover:opacity-100 transition-opacity focus-visible:outline-none"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={removeSizes[size]}>
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            )}
          </span>
        ))}

        {!atMax && (
          <>
            {tags.length > 0 && (
              <span aria-hidden="true" className="h-4 w-px shrink-0 bg-border-strong" />
            )}
          <input
            ref={inputRef}
            id={inputId}
            type="text"
            value={inputValue}
            placeholder={tags.length === 0 ? placeholder : ''}
            disabled={disabled}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
            onPaste={handlePaste}
            aria-labelledby={label ? labelId : undefined}
            className="flex-1 min-w-[6rem] bg-transparent text-foreground placeholder:text-fg-secondary focus:outline-none disabled:cursor-not-allowed"
          />
          </>
        )}
      </div>

      {hint && (
        <p className={cn('text-xs', error ? 'text-error-foreground' : 'text-fg-secondary')}>{hint}</p>
      )}
    </div>
  );
}
