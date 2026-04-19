import * as React from 'react';
import { cn } from '../../lib/cn';

// ─── Context ──────────────────────────────────────────────────────────────────

export type TableSize = 'sm' | 'md';

interface TableContextValue {
  striped: boolean;
  size: TableSize;
}

const TableContext = React.createContext<TableContextValue>({ striped: false, size: 'md' });

// ─── Root ─────────────────────────────────────────────────────────────────────

export interface TableProps {
  children: React.ReactNode;
  striped?: boolean;
  size?: TableSize;
  /** Remove outer border and rounded corners — use when embedding inside a Card */
  bordered?: boolean;
  className?: string;
}

export function Table({ children, striped = false, size = 'md', bordered = true, className }: TableProps) {
  return (
    <TableContext.Provider value={{ striped, size }}>
      <div className={cn('w-full overflow-x-auto', bordered && 'rounded-[3px] border border-border')}>
        <table
          className={cn('min-w-full caption-bottom border-collapse', size === 'sm' ? 'text-xs' : 'text-sm', className)}
        >
          {children}
        </table>
      </div>
    </TableContext.Provider>
  );
}

// ─── Header ───────────────────────────────────────────────────────────────────

export function TableHeader({ children }: { children: React.ReactNode }) {
  return (
    <thead className="bg-surface border-b border-border">
      {children}
    </thead>
  );
}

// ─── Body ─────────────────────────────────────────────────────────────────────

export function TableBody({ children }: { children: React.ReactNode }) {
  const { striped } = React.useContext(TableContext);
  return (
    <tbody
      className={cn('bg-card divide-y divide-border', striped && '[&_tr:nth-child(even)]:bg-surface')}
    >
      {children}
    </tbody>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

export function TableFooter({ children }: { children: React.ReactNode }) {
  return (
    <tfoot className="border-t border-border bg-surface">
      {children}
    </tfoot>
  );
}

// ─── Row ──────────────────────────────────────────────────────────────────────

export interface TableRowProps {
  children: React.ReactNode;
  selected?: boolean;
  onClick?: () => void;
  className?: string;
}

export function TableRow({ children, selected, onClick, className }: TableRowProps) {
  return (
    <tr
      onClick={onClick}
      onKeyDown={onClick ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(); } } : undefined}
      tabIndex={onClick ? 0 : undefined}
      aria-selected={selected}
      className={cn(
        'transition-colors',
        selected && 'bg-accent-subtle',
        onClick && !selected && 'cursor-pointer hover:bg-surface',
        onClick && selected && 'cursor-pointer hover:bg-accent-subtle',
        onClick && 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent',
        className,
      )}
    >
      {children}
    </tr>
  );
}

// ─── Head cell ────────────────────────────────────────────────────────────────

export type SortDirection = 'asc' | 'desc' | null;

export interface TableHeadProps {
  children?: React.ReactNode;
  className?: string;
  align?: 'left' | 'center' | 'right';
  sortable?: boolean;
  sortDirection?: SortDirection;
  onSort?: () => void;
}

const alignClasses: Record<string, string> = {
  left:   'text-left',
  center: 'text-center',
  right:  'text-right',
};

export function TableHead({ children, className, align = 'left', sortable, sortDirection, onSort }: TableHeadProps) {
  const { size } = React.useContext(TableContext);
  return (
    <th
      onClick={sortable ? onSort : undefined}
      onKeyDown={sortable && onSort ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSort(); } } : undefined}
      tabIndex={sortable ? 0 : undefined}
      aria-sort={sortDirection === 'asc' ? 'ascending' : sortDirection === 'desc' ? 'descending' : undefined}
      className={cn(
        'text-xs font-semibold text-fg-secondary uppercase tracking-wider whitespace-nowrap',
        size === 'sm' ? 'px-4 py-2' : 'px-4 py-3',
        alignClasses[align],
        sortable && 'cursor-pointer select-none hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent',
        className,
      )}
    >
      {sortable ? (
        <span className="inline-flex items-center gap-1.5">
          {children}
          <SortIcon direction={sortDirection ?? null} />
        </span>
      ) : (
        children
      )}
    </th>
  );
}

function SortIcon({ direction }: { direction: SortDirection }) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" className="shrink-0">
      {/* up arrow */}
      <path
        d="M6 1L3 4.5h6L6 1z"
        fill={direction === 'asc' ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth={direction === 'asc' ? '0' : '1.2'}
        opacity={direction === 'desc' ? 0.3 : 1}
      />
      {/* down arrow */}
      <path
        d="M6 11l3-3.5H3L6 11z"
        fill={direction === 'desc' ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth={direction === 'desc' ? '0' : '1.2'}
        opacity={direction === 'asc' ? 0.3 : 1}
      />
    </svg>
  );
}

// ─── Data cell ────────────────────────────────────────────────────────────────

export interface TableCellProps {
  children?: React.ReactNode;
  className?: string;
  align?: 'left' | 'center' | 'right';
  colSpan?: number;
}

export function TableCell({ children, className, align = 'left', colSpan }: TableCellProps) {
  const { size } = React.useContext(TableContext);
  return (
    <td
      colSpan={colSpan}
      className={cn('text-foreground', size === 'sm' ? 'px-4 py-2 text-xs' : 'px-4 py-3 text-sm', alignClasses[align], className)}
    >
      {children}
    </td>
  );
}

// ─── Caption ──────────────────────────────────────────────────────────────────

export function TableCaption({ children }: { children: React.ReactNode }) {
  return (
    <caption className="mt-4 text-xs text-fg-secondary text-left px-1">
      {children}
    </caption>
  );
}
