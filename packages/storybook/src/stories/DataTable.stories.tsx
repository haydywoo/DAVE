import type { Meta, StoryObj } from '@storybook/react-vite';
import { DataTable } from '@dave/react';
import type { ColumnDef } from '@dave/react';
import { Badge } from '@dave/react';

// ─── Sample data ──────────────────────────────────────────────────────────────

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
  joined: string;
  [key: string]: unknown;
}

const users: User[] = [
  { id: '1', name: 'Alice Chen',    email: 'alice@example.com',   role: 'Admin',   status: 'Active',    joined: '2023-01-15' },
  { id: '2', name: 'Bob Martin',    email: 'bob@example.com',     role: 'Editor',  status: 'Active',    joined: '2023-03-22' },
  { id: '3', name: 'Carol Davies',  email: 'carol@example.com',   role: 'Viewer',  status: 'Inactive',  joined: '2023-05-10' },
  { id: '4', name: 'Dan Hughes',    email: 'dan@example.com',     role: 'Editor',  status: 'Active',    joined: '2023-07-04' },
  { id: '5', name: 'Eva Torres',    email: 'eva@example.com',     role: 'Admin',   status: 'Active',    joined: '2023-09-18' },
  { id: '6', name: 'Frank Müller',  email: 'frank@example.com',   role: 'Viewer',  status: 'Pending',   joined: '2024-01-03' },
  { id: '7', name: 'Grace Kim',     email: 'grace@example.com',   role: 'Editor',  status: 'Active',    joined: '2024-02-14' },
  { id: '8', name: 'Henry Walsh',   email: 'henry@example.com',   role: 'Viewer',  status: 'Inactive',  joined: '2024-03-30' },
  { id: '9', name: 'Isla Grant',    email: 'isla@example.com',    role: 'Editor',  status: 'Active',    joined: '2024-05-01' },
  { id: '10', name: 'James Park',   email: 'james@example.com',   role: 'Viewer',  status: 'Pending',   joined: '2024-06-12' },
  { id: '11', name: 'Karen Bell',   email: 'karen@example.com',   role: 'Admin',   status: 'Active',    joined: '2024-07-07' },
  { id: '12', name: 'Leo Santos',   email: 'leo@example.com',     role: 'Editor',  status: 'Active',    joined: '2024-08-20' },
];

const statusVariant: Record<string, 'success' | 'warning' | 'neutral'> = {
  Active:   'success',
  Pending:  'warning',
  Inactive: 'neutral',
};

const columns: ColumnDef<User>[] = [
  { key: 'name',   header: 'Name',   sortable: true },
  { key: 'email',  header: 'Email',  sortable: true },
  { key: 'role',   header: 'Role',   sortable: true },
  {
    key: 'status',
    header: 'Status',
    sortable: true,
    cell: (row) => (
      <Badge variant={statusVariant[row.status] ?? 'neutral'} size="sm">
        {row.status}
      </Badge>
    ),
  },
  { key: 'joined', header: 'Joined', sortable: true, align: 'right' },
];

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof DataTable> = {
  title: 'Data Display/DataTable',
  component: DataTable,
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof DataTable>;

// ─── Stories ──────────────────────────────────────────────────────────────────

export const Default: Story = {
  render: () => (
    <DataTable
      columns={columns}
      data={users}
      getRowId={(row) => row.id}
    />
  ),
};

export const WithPagination: Story = {
  render: () => (
    <DataTable
      columns={columns}
      data={users}
      getRowId={(row) => row.id}
      pageSize={5}
    />
  ),
};

export const WithSelection: Story = {
  render: () => (
    <DataTable
      columns={columns}
      data={users}
      getRowId={(row) => row.id}
      selectable
      pageSize={5}
    />
  ),
};

export const Striped: Story = {
  render: () => (
    <DataTable
      columns={columns}
      data={users}
      getRowId={(row) => row.id}
      striped
    />
  ),
};

export const Empty: Story = {
  render: () => (
    <DataTable
      columns={columns}
      data={[]}
      emptyTitle="No users found"
      emptyDescription="Try adjusting your search or filter to find what you're looking for."
    />
  ),
};
