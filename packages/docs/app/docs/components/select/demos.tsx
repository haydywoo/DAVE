'use client';

import { Select, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectField } from '@haydywoo/dave-react';
import { Preview } from '@/components/Preview';

// ─── Demo icons ───────────────────────────────────────────────────────────────

function BranchIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="6" y1="3" x2="6" y2="15" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="6"  cy="18" r="3" />
      <path d="M18 9a9 9 0 0 1-9 9" />
    </svg>
  );
}

function SortIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 6h18M7 12h10M11 18h2" />
    </svg>
  );
}

function FilterIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}

function TagIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2H2v10l9.29 9.29a1 1 0 0 0 1.41 0l7.29-7.29a1 1 0 0 0 0-1.41L12 2Z" />
      <path d="M7 7h.01" />
    </svg>
  );
}

function Dot({ color }: { color: string }) {
  return <span className="inline-block w-2.5 h-2.5 rounded-full shrink-0" style={{ background: color }} />;
}

// ─── Demos ────────────────────────────────────────────────────────────────────

export function SelectDemos() {
  return (
    <>
      {/* Default outline */}
      <Preview code={`<Select placeholder="Select a role…">
  <SelectItem value="admin">Admin</SelectItem>
  <SelectItem value="member">Member</SelectItem>
  <SelectItem value="viewer">Viewer</SelectItem>
</Select>`}>
        <div className="w-56">
          <Select placeholder="Select a role…">
            <SelectItem value="admin">Admin</SelectItem>
            <SelectItem value="member">Member</SelectItem>
            <SelectItem value="viewer">Viewer</SelectItem>
          </Select>
        </div>
      </Preview>

      {/* With label and hint */}
      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">With label and hint</h3>
      <Preview code={`<SelectField label="Role" hint="Controls what the user can do.">
  <Select placeholder="Select a role…">
    <SelectItem value="admin">Admin</SelectItem>
    <SelectItem value="member">Member</SelectItem>
    <SelectItem value="viewer">Viewer</SelectItem>
  </Select>
</SelectField>`}>
        <div className="w-56">
          <SelectField label="Role" hint="Controls what the user can do.">
            <Select placeholder="Select a role…">
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="member">Member</SelectItem>
              <SelectItem value="viewer">Viewer</SelectItem>
            </Select>
          </SelectField>
        </div>
      </Preview>

      {/* Secondary variant */}
      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Secondary</h3>
      <p className="text-sm text-fg-secondary mb-4">Bordered button-style trigger. Use in toolbars, filter bars, and repo headers.</p>
      <Preview code={`<Select variant="secondary" icon={<BranchIcon />} defaultValue="main">
  <SelectItem value="main">main</SelectItem>
  <SelectItem value="dev">dev</SelectItem>
  <SelectItem value="feat/redesign">feat/redesign</SelectItem>
</Select>

<Select variant="secondary" icon={<SortIcon />} placeholder="Sort by…">
  <SelectItem value="newest">Newest</SelectItem>
  <SelectItem value="oldest">Oldest</SelectItem>
  <SelectItem value="most-commented">Most commented</SelectItem>
</Select>`}>
        <div className="flex flex-wrap gap-3">
          <Select variant="secondary" icon={<BranchIcon />} defaultValue="main">
            <SelectItem value="main">main</SelectItem>
            <SelectItem value="dev">dev</SelectItem>
            <SelectItem value="feat/redesign">feat/redesign</SelectItem>
            <SelectItem value="fix/nav-overflow">fix/nav-overflow</SelectItem>
          </Select>

          <Select variant="secondary" icon={<SortIcon />} placeholder="Sort by…">
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="oldest">Oldest</SelectItem>
            <SelectItem value="most-commented">Most commented</SelectItem>
            <SelectItem value="most-reactions">Most reactions</SelectItem>
          </Select>

          <Select variant="secondary" icon={<FilterIcon />} placeholder="Filter…">
            <SelectItem value="open">Open</SelectItem>
            <SelectItem value="closed">Closed</SelectItem>
            <SelectItem value="draft">Draft</SelectItem>
          </Select>
        </div>
      </Preview>

      {/* Ghost variant */}
      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Ghost</h3>
      <p className="text-sm text-fg-secondary mb-4">Borderless trigger. Use in sidebars, inline pickers, and dense UIs.</p>
      <Preview code={`<Select variant="ghost" icon={<TagIcon />} placeholder="Label…">
  <SelectItem value="bug">Bug</SelectItem>
  <SelectItem value="enhancement">Enhancement</SelectItem>
  <SelectItem value="question">Question</SelectItem>
</Select>`}>
        <div className="flex flex-wrap gap-3">
          <Select variant="ghost" icon={<TagIcon />} placeholder="Label…">
            <SelectItem value="bug">Bug</SelectItem>
            <SelectItem value="enhancement">Enhancement</SelectItem>
            <SelectItem value="question">Question</SelectItem>
            <SelectItem value="documentation">Documentation</SelectItem>
          </Select>

          <Select variant="ghost" icon={<FilterIcon />} placeholder="Status…">
            <SelectItem value="open">Open</SelectItem>
            <SelectItem value="in-progress">In progress</SelectItem>
            <SelectItem value="done">Done</SelectItem>
          </Select>
        </div>
      </Preview>

      {/* Item icons */}
      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Item icons</h3>
      <p className="text-sm text-fg-secondary mb-4">Pass an <code className="font-code text-xs bg-surface px-1 py-0.5 rounded">icon</code> to any <code className="font-code text-xs bg-surface px-1 py-0.5 rounded">SelectItem</code> — colour swatches, status dots, or any ReactNode.</p>
      <Preview code={`<Select variant="secondary" placeholder="Priority…">
  <SelectItem value="critical" icon={<Dot color="#ef4444" />}>Critical</SelectItem>
  <SelectItem value="high"     icon={<Dot color="#f97316" />}>High</SelectItem>
  <SelectItem value="medium"   icon={<Dot color="#eab308" />}>Medium</SelectItem>
  <SelectItem value="low"      icon={<Dot color="#22c55e" />}>Low</SelectItem>
</Select>`}>
        <div className="flex flex-wrap gap-3">
          <Select variant="secondary" placeholder="Priority…">
            <SelectItem value="critical" icon={<Dot color="#ef4444" />}>Critical</SelectItem>
            <SelectItem value="high"     icon={<Dot color="#f97316" />}>High</SelectItem>
            <SelectItem value="medium"   icon={<Dot color="#eab308" />}>Medium</SelectItem>
            <SelectItem value="low"      icon={<Dot color="#22c55e" />}>Low</SelectItem>
          </Select>

          <Select variant="ghost" placeholder="Environment…">
            <SelectItem value="prod"    icon={<Dot color="#22c55e" />}>Production</SelectItem>
            <SelectItem value="staging" icon={<Dot color="#f97316" />}>Staging</SelectItem>
            <SelectItem value="dev"     icon={<Dot color="#64748b" />}>Development</SelectItem>
          </Select>
        </div>
      </Preview>

      {/* Icon-only */}
      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Icon only</h3>
      <p className="text-sm text-fg-secondary mb-4">Square trigger — no label, no chevron. Works with <code className="font-code text-xs bg-surface px-1 py-0.5 rounded">secondary</code> and <code className="font-code text-xs bg-surface px-1 py-0.5 rounded">ghost</code>.</p>
      <Preview code={`<Select variant="secondary" iconOnly icon={<SortIcon />}>
  <SelectItem value="newest">Newest first</SelectItem>
  <SelectItem value="oldest">Oldest first</SelectItem>
  <SelectItem value="az">A → Z</SelectItem>
</Select>

<Select variant="ghost" iconOnly icon={<FilterIcon />}>
  <SelectItem value="open">Open</SelectItem>
  <SelectItem value="closed">Closed</SelectItem>
  <SelectItem value="draft">Draft</SelectItem>
</Select>`}>
        <div className="flex flex-wrap gap-2">
          <Select variant="secondary" iconOnly icon={<SortIcon />}>
            <SelectItem value="newest">Newest first</SelectItem>
            <SelectItem value="oldest">Oldest first</SelectItem>
            <SelectItem value="az">A → Z</SelectItem>
            <SelectItem value="za">Z → A</SelectItem>
          </Select>

          <Select variant="ghost" iconOnly icon={<FilterIcon />}>
            <SelectItem value="open">Open</SelectItem>
            <SelectItem value="closed">Closed</SelectItem>
            <SelectItem value="draft">Draft</SelectItem>
          </Select>

          <Select variant="secondary" iconOnly size="sm" icon={<TagIcon />}>
            <SelectItem value="bug"           icon={<Dot color="#ef4444" />}>Bug</SelectItem>
            <SelectItem value="enhancement"   icon={<Dot color="#22c55e" />}>Enhancement</SelectItem>
            <SelectItem value="question"      icon={<Dot color="#3b82f6" />}>Question</SelectItem>
          </Select>

          <Select variant="secondary" iconOnly size="lg" icon={<BranchIcon />}>
            <SelectItem value="main">main</SelectItem>
            <SelectItem value="dev">dev</SelectItem>
            <SelectItem value="feat/redesign">feat/redesign</SelectItem>
          </Select>
        </div>
      </Preview>

      {/* Groups */}
      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">With groups</h3>
      <Preview code={`<Select placeholder="Select a timezone…">
  <SelectGroup>
    <SelectLabel>Europe</SelectLabel>
    <SelectItem value="london">London (GMT+0)</SelectItem>
    <SelectItem value="paris">Paris (GMT+1)</SelectItem>
  </SelectGroup>
  <SelectSeparator />
  <SelectGroup>
    <SelectLabel>Americas</SelectLabel>
    <SelectItem value="new-york">New York (GMT-5)</SelectItem>
  </SelectGroup>
</Select>`}>
        <div className="w-64">
          <Select placeholder="Select a timezone…">
            <SelectGroup>
              <SelectLabel>Europe</SelectLabel>
              <SelectItem value="london">London (GMT+0)</SelectItem>
              <SelectItem value="paris">Paris (GMT+1)</SelectItem>
              <SelectItem value="helsinki">Helsinki (GMT+2)</SelectItem>
            </SelectGroup>
            <SelectSeparator />
            <SelectGroup>
              <SelectLabel>Americas</SelectLabel>
              <SelectItem value="new-york">New York (GMT-5)</SelectItem>
              <SelectItem value="chicago">Chicago (GMT-6)</SelectItem>
              <SelectItem value="los-angeles">Los Angeles (GMT-8)</SelectItem>
            </SelectGroup>
          </Select>
        </div>
      </Preview>

      {/* Sizes */}
      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Sizes</h3>
      <Preview code={`<Select size="sm" placeholder="Small" />
<Select size="md" placeholder="Medium" />
<Select size="lg" placeholder="Large" />`}>
        <div className="flex flex-col gap-3 w-48">
          {(['sm', 'md', 'lg'] as const).map(size => (
            <Select key={size} size={size} placeholder={`Size: ${size}`}>
              <SelectItem value="a">Option A</SelectItem>
              <SelectItem value="b">Option B</SelectItem>
            </Select>
          ))}
        </div>
      </Preview>

      {/* Error state */}
      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Error state</h3>
      <Preview code={`<SelectField label="Country" hint="Please select a country." error>
  <Select error placeholder="Select a country…">
    <SelectItem value="gb">United Kingdom</SelectItem>
  </Select>
</SelectField>`}>
        <div className="w-56">
          <SelectField label="Country" hint="Please select a country." error>
            <Select error placeholder="Select a country…">
              <SelectItem value="gb">United Kingdom</SelectItem>
              <SelectItem value="us">United States</SelectItem>
            </Select>
          </SelectField>
        </div>
      </Preview>
    </>
  );
}
