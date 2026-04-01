'use client';

import * as React from 'react';
import { cn } from '../../lib/cn';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../Table/Table';
import { Checkbox } from '../Checkbox/Checkbox';
import { Pagination, PageSizeSelect } from '../Pagination/Pagination';
import { EmptyState } from '../EmptyState/EmptyState';

// ─── Types ────────────────────────────────────────────────────────────────────

export type SortDir = 'asc' | 'desc';

export interface ColumnDef<TData> {
  /** Unique key — also used to access `row[key]` for default sorting */
  key: string;
  header: string;
  sortable?: boolean;
  align?: 'left' | 'center' | 'right';
  /** Custom cell renderer. Falls back to `String(row[key])` */
  cell?: (row: TData, index: number) => React.ReactNode;
  /** Optional fixed column width, e.g. '120px' or '10%' */
  width?: string;
}

export interface DataTableProps<TData extends Record<string, unknown>> {
  columns: ColumnDef<TData>[];
  data: TData[];
  /** Return a stable unique id for each row. Defaults to row index. */
  getRowId?: (row: TData, index: number) => string;

  // ── Selection ────────────────────────────────────────────────────────────
  selectable?: boolean;
  /** Controlled selected row ids */
  selectedRows?: string[];
  onSelectionChange?: (ids: string[]) => void;

  // ── Pagination ────────────────────────────────────────────────────────────
  /** If set, enables client-side pagination with this as the default page size */
  pageSize?: number;
  pageSizeOptions?: number[];

  // ── Appearance ────────────────────────────────────────────────────────────
  striped?: boolean;
  onRowClick?: (row: TData) => void;

  // ── Empty state ───────────────────────────────────────────────────────────
  emptyTitle?: string;
  emptyDescription?: string;
  emptyIcon?: React.ReactNode;

  className?: string;
}

// ─── Default empty-state icon ─────────────────────────────────────────────────

const DefaultEmptyIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18M9 21V9" />
  </svg>
);

// ─── DataTable ────────────────────────────────────────────────────────────────

