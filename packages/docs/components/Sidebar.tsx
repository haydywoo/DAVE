'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Introduction', href: '/docs/getting-started' },
      { title: 'Theming',      href: '/docs/getting-started/theming' },
    ],
  },
  {
    title: 'Foundations',
    items: [
      { title: 'Colours',    href: '/docs/foundations/colours' },
      { title: 'Typography', href: '/docs/foundations/typography' },
      { title: 'Tokens',     href: '/docs/foundations/tokens' },
    ],
  },
  {
    title: 'Layout',
    items: [
      { title: 'Accordion',   href: '/docs/components/accordion' },
      { title: 'Card',        href: '/docs/components/card' },
      { title: 'Collapsible', href: '/docs/components/collapsible' },
      { title: 'Divider',     href: '/docs/components/divider' },
      { title: 'Tabs',        href: '/docs/components/tabs' },
    ],
  },
  {
    title: 'Navigation',
    items: [
      { title: 'Breadcrumb', href: '/docs/components/breadcrumb' },
      { title: 'Navbar',     href: '/docs/components/navbar' },
      { title: 'Pagination', href: '/docs/components/pagination' },
      { title: 'Stepper',    href: '/docs/components/stepper' },
    ],
  },
  {
    title: 'Forms',
    items: [
      { title: 'Button',      href: '/docs/components/button' },
      { title: 'Calendar',    href: '/docs/components/calendar' },
      { title: 'Checkbox',    href: '/docs/components/checkbox' },
      { title: 'Copy Button', href: '/docs/components/copy-button' },
      { title: 'Date Picker', href: '/docs/components/date-picker' },
      { title: 'Dropzone',    href: '/docs/components/dropzone' },
      { title: 'Chip',     href: '/docs/components/chip' },
      { title: 'Combobox', href: '/docs/components/combobox' },
      { title: 'Input',         href: '/docs/components/input' },
      { title: 'Number Input',  href: '/docs/components/number-input' },
      { title: 'Radio',         href: '/docs/components/radio' },
      { title: 'Select',      href: '/docs/components/select' },
      { title: 'Slider',      href: '/docs/components/slider' },
      { title: 'Tag Input',   href: '/docs/components/tag-input' },
      { title: 'Switch',   href: '/docs/components/switch' },
      { title: 'Textarea', href: '/docs/components/textarea' },
    ],
  },
  {
    title: 'Overlays',
    items: [
      { title: 'Alert Dialog',  href: '/docs/components/alert-dialog' },
      { title: 'Context Menu',  href: '/docs/components/context-menu' },
      { title: 'Dialog',        href: '/docs/components/dialog' },
      { title: 'Drawer',       href: '/docs/components/drawer' },
      { title: 'Dropdown',     href: '/docs/components/dropdown' },
      { title: 'Popover',      href: '/docs/components/popover' },
      { title: 'Tooltip',      href: '/docs/components/tooltip' },
    ],
  },
  {
    title: 'Feedback',
    items: [
      { title: 'Alert',    href: '/docs/components/alert' },
      { title: 'Progress', href: '/docs/components/progress' },
      { title: 'Skeleton', href: '/docs/components/skeleton' },
      { title: 'Spinner',  href: '/docs/components/spinner' },
      { title: 'Toast',    href: '/docs/components/toast' },
    ],
  },
  {
    title: 'Data Display',
    items: [
      { title: 'Avatar',       href: '/docs/components/avatar' },
      { title: 'Badge',        href: '/docs/components/badge' },
      { title: 'Kbd',          href: '/docs/components/kbd' },
      { title: 'Timeline',     href: '/docs/components/timeline' },
      { title: 'DataTable',    href: '/docs/components/data-table' },
      { title: 'Empty State',  href: '/docs/components/empty-state' },
      { title: 'Stat',         href: '/docs/components/stat' },
      { title: 'Table',        href: '/docs/components/table' },
    ],
  },
];

interface SidebarProps {
  open?: boolean;
  onClose?: () => void;
  onSearchOpen?: () => void;
}

export function Sidebar({ open = false, onClose, onSearchOpen }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={[
        // Mobile: fixed slide-in drawer
        'fixed top-14 left-0 z-30 h-[calc(100vh-3.5rem)] w-64',
        'bg-background border-r border-border',
        'transition-transform duration-200 ease-in-out',
        open ? 'translate-x-0' : '-translate-x-full',
        // Desktop: sticky in-flow column, no slide animation needed
        'lg:sticky lg:translate-x-0 lg:border-r lg:w-56 xl:w-64',
        'lg:shrink-0 lg:self-start lg:overflow-y-auto',
        'lg:h-[calc(100vh-3.5rem)]',
      ].join(' ')}
    >
      {/* Mobile close button */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-border lg:hidden">
        <span className="text-sm font-semibold text-foreground">Navigation</span>
        <button
          onClick={onClose}
          className="p-1 rounded-[3px] text-fg-secondary hover:text-foreground hover:bg-surface transition-colors"
          aria-label="Close menu"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Search trigger */}
      <div className="px-3 pt-4 pb-2">
        <button
          onClick={onSearchOpen}
          className="w-full flex items-center gap-2.5 h-9 px-3 rounded-[3px] border border-border bg-surface text-fg-secondary text-sm hover:border-border-strong hover:text-foreground transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
          </svg>
          <span className="flex-1 text-left">Search…</span>
          <kbd className="hidden sm:inline-flex items-center rounded border border-border bg-background px-1.5 text-[10px] font-sans">⌘K</kbd>
        </button>
      </div>

      <nav className="flex flex-col gap-6 px-3 py-4">
        {navigation.map((section) => (
          <div key={section.title}>
            <p className="mb-1.5 px-3 text-xs font-semibold text-fg-secondary uppercase tracking-wider">
              {section.title}
            </p>
            <ul className="flex flex-col gap-0.5">
              {section.items.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={[
                        'block rounded-[3px] px-3 py-1.5 text-sm transition-colors',
                        active
                          ? 'bg-accent-subtle text-accent-foreground font-semibold'
                          : 'text-fg-secondary hover:text-foreground hover:bg-surface',
                      ].join(' ')}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
