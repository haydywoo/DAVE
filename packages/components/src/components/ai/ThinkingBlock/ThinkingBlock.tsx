'use client';

import * as React from 'react';
import { cn } from '../../../lib/cn';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '../../Collapsible/Collapsible';
import { Spinner } from '../../Spinner/Spinner';

export interface ThinkingBlockProps {
  children: React.ReactNode;
  /** Duration string shown alongside the heading, e.g. "4s" */
  duration?: string;
  /** When true, shows a spinner and disables collapse. */
  isStreaming?: boolean;
  defaultOpen?: boolean;
  className?: string;
}

export function ThinkingBlock({
  children,
  duration,
  isStreaming = false,
  defaultOpen = false,
  className,
}: ThinkingBlockProps) {
  return (
    <Collapsible defaultOpen={isStreaming || defaultOpen} disabled={isStreaming}>
      <div className={cn('rounded-[6px] border border-border bg-surface', className)}>
        {/* Header */}
        <CollapsibleTrigger showChevron={false} className="flex w-full items-center gap-2 px-3 py-2 text-left">
          {isStreaming ? (
            <Spinner size="xs" className="shrink-0 text-accent" />
          ) : (
            <span className="shrink-0 flex items-center text-fg-secondary transition-transform duration-200 [[data-state=open]_&]:rotate-90">
              <svg
                className="h-3.5 w-3.5"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </span>
          )}
          <span className="flex-1 text-xs font-medium text-fg-secondary select-none">
            {isStreaming ? 'Thinking…' : 'Thought process'}
          </span>
          {duration && !isStreaming && (
            <span className="text-xs text-fg-secondary/60 tabular-nums">{duration}</span>
          )}
        </CollapsibleTrigger>

        {/* Body */}
        <CollapsibleContent>
          <div className="border-t border-border px-3 py-3 text-xs text-fg-secondary leading-relaxed italic">
            {children}
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
}
