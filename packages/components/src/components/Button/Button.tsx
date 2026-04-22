import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '../../lib/cn';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'soft' | 'link' | 'destructive';
export type ButtonSize    = 'sm' | 'md' | 'lg' | 'xl';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  /** Renders a square icon-only button. Provide an aria-label for accessibility. */
  icon?: React.ReactNode;
  asChild?: boolean;
  children?: React.ReactNode;
}

const base =
  'inline-flex items-center justify-center gap-2 font-semibold rounded-[3px] transition-colors duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-40 active:opacity-80';

const variants: Record<ButtonVariant, string> = {
  primary:   'bg-accent text-accent-on visited:text-accent-on hover:bg-accent-hover',
  secondary: 'bg-background text-foreground visited:text-foreground border border-border hover:bg-surface hover:border-border-strong',
  ghost:     'bg-transparent text-foreground visited:text-foreground hover:bg-surface',
  soft:      'bg-accent-subtle text-accent-foreground visited:text-accent-foreground hover:bg-accent-subtle-border',
  link:      'bg-transparent text-accent visited:text-accent underline underline-offset-4 hover:text-accent-hover',
  destructive: 'bg-error text-error-foreground visited:text-error-foreground hover:bg-error-hover',
};

const sizes: Record<ButtonSize, string> = {
  sm: 'h-7 px-3 text-xs',
  md: 'h-9 px-4 text-sm',
  lg: 'h-11 px-5 text-base',
  xl: 'h-13 px-6 text-base',
};

const iconSizes: Record<ButtonSize, string> = {
  sm: 'h-7 w-7 text-xs',
  md: 'h-9 w-9 text-sm',
  lg: 'h-11 w-11 text-base',
  xl: 'h-13 w-13 text-base',
};

const spinnerSizes: Record<ButtonSize, string> = {
  sm: 'h-3 w-3', md: 'h-4 w-4', lg: 'h-5 w-5', xl: 'h-5 w-5',
};

function Spinner({ size }: { size: ButtonSize }) {
  return (
    <svg className={cn(spinnerSizes[size], 'animate-spin')} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
    </svg>
  );
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'primary', size = 'md', isLoading = false, asChild = false, icon, leftIcon, rightIcon, className, disabled, children, ...props },
  ref,
) {
  const Comp = asChild ? Slot : 'button';
  const isIconOnly = !!icon && !children;
  return (
    <Comp
      ref={ref}
      className={cn(base, variants[variant], variant !== 'link' && (isIconOnly ? iconSizes[size] : sizes[size]), className)}
      disabled={!asChild ? (disabled || isLoading) : undefined}
      aria-busy={isLoading || undefined}
      {...props}
    >
      {isLoading ? (
        <><Spinner size={size} />{!isIconOnly && children}</>
      ) : isIconOnly ? (
        icon
      ) : leftIcon || rightIcon ? (
        <>{leftIcon}{children}{rightIcon}</>
      ) : (
        children
      )}
    </Comp>
  );
});