export function DataTable<TData extends Record<string, unknown>>({
  columns,
  data,
  getRowId,
  selectable = false,
  selectedRows: controlledSelected,
  onSelectionChange,
  pageSize: defaultPageSize,
  pageSizeOptions = [10, 20, 50, 100],
  striped = false,
  onRowClick,
  emptyTitle = 'No results',
  emptyDescription,
  emptyIcon,
  className,
}: DataTableProps<TData>) {
  // ── Sort state ──────────────────────────────────────────────────────────
  const [sortKey, setSortKey] = React.useState<string | null>(null);
  const [sortDir, setSortDir] = React.useState<SortDir>('asc');

  // ── Pagination state ────────────────────────────────────────────────────
  const paginated = defaultPageSize !== undefined;
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(defaultPageSize ?? 10);

  // ── Selection state ─────────────────────────────────────────────────────
  const isControlled = controlledSelected !== undefined;
  const [internalSelected, setInternalSelected] = React.useState<string[]>([]);
  const selected = isControlled ? controlledSelected : internalSelected;

  function setSelected(ids: string[]) {
    if (!isControlled) setInternalSelected(ids);
    onSelectionChange?.(ids);
  }

  // ── Derived: sorted data ────────────────────────────────────────────────
  const sortedData = React.useMemo(() => {
    if (!sortKey) return data;
    return [...data].sort((a, b) => {
      const av = a[sortKey];
      const bv = b[sortKey];
      const cmp =
        typeof av === 'number' && typeof bv === 'number'
          ? av - bv
          : String(av ?? '').localeCompare(String(bv ?? ''));
      return sortDir === 'asc' ? cmp : -cmp;
    });
  }, [data, sortKey, sortDir]);

  // ── Derived: paged data ─────────────────────────────────────────────────
  const totalRows = sortedData.length;
  const pageCount = paginated ? Math.max(1, Math.ceil(totalRows / pageSize)) : 1;

  const visibleData = React.useMemo(() => {
    if (!paginated) return sortedData;
    const start = (page - 1) * pageSize;
    return sortedData.slice(start, start + pageSize);
  }, [sortedData, paginated, page, pageSize]);

  // Reset to page 1 when sort/data changes
  React.useEffect(() => { setPage(1); }, [sortKey, sortDir, data]);
  React.useEffect(() => { setPage(1); }, [pageSize]);

  // ── Row ids ─────────────────────────────────────────────────────────────
  function rowId(row: TData, index: number) {
    return getRowId ? getRowId(row, index) : String(index);
  }

  // ── Sort toggle ─────────────────────────────────────────────────────────
  function handleSort(key: string) {
    if (sortKey === key) {
      setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortKey(key);
      setSortDir('asc');
    }
  }

  // ── Selection helpers ───────────────────────────────────────────────────
  const visibleIds = visibleData.map((row, i) => rowId(row, (page - 1) * pageSize + i));
  const allVisibleSelected = visibleIds.length > 0 && visibleIds.every((id) => selected.includes(id));
  const someVisibleSelected = visibleIds.some((id) => selected.includes(id)) && !allVisibleSelected;

  function toggleAll() {
    if (allVisibleSelected) {
      setSelected(selected.filter((id) => !visibleIds.includes(id)));
    } else {
      setSelected([...new Set([...selected, ...visibleIds])]);
    }
  }

  function toggleRow(id: string) {
    if (selected.includes(id)) {
      setSelected(selected.filter((s) => s !== id));
    } else {
      setSelected([...selected, id]);
    }
  }

  // ── Render ──────────────────────────────────────────────────────────────
  return (
    <div className={cn('flex flex-col gap-3', className)}>
      <Table striped={striped}>
        <TableHeader>
          <tr>
            {selectable && (
              <th className="w-10 px-4 py-3">
                <Checkbox
                  checked={allVisibleSelected}
                  indeterminate={someVisibleSelected}
                  onChange={toggleAll}
                  aria-label="Select all rows"
                />
              </th>
            )}
            {columns.map((col) => (
              <TableHead
                key={col.key}
                align={col.align}
                sortable={col.sortable}
                sortDirection={sortKey === col.key ? sortDir : null}
                onSort={() => handleSort(col.key)}
                className={col.width ? undefined : undefined}
              >
                {col.header}
              </TableHead>
            ))}
          </tr>
        </TableHeader>

        <TableBody>
          {visibleData.length === 0 ? (
            <tr>
              <td colSpan={columns.length + (selectable ? 1 : 0)}>
                <EmptyState
                  icon={emptyIcon ?? <DefaultEmptyIcon />}
                  title={emptyTitle}
                  description={emptyDescription}
                />
              </td>
            </tr>
          ) : (
            visibleData.map((row, i) => {
              const globalIndex = (page - 1) * pageSize + i;
              const id = rowId(row, globalIndex);
              const isSelected = selected.includes(id);
              return (
                <TableRow
                  key={id}
                  selected={isSelected}
                  onClick={onRowClick ? () => onRowClick(row) : undefined}
                >
                  {selectable && (
                    <TableCell className="w-10">
                      <Checkbox
                        checked={isSelected}
                        onChange={() => toggleRow(id)}
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`Select row ${id}`}
                      />
                    </TableCell>
                  )}
                  {columns.map((col) => (
                    <TableCell key={col.key} align={col.align}>
                      {col.cell
                        ? col.cell(row, globalIndex)
                        : String(row[col.key] ?? '')}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })
          )}
        </TableBody>
      </Table>

      {paginated && totalRows > 0 && (
        <div className="flex items-center justify-between flex-wrap gap-3 px-1">
          <PageSizeSelect
            pageSize={pageSize}
            pageSizeOptions={pageSizeOptions}
            onPageSizeChange={setPageSize}
            total={totalRows}
          />
          <Pagination
            page={page}
            pageCount={pageCount}
            onPageChange={setPage}
            showEdges={pageCount > 5}
          />
        </div>
      )}
    </div>
  );
}
