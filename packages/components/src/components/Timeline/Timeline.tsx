import * as React from 'react';
import { cn } from '../../lib/cn';

// ─── Timeline root ─────────────────────────────────────────────────────────────

export interface TimelineProps {
  children: React.ReactNode;
  className?: string;
}

export function Timeline({ children, className }: TimelineProps) {
  return (
    <ol className={cn('flex flex-col', className)}>
      {children}
    </ol>
  );
}

// ─── Timeline item ─────────────────────────────────────────────────────────────

export interface TimelineItemProps {
  /** Icon or dot rendered in the timeline track */
  icon?: React.ReactNode;
  /** Colour of the default dot when no icon is provided */
  color?: 'default' | 'success' | 'warning' | 'error' | 'info';
  /** Primary label */
  title: React.ReactNode;
  /** Supporting detail */
  description?: React.ReactNode;
  /** Timestamp or secondary metadata — rendered top-right */
  timestamp?: React.ReactNode;
  /** Whether to show the connector line below this item */
  last?: boolean;
  className?: string;
}

const dotColors: Record<NonNullable<TimelineItemProps['color']>, string> = {
  default: 'bg-border-strong',
  success: 'bg-success-border',
  warning: 'bg-warning-border',
  error:   'bg-error-border',
  info:    'bg-accent',
};

export function TimelineItem({
  icon,
  color = 'default',
  title,
  description,
  timestamp,
  last = false,
  className,
}: TimelineItemProps) {
  return (
    <li className={cn('flex gap-4 relative', className)}>
      {/* Track column */}
      <div className="flex flex-col items-center shrink-0">
        {/* Icon or dot */}
        <div
          className={cn(
            'relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full',
            icon
              ? 'bg-surface border border-border text-fg-secondary'
              : cn('border-4 border-background', dotColors[color]),
            !icon && 'h-3 w-3 mt-2.5',
          )}
          aria-hidden="true"
        >
          {icon}
        </div>
        {/* Connector line */}
        {!last && (
          <div className="flex-1 w-px bg-border mt-1 mb-0" aria-hidden="true" />
        )}
      </div>

      {/* Content */}
      <div className={cn('flex-1 pb-6 min-w-0', last && 'pb-0')}>
        <div className="flex items-start justify-between gap-4">
          <span className="text-sm font-medium text-foreground leading-6">{title}</span>
          {timestamp && (
            <span className="text-xs text-fg-secondary whitespace-nowrap shrink-0 mt-1">{timestamp}</span>
          )}
        </div>
        {description && (
          <div className="mt-1 text-sm text-fg-secondary">{description}</div>
        )}
      </div>
    </li>
  );
}
