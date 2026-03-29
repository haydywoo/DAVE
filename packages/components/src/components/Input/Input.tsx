import * as React from 'react';

export type InputSize = 'sm' | 'md' | 'lg';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  size?: InputSize;
  error?: boolean;
  label?: string;
  hint?: string;
}

const base =
  'w-full rounded-[3px] border bg-white font-[family-name:var(--font-body)] transition-colors placeholder:text-[#9E9890] focus:outline-none focus:ring-2 focus:ring-[#E8340A] focus:ring-offset-0 focus:border-[#E8340A] disabled:cursor-not-allowed disabled:bg-[#F0EEE9] disabled:text-[#C8C3BA] disabled:border-[#E2DED7]';

const sizes: Record<InputSize, string> = {
  sm: 'h-7 px-2.5 text-xs',
  md: 'h-9 px-3 text-sm',
  lg: 'h-11 px-4 text-base',
};

export function Input({
  size = 'md',
  error = false,
  label,
  hint,
  className,
  id,
  ...props
}: InputProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={inputId} className="text-sm font-semibold text-[#0F0E0C]">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={[
          base,
          sizes[size],
          error
            ? 'border-[#E8340A] bg-[#FFF0EC] focus:ring-[#E8340A]'
            : 'border-[#E2DED7]',
          className,
        ].filter(Boolean).join(' ')}
        {...props}
      />
      {hint && (
        <p className={`text-xs ${error ? 'text-[#B52608]' : 'text-[#9E9890]'}`}>
          {hint}
        </p>
      )}
    </div>
  );
}
