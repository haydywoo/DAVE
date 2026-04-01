import * as React from 'react';
import * as RadixProgress from '@radix-ui/react-progress';
import { cn } from '../../lib/cn';

export type ProgressSize = 'sm' | 'md' | 'lg';
export type ProgressVariant = 'default' | 'success' | 'warning' | 'error';

export interface ProgressProps {
  value?: number;
  max?: number;
  size?: ProgressSize;
  variant?: ProgressVariant;
  label?: string;
  showValue?: boolean;
  className?: string;
}

const trackSizes: Record<ProgressSize, string> = {
  sm: 'h-1',
  md: 'h-2',
  lg: 'h-3',
};

const indicatorColors: Record<ProgressVariant, string> = {
  default: 'bg-accent',
  success: 'bg-success',
  warning: 'bg-warning',
  error:   'bg-error',
};

export function Progress({
  value = 0,
  max = 100,
  size = 'md',
  variant = 'default',
  label,
  showValue = false,
  className,
}: ProgressProps) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      {(label || showValue) && (
        <div className="flex items-center justify-between">
          {label && <span className="text-xs text-fg-secondary">{label}</span>}
          {showValue && <span className="text-xs tabular-nums text-fg-secondary">{Math.round(pct)}%</span>}
        </div>
      )}
      <RadixProgress.Root
        value={value}
        max={max}
        className={cn('w-full overflow-hidden rounded-full bg-surface', trackSizes[size])}
      >
        <RadixProgress.Indicator
          className={cn('h-full rounded-full transition-all duration-500 ease-in-out', indicatorColors[variant])}
          style={{ width: `${pct}%` }}
        />
      </RadixProgress.Root>
    </div>
  );
}
