import * as React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'destructive';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
}

const base =
  'inline-flex items-center justify-center font-semibold rounded-[3px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8340A] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-40';

const variants: Record<ButtonVariant, string> = {
  primary:     'bg-[#E8340A] text-[#F7F5F0] hover:bg-[#B52608]',
  secondary:   'bg-[#F7F5F0] text-[#0F0E0C] border border-[#E2DED7] hover:border-[#C8C3BA]',
  ghost:       'bg-transparent text-[#0F0E0C] hover:bg-[#F0EEE9]',
  destructive: 'bg-[#0F0E0C] text-[#F7F5F0] hover:bg-[#2E2B27]',
};

const sizes: Record<ButtonSize, string> = {
  sm: 'h-7 px-3 text-xs',
  md: 'h-9 px-4 text-sm',
  lg: 'h-11 px-5 text-base',
};

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={[base, variants[variant], sizes[size], className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </button>
  );
}
