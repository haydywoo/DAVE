import * as React from 'react';
import * as RadixSelect from '@radix-ui/react-select';
import { cn } from '../../lib/cn';

export type SelectSize = 'sm' | 'md' | 'lg' | 'xl';

export interface SelectProps {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  size?: SelectSize;
  error?: boolean;
  children: React.ReactNode;
  className?: string;
}

const sizes: Record<SelectSize, string> = {
  sm: 'h-7 px-2.5 text-xs',
  md: 'h-9 px-3 text-sm',
  lg: 'h-11 px-4 text-base',
  xl: 'h-13 px-5 text-base',
};

export function Select({
  value,
  defaultValue,
  onValueChange,
  placeholder = 'Select…',
  disabled,
  size = 'md',
  error,
  children,
  className,
}: SelectProps) {
  return (
    <RadixSelect.Root value={value} defaultValue={defaultValue} onValueChange={onValueChange} disabled={disabled}>
      <RadixSelect.Trigger
        className={cn(
          'inline-flex w-full items-center justify-between gap-2 rounded-[3px] border bg-card text-foreground transition-colors',
          'focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-0 focus:border-accent',
          'disabled:cursor-not-allowed disabled:bg-surface disabled:text-fg-disabled disabled:border-border',
          'data-[placeholder]:text-fg-secondary',
          error ? 'border-error' : 'border-border',
          sizes[size],
          className,
        )}
      >
        <RadixSelect.Value placeholder={placeholder} />
        <RadixSelect.Icon className="shrink-0 text-fg-secondary">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </RadixSelect.Icon>
      </RadixSelect.Trigger>

      <RadixSelect.Portal>
        <RadixSelect.Content
          position="popper"
          sideOffset={4}
          className={cn(
            'z-50 w-[var(--radix-select-trigger-width)] overflow-hidden rounded-[3px] border border-border bg-card shadow-md',
            'max-h-[var(--radix-select-content-available-height)]',
            'data-[state=open]:animate-in data-[state=closed]:animate-out',
            'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
            'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
            'data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2',
          )}
        >
          <RadixSelect.ScrollUpButton className="flex items-center justify-center py-1 text-fg-secondary">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m18 15-6-6-6 6"/></svg>
          </RadixSelect.ScrollUpButton>
          <RadixSelect.Viewport className="p-1">
            {children}
          </RadixSelect.Viewport>
          <RadixSelect.ScrollDownButton className="flex items-center justify-center py-1 text-fg-secondary">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
          </RadixSelect.ScrollDownButton>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
}

// ─── Item ─────────────────────────────────────────────────────────────────────

export interface SelectItemProps {
  value: string;
  children: React.ReactNode;
  disabled?: boolean;
}

export function SelectItem({ value, children, disabled }: SelectItemProps) {
  return (
    <RadixSelect.Item
      value={value}
      disabled={disabled}
      className={cn(
        'relative flex cursor-default select-none items-center rounded-[2px] px-2.5 py-1.5 text-sm text-foreground outline-none transition-colors',
        'focus:bg-surface',
        'data-[state=checked]:font-semibold data-[state=checked]:text-accent-foreground',
        disabled && 'pointer-events-none opacity-40',
      )}
    >
      <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
      <RadixSelect.ItemIndicator className="absolute right-2.5">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent-foreground" aria-hidden="true">
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </RadixSelect.ItemIndicator>
    </RadixSelect.Item>
  );
}

// ─── Group ────────────────────────────────────────────────────────────────────

export function SelectGroup({ children }: { children: React.ReactNode }) {
  return <RadixSelect.Group>{children}</RadixSelect.Group>;
}

// ─── Label ────────────────────────────────────────────────────────────────────

export function SelectLabel({ children }: { children: React.ReactNode }) {
  return (
    <RadixSelect.Label className="px-2.5 py-1.5 text-xs font-semibold text-fg-secondary uppercase tracking-wider">
      {children}
    </RadixSelect.Label>
  );
}

// ─── Separator ───────────────────────────────────────────────────────────────

export function SelectSeparator() {
  return <RadixSelect.Separator className="-mx-1 my-1 h-px bg-border" />;
}

// ─── Field wrapper (label + hint) ────────────────────────────────────────────

export interface SelectFieldProps {
  label?: string;
  hint?: string;
  error?: boolean;
  id?: string;
  children: React.ReactNode;
}

export function SelectField({ label, hint, error, id, children }: SelectFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={id} className="text-sm font-semibold text-foreground">
          {label}
        </label>
      )}
      {children}
      {hint && (
        <p className={cn('text-xs', error ? 'text-error-foreground' : 'text-fg-secondary')}>{hint}</p>
      )}
    </div>
  );
}
