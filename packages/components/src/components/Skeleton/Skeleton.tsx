import * as React from 'react';
import { cn } from '../../lib/cn';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  rounded?: 'none' | 'sm' | 'md' | 'full';
}

const roundedMap: Record<string, string> = {
  none: 'rounded-none',
  sm:   'rounded-[3px]',
  md:   'rounded-md',
  full: 'rounded-full',
};

export function Skeleton({ className, rounded = 'sm', style, ...props }: SkeletonProps) {
  return (
    <div
      className={cn('animate-pulse bg-surface', roundedMap[rounded], className)}
      style={style}
      aria-hidden="true"
      {...props}
    />
  );
}
