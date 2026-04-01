import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import {
  Table, TableHeader, TableBody, TableFooter,
  TableRow, TableHead, TableCell,
  Badge, Avatar, Checkbox, Pagination,
} from '@dave/react';
import type { SortDirection } from '@dave/react';

const meta: Meta = {
  title: 'Components/Table',
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj;

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

export const Default: Story = {
  render: () => (
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
  ),
};

export const Striped: Story = {
  render: () => (
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
  ),
};

export const WithSelection: Story = {
  render: function SelectionStory() {
    const [selected, setSelected] = React.useState<Set<number>>(new Set([2]));

    const allSelected = selected.size === members.length;
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
      <div className="flex flex-col gap-3">
        {selected.size > 0 && (
          <div className="flex items-center gap-2 text-sm text-fg-secondary">
            <span className="font-medium text-foreground">{selected.size}</span> row{selected.size !== 1 ? 's' : ''} selected
          </div>
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
    );
  },
};

export const Sortable: Story = {
  render: function SortableStory() {
    const [sortKey, setSortKey] = React.useState<'name' | 'role' | 'joined' | null>(null);
    const [sortDir, setSortDir] = React.useState<SortDirection>(null);

    function handleSort(key: 'name' | 'role' | 'joined') {
      if (sortKey !== key) { setSortKey(key); setSortDir('asc'); return; }
      if (sortDir === 'asc') { setSortDir('desc'); return; }
      setSortKey(null); setSortDir(null);
    }

    const dir = (key: typeof sortKey): SortDirection =>
      sortKey === key ? sortDir : null;

    const sorted = [...members].sort((a, b) => {
      if (!sortKey || !sortDir) return 0;
      const v = a[sortKey] < b[sortKey] ? -1 : a[sortKey] > b[sortKey] ? 1 : 0;
      return sortDir === 'asc' ? v : -v;
    });

    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead sortable sortDirection={dir('name')}  onSort={() => handleSort('name')}>Name</TableHead>
            <TableHead sortable sortDirection={dir('role')}  onSort={() => handleSort('role')}>Role</TableHead>
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
    );
  },
};

export const WithPagination: Story = {
  render: function PaginatedStory() {
    const [page, setPage] = React.useState(1);
    const pageSize = 2;
    const pageCount = Math.ceil(members.length / pageSize);
    const rows = members.slice((page - 1) * pageSize, page * pageSize);

    return (
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
    );
  },
};
