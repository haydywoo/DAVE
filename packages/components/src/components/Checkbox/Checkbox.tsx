import * as React from 'react';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: string;
  indeterminate?: boolean;
}

export function Checkbox({ label, indeterminate, className, id, ...props }: CheckboxProps) {
  const ref = React.useRef<HTMLInputElement>(null);
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-');

  React.useEffect(() => {
    if (ref.current) ref.current.indeterminate = indeterminate ?? false;
  }, [indeterminate]);

  return (
    <label
      htmlFor={inputId}
      className={[
        'inline-flex items-center gap-2 cursor-pointer',
        props.disabled ? 'cursor-not-allowed opacity-40' : '',
        className,
      ].filter(Boolean).join(' ')}
    >
      <input
        ref={ref}
        id={inputId}
        type="checkbox"
        className="h-4 w-4 rounded-[3px] border border-[#C8C3BA] bg-white text-[#E8340A] transition-colors checked:bg-[#E8340A] checked:border-[#E8340A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8340A] focus-visible:ring-offset-2 disabled:cursor-not-allowed accent-[#E8340A]"
        {...props}
      />
      {label && (
        <span className="text-sm text-[#0F0E0C] select-none">{label}</span>
      )}
    </label>
  );
}
