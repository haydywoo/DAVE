import * as React from 'react';
import { cn } from '../../lib/cn';

export interface SkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  rounded?: 'none' | 'sm' | 'md' | 'full';
}

const roundedMap: Record<string, string> = {
  none: 'rounded-none',
  sm:   'rounded-[3px]',
  md:   'rounded-md',
  full: 'rounded-full',
};

export function Skeleton({ className, width, height, rounded = 'sm' }: SkeletonProps) {
  return (
    <div
      className={cn('animate-pulse bg-surface', roundedMap[rounded], className)}
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
      }}
      aria-hidden="true"
    />
  );
}
