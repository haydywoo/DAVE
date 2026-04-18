'use client';

import * as React from 'react';
import * as RadixDialog from '@radix-ui/react-dialog';
import { cn } from '../../lib/cn';

// ─── Context ──────────────────────────────────────────────────────────────────

interface CommandContextValue {
  search: string;
  setSearch: (s: string) => void;
  activeId: string | null;
  setActiveId: (id: string | null) => void;
  items: React.MutableRefObject<Map<string, string>>; // id → normalized value
  visibleItems: string[]; // ordered list of visible item ids
  registerItem: (id: string, value: string) => void;
  unregisterItem: (id: string) => void;
  notifyVisible: (id: string, visible: boolean) => void;
  onSelect: (id: string) => void;
  selectCallbacks: React.MutableRefObject<Map<string, () => void>>;
}

const CommandContext = React.createContext<CommandContextValue | null>(null);

function useCommand() {
  const ctx = React.useContext(CommandContext);
  if (!ctx) throw new Error('Command subcomponents must be used within <Command>');
  return ctx;
}

// ─── Command (root) ───────────────────────────────────────────────────────────

export interface CommandProps {
  children: React.ReactNode;
  className?: string;
}

export function Command({ children, className }: CommandProps) {
  const [search, setSearch] = React.useState('');
  const [activeId, setActiveId] = React.useState<string | null>(null);
  const items = React.useRef<Map<string, string>>(new Map()); // id → normalized value
  const selectCallbacks = React.useRef<Map<string, () => void>>(new Map());
  // Ordered list of currently visible item IDs (registered in DOM order)
  const [visibleItems, setVisibleItems] = React.useState<string[]>([]);

  const registerItem = React.useCallback((id: string, value: string) => {
    items.current.set(id, value.toLowerCase());
  }, []);

  const unregisterItem = React.useCallback((id: string) => {
    items.current.delete(id);
    selectCallbacks.current.delete(id);
    setVisibleItems(prev => prev.filter(i => i !== id));
    setActiveId(prev => prev === id ? null : prev);
  }, []);

  const notifyVisible = React.useCallback((id: string, visible: boolean) => {
    setVisibleItems(prev => {
      if (visible) {
        if (prev.includes(id)) return prev;
        // Insert in registration order
        const order = Array.from(items.current.keys());
        const next = [...prev, id].sort((a, b) => order.indexOf(a) - order.indexOf(b));
        return next;
      } else {
        return prev.filter(i => i !== id);
      }
    });
  }, []);

  const onSelect = React.useCallback((id: string) => {
    selectCallbacks.current.get(id)?.();
  }, []);

  // Reset active item when search changes
  React.useEffect(() => {
    setActiveId(null);
  }, [search]);

  // Keyboard navigation (handled at Command root level)
  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      if (visibleItems.length === 0) return;
      const currentIdx = activeId ? visibleItems.indexOf(activeId) : -1;
      let nextIdx: number;
      if (e.key === 'ArrowDown') {
        nextIdx = currentIdx < visibleItems.length - 1 ? currentIdx + 1 : 0;
      } else {
        nextIdx = currentIdx > 0 ? currentIdx - 1 : visibleItems.length - 1;
      }
      setActiveId(visibleItems[nextIdx]);
    } else if (e.key === 'Enter') {
      if (activeId) {
        e.preventDefault();
        onSelect(activeId);
      }
    }
  }

  return (
    <CommandContext.Provider value={{ search, setSearch, activeId, setActiveId, items, visibleItems, registerItem, unregisterItem, notifyVisible, onSelect, selectCallbacks }}>
      <div
        className={cn('flex flex-col overflow-hidden', className)}
        onKeyDown={handleKeyDown}
        data-command=""
      >
        {children}
      </div>
    </CommandContext.Provider>
  );
}

// ─── CommandInput ──────────────────────────────────────────────────────────────

export interface CommandInputProps {
  placeholder?: string;
  className?: string;
}

