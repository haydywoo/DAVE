'use client';

import * as React from 'react';
import { cn } from '../../lib/cn';

// ─── Context ──────────────────────────────────────────────────────────────────

export type ListSize = 'sm' | 'md';

interface ListContextValue {
  size: ListSize;
}

const ListContext = React.createContext<ListContextValue>({ size: 'md' });

// ─── Root ─────────────────────────────────────────────────────────────────────

export interface ListProps {
  children:   React.ReactNode;
  /** Draws horizontal dividers between items. */
  divided?:   boolean;
  /** Wraps the list in a rounded border + card surface. */
  bordered?:  boolean;
  /** Renders as `<ol>` instead of `<ul>`. */
  ordered?:   boolean;
  size?:      ListSize;
  className?: string;
}

export function List({
  children,
  divided = false,
  bordered = false,
  ordered = false,
  size = 'md',
  className,
}: ListProps) {
  const Tag = ordered ? 'ol' : 'ul';
  return (
    <ListContext.Provider value={{ size }}>
      <Tag
        className={cn(
          'list-none',
          divided && 'divide-y divide-border',
          bordered && 'rounded-[6px] border border-border bg-card overflow-hidden',
          className,
        )}
      >
        {children}
      </Tag>
    </ListContext.Provider>
  );
}

// ─── Item ─────────────────────────────────────────────────────────────────────

export interface ListItemProps {
  children:   React.ReactNode;
  /** Renders as a `<button>` inside the `<li>`. */
  onClick?:   () => void;
  /** Renders as an `<a>` inside the `<li>`. Takes precedence over `onClick`. */
  href?:      string;
  /** Visual selected state (applies `bg-accent-subtle`). */
  selected?:  boolean;
  className?: string;
}

const itemPadding: Record<ListSize, string> = {
  sm: 'px-3 py-2 text-xs',
  md: 'px-4 py-3 text-sm',
};

export function ListItem({ children, onClick, href, selected, className }: ListItemProps) {
  const { size } = React.useContext(ListContext);
  const padding = itemPadding[size];
  const isInteractive = Boolean(onClick || href);

  if (!isInteractive) {
    return (
      <li
        aria-selected={selected}
        className={cn(padding, 'text-foreground', selected && 'bg-accent-subtle', className)}
      >
        {children}
      </li>
    );
  }

  const interactiveClass = cn(
    padding,
    'block w-full text-left text-foreground transition-colors',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent',
    selected ? 'bg-accent-subtle' : 'hover:bg-surface',
    className,
  );

  if (href) {
    return (
      <li aria-selected={selected}>
        <a href={href} className={interactiveClass}>
          {children}
        </a>
      </li>
    );
  }

  return (
    <li aria-selected={selected}>
      <button type="button" onClick={onClick} className={interactiveClass}>
        {children}
      </button>
    </li>
  );
}
