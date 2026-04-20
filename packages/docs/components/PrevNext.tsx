'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { standardNavigation, chartsNavigation, aiNavigation, flatNav } from '@/lib/navigation';

export function PrevNext() {
  const rawPathname = usePathname();
  const pathname = rawPathname.replace(/\/$/, '');

  const sections =
    pathname.startsWith('/docs/ai')     ? aiNavigation :
    pathname.startsWith('/docs/charts') ? chartsNavigation :
    standardNavigation;

  const items = flatNav(sections);
  const idx = items.findIndex(item => item.href === pathname);

  if (idx === -1) return null;

  const prev = idx > 0 ? items[idx - 1] : null;
  const next = idx < items.length - 1 ? items[idx + 1] : null;

  if (!prev && !next) return null;

  return (
    <div className="mt-16 pt-6 border-t border-border flex items-center justify-between gap-4">
      {prev ? (
        <Link
          href={prev.href}
          className="group flex flex-col gap-0.5 min-w-0 max-w-[45%]"
        >
          <span className="text-xs text-fg-subdued">Previous</span>
          <span className="flex items-center gap-1.5 text-sm font-medium text-fg-secondary group-hover:text-foreground transition-colors truncate">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0">
              <path d="M9 2L4 7l5 5" />
            </svg>
            {prev.title}
          </span>
        </Link>
      ) : <div />}

      {next ? (
        <Link
          href={next.href}
          className="group flex flex-col gap-0.5 items-end min-w-0 max-w-[45%]"
        >
          <span className="text-xs text-fg-subdued">Next</span>
          <span className="flex items-center gap-1.5 text-sm font-medium text-fg-secondary group-hover:text-foreground transition-colors truncate">
            {next.title}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0">
              <path d="M5 2l5 5-5 5" />
            </svg>
          </span>
        </Link>
      ) : <div />}
    </div>
  );
}
