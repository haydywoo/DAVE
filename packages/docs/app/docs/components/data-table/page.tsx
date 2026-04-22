import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { DataTableDemos } from './demos';
import { AnatomyBlock } from '@/components/AnatomyBlock';

export const metadata: Metadata = { title: 'DataTable' };

const props = [
  { name: 'columns',           type: 'ColumnDef<TData>[]',               required: true,  description: 'Column definitions — key, header, optional cell renderer, sort, align.' },
  { name: 'data',              type: 'TData[]',                           required: true,  description: 'Array of row data objects.' },
  { name: 'getRowId',          type: '(row: TData, index: number) => string',              description: 'Returns a stable unique id per row. Defaults to row index.' },
  { name: 'selectable',        type: 'boolean',            default: 'false',               description: 'Adds a checkbox column for row selection.' },
  { name: 'selectedRows',      type: 'string[]',                                           description: 'Controlled selected row ids.' },
  { name: 'onSelectionChange', type: '(ids: string[]) => void',                            description: 'Called when the selection changes.' },
  { name: 'pageSize',          type: 'number',                                             description: 'Enables client-side pagination with this as the initial page size.' },
  { name: 'pageSizeOptions',   type: 'number[]',           default: '[10, 20, 50, 100]',   description: 'Available page size options in the footer selector.' },
  { name: 'striped',           type: 'boolean',            default: 'false',               description: 'Alternating row background.' },
  { name: 'onRowClick',        type: '(row: TData) => void',                               description: 'Makes rows clickable — adds hover state and cursor pointer.' },
  { name: 'emptyTitle',        type: 'string',             default: "'No results'",        description: 'Heading shown when data is empty.' },
  { name: 'emptyDescription',  type: 'string',                                             description: 'Supporting text shown when data is empty.' },
  { name: 'emptyIcon',         type: 'ReactNode',                                          description: 'Icon shown in the empty state. Defaults to a table icon.' },
  { name: 'className',         type: 'string',                                             description: 'Additional classes on the wrapper.' },
];

const columnProps = [
  { name: 'key',    type: 'string',                              required: true, description: 'Matches a property on the data object. Used for default sorting and cell rendering.' },
  { name: 'header', type: 'string',                              required: true, description: 'Column heading label.' },
  { name: 'sortable', type: 'boolean',                                           description: 'Enables click-to-sort on this column.' },
  { name: 'align',  type: "'left' | 'center' | 'right'",        default: "'left'", description: 'Text alignment for header and cells.' },
  { name: 'cell',   type: '(row: TData, index: number) => ReactNode',             description: 'Custom cell renderer. Falls back to String(row[key]).' },
  { name: 'width',  type: 'string',                                               description: "Fixed column width, e.g. '120px'." },
];

export default function DataTablePage() {
  return (
    <div>
      <h1 className="font-display font-semibold text-4xl text-foreground mb-2">DataTable</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        Feature-rich data grid with client-side sorting, pagination, and row selection. Built on top of the Table primitive — use Table directly when you only need static markup.
      </p>

      <AnatomyBlock>{`<DataTable
  columns={columns}   {/* ColumnDef[] */}
  data={rows}         {/* TData[] */}
  getRowId={…}        {/* stable row key */}
  selectable          {/* checkbox column */}
  pageSize={10}       {/* enables pagination footer */}
/>`}</AnatomyBlock>

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Examples</h2>
      <DataTableDemos />

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Props</h2>
      <PropsTable props={props} />

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">ColumnDef</h2>
      <PropsTable props={columnProps} />
    </div>
  );
}
