'use client';

import * as React from 'react';
import {
  startOfMonth,
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
  addWeeks,
  setMonth,
  startOfMonth as som,
  endOfMonth,
  format,
  getMonth,
  getYear,
} from 'date-fns';
import { cn } from '../../lib/cn';

// ─── Constants ────────────────────────────────────────────────────────────────

const DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

const MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr',
  'May', 'Jun', 'Jul', 'Aug',
  'Sep', 'Oct', 'Nov', 'Dec',
];

// Day grid height = 1 header row + 6 week rows, each h-8 (32px), gap-y-1 (4px) between.
// 7 rows × 32px + 6 gaps × 4px = 224 + 24 = 248px
const GRID_HEIGHT = 'h-[248px]';

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

// ─── Types ────────────────────────────────────────────────────────────────────

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

// ─── Component ────────────────────────────────────────────────────────────────

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

  // Always render exactly 6 weeks so the grid height never changes
  const gridStart = startOfWeek(startOfMonth(viewMonth));
  const gridDays  = eachDayOfInterval({
    start: gridStart,
    end:   endOfWeek(addWeeks(gridStart, 5)),
  });

  // ── Helpers ───────────────────────────────────────────────────────────────

  function isDayDisabled(date: Date): boolean {
    if (min && isBefore(date, min)) return true;
    if (max && isAfter(date, max))  return true;
    if (isDisabledFn?.(date))       return true;
    return false;
  }

  function isMonthDisabled(monthIndex: number): boolean {
    const monthDate  = setMonth(viewMonth, monthIndex);
    const monthStart = som(monthDate);
    const monthEnd   = endOfMonth(monthDate);
    if (min && isBefore(monthEnd, min))   return true;
    if (max && isAfter(monthStart, max))  return true;
    return false;
  }

  function selectDay(date: Date) {
    if (isDayDisabled(date)) return;
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
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); selectDay(date); return; }
    if (e.key === 'Escape') { setView('days'); return; }
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

  const currentYear  = getYear(viewMonth);
  const todayMonth   = getMonth(new Date());
  const todayYear    = getYear(new Date());
  const selectedMonth = selected ? getMonth(selected) : -1;
  const selectedYear  = selected ? getYear(selected)  : -1;

  const navPrevLabel = view === 'days' ? 'Previous month' : 'Previous year';
  const navNextLabel = view === 'days' ? 'Next month'     : 'Next year';

  function navPrev() {
    if (view === 'days')   setViewMonth((m) => subMonths(m, 1));
    else                   setViewMonth((m) => subYears(m, 1));
  }
  function navNext() {
    if (view === 'days')   setViewMonth((m) => addMonths(m, 1));
    else                   setViewMonth((m) => addYears(m, 1));
  }

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <div
      className={cn(
        'inline-flex flex-col gap-3 rounded-[3px] border border-border bg-card p-4 shadow-sm select-none min-w-[17rem]',
        className,
      )}
      role="group"
      aria-label={view === 'days' ? format(viewMonth, 'MMMM yyyy') : String(currentYear)}
    >
      {/* Header — shared by both views */}
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={navPrev}
          aria-label={navPrevLabel}
          className="touch-target flex h-7 w-7 items-center justify-center rounded-[3px] text-fg-secondary hover:bg-surface hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1"
        >
          <ChevronLeft />
        </button>

        {view === 'days' ? (
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
        ) : (
          <button
            type="button"
            onClick={() => setView('days')}
            aria-label="Back to day view"
            className="group flex items-center gap-1 text-sm font-semibold text-foreground hover:text-accent transition-colors focus-visible:outline-none"
          >
            <svg
              width="12" height="12" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              aria-hidden="true"
              className="text-fg-secondary group-hover:text-accent transition-colors"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            {currentYear}
          </button>
        )}

        <button
          type="button"
          onClick={navNext}
          aria-label={navNextLabel}
          className="touch-target flex h-7 w-7 items-center justify-center rounded-[3px] text-fg-secondary hover:bg-surface hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Fixed-height grid area — both views overlap; inactive fades out */}
      <div className={cn('relative', GRID_HEIGHT)}>

        {/* ── Day view ───────────────────────────────────────────────────── */}
        <div
          className={cn(
            'absolute inset-0 grid grid-cols-7 gap-y-1 content-start transition-opacity duration-150',
            view === 'days' ? 'opacity-100' : 'opacity-0 pointer-events-none',
          )}
          aria-hidden={view !== 'days'}
        >
          {DAYS.map((d) => (
            <div key={d} className="flex h-8 items-center justify-center text-xs font-medium text-fg-secondary">
              {d}
            </div>
          ))}

          {gridDays.map((date) => {
            const isSelected   = selected ? isSameDay(date, selected) : false;
            const isCurrentDay = isToday(date);
            const inMonth      = isSameMonth(date, viewMonth);
            const disabled     = isDayDisabled(date);

            return (
              <button
                key={date.toISOString()}
                type="button"
                data-calendar-date={format(date, 'yyyy-MM-dd')}
                onClick={() => selectDay(date)}
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

        {/* ── Month view ─────────────────────────────────────────────────── */}
        <div
          className={cn(
            'absolute inset-0 grid grid-cols-3 grid-rows-4 gap-1 transition-opacity duration-150',
            view === 'months' ? 'opacity-100' : 'opacity-0 pointer-events-none',
          )}
          aria-hidden={view !== 'months'}
        >
          {MONTHS.map((label, i) => {
            const isSelected = selectedMonth === i && selectedYear === currentYear;
            const isCurrent  = todayMonth === i && todayYear === currentYear;
            const disabled   = isMonthDisabled(i);

            return (
              <button
                key={label}
                type="button"
                onClick={() => selectMonth(i)}
                disabled={disabled}
                className={cn(
                  'w-full h-full rounded-[3px] text-xs font-medium transition-colors',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1',
                  'disabled:pointer-events-none disabled:opacity-30',
                  isSelected
                    ? 'bg-accent text-accent-on font-semibold'
                    : isCurrent
                    ? 'border border-accent text-accent hover:bg-accent-subtle'
                    : 'text-foreground hover:bg-surface',
                )}
              >
                {label}
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
}
