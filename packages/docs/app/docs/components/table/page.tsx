import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { TableDemos } from './demos';

export const metadata: Metadata = { title: 'Table' };

const tableProps = [
  { name: 'children', type: 'ReactNode', required: true, description: 'Table sections.' },
  { name: 'striped', type: 'boolean', default: 'false', description: 'Alternating row background colour.' },
  { name: 'className', type: 'string', description: 'Additional classes on the table element.' },
];

const rowProps = [
  { name: 'children', type: 'ReactNode', required: true, description: 'TableHead or TableCell elements.' },
  { name: 'selected', type: 'boolean', description: 'Applies accent-subtle highlight to the row.' },
  { name: 'onClick', type: '() => void', description: 'Makes the row clickable with hover state.' },
  { name: 'className', type: 'string', description: 'Additional classes.' },
];

const headProps = [
  { name: 'children', type: 'ReactNode', description: 'Header cell content.' },
  { name: 'align', type: "'left' | 'center' | 'right'", default: "'left'", description: 'Text alignment.' },
  { name: 'sortable', type: 'boolean', description: 'Shows sort icon and enables click interaction.' },
  { name: 'sortDirection', type: "'asc' | 'desc' | null", description: 'Current sort state.' },
  { name: 'onSort', type: '() => void', description: 'Called when the column header is clicked.' },
  { name: 'className', type: 'string', description: 'Additional classes.' },
];

const cellProps = [
  { name: 'children', type: 'ReactNode', description: 'Cell content.' },
  { name: 'align', type: "'left' | 'center' | 'right'", default: "'left'", description: 'Text alignment.' },
  { name: 'colSpan', type: 'number', description: 'Number of columns to span.' },
  { name: 'className', type: 'string', description: 'Additional classes.' },
];

export default function TablePage() {
  return (
    <div>
      <h1 className="font-display font-extrabold text-3xl text-foreground mb-2">Table</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        A structured data table with header, body, and optional footer. Supports zebra striping, row selection, sortable columns, and pagination.
      </p>

      <h3 className="text-sm text-fg-secondary mb-2">Anatomy</h3>
      <pre className="font-code text-xs text-fg-secondary bg-surface border border-border rounded-[3px] p-4 mb-8 leading-relaxed">{`<Table striped>
  <TableHeader>
    <TableRow>
      <TableHead sortable sortDirection="asc" onSort={…}>Column</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow selected onClick={…}>
      <TableCell>Value</TableCell>
    </TableRow>
  </TableBody>
  <TableFooter>   {/* optional */}
    <TableRow>…</TableRow>
  </TableFooter>
</Table>`}</pre>

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Examples</h2>
      <TableDemos />

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Table props</h2>
      <PropsTable props={tableProps} />

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">TableRow props</h2>
      <PropsTable props={rowProps} />

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">TableHead props</h2>
      <PropsTable props={headProps} />

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">TableCell props</h2>
      <PropsTable props={cellProps} />
    </div>
  );
}
