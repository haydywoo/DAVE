'use client';

import * as React from 'react';
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
  addMonths,
  subMonths,
  format,
  getDay,
} from 'date-fns';
import { cn } from '../../lib/cn';

export interface CalendarProps {
  value?: Date;
  defaultValue?: Date;
  onValueChange?: (date: Date) => void;
  /** Minimum selectable date */
  min?: Date;
  /** Maximum selectable date */
  max?: Date;
  /** Dates to mark as disabled */
  disabled?: (date: Date) => boolean;
  /** Initial month to display (defaults to value or today) */
  defaultMonth?: Date;
  className?: string;
}

const DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

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

export function Calendar({
  value: controlledValue,
  defaultValue,
  onValueChange,
  min,
  max,
  disabled: isDisabledFn,
  defaultMonth,
  className,
}: CalendarProps) {
  const isControlled = controlledValue !== undefined;
  const [internalValue, setInternalValue] = React.useState<Date | undefined>(defaultValue);
  const selected = isControlled ? controlledValue : internalValue;

  const [viewMonth, setViewMonth] = React.useState<Date>(
    defaultMonth ?? selected ?? new Date(),
  );

  // Keep view in sync when controlled value changes
  React.useEffect(() => {
    if (isControlled && controlledValue) setViewMonth(controlledValue);
  }, [isControlled, controlledValue]);

  // Build the grid: week rows from first day of month's week to last day of month's week
  const gridDays = eachDayOfInterval({
    start: startOfWeek(startOfMonth(viewMonth)),
    end:   endOfWeek(endOfMonth(viewMonth)),
  });

  function isDisabled(date: Date): boolean {
    if (min && isBefore(date, min)) return true;
    if (max && isAfter(date, max)) return true;
    if (isDisabledFn?.(date)) return true;
    return false;
  }

  function select(date: Date) {
    if (isDisabled(date)) return;
    if (!isControlled) setInternalValue(date);
    onValueChange?.(date);
  }

  function handleKeyDown(e: React.KeyboardEvent, date: Date) {
    let next: Date | null = null;
    if (e.key === 'ArrowRight') next = new Date(date.getTime() + 86400000);
    if (e.key === 'ArrowLeft')  next = new Date(date.getTime() - 86400000);
    if (e.key === 'ArrowDown')  next = new Date(date.getTime() + 7 * 86400000);
    if (e.key === 'ArrowUp')    next = new Date(date.getTime() - 7 * 86400000);
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); select(date); return; }
    if (next) {
      e.preventDefault();
      // Navigate months if needed
      if (!isSameMonth(next, viewMonth)) {
        setViewMonth(isBefore(next, viewMonth) ? subMonths(viewMonth, 1) : addMonths(viewMonth, 1));
      }
      // Focus the next day button
      setTimeout(() => {
        const btn = document.querySelector<HTMLButtonElement>(`[data-calendar-date="${format(next!, 'yyyy-MM-dd')}"]`);
        btn?.focus();
      }, 0);
    }
  }

  // Chunk into weeks
  const weeks: Date[][] = [];
  for (let i = 0; i < gridDays.length; i += 7) {
    weeks.push(gridDays.slice(i, i + 7));
  }

  return (
    <div
      className={cn(
        'inline-flex flex-col gap-3 rounded-[3px] border border-border bg-card p-4 shadow-sm',
        className,
      )}
      role="group"
      aria-label={format(viewMonth, 'MMMM yyyy')}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => setViewMonth((m) => subMonths(m, 1))}
          aria-label="Previous month"
          className="flex h-7 w-7 items-center justify-center rounded-[3px] text-fg-secondary hover:bg-surface hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1"
        >
          <ChevronLeft />
        </button>

        <span className="text-sm font-semibold text-foreground">
          {format(viewMonth, 'MMMM yyyy')}
        </span>

        <button
          type="button"
          onClick={() => setViewMonth((m) => addMonths(m, 1))}
          aria-label="Next month"
          className="flex h-7 w-7 items-center justify-center rounded-[3px] text-fg-secondary hover:bg-surface hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Day-of-week headers */}
      <div className="grid grid-cols-7 gap-y-1">
        {DAYS.map((d) => (
          <div key={d} className="flex h-8 items-center justify-center text-xs font-medium text-fg-secondary">
            {d}
          </div>
        ))}

        {/* Date cells */}
        {gridDays.map((date) => {
          const isSelected   = selected ? isSameDay(date, selected) : false;
          const isCurrentDay = isToday(date);
          const inMonth      = isSameMonth(date, viewMonth);
          const disabled     = isDisabled(date);

          return (
            <button
              key={date.toISOString()}
              type="button"
              data-calendar-date={format(date, 'yyyy-MM-dd')}
              onClick={() => select(date)}
              onKeyDown={(e) => handleKeyDown(e, date)}
              disabled={disabled}
              aria-label={format(date, 'EEEE, MMMM d, yyyy')}
              aria-pressed={isSelected}
              tabIndex={isSelected || (!selected && isCurrentDay) ? 0 : -1}
              className={cn(
                'flex h-8 w-8 mx-auto items-center justify-center rounded-full text-xs transition-colors',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1',
                'disabled:pointer-events-none disabled:opacity-30',
                isSelected
                  ? 'bg-accent text-accent-on font-semibold'
                  : isCurrentDay && inMonth
                  ? 'border border-accent text-accent font-semibold hover:bg-accent-subtle'
                  : inMonth
                  ? 'text-foreground hover:bg-surface'
                  : 'text-fg-secondary hover:bg-surface',
              )}
            >
              {format(date, 'd')}
            </button>
          );
        })}
      </div>
    </div>
  );
}
