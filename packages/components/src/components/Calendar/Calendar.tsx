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
  addYears,
  subYears,
  setMonth,
  format,
  getMonth,
  getYear,
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

type CalendarView = 'days' | 'months';

const DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

const MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

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

  const [view, setView] = React.useState<CalendarView>('days');

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

  function isMonthDisabled(monthIndex: number): boolean {
    // Disabled if every day in the month is before min or after max
    const monthDate = setMonth(viewMonth, monthIndex);
    const monthStart = startOfMonth(monthDate);
    const monthEnd = endOfMonth(monthDate);
    if (min && isBefore(monthEnd, min)) return true;
    if (max && isAfter(monthStart, max)) return true;
    return false;
  }

  function select(date: Date) {
    if (isDisabled(date)) return;
    if (!isControlled) setInternalValue(date);
    onValueChange?.(date);
  }

  function selectMonth(monthIndex: number) {
    if (isMonthDisabled(monthIndex)) return;
    setViewMonth((m) => setMonth(m, monthIndex));
    setView('days');
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
      if (!isSameMonth(next, viewMonth)) {
        setViewMonth(isBefore(next, viewMonth) ? subMonths(viewMonth, 1) : addMonths(viewMonth, 1));
      }
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

  const currentYear = getYear(viewMonth);
  const todayMonth = getMonth(new Date());
  const todayYear  = getYear(new Date());

  return (
    <div
      className={cn(
        'inline-flex flex-col gap-3 rounded-[3px] border border-border bg-card p-4 shadow-sm',
        className,
      )}
      role="group"
      aria-label={view === 'days' ? format(viewMonth, 'MMMM yyyy') : String(currentYear)}
    >
      {/* ── Month picker view ─────────────────────────────────── */}
      {view === 'months' && (
        <>
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setViewMonth((m) => subYears(m, 1))}
              aria-label="Previous year"
              className="flex h-7 w-7 items-center justify-center rounded-[3px] text-fg-secondary hover:bg-surface hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1"
            >
              <ChevronLeft />
            </button>

            <button
              type="button"
              onClick={() => setView('days')}
              className="text-sm font-semibold text-foreground hover:text-accent transition-colors focus-visible:outline-none"
            >
              {currentYear}
            </button>

            <button
              type="button"
              onClick={() => setViewMonth((m) => addYears(m, 1))}
              aria-label="Next year"
              className="flex h-7 w-7 items-center justify-center rounded-[3px] text-fg-secondary hover:bg-surface hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1"
            >
              <ChevronRight />
            </button>
          </div>

          <div className="grid grid-cols-3 gap-1">
            {MONTHS.map((label, i) => {
              const isSelectedMonth = selected
                ? getMonth(selected) === i && getYear(selected) === currentYear
                : false;
              const isCurrentMonth = todayMonth === i && todayYear === currentYear;
              const disabled = isMonthDisabled(i);

              return (
                <button
                  key={label}
                  type="button"
                  onClick={() => selectMonth(i)}
                  disabled={disabled}
                  className={cn(
                    'rounded-[3px] py-2 text-xs font-medium transition-colors',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1',
                    'disabled:pointer-events-none disabled:opacity-30',
                    isSelectedMonth
                      ? 'bg-accent text-accent-on font-semibold'
                      : isCurrentMonth
                      ? 'border border-accent text-accent hover:bg-accent-subtle'
                      : 'text-foreground hover:bg-surface',
                  )}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </>
      )}

      {/* ── Day picker view ───────────────────────────────────── */}
      {view === 'days' && (
        <>
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setViewMonth((m) => subMonths(m, 1))}
              aria-label="Previous month"
              className="flex h-7 w-7 items-center justify-center rounded-[3px] text-fg-secondary hover:bg-surface hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1"
            >
              <ChevronLeft />
            </button>

            <button
              type="button"
              onClick={() => setView('months')}
              aria-label="Select month and year"
              className="group flex items-center gap-1 text-sm font-semibold text-foreground hover:text-accent transition-colors focus-visible:outline-none"
            >
              {format(viewMonth, 'MMMM yyyy')}
              <svg
                width="12" height="12" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                aria-hidden="true"
                className="text-fg-secondary group-hover:text-accent transition-colors"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => setViewMonth((m) => addMonths(m, 1))}
              aria-label="Next month"
              className="flex h-7 w-7 items-center justify-center rounded-[3px] text-fg-secondary hover:bg-surface hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1"
            >
              <ChevronRight />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-y-1">
            {DAYS.map((d) => (
              <div key={d} className="flex h-8 items-center justify-center text-xs font-medium text-fg-secondary">
                {d}
              </div>
            ))}

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
        </>
      )}
    </div>
  );
}
