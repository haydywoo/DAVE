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
  const [visible, setVisible] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const listRef = React.useRef<HTMLUListElement>(null);

  const results: SearchItem[] = query.trim()
    ? fuse.search(query).map((r) => r.item)
    : searchIndex;

  // Drive enter/exit animation
  React.useEffect(() => {
    if (open) {
      setVisible(false);
      requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
      setQuery('');
      setActiveIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setVisible(false);
    }
  }, [open]);

  React.useEffect(() => { setActiveIndex(0); }, [query]);

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
      className="fixed inset-0 z-50"
      onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-foreground/40 backdrop-blur-sm transition-opacity duration-200 ${visible ? 'opacity-100' : 'opacity-0'}`}
        aria-hidden="true"
        onMouseDown={onClose}
      />

      {/* ── Mobile: bottom sheet ── */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Search components"
        className={[
          'sm:hidden',
          'absolute bottom-0 left-0 right-0 z-10',
          'flex flex-col bg-card border-t border-border rounded-t-[6px]',
          'max-h-[85dvh] overflow-hidden',
          'transition-transform duration-300 ease-out',
          visible ? 'translate-y-0' : 'translate-y-full',
        ].join(' ')}
      >
        {/* Drag handle */}
        <div className="flex justify-center pt-3 pb-1 shrink-0">
          <div className="w-8 h-1 rounded-full bg-border" aria-hidden="true" />
        </div>

        {/* Input */}
        <div className="flex items-center gap-3 px-4 border-b border-border shrink-0">
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
            aria-controls="search-results-mobile"
            aria-activedescendant={results[activeIndex] ? `result-mobile-${activeIndex}` : undefined}
            className="flex-1 h-14 bg-transparent text-base text-foreground placeholder:text-fg-secondary focus:outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 text-xs text-fg-secondary border border-border rounded-[3px] px-2 py-1 interactive"
          >
            Cancel
          </button>
        </div>

        {/* Results */}
        <ul
          id="search-results-mobile"
          ref={listRef}
          role="listbox"
          aria-label="Search results"
          className="flex-1 overflow-y-auto p-2"
        >
          {results.length === 0 ? (
            <li className="px-3 py-8 text-center text-sm text-fg-secondary">
              No results for &ldquo;{query}&rdquo;
            </li>
          ) : (
            results.map((item, i) => (
              <li
                key={item.href}
                id={`result-mobile-${i}`}
                data-index={i}
                role="option"
                aria-selected={i === activeIndex}
                onMouseEnter={() => setActiveIndex(i)}
                onClick={() => navigate(item.href)}
                className={`flex items-center justify-between gap-3 rounded-[3px] px-3 min-h-[44px] cursor-pointer transition-colors ${
                  i === activeIndex ? 'bg-[var(--color-selected)] text-foreground' : 'text-foreground'
                }`}
              >
                <span className="text-sm font-medium">{item.title}</span>
                <span className="text-xs text-fg-secondary shrink-0">{item.group}</span>
              </li>
            ))
          )}
        </ul>
      </div>

      {/* ── Desktop: centred modal ── */}
      <div
        className={[
          'hidden sm:block',
          'absolute top-[15vh] left-1/2 -translate-x-1/2',
          'w-full max-w-lg z-10',
          'transition-all duration-200',
          visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95',
        ].join(' ')}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Search components"
          className="rounded-[6px] border border-border bg-card shadow-raised overflow-hidden"
        >
          {/* Input */}
          <div className="flex items-center gap-3 px-4 border-b border-border">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-fg-secondary" aria-hidden="true">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
            </svg>
            <input
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
            <kbd className="hidden sm:inline-flex items-center rounded-[3px] border border-border bg-surface px-1.5 text-[10px] text-fg-secondary font-code">
              Esc
            </kbd>
          </div>

          {/* Results */}
          <ul
            id="search-results"
            role="listbox"
            aria-label="Search results"
            className="max-h-80 overflow-y-auto p-2"
          >
            {results.length === 0 ? (
              <li className="px-3 py-8 text-center text-sm text-fg-secondary">
                No results for &ldquo;{query}&rdquo;
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
                  onKeyDown={(e) => { if (e.key === 'Enter') navigate(item.href); }}
                  className={`flex items-center justify-between gap-3 rounded-[3px] px-3 py-2.5 cursor-pointer transition-colors ${
                    i === activeIndex ? 'bg-[var(--color-selected)] text-foreground' : 'text-foreground hover:bg-surface'
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
              <kbd className="inline-flex items-center rounded-[3px] border border-border bg-surface px-1 text-[10px] font-code">↑↓</kbd>
              navigate
            </span>
            <span className="flex items-center gap-1 text-[11px] text-fg-secondary">
              <kbd className="inline-flex items-center rounded-[3px] border border-border bg-surface px-1 text-[10px] font-code">↵</kbd>
              open
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
