import * as React from 'react';

export type BadgeVariant = 'neutral' | 'primary' | 'success' | 'warning' | 'error';
export type BadgeSize = 'sm' | 'md';

export interface BadgeProps {
  variant?: BadgeVariant;
  size?: BadgeSize;
  children: React.ReactNode;
}

const base = 'inline-flex items-center rounded-[3px] font-semibold';

const variants: Record<BadgeVariant, string> = {
  neutral: 'bg-[#F0EEE9] text-[#4A4640]',
  primary: 'bg-[#FFF0EC] text-[#E8340A]',
  success: 'bg-[#E6F4EC] text-[#15803D]',
  warning: 'bg-[#FFFBEB] text-[#92400E]',
  error:   'bg-[#FFF0EC] text-[#B52608]',
};

const sizes: Record<BadgeSize, string> = {
  sm: 'px-1.5 py-0.5 text-[11px]',
  md: 'px-2 py-0.5 text-xs',
};

export function Badge({ variant = 'neutral', size = 'md', children }: BadgeProps) {
  return (
    <span className={[base, variants[variant], sizes[size]].join(' ')}>
      {children}
    </span>
  );
}
