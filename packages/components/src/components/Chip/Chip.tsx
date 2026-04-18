import * as React from 'react';
import { cn } from '../../lib/cn';

export type ChipVariant = 'neutral' | 'primary' | 'success' | 'warning' | 'error';
export type ChipSize = 'sm' | 'md';

export interface ChipProps {
  children: React.ReactNode;
  variant?: ChipVariant;
  size?: ChipSize;
  /** Toggleable selected state — adds accent fill */
  selected?: boolean;
  /** Makes the chip interactive (clickable to toggle) */
  onClick?: () => void;
  /** If provided, renders a remove (×) button */
  onRemove?: () => void;
  /** Optional icon before the label */
  icon?: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

const base =
  'inline-flex items-center gap-1.5 font-semibold rounded-full border transition-colors select-none';

const sizes: Record<ChipSize, { chip: string; remove: string }> = {
  sm: { chip: 'px-2.5 py-0.5 text-[11px]', remove: 'h-3 w-3' },
  md: { chip: 'px-3 py-1 text-xs',          remove: 'h-3.5 w-3.5' },
};

const variants: Record<ChipVariant, { default: string; selected: string }> = {
  neutral: {
    default:  'bg-card border-border text-fg-secondary hover:border-border-strong hover:text-foreground',
    selected: 'bg-accent-subtle border-accent text-accent-foreground',
  },
  primary: {
    default:  'bg-card border-border text-fg-secondary hover:border-accent hover:text-accent-foreground',
    selected: 'bg-accent-subtle border-accent text-accent-foreground',
  },
  success: {
    default:  'bg-card border-border text-fg-secondary hover:border-success-border hover:text-success-foreground',
    selected: 'bg-success-subtle border-success-border text-success-foreground',
  },
  warning: {
    default:  'bg-card border-border text-fg-secondary hover:border-warning-border hover:text-warning-foreground',
    selected: 'bg-warning-subtle border-warning-border text-warning-foreground',
  },
  error: {
    default:  'bg-card border-border text-fg-secondary hover:border-error-border hover:text-error-foreground',
    selected: 'bg-error-subtle border-error-border text-error-foreground',
  },
};

export const Chip = React.forwardRef<HTMLButtonElement | HTMLSpanElement, ChipProps>(function Chip(
  {
    children,
    variant = 'neutral',
    size = 'md',
    selected = false,
    onClick,
    onRemove,
    icon,
    disabled = false,
    className,
    ...props
  },
  ref,
) {
  const { chip: chipSize, remove: removeSize } = sizes[size];
  const variantStyle = selected ? variants[variant].selected : variants[variant].default;
  const isInteractive = Boolean(onClick);

  const Comp = isInteractive ? 'button' : 'span';

  return (
    <Comp
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      type={isInteractive ? 'button' : undefined}
      onClick={isInteractive ? onClick : undefined}
      disabled={isInteractive ? disabled : undefined}
      aria-pressed={isInteractive ? selected : undefined}
      className={cn(
        base,
        chipSize,
        variantStyle,
        isInteractive && !disabled && 'cursor-pointer',
        isInteractive && 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        disabled && 'opacity-40 pointer-events-none',
        className,
      )}
    >
      {icon && <span className="shrink-0 -ml-0.5">{icon}</span>}
      {children}
      {onRemove && (
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); onRemove(); }}
          disabled={disabled}
          aria-label="Remove"
          className="shrink-0 -mr-0.5 rounded-full opacity-60 hover:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className={removeSize}
          >
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      )}
    </Comp>
  );
});
