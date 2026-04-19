'use client';

import * as React from 'react';
import * as RadixPopover from '@radix-ui/react-popover';
import { cn } from '../../lib/cn';

export interface ComboboxOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface ComboboxGroup {
  label: string;
  options: ComboboxOption[];
}

export type ComboboxItems = ComboboxOption[] | ComboboxGroup[];

function isGrouped(items: ComboboxItems): items is ComboboxGroup[] {
  return items.length > 0 && 'options' in items[0];
}

function flatOptions(items: ComboboxItems): ComboboxOption[] {
  if (isGrouped(items)) return items.flatMap((g) => g.options);
  return items as ComboboxOption[];
}

export type ComboboxSize = 'sm' | 'md' | 'lg' | 'xl';

export interface ComboboxProps {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  items: ComboboxItems;
  placeholder?: string;
  searchPlaceholder?: string;
  emptyText?: string;
  size?: ComboboxSize;
  side?: 'top' | 'right' | 'bottom' | 'left';
  align?: 'start' | 'center' | 'end';
  sideOffset?: number;
  disabled?: boolean;
  error?: boolean;
  className?: string;
}

const triggerSizes: Record<ComboboxSize, string> = {
  sm: 'h-7 px-2.5 text-xs',
  md: 'h-9 px-3 text-sm',
  lg: 'h-11 px-4 text-base',
  xl: 'h-13 px-5 text-base',
};

