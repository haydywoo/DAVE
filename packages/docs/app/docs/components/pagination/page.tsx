import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { PaginationDemos } from './demos';

export const metadata: Metadata = { title: 'Pagination' };

const paginationProps = [
  { name: 'page', type: 'number', required: true, description: 'Current page (1-indexed).' },
  { name: 'pageCount', type: 'number', required: true, description: 'Total number of pages.' },
  { name: 'onPageChange', type: '(page: number) => void', required: true, description: 'Called when the user navigates to a different page.' },
  { name: 'showEdges', type: 'boolean', default: 'false', description: 'Show first and last page jump buttons.' },
  { name: 'siblings', type: 'number', default: '1', description: 'Number of page buttons on each side of the current page.' },
  { name: 'className', type: 'string', description: 'Additional classes on the nav element.' },
];

const pageSizeProps = [
  { name: 'pageSize', type: 'number', required: true, description: 'Currently selected page size.' },
  { name: 'onPageSizeChange', type: '(size: number) => void', required: true, description: 'Called when the user picks a new page size. Reset page to 1 here.' },
  { name: 'pageSizeOptions', type: 'number[]', default: '[10, 20, 50, 100]', description: 'Available page size options.' },
  { name: 'total', type: 'number', description: 'Total result count displayed alongside the selector.' },
];

export default function PaginationPage() {
  return (
    <div>
      <h1 className="font-display font-semibold text-4xl text-foreground mb-2">Pagination</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        Page navigation with smart ellipsis collapse. Combine with <code className="font-code text-[13px] bg-surface text-accent-foreground px-1.5 py-0.5 rounded-[3px] border border-border">PageSizeSelect</code> for full data table controls. Renders nothing when <code className="font-code text-[13px] bg-surface text-accent-foreground px-1.5 py-0.5 rounded-[3px] border border-border">pageCount</code> is 1 or less.
      </p>

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Examples</h2>
      <PaginationDemos />

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Pagination props</h2>
      <PropsTable props={paginationProps} />

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">PageSizeSelect props</h2>
      <PropsTable props={pageSizeProps} />
    </div>
  );
}
