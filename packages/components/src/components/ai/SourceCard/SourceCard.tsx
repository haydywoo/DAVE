import * as React from 'react';
import { cn } from '../../../lib/cn';

export interface SourceCardProps {
  title: string;
  url: string;
  /** Favicon URL — falls back to a globe icon */
  favicon?: string;
  /** Short snippet or excerpt from the source */
  snippet?: string;
  /** Citation index shown as a superscript label, e.g. 1, 2, 3 */
  index?: number;
  className?: string;
}

function GlobeIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    </svg>
  );
}

function hostname(url: string): string {
  try { return new URL(url).hostname.replace(/^www\./, ''); } catch { return url; }
}

export function SourceCard({ title, url, favicon, snippet, index, className }: SourceCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'group flex flex-col gap-1.5 rounded-[4px] border border-border bg-card p-3',
        'transition-colors hover:bg-surface hover:border-border-strong',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1',
        className,
      )}
    >
      {/* Header row */}
      <div className="flex items-start gap-2">
        {/* Favicon */}
        <span className="shrink-0 mt-0.5 flex h-4 w-4 items-center justify-center text-fg-secondary">
          {favicon ? (
            <img src={favicon} alt="" className="h-4 w-4 rounded-sm object-contain" aria-hidden="true" />
          ) : (
            <GlobeIcon />
          )}
        </span>

        {/* Title + external icon */}
        <span className="flex-1 min-w-0 text-xs font-medium text-foreground leading-snug line-clamp-2 group-hover:text-accent transition-colors">
          {title}
        </span>

        {index !== undefined && (
          <span className="shrink-0 flex h-4 w-4 items-center justify-center rounded-full bg-accent-subtle text-accent text-[10px] font-semibold leading-none">
            {index}
          </span>
        )}
      </div>

      {/* Domain */}
      <div className="flex items-center gap-1 text-[11px] text-fg-secondary">
        <span className="truncate">{hostname(url)}</span>
        <ExternalIcon />
      </div>

      {/* Snippet */}
      {snippet && (
        <p className="text-[11px] text-fg-secondary leading-relaxed line-clamp-2">{snippet}</p>
      )}
    </a>
  );
}
