'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Nav, NavSection, NavItem } from '@dave/react';
import { standardNavigation, chartsNavigation, aiNavigation } from '@/lib/navigation';
import {
  RocketIcon,
  LayersIcon,
  LayoutIcon,
  Link2Icon,
  InputIcon,
  StackIcon,
  BellIcon,
  TableIcon,
  BarChartIcon,
  ChatBubbleIcon,
  LightningBoltIcon,
  GearIcon,
  MixerHorizontalIcon,
} from '@radix-ui/react-icons';

const sectionIcons: Record<string, React.ReactNode> = {
  'Getting Started':        <RocketIcon />,
  'Foundations':            <LayersIcon />,
  'Layout':                 <LayoutIcon />,
  'Navigation':             <Link2Icon />,
  'Forms':                  <InputIcon />,
  'Overlays':               <StackIcon />,
  'Feedback':               <BellIcon />,
  'Data Display':           <TableIcon />,
  'Chart Types':            <BarChartIcon />,
  'Chat & Messaging':       <ChatBubbleIcon />,
  'Streaming & Generation': <LightningBoltIcon />,
  'Tools & Actions':        <GearIcon />,
  'Controls':               <MixerHorizontalIcon />,
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
