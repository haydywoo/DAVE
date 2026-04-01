'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import Fuse from 'fuse.js';
import { searchIndex, type SearchItem } from '@/lib/search-index';

const fuse = new Fuse(searchIndex, {
  keys: [
    { name: 'title',    weight: 0.6 },
    { name: 'keywords', weight: 0.3 },
    { name: 'group',    weight: 0.1 },
  ],
  threshold: 0.35,
  includeScore: true,
});

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
}

export function CommandPalette({ open, onClose }: CommandPaletteProps) {
  const router = useRouter();
  const [query, setQuery] = React.useState('');
  const [activeIndex, setActiveIndex] = React.useState(0);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const listRef = React.useRef<HTMLUListElement>(null);

  const results: SearchItem[] = query.trim()
    ? fuse.search(query).map((r) => r.item)
    : searchIndex;

  // Reset on open
  React.useEffect(() => {
    if (open) {
      setQuery('');
      setActiveIndex(0);
      setTimeout(() => inputRef.current?.focus(), 10);
    }
  }, [open]);

  // Keep active item in view
  React.useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  React.useEffect(() => {
    const el = listRef.current?.querySelector(`[data-index="${activeIndex}"]`);
    el?.scrollIntoView({ block: 'nearest' });
  }, [activeIndex]);

  function navigate(href: string) {
    router.push(href);
    onClose();
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter') {
      if (results[activeIndex]) navigate(results[activeIndex].href);
    } else if (e.key === 'Escape') {
      onClose();
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]"
      onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" aria-hidden="true" />

      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Search components"
        className="relative z-10 w-full max-w-lg rounded-[3px] border border-border bg-card shadow-xl overflow-hidden"
      >
        {/* Input */}
        <div className="flex items-center gap-3 px-4 border-b border-border">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-fg-secondary" aria-hidden="true">
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
          </svg>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search components…"
            aria-label="Search components"
            aria-autocomplete="list"
            aria-controls="search-results"
            aria-activedescendant={results[activeIndex] ? `result-${activeIndex}` : undefined}
            className="flex-1 h-12 bg-transparent text-sm text-foreground placeholder:text-fg-secondary focus:outline-none"
          />
          <kbd className="hidden sm:inline-flex items-center rounded border border-border bg-surface px-1.5 text-[10px] text-fg-secondary font-sans">
            Esc
          </kbd>
        </div>

        {/* Results */}
        <ul
          id="search-results"
          ref={listRef}
          role="listbox"
          aria-label="Search results"
          className="max-h-80 overflow-y-auto p-2"
        >
          {results.length === 0 ? (
            <li className="px-3 py-8 text-center text-sm text-fg-secondary">
              No components found for &ldquo;{query}&rdquo;
            </li>
          ) : (
            results.map((item, i) => (
              <li
                key={item.href}
                id={`result-${i}`}
                data-index={i}
                role="option"
                aria-selected={i === activeIndex}
                onMouseEnter={() => setActiveIndex(i)}
                onClick={() => navigate(item.href)}
                className={`flex items-center justify-between gap-3 rounded-[3px] px-3 py-2.5 cursor-pointer transition-colors ${
                  i === activeIndex ? 'bg-accent-subtle text-accent-foreground' : 'text-foreground hover:bg-surface'
                }`}
              >
                <span className="text-sm font-medium">{item.title}</span>
                <span className="text-xs text-fg-secondary shrink-0">{item.group}</span>
              </li>
            ))
          )}
        </ul>

        {/* Footer */}
        <div className="flex items-center gap-3 px-4 py-2.5 border-t border-border">
          <span className="flex items-center gap-1 text-[11px] text-fg-secondary">
            <kbd className="inline-flex items-center rounded border border-border bg-surface px-1 text-[10px] font-sans">↑↓</kbd>
            navigate
          </span>
          <span className="flex items-center gap-1 text-[11px] text-fg-secondary">
            <kbd className="inline-flex items-center rounded border border-border bg-surface px-1 text-[10px] font-sans">↵</kbd>
            open
          </span>
        </div>
      </div>
    </div>
  );
}
