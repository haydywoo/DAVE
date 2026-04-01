'use client';

import * as React from 'react';
import {
  Table, TableHeader, TableBody, TableFooter,
  TableRow, TableHead, TableCell,
  Badge, Avatar, Checkbox, Pagination,
} from '@dave/react';
import type { SortDirection } from '@dave/react';
import { Preview } from '@/components/Preview';

const members = [
  { id: 1, name: 'Haydn Phillips', email: 'haydn@example.com', role: 'Admin',  status: 'Active'   as const, joined: 'Jan 2024' },
  { id: 2, name: 'Jamie Davies',   email: 'jamie@example.com', role: 'Member', status: 'Active'   as const, joined: 'Mar 2024' },
  { id: 3, name: 'Sara Kim',       email: 'sara@example.com',  role: 'Member', status: 'Inactive' as const, joined: 'Jun 2024' },
  { id: 4, name: 'Alex Morgan',    email: 'alex@example.com',  role: 'Viewer', status: 'Pending'  as const, joined: 'Sep 2024' },
  { id: 5, name: 'Jordan Lee',     email: 'jordan@example.com',role: 'Member', status: 'Active'   as const, joined: 'Nov 2024' },
];

const statusVariant = {
  Active: 'success', Inactive: 'neutral', Pending: 'warning',
} as const;

