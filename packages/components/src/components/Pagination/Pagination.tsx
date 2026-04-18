import * as React from 'react';
import { cn } from '../../lib/cn';

export interface PaginationProps {
  page: number;
  pageCount: number;
  onPageChange: (page: number) => void;
  /** Show first/last jump buttons */
  showEdges?: boolean;
  /** Max page buttons to show before collapsing to ellipsis */
  siblings?: number;
  className?: string;
}

function range(start: number, end: number): number[] {
  const result: number[] = [];
  for (let i = start; i <= end; i++) result.push(i);
  return result;
}

function getPages(page: number, pageCount: number, siblings: number): (number | '…')[] {
  const totalButtons = siblings * 2 + 5; // siblings + current + 2 edges + 2 ellipses

  if (pageCount <= totalButtons) return range(1, pageCount);

  const leftSibling  = Math.max(page - siblings, 1);
  const rightSibling = Math.min(page + siblings, pageCount);

  const showLeftDots  = leftSibling > 2;
  const showRightDots = rightSibling < pageCount - 1;

  if (!showLeftDots && showRightDots) {
    const leftRange = range(1, 3 + siblings * 2);
    return [...leftRange, '…', pageCount];
  }

  if (showLeftDots && !showRightDots) {
    const rightRange = range(pageCount - (2 + siblings * 2), pageCount);
    return [1, '…', ...rightRange];
  }

  return [1, '…', ...range(leftSibling, rightSibling), '…', pageCount];
}

const btnBase = 'inline-flex items-center justify-center rounded-[3px] text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-40 h-8 w-8';
const btnDefault = 'text-fg-secondary hover:bg-surface hover:text-foreground';
const btnActive  = 'bg-accent text-accent-on font-semibold';

export function Pagination({
  page,
  pageCount,
  onPageChange,
  showEdges = false,
  siblings = 1,
  className,
}: PaginationProps) {
  if (pageCount <= 1) return null;

  const pages = getPages(page, pageCount, siblings);

  return (
    <nav
      role="navigation"
      aria-label="Pagination"
      className={cn('flex items-center gap-1', className)}
    >
      {/* First */}
      {showEdges && (
        <button
          onClick={() => onPageChange(1)}
          disabled={page === 1}
          aria-label="First page"
          className={cn(btnBase, btnDefault)}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m11 17-5-5 5-5" /><path d="m18 17-5-5 5-5" />
          </svg>
        </button>
      )}

      {/* Prev */}
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        aria-label="Previous page"
        className={cn(btnBase, btnDefault)}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>

      {/* Pages */}
      {pages.map((p, i) =>
        p === '…' ? (
          <span key={`ellipsis-${i}`} className="flex h-8 w-8 items-center justify-center text-sm text-fg-secondary select-none">
            …
          </span>
        ) : (
          <button
            key={p}
            onClick={() => onPageChange(p as number)}
            aria-label={`Page ${p}`}
            aria-current={p === page ? 'page' : undefined}
            className={cn(btnBase, p === page ? btnActive : btnDefault)}
          >
            {p}
          </button>
        )
      )}

      {/* Next */}
      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page === pageCount}
        aria-label="Next page"
        className={cn(btnBase, btnDefault)}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>

      {/* Last */}
      {showEdges && (
        <button
          onClick={() => onPageChange(pageCount)}
          disabled={page === pageCount}
          aria-label="Last page"
          className={cn(btnBase, btnDefault)}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m13 17 5-5-5-5" /><path d="m6 17 5-5-5-5" />
          </svg>
        </button>
      )}
    </nav>
  );
}

// ─── Page size selector ───────────────────────────────────────────────────────

export interface PageSizeSelectProps {
  pageSize: number;
  pageSizeOptions?: number[];
  onPageSizeChange: (size: number) => void;
  total?: number;
}

export function PageSizeSelect({
  pageSize,
  pageSizeOptions = [10, 20, 50, 100],
  onPageSizeChange,
  total,
}: PageSizeSelectProps) {
  return (
    <div className="flex items-center gap-2 text-sm text-fg-secondary">
      {total !== undefined && (
        <span>{total.toLocaleString()} results</span>
      )}
      <span>Rows per page</span>
      <select
        value={pageSize}
        onChange={(e) => onPageSizeChange(Number(e.target.value))}
        className="h-8 rounded-[3px] border border-border bg-card px-2 text-sm text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-0"
      >
        {pageSizeOptions.map((s) => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>
    </div>
  );
}
