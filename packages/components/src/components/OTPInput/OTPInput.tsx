'use client';

import * as React from 'react';
import { cn } from '../../lib/cn';

export type OTPInputSize = 'sm' | 'md' | 'lg' | 'xl';

export interface OTPInputProps {
  /** Number of digit slots. Defaults to 6. */
  length?: number;
  size?: OTPInputSize;
  /** Controlled value string, e.g. "123456" */
  value?: string;
  onChange?: (value: string) => void;
  /** Called when every slot is filled. */
  onComplete?: (value: string) => void;
  disabled?: boolean;
  error?: boolean;
  /** Mask input like a password field. */
  mask?: boolean;
  className?: string;
}

const slotSizes: Record<OTPInputSize, string> = {
  sm: 'w-8  h-9  text-sm',
  md: 'w-10 h-11 text-base',
  lg: 'w-12 h-13 text-lg',
  xl: 'w-14 h-16 text-xl',
};

const gapSizes: Record<OTPInputSize, string> = {
  sm: 'gap-1.5',
  md: 'gap-2',
  lg: 'gap-2.5',
  xl: 'gap-3',
};

export function OTPInput({
  length = 6,
  size = 'md',
  value,
  onChange,
  onComplete,
  disabled = false,
  error = false,
  mask = false,
  className,
}: OTPInputProps) {
  const inputsRef = React.useRef<(HTMLInputElement | null)[]>([]);
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = React.useState('');
  const digits = (isControlled ? value : internalValue).split('').slice(0, length);

  function update(next: string) {
    if (!isControlled) setInternalValue(next);
    onChange?.(next);
    if (next.length === length) onComplete?.(next);
  }

  function handleKeyDown(i: number, e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Backspace') {
      e.preventDefault();
      const current = isControlled ? value ?? '' : internalValue;
      if (current[i]) {
        // Clear this slot
        const next = current.slice(0, i) + current.slice(i + 1);
        update(next);
      } else if (i > 0) {
        // Move back and clear previous
        const next = current.slice(0, i - 1) + current.slice(i);
        update(next);
        inputsRef.current[i - 1]?.focus();
      }
    } else if (e.key === 'ArrowLeft' && i > 0) {
      e.preventDefault();
      inputsRef.current[i - 1]?.focus();
    } else if (e.key === 'ArrowRight' && i < length - 1) {
      e.preventDefault();
      inputsRef.current[i + 1]?.focus();
    }
  }

  function handleInput(i: number, e: React.ChangeEvent<HTMLInputElement>) {
    const raw = e.target.value.replace(/\D/g, '');
    if (!raw) return;

    const current = isControlled ? value ?? '' : internalValue;

    // Support paste — fill from slot i
    if (raw.length > 1) {
      const next = (current.slice(0, i) + raw).slice(0, length);
      update(next);
      const focusIdx = Math.min(i + raw.length, length - 1);
      inputsRef.current[focusIdx]?.focus();
      return;
    }

    const next = current.slice(0, i) + raw + current.slice(i + 1);
    update(next.slice(0, length));
    if (i < length - 1) inputsRef.current[i + 1]?.focus();
  }

  function handleFocus(e: React.FocusEvent<HTMLInputElement>) {
    e.target.select();
  }

  function handlePaste(e: React.ClipboardEvent) {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, length);
    update(pasted);
    const focusIdx = Math.min(pasted.length, length - 1);
    inputsRef.current[focusIdx]?.focus();
  }

  const slotBase = cn(
    'rounded-[3px] border bg-card text-center font-[family-name:var(--font-body)] font-semibold tabular-nums',
    'transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-0 focus:border-accent',
    'disabled:cursor-not-allowed disabled:bg-surface disabled:text-fg-disabled disabled:border-border',
    slotSizes[size],
    error ? 'border-error bg-error-subtle text-error-foreground' : 'border-border text-foreground',
  );

  return (
    <div className={cn('flex', gapSizes[size], className)}>
      {Array.from({ length }, (_, i) => (
        <input
          key={i}
          ref={el => { inputsRef.current[i] = el; }}
          type={mask ? 'password' : 'text'}
          inputMode="numeric"
          pattern="\d*"
          maxLength={1}
          value={digits[i] ?? ''}
          disabled={disabled}
          autoComplete={i === 0 ? 'one-time-code' : 'off'}
          className={slotBase}
          onChange={e => handleInput(i, e)}
          onKeyDown={e => handleKeyDown(i, e)}
          onFocus={handleFocus}
          onPaste={handlePaste}
          aria-label={`Digit ${i + 1} of ${length}`}
        />
      ))}
    </div>
  );
}
