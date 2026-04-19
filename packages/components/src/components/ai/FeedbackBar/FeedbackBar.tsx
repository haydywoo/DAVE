'use client';

import * as React from 'react';
import { cn } from '../../../lib/cn';
import { Tooltip } from '../../Tooltip/Tooltip';
import { CopyButton } from '../../CopyButton/CopyButton';

// ─── Icon helpers ─────────────────────────────────────────────────────────────

function ThumbUpIcon({ filled }: { filled?: boolean }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 10v12M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/>
    </svg>
  );
}

function ThumbDownIcon({ filled }: { filled?: boolean }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 14V2M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z"/>
    </svg>
  );
}

function RefreshIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>
      <path d="M21 3v5h-5"/>
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/>
      <path d="M8 16H3v5"/>
    </svg>
  );
}

// ─── IconButton ───────────────────────────────────────────────────────────────

function IconButton({ tooltip, onClick, active, className, children }: {
  tooltip: string;
  onClick?: () => void;
  active?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Tooltip content={tooltip} side="top" sideOffset={6}>
      <button
        type="button"
        onClick={onClick}
        aria-label={tooltip}
        aria-pressed={active}
        className={cn(
          'inline-flex h-7 w-7 items-center justify-center rounded-[3px] transition-colors',
          'text-fg-secondary hover:text-foreground hover:bg-surface',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1',
          active && 'text-accent hover:text-accent',
          className,
        )}
      >
        {children}
      </button>
    </Tooltip>
  );
}

// ─── Types ────────────────────────────────────────────────────────────────────

export interface FeedbackBarProps {
  /** The text content to copy */
  copyValue?: string;
  onCopy?: () => void;
  onThumbsUp?: () => void;
  onThumbsDown?: () => void;
  onRegenerate?: () => void;
  /** Current feedback state */
  feedback?: 'up' | 'down' | null;
  /** Hide specific actions */
  hideCopy?: boolean;
  hideRegenerate?: boolean;
  hideFeedback?: boolean;
  className?: string;
}

// ─── Component ────────────────────────────────────────────────────────────────

export function FeedbackBar({
  copyValue,
  onCopy,
  onThumbsUp,
  onThumbsDown,
  onRegenerate,
  feedback = null,
  hideCopy = false,
  hideRegenerate = false,
  hideFeedback = false,
  className,
}: FeedbackBarProps) {
  return (
    <div className={cn('flex items-center gap-0.5', className)}>
      {!hideCopy && (
        <CopyButton
          value={copyValue ?? ''}
          className="[&_button]:h-7 [&_button]:w-7 [&_button]:rounded-[3px] [&_button]:text-fg-secondary [&_button:hover]:text-foreground [&_button:hover]:bg-surface"
          onCopy={onCopy}
        />
      )}
      {!hideFeedback && (
        <>
          <IconButton tooltip="Good response" onClick={onThumbsUp} active={feedback === 'up'}>
            <ThumbUpIcon filled={feedback === 'up'} />
          </IconButton>
          <IconButton tooltip="Bad response" onClick={onThumbsDown} active={feedback === 'down'}>
            <ThumbDownIcon filled={feedback === 'down'} />
          </IconButton>
        </>
      )}
      {!hideRegenerate && (
        <IconButton tooltip="Regenerate" onClick={onRegenerate}>
          <RefreshIcon />
        </IconButton>
      )}
    </div>
  );
}
