import * as React from 'react';
import { cn } from '../../lib/cn';

export interface StatProps {
  label: string;
  value: React.ReactNode;
  /** Percentage change — positive is up, negative is down */
  change?: number;
  /** Context for the change, e.g. "vs last month" */
  changeLabel?: string;
  icon?: React.ReactNode;
  className?: string;
}

export function Stat({ label, value, change, changeLabel, icon, className }: StatProps) {
  const isPositive = change !== undefined && change >= 0;
  const isNegative = change !== undefined && change < 0;

  return (
    <div className={cn('rounded-[3px] border border-border bg-card p-5', className)}>
      <div className="flex items-start justify-between gap-3">
        <p className="text-xs font-semibold text-fg-secondary uppercase tracking-wider">{label}</p>
        {icon && (
          <span className="shrink-0 text-fg-secondary" aria-hidden="true">{icon}</span>
        )}
      </div>

      <p className="mt-2 text-2xl font-bold text-foreground tabular-nums">{value}</p>

      {change !== undefined && (
        <div className="mt-2 flex items-center gap-1.5">
          <span className={cn(
            'inline-flex items-center gap-0.5 text-xs font-semibold',
            isPositive && 'text-success',
            isNegative && 'text-error',
          )}>
            {isPositive ? (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m18 15-6-6-6 6" />
              </svg>
            ) : (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m6 9 6 6 6-6" />
              </svg>
            )}
            {Math.abs(change)}%
          </span>
          {changeLabel && (
            <span className="text-xs text-fg-secondary">{changeLabel}</span>
          )}
        </div>
      )}
    </div>
  );
}
