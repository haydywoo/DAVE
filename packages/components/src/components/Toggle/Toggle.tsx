import * as React from 'react';

export interface ToggleProps {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  id?: string;
}

export function Toggle({ checked, defaultChecked, disabled, onChange, label, id }: ToggleProps) {
  const [internal, setInternal] = React.useState(defaultChecked ?? false);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!isControlled) setInternal(e.target.checked);
    onChange?.(e.target.checked);
  }

  return (
    <label
      htmlFor={inputId}
      className={[
        'inline-flex items-center gap-2 cursor-pointer select-none',
        disabled ? 'cursor-not-allowed opacity-40' : '',
      ].filter(Boolean).join(' ')}
    >
      <div className="relative">
        <input
          id={inputId}
          type="checkbox"
          role="switch"
          checked={on}
          disabled={disabled}
          onChange={handleChange}
          className="sr-only peer"
        />
        {/* Track — peer-focus-visible mirrors keyboard focus onto the visual element */}
        <div
          className={[
            'w-9 h-5 rounded-full transition-colors duration-150',
            'peer-focus-visible:ring-2 peer-focus-visible:ring-accent peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-background',
            on ? 'bg-accent' : 'bg-border-strong',
          ].filter(Boolean).join(' ')}
        />
        {/* Knob */}
        <div
          className={[
            'absolute top-[3px] w-3.5 h-3.5 rounded-full bg-card shadow-sm transition-transform duration-150',
            on ? 'translate-x-[19px]' : 'translate-x-[3px]',
          ].join(' ')}
        />
      </div>
      {label && (
        <span className="text-sm text-foreground">{label}</span>
      )}
    </label>
  );
}
