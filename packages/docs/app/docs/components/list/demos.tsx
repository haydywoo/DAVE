'use client';

import { List, ListItem, Avatar, Badge } from '@haydywoo/dave-react';
import { Preview } from '@/components/Preview';

function ChevronRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-fg-subdued">
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export function ListDemos() {
  return (
    <div>
      {/* Basic */}
      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Basic</h3>
      <Preview center={false} code={`<List>
  <ListItem>Apples</ListItem>
  <ListItem>Oranges</ListItem>
  <ListItem>Pears</ListItem>
</List>`}>
        <div className="w-72">
          <List>
            <ListItem>Apples</ListItem>
            <ListItem>Oranges</ListItem>
            <ListItem>Pears</ListItem>
          </List>
        </div>
      </Preview>

      {/* Divided */}
      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Divided</h3>
      <Preview center={false} code={`<List divided>
  <ListItem>Apples</ListItem>
  <ListItem>Oranges</ListItem>
  <ListItem>Pears</ListItem>
</List>`}>
        <div className="w-72">
          <List divided>
            <ListItem>Apples</ListItem>
            <ListItem>Oranges</ListItem>
            <ListItem>Pears</ListItem>
          </List>
        </div>
      </Preview>

      {/* Bordered */}
      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Bordered</h3>
      <Preview center={false} code={`<List bordered divided>
  <ListItem>Apples</ListItem>
  <ListItem>Oranges</ListItem>
  <ListItem>Pears</ListItem>
</List>`}>
        <div className="w-72">
          <List bordered divided>
            <ListItem>Apples</ListItem>
            <ListItem>Oranges</ListItem>
            <ListItem>Pears</ListItem>
          </List>
        </div>
      </Preview>

      {/* Ordered */}
      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Ordered</h3>
      <Preview center={false} code={`<List ordered divided>
  <ListItem>First step</ListItem>
  <ListItem>Second step</ListItem>
  <ListItem>Third step</ListItem>
</List>`}>
        <div className="w-72">
          <List ordered divided>
            <ListItem>First step</ListItem>
            <ListItem>Second step</ListItem>
            <ListItem>Third step</ListItem>
          </List>
        </div>
      </Preview>

      {/* Sizes */}
      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Sizes</h3>
      <Preview center={false} code={`<List bordered divided size="sm">...</List>
<List bordered divided size="md">...</List>`}>
        <div className="flex gap-6 items-start">
          <div className="w-56">
            <p className="text-xs text-fg-secondary uppercase tracking-wider mb-2">Small</p>
            <List bordered divided size="sm">
              <ListItem>Compact row</ListItem>
              <ListItem>Compact row</ListItem>
              <ListItem>Compact row</ListItem>
            </List>
          </div>
          <div className="w-56">
            <p className="text-xs text-fg-secondary uppercase tracking-wider mb-2">Medium</p>
            <List bordered divided size="md">
              <ListItem>Comfortable row</ListItem>
              <ListItem>Comfortable row</ListItem>
              <ListItem>Comfortable row</ListItem>
            </List>
          </div>
        </div>
      </Preview>

      {/* Interactive — onClick */}
      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Interactive (onClick)</h3>
      <Preview center={false} code={`<List bordered divided>
  <ListItem onClick={() => alert('Apples')}>Apples</ListItem>
  <ListItem onClick={() => alert('Oranges')} selected>Oranges</ListItem>
  <ListItem onClick={() => alert('Pears')}>Pears</ListItem>
</List>`}>
        <div className="w-72">
          <List bordered divided>
            <ListItem onClick={() => {}}>Apples</ListItem>
            <ListItem onClick={() => {}} selected>Oranges</ListItem>
            <ListItem onClick={() => {}}>Pears</ListItem>
          </List>
        </div>
      </Preview>

      {/* Interactive — href */}
      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">As links (href)</h3>
      <Preview center={false} code={`<List bordered divided>
  <ListItem href="/docs/components/card">Card</ListItem>
  <ListItem href="/docs/components/button">Button</ListItem>
  <ListItem href="/docs/components/badge">Badge</ListItem>
</List>`}>
        <div className="w-72">
          <List bordered divided>
            <ListItem href="/docs/components/card">Card</ListItem>
            <ListItem href="/docs/components/button">Button</ListItem>
            <ListItem href="/docs/components/badge">Badge</ListItem>
          </List>
        </div>
      </Preview>

      {/* Composed content */}
      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Composed content</h3>
      <p className="text-sm text-fg-secondary mb-4">
        No named slots. Drop any JSX inside the item and compose with flex.
      </p>
      <Preview center={false} code={`<List bordered divided>
  <ListItem href="/members/haydyn">
    <div className="flex items-center gap-3">
      <Avatar initials="HP" size="sm" />
      <div className="flex-1 min-w-0">
        <p className="text-foreground">Haydyn Phillips</p>
        <p className="text-xs text-fg-secondary">haydyn@example.com</p>
      </div>
      <Badge>Owner</Badge>
    </div>
  </ListItem>
</List>`}>
        <div className="w-96">
          <List bordered divided>
            <ListItem href="#">
              <div className="flex items-center gap-3">
                <Avatar initials="HP" size="sm" />
                <div className="flex-1 min-w-0">
                  <p className="text-foreground">Haydyn Phillips</p>
                  <p className="text-xs text-fg-secondary">haydyn@example.com</p>
                </div>
                <Badge>Owner</Badge>
              </div>
            </ListItem>
            <ListItem href="#">
              <div className="flex items-center gap-3">
                <Avatar initials="AP" size="sm" />
                <div className="flex-1 min-w-0">
                  <p className="text-foreground">Alex Park</p>
                  <p className="text-xs text-fg-secondary">alex@example.com</p>
                </div>
                <Badge variant="neutral">Member</Badge>
              </div>
            </ListItem>
            <ListItem href="#">
              <div className="flex items-center gap-3">
                <Avatar initials="JS" size="sm" />
                <div className="flex-1 min-w-0">
                  <p className="text-foreground">Jordan Smith</p>
                  <p className="text-xs text-fg-secondary">jordan@example.com</p>
                </div>
                <Badge variant="neutral">Member</Badge>
              </div>
            </ListItem>
          </List>
        </div>
      </Preview>

      {/* Settings rows */}
      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Settings rows</h3>
      <Preview center={false} code={`<List bordered divided>
  <ListItem href="/settings/profile">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-foreground">Profile</p>
        <p className="text-xs text-fg-secondary">Name, email, avatar</p>
      </div>
      <ChevronRight />
    </div>
  </ListItem>
</List>`}>
        <div className="w-96">
          <List bordered divided>
            {[
              { title: 'Profile',       desc: 'Name, email, avatar' },
              { title: 'Notifications', desc: 'Email and in-app alerts' },
              { title: 'Appearance',    desc: 'Theme, accent colour, density' },
              { title: 'Billing',       desc: 'Plan, payment method, invoices' },
            ].map(row => (
              <ListItem key={row.title} href="#">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-foreground">{row.title}</p>
                    <p className="text-xs text-fg-secondary">{row.desc}</p>
                  </div>
                  <ChevronRight />
                </div>
              </ListItem>
            ))}
          </List>
        </div>
      </Preview>
    </div>
  );
}
