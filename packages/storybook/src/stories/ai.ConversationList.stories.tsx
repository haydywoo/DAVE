import type { Meta, StoryObj } from '@storybook/react-vite';
import { ConversationList } from '@dave/react';

const meta: Meta<typeof ConversationList> = {
  title: 'AI/ConversationList',
  component: ConversationList,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof ConversationList>;

const FLAT = [
  { id: '1', title: 'How RSC works', updatedAt: new Date(Date.now() - 5 * 60_000) },
  { id: '2', title: 'Tailwind tips and tricks', updatedAt: new Date(Date.now() - 2 * 3600_000) },
  { id: '3', title: 'TypeScript generics explained', updatedAt: new Date(Date.now() - 25 * 3600_000) },
];

const GROUPED = [
  { label: 'Today',     items: [{ id: '1', title: 'How RSC works' }, { id: '2', title: 'Tailwind tips' }] },
  { label: 'Yesterday', items: [{ id: '3', title: 'TypeScript generics', unread: 2 }] },
  { label: 'Last week', items: [{ id: '4', title: 'React Query patterns' }] },
];

export const Flat: Story = {
  render: () => (
    <div className="w-56 border border-border rounded-[6px] p-2">
      <ConversationList
        conversations={FLAT}
        activeId="1"
        onSelect={(c) => console.log(c.id)}
        onDelete={(id) => console.log('delete', id)}
        onNewChat={() => console.log('new chat')}
      />
    </div>
  ),
};

export const Grouped: Story = {
  render: () => (
    <div className="w-56 border border-border rounded-[6px] p-2">
      <ConversationList
        conversations={GROUPED}
        activeId="2"
        onSelect={(c) => console.log(c.id)}
      />
    </div>
  ),
};
