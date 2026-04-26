import * as React from 'react';
import * as RadixSlider from '@radix-ui/react-slider';
import { cn } from '../../lib/cn';

export type SliderSize = 'sm' | 'md' | 'lg';

export interface SliderProps {
  value?: number[];
  defaultValue?: number[];
  onValueChange?: (value: number[]) => void;
  onValueCommit?: (value: number[]) => void;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  size?: SliderSize;
  label?: string;
  showValue?: boolean;
  formatValue?: (value: number) => string;
  className?: string;
}

const trackHeight: Record<SliderSize, string> = {
  sm: 'h-1',
  md: 'h-1.5',
  lg: 'h-2',
};

const thumbSize: Record<SliderSize, string> = {
  sm: 'h-3.5 w-3.5',
  md: 'h-4 w-4',
  lg: 'h-5 w-5',
};

export function Slider({
  value,
  defaultValue,
  onValueChange,
  onValueCommit,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  size = 'md',
  label,
  showValue = false,
  formatValue,
  className,
}: SliderProps) {
  const id = React.useId();

  const fmt = formatValue ?? ((v: number) => String(v));

  // Derive display value — controlled or uncontrolled
  const [internalValue, setInternalValue] = React.useState(defaultValue ?? [min]);
  const displayValue = value ?? internalValue;

  function handleChange(v: number[]) {
    if (!value) setInternalValue(v);
    onValueChange?.(v);
  }

  const valueLabel = displayValue.length > 1
    ? `${fmt(displayValue[0])} – ${fmt(displayValue[displayValue.length - 1])}`
    : fmt(displayValue[0]);

  return (
    <div className={cn('flex flex-col gap-2', className)}>
      {(label || showValue) && (
        <div className="flex items-center justify-between">
          {label && (
            <label htmlFor={id} className="text-sm font-medium text-foreground">
              {label}
            </label>
          )}
          {showValue && (
            <span className="text-sm text-fg-secondary tabular-nums">{valueLabel}</span>
          )}
        </div>
      )}

      <RadixSlider.Root
        id={id}
        value={value}
        defaultValue={defaultValue ?? [min]}
        onValueChange={handleChange}
        onValueCommit={onValueCommit}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        className="relative flex w-full touch-none select-none items-center"
      >
        <RadixSlider.Track
          className={cn(
            'relative grow overflow-hidden rounded-full bg-border',
            trackHeight[size],
          )}
        >
          <RadixSlider.Range className="absolute h-full bg-accent" />
        </RadixSlider.Track>

        {displayValue.map((_, i) => (
          <RadixSlider.Thumb
            key={i}
            aria-label={displayValue.length > 1 ? `Value ${i + 1}` : (label ?? 'Value')}
            className={cn(
              thumbSize[size],
              'block rounded-full border-2 border-accent bg-card',
              'transition-colors',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1',
              'disabled:pointer-events-none disabled:opacity-40',
            )}
          />
        ))}
      </RadixSlider.Root>

      {/* Min / max labels */}
      <div className="flex justify-between">
        <span className="text-xs text-fg-secondary tabular-nums">{fmt(min)}</span>
        <span className="text-xs text-fg-secondary tabular-nums">{fmt(max)}</span>
      </div>
    </div>
  );
}
