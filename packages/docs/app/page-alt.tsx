'use client';

import Link from 'next/link';
import {
  Button, Badge, Input, Select, SelectItem,
  DataList, DataListItem, DataListLabel, DataListValue,
  Avatar, Switch, Tooltip,
} from '@dave/react';
import { useState } from 'react';

// ─── Mini icons ───────────────────────────────────────────────────────────────

function CheckCircle() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent" aria-hidden="true">
      <path d="m9 12 2 2 4-4"/><circle cx="12" cy="12" r="10"/>
    </svg>
  );
}

function BranchIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/>
      <path d="M18 9a9 9 0 0 1-9 9"/>
    </svg>
  );
}

function SortIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 6h18M7 12h10M11 18h2"/>
    </svg>
  );
}

// ─── Showcase cards ───────────────────────────────────────────────────────────

function ShowcaseCard({ label, children, className = '' }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-xl border border-border bg-card overflow-hidden flex flex-col ${className}`}>
      <div className="px-4 py-3 border-b border-border bg-surface flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-border" />
        <span className="h-2 w-2 rounded-full bg-border" />
        <span className="h-2 w-2 rounded-full bg-border" />
        <span className="ml-2 text-xs font-medium text-fg-secondary">{label}</span>
      </div>
      <div className="p-5 flex-1 flex flex-col justify-center">
        {children}
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="flex flex-col">

      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <section
        className="relative border-b border-border"
        style={{
          backgroundImage: 'radial-gradient(circle, color-mix(in srgb, currentColor 7%, transparent) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      >
        <div className="mx-auto max-w-screen-xl px-6 py-24 md:py-36 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent-subtle-border bg-accent-subtle px-3 py-1 mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="text-xs font-semibold text-accent-foreground">Now in early access</span>
          </div>

          <h1
            className="font-display font-extrabold text-foreground leading-none tracking-tight mx-auto"
            style={{ fontSize: 'clamp(3rem, 9vw, 7rem)', maxWidth: '16ch' }}
          >
            Components built with{' '}
            <span className="text-accent">craft.</span>
          </h1>

          <p className="mt-6 text-lg text-fg-secondary max-w-2xl mx-auto leading-relaxed">
            DAVE is an open-source React component library — 50+ components, accessible by default, themeable with a single CSS variable, and designed to not look like everything else.
          </p>

          <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/docs/getting-started"
              className="inline-flex items-center justify-center h-11 px-6 rounded-[3px] bg-accent text-background text-sm font-semibold hover:bg-accent-hover transition-colors"
            >
              Get started
            </Link>
            <Link
              href="/docs/components/accordion"
              className="inline-flex items-center justify-center h-11 px-6 rounded-[3px] border border-border bg-card text-foreground text-sm font-semibold hover:bg-surface transition-colors"
            >
              Browse components
            </Link>
            <a
              href="https://github.com/haydywoo/DAVE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 justify-center h-11 px-6 rounded-[3px] border border-border bg-card text-foreground text-sm font-semibold hover:bg-surface transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats strip ─────────────────────────────────────────────────────── */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-screen-xl px-6 py-8">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-border">
            {[
              { value: '50+',        label: 'Components' },
              { value: 'WCAG AA',    label: 'Accessibility' },
              { value: 'Dark + Light', label: 'Themes' },
              { value: 'MIT',        label: 'License' },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center justify-center gap-1 md:px-8 text-center">
                <dt className="font-display font-extrabold text-2xl text-foreground">{value}</dt>
                <dd className="text-xs text-fg-secondary font-medium uppercase tracking-wider">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Component showcase ──────────────────────────────────────────────── */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-screen-xl px-6 py-20">
          <div className="max-w-xl mb-12">
            <h2 className="font-display font-extrabold text-3xl text-foreground mb-3">
              Everything you need to ship.
            </h2>
            <p className="text-fg-secondary leading-relaxed">
              From primitives to complex patterns — forms, data display, navigation, overlays, and AI-ready components, all in one system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-min">

            {/* Buttons — spans 2 cols */}
            <ShowcaseCard label="buttons.tsx" className="md:col-span-2">
              <div className="flex flex-wrap gap-3 items-center">
                <Button variant="primary">Deploy</Button>
                <Button variant="secondary">Cancel</Button>
                <Button variant="ghost">View logs</Button>
                <Button variant="destructive">Delete</Button>
                <Button variant="secondary">Settings</Button>
                <Button variant="link">Learn more</Button>
              </div>
              <div className="flex flex-wrap gap-2 mt-4 items-center">
                <Button variant="primary" size="sm">Small</Button>
                <Button variant="secondary" size="md">Medium</Button>
                <Button variant="secondary" size="lg">Large</Button>
                <Button variant="primary" disabled>Disabled</Button>
              </div>
            </ShowcaseCard>

            {/* Badges */}
            <ShowcaseCard label="badges.tsx">
              <div className="flex flex-col gap-2.5">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="success">Active</Badge>
                  <Badge variant="warning">Pending</Badge>
                  <Badge variant="error">Failed</Badge>
                  <Badge variant="neutral">Archived</Badge>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="neutral" size="sm">neutral</Badge>
                  <Badge variant="primary" size="sm">primary</Badge>
                  <Badge variant="success" size="sm">success</Badge>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="neutral">Draft</Badge>
                  <Badge variant="success">Published</Badge>
                </div>
              </div>
            </ShowcaseCard>

            {/* Form controls */}
            <ShowcaseCard label="form.tsx">
              <div className="flex flex-col gap-3">
                <Input placeholder="you@example.com" label="Email" />
                <div className="flex flex-col gap-1.5">
                  {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                  <label className="text-sm font-semibold text-foreground">Role</label>
                  <Select placeholder="Select a role…">
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="member">Member</SelectItem>
                    <SelectItem value="viewer">Viewer</SelectItem>
                  </Select>
                </div>
                <Button variant="primary" className="w-full">Save changes</Button>
              </div>
            </ShowcaseCard>

            {/* Select variants */}
            <ShowcaseCard label="select-variants.tsx">
              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-xs text-fg-secondary mb-2 font-medium">Secondary</p>
                  <div className="flex flex-wrap gap-2">
                    <Select variant="secondary" icon={<BranchIcon />} defaultValue="main">
                      <SelectItem value="main">main</SelectItem>
                      <SelectItem value="dev">dev</SelectItem>
                    </Select>
                    <Select variant="secondary" icon={<SortIcon />} placeholder="Sort…">
                      <SelectItem value="asc">A → Z</SelectItem>
                      <SelectItem value="desc">Z → A</SelectItem>
                    </Select>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-fg-secondary mb-2 font-medium">Icon only</p>
                  <div className="flex gap-2 items-center">
                    <Select variant="secondary" iconOnly icon={<BranchIcon />}>
                      <SelectItem value="main">main</SelectItem>
                      <SelectItem value="dev">dev</SelectItem>
                    </Select>
                    <Select variant="ghost" iconOnly icon={<SortIcon />}>
                      <SelectItem value="asc">Newest</SelectItem>
                      <SelectItem value="desc">Oldest</SelectItem>
                    </Select>
                    <Select variant="secondary" iconOnly size="sm" icon={<BranchIcon />}>
                      <SelectItem value="main">main</SelectItem>
                    </Select>
                    <Select variant="secondary" iconOnly size="lg" icon={<SortIcon />}>
                      <SelectItem value="asc">Newest</SelectItem>
                    </Select>
                  </div>
                </div>
              </div>
            </ShowcaseCard>

            {/* DataList + Switch — spans 1 col */}
            <ShowcaseCard label="detail-view.tsx">
              <DataList size="sm" className="mb-4">
                <DataListItem>
                  <DataListLabel>Status</DataListLabel>
                  <DataListValue><Badge variant="success" size="sm">Active</Badge></DataListValue>
                </DataListItem>
                <DataListItem>
                  <DataListLabel>Plan</DataListLabel>
                  <DataListValue>Pro · $49/mo</DataListValue>
                </DataListItem>
                <DataListItem>
                  <DataListLabel>Owner</DataListLabel>
                  <DataListValue>
                    <div className="flex items-center gap-1.5">
                      <Avatar initials="HP" size="xs" />
                      <span>Haydn Phillips</span>
                    </div>
                  </DataListValue>
                </DataListItem>
                <DataListItem>
                  <DataListLabel>Region</DataListLabel>
                  <DataListValue>eu-west-1</DataListValue>
                </DataListItem>
              </DataList>
              <div className="flex items-center justify-between pt-3 border-t border-border">
                <span className="text-sm text-fg-secondary">Notifications</span>
                <Switch checked={notifications} onCheckedChange={setNotifications} />
              </div>
            </ShowcaseCard>

          </div>
        </div>
      </section>

      {/* ── Features ────────────────────────────────────────────────────────── */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-screen-xl px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m9 12 2 2 4-4"/><circle cx="12" cy="12" r="10"/>
                  </svg>
                ),
                title: 'Accessible by default',
                body: 'Every component meets WCAG 2.1 AA. Contrast ratios verified, keyboard navigation built in, ARIA attributes correct — out of the box.',
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/>
                  </svg>
                ),
                title: 'One variable to theme',
                body: 'Override a handful of CSS custom properties and the entire system re-themes — no rebuild, no forking, no fighting the defaults.',
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                    <path d="M9 18c-4.51 2-5-2-7-2"/>
                  </svg>
                ),
                title: 'Open source, MIT',
                body: 'Use it, fork it, contribute. The token architecture is designed for teams to extend — not just consumers.',
              },
            ].map(({ icon, title, body }) => (
              <div key={title}>
                <div className="h-9 w-9 rounded-[3px] bg-accent-subtle flex items-center justify-center mb-4 text-accent">
                  {icon}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-fg-secondary leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Theming callout ─────────────────────────────────────────────────── */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-screen-xl px-6 py-20 flex flex-col lg:flex-row gap-12 items-start lg:items-center justify-between">
          <div className="max-w-md">
            <h2 className="font-display font-extrabold text-3xl text-foreground mb-3">
              One line to theme it.
            </h2>
            <p className="text-sm text-fg-secondary leading-relaxed mb-6">
              Override the CSS custom properties for your accent colour. Every component — buttons, badges, checkboxes, focus rings — updates automatically.
            </p>
            <Link
              href="/docs/foundations/colours"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
            >
              Read the token docs
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </Link>
          </div>
          <pre className="font-code text-xs bg-inverse text-background rounded-[3px] p-6 shrink-0 leading-loose overflow-x-auto w-full lg:w-auto">
            <span className="opacity-50">{`/* your-theme.css */`}</span>{`\n:root {\n  --accent-9:  `}<span style={{ color: '#7977D6' }}>{'#2D24AE'}</span>{`;\n  --accent-10: `}<span style={{ color: '#7977D6' }}>{'#231B9A'}</span>{`;\n  --accent-11: `}<span style={{ color: '#7977D6' }}>{'#3B33BB'}</span>{`;\n}`}
          </pre>
        </div>
      </section>

      {/* ── Bottom CTA ──────────────────────────────────────────────────────── */}
      <section
        className="border-b border-border"
        style={{
          backgroundImage: 'radial-gradient(circle, color-mix(in srgb, currentColor 7%, transparent) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      >
        <div className="mx-auto max-w-screen-xl px-6 py-24 text-center">
          <h2 className="font-display font-extrabold text-foreground mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            Start building today.
          </h2>
          <p className="text-fg-secondary mb-10 max-w-md mx-auto leading-relaxed">
            All components are documented with live previews, code snippets, and full TypeScript types.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/docs/getting-started"
              className="inline-flex items-center justify-center h-11 px-6 rounded-[3px] bg-accent text-background text-sm font-semibold hover:bg-accent-hover transition-colors"
            >
              Get started
            </Link>
            <Link
              href="/docs/components/accordion"
              className="inline-flex items-center justify-center h-11 px-6 rounded-[3px] border border-border bg-card text-foreground text-sm font-semibold hover:bg-surface transition-colors"
            >
              Browse components
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
