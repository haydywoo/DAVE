import * as React from 'react';
import { cn } from '../../lib/cn';

// ─── Context ──────────────────────────────────────────────────────────────────

export type DataListOrientation = 'horizontal' | 'vertical';
export type DataListSize        = 'sm' | 'md' | 'lg';

interface DataListContextValue {
  orientation: DataListOrientation;
  size:        DataListSize;
}

const DataListContext = React.createContext<DataListContextValue>({
  orientation: 'horizontal',
  size:        'md',
});

// ─── Root ─────────────────────────────────────────────────────────────────────

export interface DataListProps {
  children:     React.ReactNode;
  orientation?: DataListOrientation;
  size?:        DataListSize;
  className?:   string;
}

export function DataList({
  children,
  orientation = 'horizontal',
  size = 'md',
  className,
}: DataListProps) {
  return (
    <DataListContext.Provider value={{ orientation, size }}>
      <dl className={cn('flex flex-col divide-y divide-border', className)}>
        {children}
      </dl>
    </DataListContext.Provider>
  );
}

// ─── Item ─────────────────────────────────────────────────────────────────────

export interface DataListItemProps {
  children:   React.ReactNode;
  className?: string;
}

const itemPadding: Record<DataListSize, string> = {
  sm: 'py-1.5',
  md: 'py-2.5',
  lg: 'py-3.5',
};

export function DataListItem({ children, className }: DataListItemProps) {
  const { orientation, size } = React.useContext(DataListContext);
  return (
    <div
      className={cn(
        itemPadding[size],
        orientation === 'horizontal' ? 'flex items-baseline gap-4' : 'flex flex-col gap-1',
        className,
      )}
    >
      {children}
    </div>
  );
}

// ─── Label ────────────────────────────────────────────────────────────────────

export interface DataListLabelProps {
  children:   React.ReactNode;
  /** Override the min-width of the label column in horizontal orientation. */
  minWidth?:  string;
  className?: string;
}

const labelTextSize: Record<DataListSize, string> = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
};

export function DataListLabel({ children, minWidth, className }: DataListLabelProps) {
  const { orientation, size } = React.useContext(DataListContext);
  return (
    <dt
      style={orientation === 'horizontal' ? { minWidth: minWidth ?? '8rem' } : undefined}
      className={cn(
        'text-fg-secondary',
        labelTextSize[size],
        orientation === 'horizontal'
          ? 'shrink-0 font-medium'
          : 'text-xs font-semibold uppercase tracking-wider',
        className,
      )}
    >
      {children}
    </dt>
  );
}

// ─── Value ────────────────────────────────────────────────────────────────────

export interface DataListValueProps {
  children:   React.ReactNode;
  className?: string;
}

const valueTextSize: Record<DataListSize, string> = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
};

export function DataListValue({ children, className }: DataListValueProps) {
  const { size } = React.useContext(DataListContext);
  return (
    <dd className={cn('m-0 flex-1 text-foreground', valueTextSize[size], className)}>
      {children}
    </dd>
  );
}
