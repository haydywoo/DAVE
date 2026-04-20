'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Nav, NavSection, NavItem } from '@dave/react';
import { standardNavigation, chartsNavigation, aiNavigation } from '@/lib/navigation';

const sectionIcons: Record<string, React.ReactNode> = {
  'Getting Started': (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 1.5C8 1.5 11 4 11 8s-3 6.5-3 6.5S5 12 5 8s3-6.5 3-6.5Z" />
      <path d="M1.5 8h13" />
    </svg>
  ),
  'Foundations': (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="12" height="3.5" rx="1" />
      <rect x="2" y="6.75" width="12" height="3" rx="1" />
      <rect x="2" y="11" width="12" height="3" rx="1" />
    </svg>
  ),
  'Layout': (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1.5" y="1.5" width="13" height="13" rx="1.5" />
      <path d="M1.5 5.5h13" />
      <path d="M6.5 5.5v9" />
    </svg>
  ),
  'Navigation': (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="8" r="6.5" />
      <path d="M10.5 5.5 7 9l-1.5 1.5L7 9l-.5-3.5L10.5 5.5Z" />
    </svg>
  ),
  'Forms': (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1.5" y="3" width="13" height="10" rx="1.5" />
      <path d="M4.5 7h4M4.5 10h7" />
    </svg>
  ),
  'Overlays': (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1.5" y="4" width="10" height="9" rx="1.5" />
      <path d="M5 4V3A1.5 1.5 0 0 1 6.5 1.5h8A1.5 1.5 0 0 1 16 3v8a1.5 1.5 0 0 1-1.5 1.5H13" />
    </svg>
  ),
  'Feedback': (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 1.5a5.5 5.5 0 0 1 5.5 5.5c0 1.5-.5 2.5-1 3.5l.5 3.5-3.5-.5C8.5 14 8 14 8 14a5.5 5.5 0 0 1 0-11v-.5Z" />
    </svg>
  ),
  'Data Display': (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1.5" y="1.5" width="13" height="13" rx="1.5" />
      <path d="M1.5 5.5h13M1.5 9.5h13M6 1.5v13" />
    </svg>
  ),
  'Chart Types': (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1.5 13.5V1.5" />
      <rect x="3.5" y="7" width="2.5" height="6.5" rx="0.5" />
      <rect x="7" y="4" width="2.5" height="9.5" rx="0.5" />
      <rect x="10.5" y="9.5" width="2.5" height="4" rx="0.5" />
      <path d="M1.5 13.5h13" />
    </svg>
  ),
  'Chat & Messaging': (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 9.5A5.5 5.5 0 0 0 8.5 4H3A1.5 1.5 0 0 0 1.5 5.5v5A1.5 1.5 0 0 0 3 12h.5v2.5l3-2.5H8.5A5.5 5.5 0 0 0 14 6.5" />
    </svg>
  ),
  'Streaming & Generation': (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 1.5 5.5 8.5H9l-2 6 7-9H10L13 1.5H9Z" />
    </svg>
  ),
  'Tools & Actions': (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.5 2a3.5 3.5 0 0 0-3.3 4.7L2 11.9a1.5 1.5 0 1 0 2.1 2.1l5.2-5.2A3.5 3.5 0 1 0 10.5 2Z" />
    </svg>
  ),
  'Controls': (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 4h12M2 8h12M2 12h12" />
      <circle cx="5.5" cy="4" r="1.5" fill="var(--color-background)" />
      <circle cx="10.5" cy="8" r="1.5" fill="var(--color-background)" />
      <circle cx="6.5" cy="12" r="1.5" fill="var(--color-background)" />
    </svg>
  ),
};

interface SidebarProps {
  open?: boolean;
  onClose?: () => void;
}

export function Sidebar({ open = false, onClose }: SidebarProps) {
  const rawPathname = usePathname();
  const pathname = rawPathname.replace(/\/$/, '');
  const router = useRouter();
  const [section, setSection] = useState<'standard' | 'ai' | 'charts'>(
    pathname.startsWith('/docs/ai') ? 'ai' : pathname.startsWith('/docs/charts') ? 'charts' : 'standard'
  );

  const navigation = section === 'standard' ? standardNavigation : section === 'charts' ? chartsNavigation : aiNavigation;

  return (
    <aside
      className={[
        'fixed top-14 left-0 z-30 h-[calc(100vh-3.5rem)] w-64 overflow-hidden flex flex-col',
        'bg-background border-r border-border',
        'transition-transform duration-200 ease-in-out',
        open ? 'translate-x-0' : '-translate-x-[calc(100%+1px)]',
        'lg:sticky lg:translate-x-0 lg:w-64 xl:w-72',
        'lg:shrink-0 lg:self-start',
        'lg:h-[calc(100vh-3.5rem)]',
      ].join(' ')}
    >
      {/* Mobile close button */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-border lg:hidden shrink-0">
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
      <div className="px-3 pt-5 pb-4 shrink-0">
        <div className="flex rounded-[4px] bg-surface border border-border p-0.5 gap-0.5">
          {([
            { key: 'standard', label: 'Components', href: '/docs/components' },
            { key: 'charts',   label: 'Charts',     href: '/docs/charts/overview' },
            { key: 'ai',       label: 'AI',         href: '/docs/ai/overview' },
          ] as const).map(({ key, label, href }) => (
            <button
              key={key}
              onClick={() => { setSection(key); router.push(href); onClose?.(); }}
              className={[
                'flex-1 rounded-[3px] px-2 py-1 text-xs font-medium transition-all duration-150',
                section === key
                  ? 'bg-card text-foreground shadow-sm'
                  : 'text-fg-secondary hover:text-foreground',
              ].join(' ')}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="px-3 pt-2 pb-4 flex-1 overflow-y-auto scrollbar-subtle">
        <Nav>
          {navigation.map((s) => (
            <NavSection key={s.title} title={s.title} icon={sectionIcons[s.title]}>
              {s.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <NavItem
                    key={item.href}
                    as={Link}
                    href={item.href}
                    active={isActive}
                    onClick={onClose}
                    className={isActive ? 'selected' : undefined}
                  >
                    {item.title}
                  </NavItem>
                );
              })}
            </NavSection>
          ))}
        </Nav>
      </div>

      <div className="px-4 py-4 border-t border-border shrink-0">
        <Link
          href="/docs/legal"
          onClick={onClose}
          className="text-xs text-fg-subdued hover:text-fg-secondary transition-colors"
        >
          Terms &amp; EULA
        </Link>
      </div>
    </aside>
  );
}
