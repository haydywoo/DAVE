'use client';

import * as React from 'react';
import { cn } from '../../lib/cn';

export type RatingSize = 'sm' | 'md' | 'lg';

export interface RatingProps {
  /** Controlled value (1–max). 0 = no selection. */
  value?: number;
  defaultValue?: number;
  max?: number;
  size?: RatingSize;
  /** Render as read-only display. */
  readOnly?: boolean;
  disabled?: boolean;
  onChange?: (value: number) => void;
  className?: string;
  /** Accessible label for the group. */
  label?: string;
}

const starSizes: Record<RatingSize, string> = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-7 h-7',
};

const gapSizes: Record<RatingSize, string> = {
  sm: 'gap-0.5',
  md: 'gap-1',
  lg: 'gap-1.5',
};

function Star({ filled, className }: { filled: boolean; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth={filled ? 0 : 1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export function Rating({
  value,
  defaultValue = 0,
  max = 5,
  size = 'md',
  readOnly = false,
  disabled = false,
  onChange,
  className,
  label = 'Rating',
}: RatingProps) {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = React.useState(defaultValue);
  const [hovered, setHovered] = React.useState(0);

  const current = isControlled ? (value ?? 0) : internalValue;
  const interactive = !readOnly && !disabled;

  function handleClick(i: number) {
    if (!interactive) return;
    const next = i === current ? 0 : i; // click active star to deselect
    if (!isControlled) setInternalValue(next);
    onChange?.(next);
  }

  return (
    <div
      role="radiogroup"
      aria-label={label}
      className={cn('inline-flex', gapSizes[size], className)}
      onMouseLeave={() => setHovered(0)}
    >
      {Array.from({ length: max }, (_, i) => {
        const star = i + 1;
        const filled = hovered ? star <= hovered : star <= current;
        return (
          <button
            key={star}
            type="button"
            role="radio"
            aria-checked={star === current}
            aria-label={`${star} star${star !== 1 ? 's' : ''}`}
            disabled={!interactive}
            onClick={() => handleClick(star)}
            onMouseEnter={() => interactive && setHovered(star)}
            className={cn(
              'transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1 rounded-[2px]',
              interactive
                ? filled
                  ? 'text-warning cursor-pointer'
                  : 'text-border hover:text-warning cursor-pointer'
                : filled
                  ? 'text-warning cursor-default'
                  : 'text-border cursor-default',
              disabled && 'opacity-50',
            )}
          >
            <Star filled={filled} className={starSizes[size]} />
          </button>
        );
      })}
    </div>
  );
}
