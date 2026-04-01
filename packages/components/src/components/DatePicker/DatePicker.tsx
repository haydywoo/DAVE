'use client';

import * as React from 'react';
import * as RadixPopover from '@radix-ui/react-popover';
import { format, parse, isValid } from 'date-fns';
import { cn } from '../../lib/cn';
import { Calendar } from '../Calendar/Calendar';

export type DatePickerSize = 'sm' | 'md' | 'lg' | 'xl';

export interface DatePickerProps {
  value?: Date;
  defaultValue?: Date;
  onValueChange?: (date: Date | undefined) => void;
  /** date-fns format string. Default: 'dd/MM/yyyy' */
  dateFormat?: string;
  placeholder?: string;
  min?: Date;
  max?: Date;
  disabled?: boolean;
  error?: boolean;
  size?: DatePickerSize;
  label?: string;
  hint?: string;
  id?: string;
  className?: string;
}

const sizes: Record<DatePickerSize, string> = {
  sm: 'h-7 px-2.5 text-xs',
  md: 'h-9 px-3 text-sm',
  lg: 'h-11 px-4 text-base',
  xl: 'h-13 px-5 text-base',
};

const iconSizes: Record<DatePickerSize, string> = {
  sm: 'h-3.5 w-3.5',
  md: 'h-4 w-4',
  lg: 'h-4 w-4',
  xl: 'h-5 w-5',
};

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

export function DatePicker({
  value: controlledValue,
  defaultValue,
  onValueChange,
  dateFormat = 'dd/MM/yyyy',
  placeholder,
  min,
  max,
  disabled = false,
  error = false,
  size = 'md',
  label,
  hint,
  id,
  className,
}: DatePickerProps) {
  const uid = React.useId();
  const inputId = id ?? uid;

  const isControlled = controlledValue !== undefined;
  const [internalValue, setInternalValue] = React.useState<Date | undefined>(defaultValue);
  const selected = isControlled ? controlledValue : internalValue;

  const [open, setOpen] = React.useState(false);
  const [inputStr, setInputStr] = React.useState(selected ? format(selected, dateFormat) : '');

  // Keep input string in sync with controlled value
  React.useEffect(() => {
    if (isControlled) {
      setInputStr(controlledValue ? format(controlledValue, dateFormat) : '');
    }
  }, [isControlled, controlledValue, dateFormat]);

  function commit(date: Date | undefined) {
    if (!isControlled) setInternalValue(date);
    onValueChange?.(date);
  }

  function handleCalendarSelect(date: Date) {
    commit(date);
    setInputStr(format(date, dateFormat));
    setOpen(false);
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputStr(e.target.value);
  }

  function handleInputBlur() {
    if (!inputStr) {
      commit(undefined);
      return;
    }
    const parsed = parse(inputStr, dateFormat, new Date());
    if (isValid(parsed)) {
      commit(parsed);
      setInputStr(format(parsed, dateFormat));
    } else {
      // Revert to last known good value
      setInputStr(selected ? format(selected, dateFormat) : '');
    }
  }

  function handleInputKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') (e.target as HTMLInputElement).blur();
    if (e.key === 'Escape') setOpen(false);
  }

  const resolvedPlaceholder = placeholder ?? dateFormat.toLowerCase();

  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      {label && (
        <label htmlFor={inputId} className="text-sm font-semibold text-foreground">
          {label}
        </label>
      )}

      <RadixPopover.Root open={open} onOpenChange={disabled ? undefined : setOpen}>
        <RadixPopover.Anchor asChild>
          <div
            className={cn(
              'relative flex w-full items-center rounded-[3px] border bg-card transition-colors',
              'focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-0 focus-within:border-accent',
              error ? 'border-error bg-error-subtle focus-within:ring-error' : 'border-border',
              disabled && 'opacity-50 cursor-not-allowed bg-surface',
            )}
          >
            <input
              id={inputId}
              type="text"
              value={inputStr}
              placeholder={resolvedPlaceholder}
              disabled={disabled}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              onKeyDown={handleInputKeyDown}
              className={cn(
                'flex-1 min-w-0 bg-transparent text-foreground placeholder:text-fg-secondary',
                'focus:outline-none disabled:cursor-not-allowed',
                sizes[size],
                'pr-9',
              )}
            />
            <button
              type="button"
              tabIndex={-1}
              disabled={disabled}
              onClick={() => setOpen((o) => !o)}
              aria-label="Open date picker"
              className="absolute right-0 flex h-full w-9 items-center justify-center text-fg-secondary hover:text-foreground transition-colors focus-visible:outline-none disabled:pointer-events-none"
            >
              <CalendarIcon className={iconSizes[size]} />
            </button>
          </div>
        </RadixPopover.Anchor>

        <RadixPopover.Portal>
          <RadixPopover.Content
            sideOffset={4}
            align="start"
            onOpenAutoFocus={(e) => e.preventDefault()}
            className={cn(
              'z-50',
              'data-[state=open]:animate-in data-[state=closed]:animate-out',
              'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
              'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
              'data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2',
            )}
          >
            <Calendar
              value={selected}
              onValueChange={handleCalendarSelect}
              min={min}
              max={max}
            />
          </RadixPopover.Content>
        </RadixPopover.Portal>
      </RadixPopover.Root>

      {hint && (
        <p className={cn('text-xs', error ? 'text-error-foreground' : 'text-fg-secondary')}>{hint}</p>
      )}
    </div>
  );
}
