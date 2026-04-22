import * as React from 'react';
import * as RadixSelect from '@radix-ui/react-select';
import { cn } from '../../lib/cn';

export type SelectSize    = 'sm' | 'md' | 'lg' | 'xl';
export type SelectVariant = 'outline' | 'secondary' | 'ghost';

export interface SelectProps {
  value?:           string;
  defaultValue?:    string;
  onValueChange?:   (value: string) => void;
  placeholder?:     string;
  disabled?:        boolean;
  size?:            SelectSize;
  /** outline — form input (default). secondary — bordered button. ghost — borderless button. */
  variant?:         SelectVariant;
  /** Leading icon shown inside the trigger before the value. */
  icon?:            React.ReactNode;
  /** Square icon-only trigger — hides value text and chevron. Requires icon. */
  iconOnly?:        boolean;
  side?:            'top' | 'right' | 'bottom' | 'left';
  align?:           'start' | 'center' | 'end';
  sideOffset?:      number;
  /** Override trigger width. Defaults to 'full' for outline, 'auto' for secondary/ghost. */
  width?:           'full' | 'auto';
  error?:           boolean;
  children:         React.ReactNode;
  id?:              string;
  className?:       string;
}

const sizes: Record<SelectSize, string> = {
  sm: 'h-7 px-2.5 text-xs',
  md: 'h-9 px-3  text-sm',
  lg: 'h-11 px-4 text-base',
  xl: 'h-13 px-5 text-base',
};

const iconOnlySizes: Record<SelectSize, string> = {
  sm: 'h-7 w-7',
  md: 'h-9 w-9',
  lg: 'h-11 w-11',
  xl: 'h-13 w-13',
};

const triggerVariants: Record<SelectVariant, string> = {
  outline:
    'border-border bg-card text-foreground ' +
    'data-[placeholder]:text-fg-secondary ' +
    'disabled:cursor-not-allowed disabled:bg-surface disabled:text-fg-disabled disabled:border-border',
  secondary:
    'border-border bg-card text-foreground ' +
    'hover:bg-surface data-[state=open]:bg-surface ' +
    'data-[placeholder]:text-fg-secondary ' +
    'disabled:cursor-not-allowed disabled:opacity-40',
  ghost:
    'border-transparent bg-transparent text-foreground ' +
    'hover:bg-surface data-[state=open]:bg-surface ' +
    'data-[placeholder]:text-fg-secondary ' +
    'disabled:cursor-not-allowed disabled:opacity-40',
};

export function Select({
  value,
  defaultValue,
  onValueChange,
  placeholder = 'Select…',
  disabled,
  size = 'md',
  variant = 'outline',
  icon,
  iconOnly = false,
  side = 'bottom',
  align = 'start',
  sideOffset = 4,
  width,
  error,
  children,
  id,
  className,
}: SelectProps) {
  const autoWidth = iconOnly || width === 'auto' || (width === undefined && variant !== 'outline');

  return (
    <RadixSelect.Root value={value} defaultValue={defaultValue} onValueChange={onValueChange} disabled={disabled}>
      <RadixSelect.Trigger
        id={id}
        className={cn(
          'inline-flex items-center rounded-[3px] border transition-colors',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1 focus:border-accent',
          iconOnly ? 'justify-center' : 'justify-between gap-2',
          triggerVariants[variant],
          error && 'border-error',
          iconOnly ? iconOnlySizes[size] : autoWidth ? 'w-auto' : 'w-full',
          !iconOnly && sizes[size],
          className,
        )}
      >
        {icon && <span className="shrink-0 text-fg-secondary">{icon}</span>}
        {!iconOnly && <RadixSelect.Value placeholder={placeholder} />}
        {!iconOnly && (
          <RadixSelect.Icon className="shrink-0 text-fg-secondary ml-1">
            <ChevronDownIcon />
          </RadixSelect.Icon>
        )}
      </RadixSelect.Trigger>

      <RadixSelect.Portal>
        <RadixSelect.Content
          position="popper"
          side={side}
          align={align}
          sideOffset={sideOffset}
          className={cn(
            'z-50 min-w-[var(--radix-select-trigger-width)] overflow-hidden rounded-[3px] border border-border bg-raised shadow-raised',
            'max-h-[var(--radix-select-content-available-height)]',
            'data-[state=open]:animate-in  data-[state=closed]:animate-out',
            'data-[state=closed]:fade-out-0  data-[state=open]:fade-in-0',
            'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
            'data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2',
          )}
        >
          <RadixSelect.ScrollUpButton className="flex items-center justify-center py-1 text-fg-secondary">
            <ChevronUpIcon />
          </RadixSelect.ScrollUpButton>
          <RadixSelect.Viewport className="p-1">
            {children}
          </RadixSelect.Viewport>
          <RadixSelect.ScrollDownButton className="flex items-center justify-center py-1 text-fg-secondary">
            <ChevronDownIcon />
          </RadixSelect.ScrollDownButton>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
}

// ─── Item ─────────────────────────────────────────────────────────────────────

export interface SelectItemProps {
  value:     string;
  children:  React.ReactNode;
  disabled?: boolean;
  /** Optional leading icon. */
  icon?:     React.ReactNode;
}

export function SelectItem({ value, children, disabled, icon }: SelectItemProps) {
  return (
    <RadixSelect.Item
      value={value}
      disabled={disabled}
      className={cn(
        'relative flex cursor-default select-none items-center gap-2 rounded-[2px] py-1.5 pl-2.5 pr-7 text-sm text-foreground outline-none transition-colors',
        'focus:bg-surface',
        'data-[state=checked]:font-semibold data-[state=checked]:text-accent-foreground',
        disabled && 'pointer-events-none opacity-40',
      )}
    >
      {icon && <span className="shrink-0 text-fg-secondary">{icon}</span>}
      <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
      <RadixSelect.ItemIndicator className="absolute right-2.5">
        <CheckIcon />
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

// ─── Separator ────────────────────────────────────────────────────────────────

export function SelectSeparator() {
  return <RadixSelect.Separator className="-mx-1 my-1 h-px bg-border" />;
}

// ─── Field wrapper ────────────────────────────────────────────────────────────

export interface SelectFieldProps {
  label?:    string;
  hint?:     string;
  error?:    boolean;
  id?:       string;
  children:  React.ReactNode;
}

export function SelectField({ label, hint, error, id, children }: SelectFieldProps) {
  const generatedId = React.useId();
  const fieldId = id ?? generatedId;
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={fieldId} className="text-sm font-semibold text-foreground">
          {label}
        </label>
      )}
      {React.isValidElement(children)
        ? React.cloneElement(children as React.ReactElement<{ id?: string }>, { id: fieldId })
        : children}
      {hint && (
        <p className={cn('text-xs', error ? 'text-error-foreground' : 'text-fg-secondary')}>{hint}</p>
      )}
    </div>
  );
}

// ─── Icons ────────────────────────────────────────────────────────────────────

function ChevronDownIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function ChevronUpIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m18 15-6-6-6 6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent-foreground" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
