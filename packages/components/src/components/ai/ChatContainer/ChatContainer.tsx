'use client';

import * as React from 'react';
import { cn } from '../../../lib/cn';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ChatContainerProps {
  children: React.ReactNode;
  /** Fired when the user manually scrolls up, useful for pausing auto-scroll */
  onScrollUp?: () => void;
  className?: string;
}

// ─── Scroll-to-bottom button icon ─────────────────────────────────────────────

function ChevronDownIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m6 9 6 6 6-6"/>
    </svg>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export function ChatContainer({ children, onScrollUp, className }: ChatContainerProps) {
  const scrollRef    = React.useRef<HTMLDivElement>(null);
  const bottomRef    = React.useRef<HTMLDivElement>(null);
  const [showJump, setShowJump] = React.useState(false);

  // Track whether we're pinned to the bottom
  const pinnedRef = React.useRef(true);

  function scrollToBottom(behavior: ScrollBehavior = 'smooth') {
    bottomRef.current?.scrollIntoView({ behavior, block: 'end' });
    setShowJump(false);
    pinnedRef.current = true;
  }

  // Auto-scroll when children change and we're pinned
  React.useEffect(() => {
    if (pinnedRef.current) {
      scrollToBottom('instant');
    }
  });

  function handleScroll() {
    const el = scrollRef.current;
    if (!el) return;
    const distanceFromBottom = el.scrollHeight - el.scrollTop - el.clientHeight;
    const atBottom = distanceFromBottom < 40;
    pinnedRef.current = atBottom;
    setShowJump(!atBottom);
    if (!atBottom) onScrollUp?.();
  }

  return (
    <div className={cn('relative flex flex-col min-h-0', className)}>
      {/* Scrollable message list */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex-1 overflow-y-auto"
      >
        <div className="flex flex-col gap-6 px-4 py-6 max-w-3xl mx-auto w-full">
          {children}
        </div>
        <div ref={bottomRef} className="h-px" aria-hidden="true" />
      </div>

      {/* Jump-to-bottom button */}
      {showJump && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
          <button
            type="button"
            onClick={() => scrollToBottom()}
            className={cn(
              'flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 shadow-md',
              'text-xs font-medium text-foreground transition-colors',
              'hover:bg-surface hover:border-border-strong',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
            )}
          >
            <ChevronDownIcon />
            Jump to bottom
          </button>
        </div>
      )}
    </div>
  );
}