export function CommandInput({ placeholder = 'Search…', className }: CommandInputProps) {
  const { search, setSearch } = useCommand();
  return (
    <div className="flex items-center gap-2.5 border-b border-border px-3">
      <svg className="h-4 w-4 shrink-0 text-fg-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
      </svg>
      <input
        autoFocus
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder={placeholder}
        className={cn(
          'h-11 flex-1 bg-transparent text-sm text-foreground placeholder:text-fg-secondary outline-none',
          className,
        )}
        aria-autocomplete="list"
        role="combobox"
        aria-expanded={true}
      />
      {search && (
        <button
          type="button"
          onClick={() => setSearch('')}
          className="shrink-0 text-fg-secondary hover:text-foreground transition-colors"
          aria-label="Clear search"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
}

// ─── CommandList ──────────────────────────────────────────────────────────────

export function CommandList({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      role="listbox"
      className={cn('overflow-y-auto overscroll-contain p-1 max-h-[min(360px,60vh)]', className)}
    >
      {children}
    </div>
  );
}

// ─── CommandEmpty ─────────────────────────────────────────────────────────────

export function CommandEmpty({ children = 'No results found.', className }: { children?: React.ReactNode; className?: string }) {
  const { visibleItems, search } = useCommand();
  if (visibleItems.length > 0 || !search) return null;
  return (
    <div className={cn('py-8 text-center text-sm text-fg-secondary', className)}>
      <div className="flex flex-col items-center gap-2">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-fg-disabled">
          <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
        </svg>
        {children}
      </div>
    </div>
  );
}

// ─── CommandGroup ─────────────────────────────────────────────────────────────

export interface CommandGroupProps {
  children: React.ReactNode;
  heading?: string;
  className?: string;
}

export function CommandGroup({ children, heading, className }: CommandGroupProps) {
  // Track whether any child item is visible
  const [hasVisible, setHasVisible] = React.useState(true);
  const childCount = React.useRef(0);
  const visibleCount = React.useRef(0);

  // We use a wrapper context to intercept child visibility changes
  const groupCtx = React.useMemo(() => ({ setHasVisible, childCount, visibleCount }), []);

  return (
    <GroupContext.Provider value={groupCtx}>
      <div
        className={cn('', !hasVisible && 'hidden', className)}
        role="group"
        aria-label={heading}
      >
        {heading && (
          <div className="px-2.5 py-1.5 text-xs font-semibold text-fg-secondary uppercase tracking-wider select-none">
            {heading}
          </div>
        )}
        {children}
      </div>
    </GroupContext.Provider>
  );
}

interface GroupContextValue {
  setHasVisible: (v: boolean) => void;
  childCount: React.MutableRefObject<number>;
  visibleCount: React.MutableRefObject<number>;
}

const GroupContext = React.createContext<GroupContextValue | null>(null);

// ─── CommandItem ──────────────────────────────────────────────────────────────

export interface CommandItemProps {
  children: React.ReactNode;
  onSelect?: () => void;
  value?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  shortcut?: string;
  className?: string;
}

export function CommandItem({
  children,
  onSelect,
  value,
  disabled = false,
  icon,
  shortcut,
  className,
}: CommandItemProps) {
  const id = React.useId();
  const { search, activeId, setActiveId, registerItem, unregisterItem, notifyVisible, selectCallbacks } = useCommand();
  const groupCtx = React.useContext(GroupContext);

  // Derive text value from children if not provided
  const textValue = value ?? (typeof children === 'string' ? children : id);

  // Register on mount
  React.useEffect(() => {
    registerItem(id, textValue);
    if (onSelect) selectCallbacks.current.set(id, onSelect);

    if (groupCtx) {
      groupCtx.childCount.current++;
    }

    return () => {
      unregisterItem(id);
      if (groupCtx) {
        groupCtx.childCount.current--;
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update select callback when onSelect changes
  React.useEffect(() => {
    if (onSelect) selectCallbacks.current.set(id, onSelect);
    else selectCallbacks.current.delete(id);
  }, [id, onSelect, selectCallbacks]);

  // Filtering
  const isVisible = !disabled && (!search || textValue.toLowerCase().includes(search.toLowerCase()));

  React.useEffect(() => {
    notifyVisible(id, isVisible);
    if (groupCtx) {
      groupCtx.visibleCount.current = isVisible
        ? groupCtx.visibleCount.current + 1
        : Math.max(0, groupCtx.visibleCount.current - 1);
      groupCtx.setHasVisible(groupCtx.visibleCount.current > 0);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  if (!isVisible) return null;

  const isActive = activeId === id;

  return (
    <div
      role="option"
      aria-selected={isActive}
      aria-disabled={disabled}
      data-command-item={id}
      onClick={() => !disabled && onSelect?.()}
      onMouseEnter={() => !disabled && setActiveId(id)}
      className={cn(
        'flex items-center gap-2.5 rounded-[2px] px-2.5 py-1.5 text-sm cursor-default select-none transition-colors',
        isActive ? 'bg-accent text-accent-on' : 'text-foreground',
        disabled && 'pointer-events-none opacity-40',
        className,
      )}
    >
      {icon && (
        <span className={cn('shrink-0', isActive ? 'text-accent-on' : 'text-fg-secondary')} aria-hidden="true">
          {icon}
        </span>
      )}
      <span className="flex-1 truncate">{children}</span>
      {shortcut && (
        <span className={cn('ml-auto pl-4 text-xs tracking-widest shrink-0', isActive ? 'text-accent-on/70' : 'text-fg-secondary')}>
          {shortcut}
        </span>
      )}
    </div>
  );
}

// ─── CommandSeparator ─────────────────────────────────────────────────────────

export function CommandSeparator({ className }: { className?: string }) {
  return <div className={cn('-mx-1 my-1 h-px bg-border', className)} />;
}

// ─── CommandDialog ─────────────────────────────────────────────────────────────

export interface CommandDialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  /** Accessible title for screen readers */
  title?: string;
}

export function CommandDialog({ open, onOpenChange, children, title = 'Command palette' }: CommandDialogProps) {
  return (
    <RadixDialog.Root open={open} onOpenChange={onOpenChange}>
      <RadixDialog.Portal>
        <RadixDialog.Overlay className="fixed inset-0 z-50 bg-black/40 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <RadixDialog.Content
          className={cn(
            'fixed left-1/2 top-[20%] z-50 w-full max-w-lg -translate-x-1/2',
            'rounded-[4px] border border-border bg-raised shadow-raised',
            'data-[state=open]:animate-in data-[state=closed]:animate-out',
            'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
            'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
            'data-[state=closed]:slide-out-to-top-[2%] data-[state=open]:slide-in-from-top-[2%]',
          )}
          aria-describedby={undefined}
        >
          <RadixDialog.Title className="sr-only">{title}</RadixDialog.Title>
          <Command>
            {children}
          </Command>
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
}