export function TableDemos() {
  return (
    <>
      {/* ── Default ─────────────────────────────────────────────────────────── */}
      <Preview center={false} code={`<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Role</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Joined</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {rows.map((m) => (
      <TableRow key={m.id}>
        <TableCell className="font-medium">{m.name}</TableCell>
        <TableCell>{m.role}</TableCell>
        <TableCell><Badge variant={statusVariant[m.status]} size="sm">{m.status}</Badge></TableCell>
        <TableCell className="text-fg-secondary">{m.joined}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>`}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Joined</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {members.map((m) => (
              <TableRow key={m.id}>
                <TableCell className="font-medium">{m.name}</TableCell>
                <TableCell className="text-fg-secondary">{m.email}</TableCell>
                <TableCell>{m.role}</TableCell>
                <TableCell><Badge variant={statusVariant[m.status]} size="sm">{m.status}</Badge></TableCell>
                <TableCell className="text-fg-secondary">{m.joined}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Preview>

      {/* ── Zebra ───────────────────────────────────────────────────────────── */}
      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Zebra striping</h3>
      <Preview center={false} code={`<Table striped>…</Table>`}>
        <Table striped>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Joined</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {members.map((m) => (
              <TableRow key={m.id}>
                <TableCell className="font-medium">{m.name}</TableCell>
                <TableCell>{m.role}</TableCell>
                <TableCell><Badge variant={statusVariant[m.status]} size="sm">{m.status}</Badge></TableCell>
                <TableCell className="text-fg-secondary">{m.joined}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Preview>

      {/* ── Sortable ────────────────────────────────────────────────────────── */}
      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Sortable columns</h3>
      <SortableDemo />

      {/* ── Selection ───────────────────────────────────────────────────────── */}
      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Row selection</h3>
      <SelectionDemo />

      {/* ── Footer ──────────────────────────────────────────────────────────── */}
      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">With footer</h3>
      <Preview center={false} code={`<Table>
  <TableHeader>…</TableHeader>
  <TableBody>…</TableBody>
  <TableFooter>
    <TableRow>
      <TableCell colSpan={2} className="font-semibold">Total</TableCell>
      <TableCell align="right" className="font-semibold tabular-nums">$5,590.00</TableCell>
    </TableRow>
  </TableFooter>
</Table>`}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead align="right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              { id: 'INV-001', status: 'Paid'    as const, amount: '$1,200.00' },
              { id: 'INV-002', status: 'Pending' as const, amount: '$450.00'   },
              { id: 'INV-003', status: 'Paid'    as const, amount: '$3,050.00' },
              { id: 'INV-004', status: 'Overdue' as const, amount: '$890.00'   },
            ].map((inv) => (
              <TableRow key={inv.id}>
                <TableCell className="font-medium font-code text-xs">{inv.id}</TableCell>
                <TableCell>
                  <Badge size="sm" variant={inv.status === 'Paid' ? 'success' : inv.status === 'Pending' ? 'warning' : 'error'}>
                    {inv.status}
                  </Badge>
                </TableCell>
                <TableCell align="right" className="tabular-nums">{inv.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={2} className="font-semibold">Total</TableCell>
              <TableCell align="right" className="font-semibold tabular-nums">$5,590.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </Preview>

      {/* ── Clickable rows ──────────────────────────────────────────────────── */}
      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Clickable rows</h3>
      <Preview center={false} code={`<TableRow onClick={() => openDetail(m)}>…</TableRow>`}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {members.map((m) => (
              <TableRow key={m.id} onClick={() => {}}>
                <TableCell className="font-medium">{m.name}</TableCell>
                <TableCell>{m.role}</TableCell>
                <TableCell><Badge variant={statusVariant[m.status]} size="sm">{m.status}</Badge></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Preview>

      {/* ── Pagination ──────────────────────────────────────────────────────── */}
      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">With pagination</h3>
      <PaginatedDemo />
    </>
  );
}

function SortableDemo() {
  const [sortKey, setSortKey] = React.useState<'name' | 'role' | 'joined' | null>(null);
  const [sortDir, setSortDir] = React.useState<SortDirection>(null);

  function handleSort(key: 'name' | 'role' | 'joined') {
    if (sortKey !== key) { setSortKey(key); setSortDir('asc'); return; }
    if (sortDir === 'asc') { setSortDir('desc'); return; }
    setSortKey(null); setSortDir(null);
  }

  const dir = (key: typeof sortKey): SortDirection => sortKey === key ? sortDir : null;

  const sorted = [...members].sort((a, b) => {
    if (!sortKey || !sortDir) return 0;
    const v = a[sortKey] < b[sortKey] ? -1 : a[sortKey] > b[sortKey] ? 1 : 0;
    return sortDir === 'asc' ? v : -v;
  });

  return (
    <Preview center={false} code={`<TableHead sortable sortDirection={dir('name')} onSort={() => handleSort('name')}>
  Name
</TableHead>`}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead sortable sortDirection={dir('name')}   onSort={() => handleSort('name')}>Name</TableHead>
            <TableHead sortable sortDirection={dir('role')}   onSort={() => handleSort('role')}>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead sortable sortDirection={dir('joined')} onSort={() => handleSort('joined')}>Joined</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sorted.map((m) => (
            <TableRow key={m.id}>
              <TableCell className="font-medium">{m.name}</TableCell>
              <TableCell>{m.role}</TableCell>
              <TableCell><Badge variant={statusVariant[m.status]} size="sm">{m.status}</Badge></TableCell>
              <TableCell className="text-fg-secondary">{m.joined}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Preview>
  );
}

function SelectionDemo() {
  const [selected, setSelected] = React.useState<Set<number>>(new Set([2]));

  const allSelected  = selected.size === members.length;
  const someSelected = selected.size > 0 && !allSelected;

  function toggleAll() {
    setSelected(allSelected ? new Set() : new Set(members.map(m => m.id)));
  }

  function toggleRow(id: number) {
    const next = new Set(selected);
    next.has(id) ? next.delete(id) : next.add(id);
    setSelected(next);
  }

  return (
    <Preview center={false} code={`<TableRow selected={selected.has(m.id)} onClick={() => toggleRow(m.id)}>
  <TableCell>
    <Checkbox checked={selected.has(m.id)} onChange={() => toggleRow(m.id)} />
  </TableCell>
  …
</TableRow>`}>
      <div className="flex flex-col gap-3">
        {selected.size > 0 && (
          <p className="text-sm text-fg-secondary">
            <span className="font-medium text-foreground">{selected.size}</span> row{selected.size !== 1 ? 's' : ''} selected
          </p>
        )}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-10">
                <Checkbox
                  checked={allSelected}
                  indeterminate={someSelected}
                  onChange={toggleAll}
                  aria-label="Select all"
                />
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {members.map((m) => (
              <TableRow key={m.id} selected={selected.has(m.id)} onClick={() => toggleRow(m.id)}>
                <TableCell>
                  <Checkbox
                    checked={selected.has(m.id)}
                    onChange={() => toggleRow(m.id)}
                    aria-label={`Select ${m.name}`}
                  />
                </TableCell>
                <TableCell className="font-medium">{m.name}</TableCell>
                <TableCell>{m.role}</TableCell>
                <TableCell><Badge variant={statusVariant[m.status]} size="sm">{m.status}</Badge></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Preview>
  );
}

function PaginatedDemo() {
  const [page, setPage] = React.useState(1);
  const pageSize = 3;
  const pageCount = Math.ceil(members.length / pageSize);
  const rows = members.slice((page - 1) * pageSize, page * pageSize);

  return (
    <Preview center={false} code={`const [page, setPage] = React.useState(1);
const pageCount = Math.ceil(rows.length / PAGE_SIZE);
const visible = rows.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

<Table>…</Table>
<div className="flex items-center justify-between">
  <span className="text-sm text-fg-secondary">
    {(page - 1) * PAGE_SIZE + 1}–{Math.min(page * PAGE_SIZE, rows.length)} of {rows.length}
  </span>
  <Pagination page={page} pageCount={pageCount} onPageChange={setPage} />
</div>`}>
      <div className="flex flex-col gap-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((m) => (
              <TableRow key={m.id}>
                <TableCell className="font-medium">{m.name}</TableCell>
                <TableCell>{m.role}</TableCell>
                <TableCell><Badge variant={statusVariant[m.status]} size="sm">{m.status}</Badge></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex items-center justify-between">
          <span className="text-sm text-fg-secondary">
            {(page - 1) * pageSize + 1}–{Math.min(page * pageSize, members.length)} of {members.length}
          </span>
          <Pagination page={page} pageCount={pageCount} onPageChange={setPage} />
        </div>
      </div>
    </Preview>
  );
}