export function Combobox({
  value: controlledValue,
  defaultValue,
  onValueChange,
  items,
  placeholder = 'Select…',
  searchPlaceholder = 'Search…',
  emptyText = 'No results found.',
  size = 'md',
  side = 'bottom',
  align = 'start',
  sideOffset = 4,
  disabled = false,
  error = false,
  className,
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false);
  const [internalValue, setInternalValue] = React.useState(defaultValue ?? '');
  const [query, setQuery] = React.useState('');
  const [activeIndex, setActiveIndex] = React.useState(0);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const listRef = React.useRef<HTMLUListElement>(null);
  const listboxId = React.useId();
  const optionIdPrefix = React.useId();

  const isControlled = controlledValue !== undefined;
  const selectedValue = isControlled ? controlledValue : internalValue;

  const all = flatOptions(items);
  const selectedLabel = all.find((o) => o.value === selectedValue)?.label;

  const filtered: ComboboxItems = React.useMemo(() => {
    const q = query.toLowerCase();
    if (!q) return items;
    if (isGrouped(items)) {
      return (items as ComboboxGroup[])
        .map((g) => ({ ...g, options: g.options.filter((o) => o.label.toLowerCase().includes(q)) }))
        .filter((g) => g.options.length > 0);
    }
    return (items as ComboboxOption[]).filter((o) => o.label.toLowerCase().includes(q));
  }, [items, query]);

  const flatFiltered = flatOptions(filtered);

  function select(val: string) {
    if (!isControlled) setInternalValue(val);
    onValueChange?.(val);
    setOpen(false);
    setQuery('');
  }

  function handleOpen(next: boolean) {
    if (disabled) return;
    setOpen(next);
    if (next) {
      setQuery('');
      setActiveIndex(0);
      setTimeout(() => inputRef.current?.focus(), 10);
    }
  }

  React.useEffect(() => { setActiveIndex(0); }, [query]);

  React.useEffect(() => {
    const el = listRef.current?.querySelector(`[data-index="${activeIndex}"]`);
    el?.scrollIntoView({ block: 'nearest' });
  }, [activeIndex]);

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, flatFiltered.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const opt = flatFiltered[activeIndex];
      if (opt && !opt.disabled) select(opt.value);
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  }

  return (
    <RadixPopover.Root open={open} onOpenChange={handleOpen}>
      <RadixPopover.Trigger asChild>
        <button
          type="button"
          disabled={disabled}
          aria-haspopup="listbox"
          aria-expanded={open}
          className={cn(
            'inline-flex w-full items-center justify-between gap-2 rounded-[3px] border bg-card text-foreground transition-colors',
            'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-0 focus:border-accent',
            'disabled:cursor-not-allowed disabled:bg-surface disabled:text-fg-disabled disabled:border-border',
            error ? 'border-error' : 'border-border',
            triggerSizes[size],
            className,
          )}
        >
          <span className={cn(selectedValue ? 'text-foreground' : 'text-fg-secondary')}>
            {selectedLabel ?? placeholder}
          </span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-fg-secondary" aria-hidden="true">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
      </RadixPopover.Trigger>

      <RadixPopover.Portal>
        <RadixPopover.Content
          side={side}
          align={align}
          sideOffset={sideOffset}
          onOpenAutoFocus={(e) => e.preventDefault()}
          className={cn(
            'z-50 w-[var(--radix-popover-trigger-width)] rounded-[3px] border border-border bg-raised shadow-raised overflow-hidden',
            'data-[state=open]:animate-in data-[state=closed]:animate-out',
            'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
            'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
            'data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2',
          )}
        >
          {/* Search input */}
          <div className="flex items-center gap-2 px-2.5 border-b border-border">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-fg-secondary" aria-hidden="true">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
            </svg>
            <input
              ref={inputRef}
              role="combobox"
              aria-expanded={open}
              aria-controls={listboxId}
              aria-activedescendant={open && flatFiltered.length > 0 ? `${optionIdPrefix}-${activeIndex}` : undefined}
              aria-autocomplete="list"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={searchPlaceholder}
              className="flex-1 h-9 bg-transparent text-sm text-foreground placeholder:text-fg-secondary focus:outline-none"
            />
          </div>

          {/* Options */}
          <ul
            ref={listRef}
            id={listboxId}
            role="listbox"
            className="max-h-60 overflow-y-auto p-1"
          >
            {flatFiltered.length === 0 ? (
              <li className="py-8 text-center text-sm text-fg-secondary">
                <div className="flex flex-col items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-fg-disabled">
                    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
                  </svg>
                  {emptyText}
                </div>
              </li>
            ) : isGrouped(filtered) ? (
              (filtered as ComboboxGroup[]).map((group) => (
                <li key={group.label}>
                  <div className="px-2.5 py-1.5 text-xs font-semibold text-fg-secondary uppercase tracking-wider">
                    {group.label}
                  </div>
                  <ul>
                    {group.options.map((opt) => {
                      const globalIndex = flatFiltered.findIndex((o) => o.value === opt.value);
                      return (
                        <OptionItem
                          key={opt.value}
                          opt={opt}
                          index={globalIndex}
                          active={globalIndex === activeIndex}
                          selected={opt.value === selectedValue}
                          onSelect={select}
                          onHover={setActiveIndex}
                          idPrefix={optionIdPrefix}
                        />
                      );
                    })}
                  </ul>
                </li>
              ))
            ) : (
              (filtered as ComboboxOption[]).map((opt, i) => (
                <OptionItem
                  key={opt.value}
                  opt={opt}
                  index={i}
                  active={i === activeIndex}
                  selected={opt.value === selectedValue}
                  onSelect={select}
                  onHover={setActiveIndex}
                  idPrefix={optionIdPrefix}
                />
              ))
            )}
          </ul>
        </RadixPopover.Content>
      </RadixPopover.Portal>
    </RadixPopover.Root>
  );
}

interface OptionItemProps {
  opt: ComboboxOption;
  index: number;
  active: boolean;
  selected: boolean;
  onSelect: (val: string) => void;
  onHover: (i: number) => void;
  idPrefix: string;
}

function OptionItem({ opt, index, active, selected, onSelect, onHover, idPrefix }: OptionItemProps) {
  return (
    <li
      id={`${idPrefix}-${index}`}
      role="option"
      aria-selected={selected}
      aria-disabled={opt.disabled}
      data-index={index}
      onMouseEnter={() => onHover(index)}
      onClick={() => !opt.disabled && onSelect(opt.value)}
      className={cn(
        'relative flex cursor-default select-none items-center justify-between rounded-[2px] px-2.5 py-1.5 text-sm transition-colors',
        active && !opt.disabled && 'bg-surface',
        opt.disabled ? 'pointer-events-none opacity-40 text-fg-secondary' : 'text-foreground',
        selected && 'font-semibold text-accent-foreground',
      )}
    >
      {opt.label}
      {selected && (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent-foreground" aria-hidden="true">
          <path d="M20 6 9 17l-5-5" />
        </svg>
      )}
    </li>
  );
}
