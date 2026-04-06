'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Nav, NavSection, NavItem } from '@dave/react';

const standardNavigation = [
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
      { title: 'Nav',        href: '/docs/components/nav' },
      { title: 'Navbar',     href: '/docs/components/navbar' },
      { title: 'Pagination', href: '/docs/components/pagination' },
      { title: 'Stepper',    href: '/docs/components/stepper' },
    ],
  },
  {
    title: 'Forms',
    items: [
      { title: 'Button',            href: '/docs/components/button' },
      { title: 'Form Field',        href: '/docs/components/form-field' },
      { title: 'Calendar',          href: '/docs/components/calendar' },
      { title: 'Checkbox',          href: '/docs/components/checkbox' },
      { title: 'Chip',              href: '/docs/components/chip' },
      { title: 'Combobox',          href: '/docs/components/combobox' },
      { title: 'Copy Button',       href: '/docs/components/copy-button' },
      { title: 'Date Picker',       href: '/docs/components/date-picker' },
      { title: 'Date Range Picker', href: '/docs/components/date-range-picker' },
      { title: 'Dropzone',          href: '/docs/components/dropzone' },
      { title: 'File Input',        href: '/docs/components/file-input' },
      { title: 'Input',             href: '/docs/components/input' },
      { title: 'Number Input',      href: '/docs/components/number-input' },
      { title: 'Radio',             href: '/docs/components/radio' },
      { title: 'Segmented Control', href: '/docs/components/segmented-control' },
      { title: 'Select',            href: '/docs/components/select' },
      { title: 'Slider',            href: '/docs/components/slider' },
      { title: 'Switch',            href: '/docs/components/switch' },
      { title: 'Tag Input',         href: '/docs/components/tag-input' },
      { title: 'Textarea',          href: '/docs/components/textarea' },
    ],
  },
  {
    title: 'Overlays',
    items: [
      { title: 'Alert Dialog', href: '/docs/components/alert-dialog' },
      { title: 'Command',      href: '/docs/components/command' },
      { title: 'Context Menu', href: '/docs/components/context-menu' },
      { title: 'Dialog',       href: '/docs/components/dialog' },
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
      { title: 'Avatar',      href: '/docs/components/avatar' },
      { title: 'Badge',       href: '/docs/components/badge' },
      { title: 'DataTable',   href: '/docs/components/data-table' },
      { title: 'Empty State', href: '/docs/components/empty-state' },
      { title: 'Kbd',         href: '/docs/components/kbd' },
      { title: 'Stat',        href: '/docs/components/stat' },
      { title: 'Table',       href: '/docs/components/table' },
      { title: 'Timeline',    href: '/docs/components/timeline' },
    ],
  },
];

const chartsNavigation = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Overview', href: '/docs/charts/overview' },
    ],
  },
  {
    title: 'Chart Types',
    items: [
      { title: 'Bar Chart',   href: '/docs/charts/bar-chart' },
      { title: 'Line Chart',  href: '/docs/charts/line-chart' },
      { title: 'Area Chart',  href: '/docs/charts/area-chart' },
      { title: 'Donut Chart',   href: '/docs/charts/donut-chart' },
      { title: 'Sparkline',    href: '/docs/charts/sparkline' },
      { title: 'Scatter Plot', href: '/docs/charts/scatter-plot' },
      { title: 'Combo Chart',  href: '/docs/charts/combo-chart' },
      { title: 'Radar Chart',  href: '/docs/charts/radar-chart' },
      { title: 'Funnel Chart', href: '/docs/charts/funnel-chart' },
    ],
  },
];

const aiNavigation = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Overview', href: '/docs/ai/overview' },
    ],
  },
  {
    title: 'Chat & Messaging',
    items: [
      { title: 'Chat Container',     href: '/docs/ai/chat-container' },
      { title: 'Message',            href: '/docs/ai/message' },
      { title: 'Message Input',      href: '/docs/ai/message-input' },
      { title: 'Conversation List',  href: '/docs/ai/conversation-list' },
    ],
  },
  {
    title: 'Streaming & Generation',
    items: [
      { title: 'Code Block',      href: '/docs/ai/code-block' },
      { title: 'Streaming Text',  href: '/docs/ai/streaming-text' },
      { title: 'Thinking Block',  href: '/docs/ai/thinking-block' },
    ],
  },
  {
    title: 'Tools & Actions',
    items: [
      { title: 'Approval Gate',   href: '/docs/ai/approval-gate' },
      { title: 'File Attachment', href: '/docs/ai/file-attachment' },
      { title: 'Source Card',     href: '/docs/ai/source-card' },
      { title: 'Tool Call',       href: '/docs/ai/tool-call' },
    ],
  },
  {
    title: 'Controls',
    items: [
      { title: 'Feedback Bar',     href: '/docs/ai/feedback-bar' },
      { title: 'Model Selector',   href: '/docs/ai/model-selector' },
      { title: 'Suggestion Chips', href: '/docs/ai/suggestion-chips' },
    ],
  },
];

interface SidebarProps {
  open?: boolean;
  onClose?: () => void;
}

export function Sidebar({ open = false, onClose }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [section, setSection] = useState<'standard' | 'ai' | 'charts'>(
    pathname.startsWith('/docs/ai') ? 'ai' : pathname.startsWith('/docs/charts') ? 'charts' : 'standard'
  );

  const navigation = section === 'standard' ? standardNavigation : section === 'charts' ? chartsNavigation : aiNavigation;

  return (
    <aside
      className={[
        'fixed top-14 left-0 z-30 h-[calc(100vh-3.5rem)] w-64',
        'bg-background border-r border-border',
        'transition-transform duration-200 ease-in-out',
        open ? 'translate-x-0' : '-translate-x-full',
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

      {/* Section switcher */}
      <div className="px-3 pt-6 pb-3">
        <div className="flex rounded-[4px] bg-surface border border-border p-0.5 gap-0.5">
          <button
            onClick={() => { setSection('standard'); router.push('/docs/components'); }}
            className={[
              'flex-1 rounded-[3px] px-2 py-1 text-xs font-medium transition-all duration-150',
              section === 'standard'
                ? 'bg-card text-foreground shadow-sm'
                : 'text-fg-secondary hover:text-foreground',
            ].join(' ')}
          >
            Components
          </button>
          <button
            onClick={() => { setSection('charts'); router.push('/docs/charts/overview'); }}
            className={[
              'flex-1 rounded-[3px] px-2 py-1 text-xs font-medium transition-all duration-150',
              section === 'charts'
                ? 'bg-card text-foreground shadow-sm'
                : 'text-fg-secondary hover:text-foreground',
            ].join(' ')}
          >
            Charts
          </button>
          <button
            onClick={() => { setSection('ai'); router.push('/docs/ai/overview'); }}
            className={[
              'flex-1 rounded-[3px] px-2 py-1 text-xs font-medium transition-all duration-150',
              section === 'ai'
                ? 'bg-card text-foreground shadow-sm'
                : 'text-fg-secondary hover:text-foreground',
            ].join(' ')}
          >
            AI
          </button>
        </div>
      </div>

      <div className="px-3 pb-4">
        <Nav>
          {navigation.map((s) => (
            <NavSection key={s.title} title={s.title}>
              {s.items.map((item) => (
                <NavItem
                  key={item.href}
                  as={Link}
                  href={item.href}
                  active={pathname === item.href}
                  onClick={onClose}
                >
                  {item.title}
                </NavItem>
              ))}
            </NavSection>
          ))}
        </Nav>
      </div>
    </aside>
  );
}
