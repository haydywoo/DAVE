'use client';

import { EmptyState, Button } from '@dave/react';
import { Preview } from '@/components/Preview';

const InboxIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
    <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
  </svg>
);

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
  </svg>
);

export function EmptyStateDemos() {
  return (
    <>
      <Preview
        code={`<EmptyState
  icon={<InboxIcon />}
  title="No messages yet"
  description="When you receive messages they will appear here."
  action={<Button size="sm">Compose message</Button>}
/>`}
      >
        <EmptyState
          icon={<InboxIcon />}
          title="No messages yet"
          description="When you receive messages they will appear here."
          action={<Button size="sm">Compose message</Button>}
        />
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">No results</h3>
      <Preview
        code={`<EmptyState
  icon={<SearchIcon />}
  title="No results found"
  description='Nothing matches your search. Try different keywords.'
  action={<Button variant="ghost" size="sm">Clear search</Button>}
/>`}
      >
        <EmptyState
          icon={<SearchIcon />}
          title="No results found"
          description="Nothing matches your search. Try different keywords."
          action={<Button variant="ghost" size="sm">Clear search</Button>}
        />
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Without icon</h3>
      <Preview
        code={`<EmptyState
  title="No projects yet"
  description="Create your first project to get started."
  action={<Button size="sm">New project</Button>}
/>`}
      >
        <EmptyState
          title="No projects yet"
          description="Create your first project to get started."
          action={<Button size="sm">New project</Button>}
        />
      </Preview>
    </>
  );
}
