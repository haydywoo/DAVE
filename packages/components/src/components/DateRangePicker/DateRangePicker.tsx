'use client';

import * as React from 'react';
import * as RadixPopover from '@radix-ui/react-popover';
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  isToday,
  isBefore,
  isAfter,
  isWithinInterval,
  addMonths,
  subMonths,
  format,
  parse,
  isValid,
  startOfDay,
} from 'date-fns';
import { cn } from '../../lib/cn';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface DateRange {
  from: Date;
  to?: Date;
}

export type DateRangePickerSize = 'sm' | 'md' | 'lg' | 'xl';

// ─── Icons ────────────────────────────────────────────────────────────────────

function ChevronLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

// ─── Month grid ───────────────────────────────────────────────────────────────

const DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

interface MonthGridProps {
  month: Date;
  range: DateRange | undefined;
  hoverDate: Date | undefined;
  selecting: 'from' | 'to';
  min?: Date;
  max?: Date;
  disabledFn?: (date: Date) => boolean;
  onDateClick: (date: Date) => void;
  onDateHover: (date: Date | undefined) => void;
}

function MonthGrid({
  month,
  range,
  hoverDate,
  selecting,
  min,
  max,
  disabledFn,
  onDateClick,
  onDateHover,
}: MonthGridProps) {
  const gridDays = eachDayOfInterval({
    start: startOfWeek(startOfMonth(month)),
    end:   endOfWeek(endOfMonth(month)),
  });

  function isDisabled(date: Date): boolean {
    if (min && isBefore(date, min)) return true;
    if (max && isAfter(date, max)) return true;
    if (disabledFn?.(date)) return true;
    return false;
  }

  // Compute the "preview" range for hover highlighting
  function getEffectiveRange(): { from: Date; to: Date } | undefined {
    if (!range?.from) return undefined;
    const anchor = range.from;
    const end = selecting === 'to' ? (hoverDate ?? range.to) : undefined;
    if (!end) return { from: anchor, to: anchor };
    if (isBefore(end, anchor)) return { from: end, to: anchor };
    return { from: anchor, to: end };
  }

  const effective = getEffectiveRange();

  return (
    <div className="flex flex-col gap-2 min-w-[17rem]">
      <div className="grid grid-cols-7">
        {DAYS.map((d) => (
          <div key={d} className="flex h-8 items-center justify-center text-xs font-medium text-fg-secondary">
            {d}
          </div>
        ))}

        {gridDays.map((date) => {
          const inMonth   = isSameMonth(date, month);
          const disabled  = isDisabled(date);
          const isFrom    = effective && isSameDay(date, effective.from);
          const isTo      = effective?.to && isSameDay(date, effective.to);
          const inRange   = effective?.to && isWithinInterval(date, { start: effective.from, end: effective.to });
          const isEndpoints = isFrom || isTo;
          const isCurrent = isToday(date);
          const isSingle  = effective && isSameDay(effective.from, effective.to ?? effective.from);

          return (
            <div
              key={date.toISOString()}
              className={cn(
                'relative flex h-8 items-center justify-center',
                // Range fill (between from and to, excluding endpoints row edges)
                inRange && !isEndpoints && 'bg-accent-subtle',
                // Left-side rounding for range fill
                inRange && isFrom && !isSingle && 'rounded-l-full',
                // Right-side rounding for range fill
                inRange && isTo && !isSingle && 'rounded-r-full',
              )}
            >
              <button
                type="button"
                onClick={() => !disabled && onDateClick(date)}
                onMouseEnter={() => onDateHover(date)}
                onMouseLeave={() => onDateHover(undefined)}
                disabled={disabled}
                aria-label={format(date, 'EEEE, MMMM d, yyyy')}
                className={cn(
                  'flex h-8 w-8 items-center justify-center rounded-full text-xs transition-colors z-10',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1',
                  'disabled:pointer-events-none disabled:opacity-30',
                  isEndpoints
                    ? 'bg-accent text-accent-on font-semibold'
                    : isCurrent && inMonth
                    ? 'border border-accent text-accent font-semibold hover:bg-accent-subtle'
                    : inMonth
                    ? 'text-foreground hover:bg-surface'
                    : 'text-fg-secondary hover:bg-surface',
                )}
              >
                {format(date, 'd')}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── RangeCalendar ────────────────────────────────────────────────────────────

export interface RangeCalendarProps {
  value?: DateRange;
  onValueChange?: (range: DateRange | undefined) => void;
  min?: Date;
  max?: Date;
  disabled?: (date: Date) => boolean;
  className?: string;
}

export function RangeCalendar({
  value: controlledValue,
  onValueChange,
  min,
  max,
  disabled: disabledFn,
  className,
}: RangeCalendarProps) {
  const isControlled = controlledValue !== undefined;
  const [internalValue, setInternalValue] = React.useState<DateRange | undefined>();
  const range = isControlled ? controlledValue : internalValue;

  const [selecting, setSelecting] = React.useState<'from' | 'to'>('from');
  const [hoverDate, setHoverDate] = React.useState<Date | undefined>();
  const [leftMonth, setLeftMonth] = React.useState(range?.from ?? new Date());

  const rightMonth = addMonths(leftMonth, 1);

  function commit(next: DateRange | undefined) {
    if (!isControlled) setInternalValue(next);
    onValueChange?.(next);
  }

  function handleDateClick(date: Date) {
    const d = startOfDay(date);

    if (selecting === 'from' || !range?.from) {
      commit({ from: d });
      setSelecting('to');
    } else {
      // If clicked before existing from, swap
      const from = range.from;
      if (isBefore(d, from)) {
        commit({ from: d, to: from });
      } else {
        commit({ from, to: d });
      }
      setSelecting('from');
      setHoverDate(undefined);
    }
  }

  return (
    <div
      className={cn(
        'inline-flex flex-col gap-4 rounded-[3px] border border-border bg-card p-4 shadow-sm',
        className,
      )}
    >
      {/* Month navigation */}
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => setLeftMonth((m) => subMonths(m, 1))}
          aria-label="Previous month"
          className="flex h-7 w-7 items-center justify-center rounded-[3px] text-fg-secondary hover:bg-surface hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1"
        >
          <ChevronLeft />
        </button>

        <div className="flex flex-1 justify-around">
          <span className="text-sm font-semibold text-foreground">{format(leftMonth, 'MMMM yyyy')}</span>
          <span className="text-sm font-semibold text-foreground">{format(rightMonth, 'MMMM yyyy')}</span>
        </div>

        <button
          type="button"
          onClick={() => setLeftMonth((m) => addMonths(m, 1))}
          aria-label="Next month"
          className="flex h-7 w-7 items-center justify-center rounded-[3px] text-fg-secondary hover:bg-surface hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Two month grids */}
      <div className="flex gap-6">
        <MonthGrid
          month={leftMonth}
          range={range}
          hoverDate={hoverDate}
          selecting={selecting}
          min={min}
          max={max}
          disabledFn={disabledFn}
          onDateClick={handleDateClick}
          onDateHover={setHoverDate}
        />
        <div className="w-px bg-border shrink-0" />
        <MonthGrid
          month={rightMonth}
          range={range}
          hoverDate={hoverDate}
          selecting={selecting}
          min={min}
          max={max}
          disabledFn={disabledFn}
          onDateClick={handleDateClick}
          onDateHover={setHoverDate}
        />
      </div>

      {/* Footer hint */}
      <p className="text-xs text-fg-secondary text-center">
        {selecting === 'from' ? 'Select start date' : 'Select end date'}
      </p>
    </div>
  );
}

// ─── DateRangePicker ──────────────────────────────────────────────────────────

export interface DateRangePickerProps {
  value?: DateRange;
  defaultValue?: DateRange;
  onValueChange?: (range: DateRange | undefined) => void;
  dateFormat?: string;
  placeholder?: string;
  min?: Date;
  max?: Date;
  disabled?: boolean;
  disabledDate?: (date: Date) => boolean;
  error?: boolean;
  size?: DateRangePickerSize;
  label?: string;
  hint?: string;
  id?: string;
  className?: string;
}

const triggerSizes: Record<DateRangePickerSize, string> = {
  sm: 'h-7 px-2.5 text-xs',
  md: 'h-9 px-3 text-sm',
  lg: 'h-11 px-4 text-base',
  xl: 'h-13 px-5 text-base',
};

const iconSizes: Record<DateRangePickerSize, string> = {
  sm: 'h-3.5 w-3.5',
  md: 'h-4 w-4',
  lg: 'h-4 w-4',
  xl: 'h-5 w-5',
};

function formatRange(range: DateRange | undefined, fmt: string): string {
  if (!range?.from) return '';
  const from = format(range.from, fmt);
  const to   = range.to ? format(range.to, fmt) : '…';
  return `${from} → ${to}`;
}

export function DateRangePicker({
  value: controlledValue,
  defaultValue,
  onValueChange,
  dateFormat = 'dd/MM/yyyy',
  placeholder = 'Select date range…',
  min,
  max,
  disabled = false,
  disabledDate,
  error = false,
  size = 'md',
  label,
  hint,
  id,
  className,
}: DateRangePickerProps) {
  const uid = React.useId();
  const inputId = id ?? uid;

  const isControlled = controlledValue !== undefined;
  const [internalValue, setInternalValue] = React.useState<DateRange | undefined>(defaultValue);
  const range = isControlled ? controlledValue : internalValue;

  const [open, setOpen] = React.useState(false);

  function handleRangeChange(next: DateRange | undefined) {
    if (!isControlled) setInternalValue(next);
    onValueChange?.(next);
    // Close once a complete range is selected
    if (next?.from && next?.to) {
      setTimeout(() => setOpen(false), 150);
    }
  }

  const displayValue = formatRange(range, dateFormat);

  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      {label && (
        <label htmlFor={inputId} className="text-sm font-semibold text-foreground">
          {label}
        </label>
      )}

      <RadixPopover.Root open={open} onOpenChange={disabled ? undefined : setOpen}>
        <RadixPopover.Trigger asChild>
          <button
            id={inputId}
            type="button"
            disabled={disabled}
            aria-haspopup="dialog"
            aria-expanded={open}
            className={cn(
              'relative flex w-full items-center justify-between gap-2 rounded-[3px] border bg-card text-left transition-colors',
              'focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-0 focus:border-accent',
              'disabled:cursor-not-allowed disabled:bg-surface disabled:opacity-50',
              error ? 'border-error bg-error-subtle focus:ring-error' : 'border-border',
              triggerSizes[size],
            )}
          >
            <span className={displayValue ? 'text-foreground' : 'text-fg-secondary'}>
              {displayValue || placeholder}
            </span>
            <CalendarIcon className={cn('shrink-0 text-fg-secondary', iconSizes[size])} />
          </button>
        </RadixPopover.Trigger>

        <RadixPopover.Portal>
          <RadixPopover.Content
            sideOffset={4}
            align="start"
            className={cn(
              'z-50',
              'data-[state=open]:animate-in data-[state=closed]:animate-out',
              'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
              'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
              'data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2',
            )}
          >
            <RangeCalendar
              value={range}
              onValueChange={handleRangeChange}
              min={min}
              max={max}
              disabled={disabledDate}
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
