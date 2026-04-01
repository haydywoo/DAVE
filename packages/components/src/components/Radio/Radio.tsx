import * as React from 'react';
import * as RadixRadio from '@radix-ui/react-radio-group';
import { cn } from '../../lib/cn';

// ─── Group ────────────────────────────────────────────────────────────────────

export interface RadioGroupProps {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  orientation?: 'horizontal' | 'vertical';
  children: React.ReactNode;
  className?: string;
}

export function RadioGroup({
  value,
  defaultValue,
  onValueChange,
  disabled,
  orientation = 'vertical',
  children,
  className,
}: RadioGroupProps) {
  return (
    <RadixRadio.Root
      value={value}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      disabled={disabled}
      orientation={orientation}
      className={cn(
        orientation === 'vertical' ? 'flex flex-col gap-2.5' : 'flex flex-row flex-wrap gap-4',
        className,
      )}
    >
      {children}
    </RadixRadio.Root>
  );
}

// ─── Item ─────────────────────────────────────────────────────────────────────

export interface RadioItemProps {
  value: string;
  children?: React.ReactNode;
  label?: string;
  description?: string;
  disabled?: boolean;
  id?: string;
}

export function RadioItem({ value, children, label, description, disabled, id }: RadioItemProps) {
  const itemId = id ?? `radio-${value}`;

  return (
    <div className={cn('flex items-start gap-2.5', disabled && 'opacity-40')}>
      <RadixRadio.Item
        id={itemId}
        value={value}
        disabled={disabled}
        className={cn(
          'mt-0.5 h-4 w-4 shrink-0 rounded-full border border-border bg-card',
          'transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
          'data-[state=checked]:border-accent data-[state=checked]:bg-accent',
          disabled ? 'cursor-not-allowed' : 'cursor-pointer',
        )}
      >
        <RadixRadio.Indicator className="flex items-center justify-center">
          <div className="h-1.5 w-1.5 rounded-full bg-accent-on" />
        </RadixRadio.Indicator>
      </RadixRadio.Item>

      {(label || description || children) && (
        <label
          htmlFor={itemId}
          className={cn('flex flex-col gap-0.5', disabled ? 'cursor-not-allowed' : 'cursor-pointer')}
        >
          {label && <span className="text-sm font-medium text-foreground leading-none">{label}</span>}
          {description && <span className="text-xs text-fg-secondary">{description}</span>}
          {children}
        </label>
      )}
    </div>
  );
}
