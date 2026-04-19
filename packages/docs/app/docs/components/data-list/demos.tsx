'use client';

import { DataList, DataListItem, DataListLabel, DataListValue, Badge, Avatar } from '@dave/react';
import { Preview } from '@/components/Preview';

export function DataListDemos() {
  return (
    <>
      {/* Default horizontal */}
      <Preview center={false} code={`<DataList>
  <DataListItem>
    <DataListLabel>Status</DataListLabel>
    <DataListValue><Badge variant="success" size="sm">Active</Badge></DataListValue>
  </DataListItem>
  <DataListItem>
    <DataListLabel>Email</DataListLabel>
    <DataListValue>alice@example.com</DataListValue>
  </DataListItem>
  <DataListItem>
    <DataListLabel>Role</DataListLabel>
    <DataListValue>Admin</DataListValue>
  </DataListItem>
  <DataListItem>
    <DataListLabel>Member since</DataListLabel>
    <DataListValue>January 2024</DataListValue>
  </DataListItem>
</DataList>`}>
        <div className="w-full max-w-sm">
          <DataList>
            <DataListItem>
              <DataListLabel>Status</DataListLabel>
              <DataListValue><Badge variant="success" size="sm">Active</Badge></DataListValue>
            </DataListItem>
            <DataListItem>
              <DataListLabel>Email</DataListLabel>
              <DataListValue>alice@example.com</DataListValue>
            </DataListItem>
            <DataListItem>
              <DataListLabel>Role</DataListLabel>
              <DataListValue>Admin</DataListValue>
            </DataListItem>
            <DataListItem>
              <DataListLabel>Member since</DataListLabel>
              <DataListValue>January 2024</DataListValue>
            </DataListItem>
          </DataList>
        </div>
      </Preview>

      {/* Vertical */}
      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Vertical</h3>
      <Preview center={false} code={`<DataList orientation="vertical">
  <DataListItem>
    <DataListLabel>Status</DataListLabel>
    <DataListValue><Badge variant="success" size="sm">Active</Badge></DataListValue>
  </DataListItem>
  …
</DataList>`}>
        <div className="w-full max-w-xs">
          <DataList orientation="vertical">
            <DataListItem>
              <DataListLabel>Status</DataListLabel>
              <DataListValue><Badge variant="success" size="sm">Active</Badge></DataListValue>
            </DataListItem>
            <DataListItem>
              <DataListLabel>Email</DataListLabel>
              <DataListValue>alice@example.com</DataListValue>
            </DataListItem>
            <DataListItem>
              <DataListLabel>Role</DataListLabel>
              <DataListValue>Admin</DataListValue>
            </DataListItem>
            <DataListItem>
              <DataListLabel>Member since</DataListLabel>
              <DataListValue>January 2024</DataListValue>
            </DataListItem>
          </DataList>
        </div>
      </Preview>

      {/* Sizes */}
      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Sizes</h3>
      <Preview center={false} code={`<DataList size="sm">…</DataList>
<DataList size="md">…</DataList>
<DataList size="lg">…</DataList>`}>
        <div className="w-full flex flex-col gap-8">
          {(['sm', 'md', 'lg'] as const).map((size) => (
            <div key={size}>
              <p className="text-xs text-fg-secondary mb-2 font-medium uppercase tracking-wider">{size}</p>
              <DataList size={size}>
                <DataListItem>
                  <DataListLabel>Plan</DataListLabel>
                  <DataListValue>Pro</DataListValue>
                </DataListItem>
                <DataListItem>
                  <DataListLabel>Billing cycle</DataListLabel>
                  <DataListValue>Monthly</DataListValue>
                </DataListItem>
                <DataListItem>
                  <DataListLabel>Next invoice</DataListLabel>
                  <DataListValue>1 May 2026</DataListValue>
                </DataListItem>
              </DataList>
            </div>
          ))}
        </div>
      </Preview>

      {/* Rich values */}
      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Rich values</h3>
      <p className="text-sm text-fg-secondary mb-4">Values accept any ReactNode — avatars, badges, links, code.</p>
      <Preview center={false} code={`<DataList>
  <DataListItem>
    <DataListLabel>Owner</DataListLabel>
    <DataListValue>
      <div className="flex items-center gap-2">
        <Avatar initials="HP" size="xs" />
        <span>Haydn Phillips</span>
      </div>
    </DataListValue>
  </DataListItem>
  <DataListItem>
    <DataListLabel>Environment</DataListLabel>
    <DataListValue><Badge variant="warning" size="sm">Staging</Badge></DataListValue>
  </DataListItem>
  <DataListItem>
    <DataListLabel>Version</DataListLabel>
    <DataListValue><code className="font-code text-xs bg-surface px-1.5 py-0.5 rounded">v2.4.1</code></DataListValue>
  </DataListItem>
  <DataListItem>
    <DataListLabel>Region</DataListLabel>
    <DataListValue>eu-west-1</DataListValue>
  </DataListItem>
</DataList>`}>
        <div className="w-full max-w-sm">
          <DataList>
            <DataListItem>
              <DataListLabel>Owner</DataListLabel>
              <DataListValue>
                <div className="flex items-center gap-2">
                  <Avatar initials="HP" size="xs" />
                  <span>Haydn Phillips</span>
                </div>
              </DataListValue>
            </DataListItem>
            <DataListItem>
              <DataListLabel>Environment</DataListLabel>
              <DataListValue><Badge variant="warning" size="sm">Staging</Badge></DataListValue>
            </DataListItem>
            <DataListItem>
              <DataListLabel>Version</DataListLabel>
              <DataListValue><code className="font-code text-xs bg-surface px-1.5 py-0.5 rounded">v2.4.1</code></DataListValue>
            </DataListItem>
            <DataListItem>
              <DataListLabel>Region</DataListLabel>
              <DataListValue>eu-west-1</DataListValue>
            </DataListItem>
          </DataList>
        </div>
      </Preview>

      {/* Custom label width */}
      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Custom label width</h3>
      <p className="text-sm text-fg-secondary mb-4">Override the default <code className="font-code text-xs bg-surface px-1.5 py-0.5 rounded">8rem</code> label column with <code className="font-code text-xs bg-surface px-1.5 py-0.5 rounded">minWidth</code> on <code className="font-code text-xs bg-surface px-1.5 py-0.5 rounded">DataListLabel</code>.</p>
      <Preview center={false} code={`<DataList>
  <DataListItem>
    <DataListLabel minWidth="12rem">Billing address</DataListLabel>
    <DataListValue>123 Example Street, London</DataListValue>
  </DataListItem>
  …
</DataList>`}>
        <div className="w-full max-w-lg">
          <DataList>
            <DataListItem>
              <DataListLabel minWidth="12rem">Billing address</DataListLabel>
              <DataListValue>123 Example Street, London, EC1A 1BB</DataListValue>
            </DataListItem>
            <DataListItem>
              <DataListLabel minWidth="12rem">Company name</DataListLabel>
              <DataListValue>Acme Corp Ltd</DataListValue>
            </DataListItem>
            <DataListItem>
              <DataListLabel minWidth="12rem">VAT number</DataListLabel>
              <DataListValue>GB 123 456 789</DataListValue>
            </DataListItem>
          </DataList>
        </div>
      </Preview>
    </>
  );
}
