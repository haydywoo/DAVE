import * as React from 'react';
import * as RadixSwitch from '@radix-ui/react-switch';
import { cn } from '../../lib/cn';

export type SwitchSize = 'sm' | 'md' | 'lg' | 'xl';

export interface SwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  size?: SwitchSize;
  label?: string;
  description?: string;
  id?: string;
}

const trackSizes: Record<SwitchSize, string> = {
  sm: 'h-4 w-7',
  md: 'h-5 w-9',
  lg: 'h-6 w-11',
  xl: 'h-7 w-13',
};

const thumbSizes: Record<SwitchSize, string> = {
  sm: 'h-3 w-3 data-[state=checked]:translate-x-3',
  md: 'h-3.5 w-3.5 data-[state=checked]:translate-x-4',
  lg: 'h-4.5 w-4.5 data-[state=checked]:translate-x-5',
  xl: 'h-5.5 w-5.5 data-[state=checked]:translate-x-6',
};

export function Switch({
  checked,
  defaultChecked,
  onCheckedChange,
  disabled,
  size = 'md',
  label,
  description,
  id,
}: SwitchProps) {
  const generatedId = React.useId();
  const switchId = id ?? generatedId;

  const root = (
    <RadixSwitch.Root
      id={switchId}
      checked={checked}
      defaultChecked={defaultChecked}
      onCheckedChange={onCheckedChange}
      disabled={disabled}
      className={cn(
        trackSizes[size],
        'shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors',
        'bg-border data-[state=checked]:bg-accent',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
        'disabled:cursor-not-allowed disabled:opacity-40',
      )}
    >
      <RadixSwitch.Thumb
        className={cn(thumbSizes[size], 'block rounded-full bg-white transition-transform', 'data-[state=unchecked]:translate-x-0')}
      />
    </RadixSwitch.Root>
  );

  if (!label && !description) return root;

  return (
    <div className={cn('flex items-start gap-3', disabled && 'opacity-40')}>
      <div className="pt-0.5">{root}</div>
      <label
        htmlFor={switchId}
        className={cn('flex flex-col gap-0.5', disabled ? 'cursor-not-allowed' : 'cursor-pointer')}
      >
        {label && <span className="text-sm font-medium text-foreground leading-none">{label}</span>}
        {description && <span className="text-xs text-fg-secondary">{description}</span>}
      </label>
    </div>
  );
}
