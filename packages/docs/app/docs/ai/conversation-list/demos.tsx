'use client';

import { useState } from 'react';
import { ConversationList } from '@haydywoo/dave-react';
import { Preview } from '@/components/Preview';

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

export function ConversationListDemos() {
  const [active, setActive] = useState('1');

  return (
    <>
      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Flat list with timestamps</h3>
      <Preview
        code={`<ConversationList
  conversations={conversations}
  activeId={activeId}
  onSelect={(c) => setActiveId(c.id)}
  onDelete={(id) => console.log('delete', id)}
  onNewChat={() => console.log('new chat')}
/>`}
      >
        <div className="w-64 border border-border rounded-[6px] p-2">
          <ConversationList
            conversations={FLAT}
            activeId={active}
            onSelect={(c) => setActive(c.id)}
            onDelete={(id) => console.log('delete', id)}
            onNewChat={() => console.log('new chat')}
          />
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Grouped by date</h3>
      <Preview
        code={`<ConversationList
  conversations={grouped}
  activeId={activeId}
  onSelect={(c) => setActiveId(c.id)}
/>`}
      >
        <div className="w-64 border border-border rounded-[6px] p-2">
          <ConversationList
            conversations={GROUPED}
            activeId={active}
            onSelect={(c) => setActive(c.id)}
          />
        </div>
      </Preview>
    </>
  );
}
