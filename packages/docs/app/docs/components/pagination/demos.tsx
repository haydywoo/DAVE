'use client';

import * as React from 'react';
import { Pagination, PageSizeSelect } from '@dave/react';
import { Preview } from '@/components/Preview';

export function PaginationDemos() {
  return (
    <>
      <Preview code={`const [page, setPage] = React.useState(1);

<Pagination page={page} pageCount={10} onPageChange={setPage} />`}>
        <Controlled pageCount={10} />
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Many pages</h3>
      <Preview code={`<Pagination page={page} pageCount={50} onPageChange={setPage} />`}>
        <Controlled pageCount={50} initial={25} />
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">With first / last buttons</h3>
      <Preview code={`<Pagination page={page} pageCount={20} onPageChange={setPage} showEdges />`}>
        <Controlled pageCount={20} initial={10} showEdges />
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Wider sibling range</h3>
      <Preview code={`<Pagination page={page} pageCount={20} onPageChange={setPage} siblings={2} />`}>
        <Controlled pageCount={20} initial={10} siblings={2} />
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">With page size selector</h3>
      <Preview code={`<div className="flex items-center justify-between">
  <PageSizeSelect
    pageSize={pageSize}
    onPageSizeChange={(size) => { setPageSize(size); setPage(1); }}
    total={248}
  />
  <Pagination page={page} pageCount={pageCount} onPageChange={setPage} />
</div>`}>
        <WithPageSize />
      </Preview>
    </>
  );
}

function Controlled({ initial = 1, pageCount, showEdges, siblings }: {
  initial?: number;
  pageCount: number;
  showEdges?: boolean;
  siblings?: number;
}) {
  const [page, setPage] = React.useState(initial);
  return (
    <Pagination
      page={page}
      pageCount={pageCount}
      onPageChange={setPage}
      showEdges={showEdges}
      siblings={siblings}
    />
  );
}

function WithPageSize() {
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);
  const total = 248;
  const pageCount = Math.ceil(total / pageSize);

  return (
    <div className="flex w-full max-w-lg items-center justify-between gap-4">
      <PageSizeSelect
        pageSize={pageSize}
        onPageSizeChange={(size) => { setPageSize(size); setPage(1); }}
        total={total}
      />
      <Pagination page={page} pageCount={pageCount} onPageChange={setPage} />
    </div>
  );
}
