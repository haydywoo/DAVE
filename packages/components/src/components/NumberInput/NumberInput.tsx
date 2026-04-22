import * as React from 'react';
import { cn } from '../../lib/cn';

export type NumberInputSize = 'sm' | 'md' | 'lg' | 'xl';

export interface NumberInputProps {
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  precision?: number;
  disabled?: boolean;
  readOnly?: boolean;
  error?: boolean;
  size?: NumberInputSize;
  label?: string;
  hint?: string;
  placeholder?: string;
  id?: string;
  className?: string;
}

const sizeClasses: Record<NumberInputSize, { input: string; btn: string; icon: string }> = {
  sm: { input: 'h-7 text-xs px-2.5',    btn: 'w-6 text-fg-secondary',  icon: 'h-3 w-3'     },
  md: { input: 'h-9 text-sm px-3',      btn: 'w-7 text-fg-secondary',  icon: 'h-3.5 w-3.5' },
  lg: { input: 'h-11 text-base px-3.5', btn: 'w-8 text-fg-secondary',  icon: 'h-4 w-4'     },
  xl: { input: 'h-13 text-base px-4',   btn: 'w-10 text-fg-secondary', icon: 'h-4 w-4'     },
};

function MinusIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className={className} aria-hidden="true">
      <path d="M3 8h10" />
    </svg>
  );
}

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className={className} aria-hidden="true">
      <path d="M8 3v10M3 8h10" />
    </svg>
  );
}

export function NumberInput({
  value: controlledValue,
  defaultValue = 0,
  onChange,
  min,
  max,
  step = 1,
  precision,
  disabled = false,
  readOnly = false,
  error = false,
  size = 'md',
  label,
  hint,
  placeholder,
  id,
  className,
}: NumberInputProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-');
  const uid = React.useId();
  const resolvedId = inputId ?? uid;

  const isControlled = controlledValue !== undefined;
  const [internalValue, setInternalValue] = React.useState<number>(defaultValue);
  const [inputStr, setInputStr] = React.useState<string>(String(isControlled ? controlledValue : defaultValue));

  const current = isControlled ? controlledValue : internalValue;

  // Keep input string in sync when controlled value changes externally
  React.useEffect(() => {
    if (isControlled) setInputStr(String(controlledValue));
  }, [isControlled, controlledValue]);

  function clamp(v: number) {
    let result = v;
    if (min !== undefined) result = Math.max(min, result);
    if (max !== undefined) result = Math.min(max, result);
    if (precision !== undefined) result = parseFloat(result.toFixed(precision));
    return result;
  }

  function commit(v: number) {
    const clamped = clamp(v);
    if (!isControlled) setInternalValue(clamped);
    setInputStr(String(clamped));
    onChange?.(clamped);
  }

  function increment() { commit(current + step); }
  function decrement() { commit(current - step); }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputStr(e.target.value);
  }

  function handleBlur() {
    const parsed = parseFloat(inputStr);
    if (!isNaN(parsed)) {
      commit(parsed);
    } else {
      setInputStr(String(current));
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'ArrowUp')   { e.preventDefault(); increment(); }
    if (e.key === 'ArrowDown') { e.preventDefault(); decrement(); }
    if (e.key === 'Enter')     { handleBlur(); }
  }

  const atMin = min !== undefined && current <= min;
  const atMax = max !== undefined && current >= max;

  const s = sizeClasses[size];

  const btnClass = cn(
    'flex items-center justify-center shrink-0 border-border bg-surface transition-colors',
    'hover:bg-border hover:text-foreground',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1 focus-visible:z-10',
    'disabled:pointer-events-none disabled:opacity-40',
    s.btn,
  );

  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      {label && (
        <label htmlFor={resolvedId} className="text-sm font-semibold text-foreground">
          {label}
        </label>
      )}

      <div className={cn('flex rounded-[3px] border overflow-hidden', error ? 'border-error' : 'border-border')}>
        {/* Decrement */}
        <button
          type="button"
          onClick={decrement}
          disabled={disabled || readOnly || atMin}
          aria-label="Decrease"
          className={cn(btnClass, 'border-r')}
        >
          <MinusIcon className={s.icon} />
        </button>

        {/* Input */}
        <input
          id={resolvedId}
          type="text"
          inputMode="decimal"
          value={inputStr}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={current}
          className={cn(
            'flex-1 min-w-0 bg-card text-foreground text-center font-[family-name:var(--font-body)]',
            'placeholder:text-fg-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent transition-colors',
            'disabled:cursor-not-allowed disabled:bg-surface disabled:text-fg-disabled',
            error && 'bg-error-subtle',
            s.input,
          )}
        />

        {/* Increment */}
        <button
          type="button"
          onClick={increment}
          disabled={disabled || readOnly || atMax}
          aria-label="Increase"
          className={cn(btnClass, 'border-l')}
        >
          <PlusIcon className={s.icon} />
        </button>
      </div>

      {hint && (
        <p className={cn('text-xs', error ? 'text-error-foreground' : 'text-fg-secondary')}>{hint}</p>
      )}
    </div>
  );
}
