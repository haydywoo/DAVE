'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { SidebarInner } from './Sidebar';

function openSearch() {
  window.dispatchEvent(new Event('dave:open-search'));
}

const navLinks = [
  { label: 'Docs',        href: '/docs/getting-started', match: (p: string) => p.startsWith('/docs/getting-started') || p.startsWith('/docs/foundations') },
  { label: 'Components',  href: '/docs/components',      match: (p: string) => p.startsWith('/docs/components') || p.startsWith('/docs/charts') || p.startsWith('/docs/ai') },
  { label: 'Roadmap',     href: '/roadmap',              match: (p: string) => p.startsWith('/roadmap') },
];

export function Nav() {
  const pathname = usePathname();
  const inDocs = pathname.startsWith('/docs');
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    function handler(e: KeyboardEvent) {
      if (e.key === 'Escape') { setMobileOpen(false); toggleRef.current?.focus(); }
    }
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [mobileOpen]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const linkClass = (active: boolean) => [
    'px-3 py-1.5 text-sm rounded-[3px] transition-colors',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1',
    active
      ? 'selected text-foreground font-medium'
      : 'text-fg-secondary hover:text-foreground interactive',
  ].join(' ');

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="mx-auto max-w-screen-xl px-6 h-14 flex items-center gap-4">

        {/* Logo */}
        <div className="shrink-0 lg:w-56 xl:w-64">
          <Link
            href="/"
            className="font-display font-extrabold text-lg text-foreground tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1 rounded-[2px]"
          >
            DAVE
          </Link>
        </div>

        {/* Search — docs only, visible from sm */}
        {inDocs && (
          <button
            type="button"
            onClick={openSearch}
            aria-label="Search docs"
            className="hidden sm:flex items-center gap-2.5 h-8 px-3 rounded-[3px] border border-border bg-surface text-fg-secondary text-sm hover:border-border-strong hover:text-foreground interactive transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1 w-48 sm:w-64"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
            </svg>
            <span className="flex-1 text-left text-sm" aria-hidden="true">Search…</span>
            <kbd className="hidden sm:inline-flex items-center rounded border border-border bg-background px-1.5 text-[10px]">⌘K</kbd>
          </button>
        )}

        {/* Desktop nav — visible from lg */}
        <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-1 ml-auto">
          {navLinks.map(({ label, href, match }) => {
            const active = match(pathname);
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? 'page' : undefined}
                className={linkClass(active)}
              >
                {label}
              </Link>
            );
          })}

          <div className="w-px h-4 bg-border mx-1" aria-hidden="true" />

          <ThemeToggle />

          <a
            href="https://github.com/haydywoo/DAVE"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View DAVE on GitHub"
            className={[
              'flex items-center gap-1.5 px-3 py-1.5 text-sm text-fg-secondary hover:text-foreground transition-colors rounded-[3px] interactive',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1',
            ].join(' ')}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span>GitHub</span>
          </a>
        </nav>

        {/* Mobile right — search icon + theme + hamburger (hidden from lg) */}
        <div className="flex items-center gap-1 ml-auto lg:hidden">
          {inDocs && (
            <button
              type="button"
              onClick={openSearch}
              aria-label="Search docs"
              className="sm:hidden flex items-center justify-center w-8 h-8 rounded-[3px] text-fg-secondary hover:text-foreground hover:bg-surface transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
              </svg>
            </button>
          )}
          <ThemeToggle />
          <button
            ref={toggleRef}
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen(o => !o)}
            className="flex items-center justify-center w-8 h-8 rounded-[3px] text-fg-secondary hover:text-foreground interactive transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1"
          >
            {mobileOpen ? (
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
                <path d="M1 1l13 13M14 1L1 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
                <path d="M1 3h13M1 7.5h13M1 12h13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer — full-height left panel */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-200 ${mobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />

        {/* Panel */}
        <nav
          id="mobile-nav"
          aria-label="Mobile navigation"
          className={`absolute top-0 left-0 h-full w-72 bg-background border-r border-border flex flex-col transition-transform duration-200 ease-in-out ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between px-4 h-14 border-b border-border shrink-0">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="font-display font-extrabold text-lg text-foreground tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-[2px]"
            >
              DAVE
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="p-1.5 rounded-[3px] text-fg-secondary hover:text-foreground hover:bg-surface transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
                <path d="M1 1l13 13M14 1L1 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Top-level nav links */}
          <div className="px-3 py-3 flex flex-col gap-0.5 shrink-0">
            {navLinks.map(({ label, href, match }) => {
              const active = match(pathname);
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={active ? 'page' : undefined}
                  onClick={() => setMobileOpen(false)}
                  className={[
                    'px-3 py-2 text-sm rounded-[3px] transition-colors',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1',
                    active
                      ? 'text-foreground font-medium bg-surface'
                      : 'text-fg-secondary hover:text-foreground interactive',
                  ].join(' ')}
                >
                  {label}
                </Link>
              );
            })}
            <a
              href="https://github.com/haydywoo/DAVE"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 px-3 py-2 text-sm text-fg-secondary hover:text-foreground interactive rounded-[3px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              GitHub
            </a>
          </div>

          {/* Docs sidebar nav — injected below top-level links on docs pages */}
          {inDocs && (
            <>
              <div className="h-px bg-border mx-3 shrink-0" />
              <SidebarInner onClose={() => setMobileOpen(false)} />
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
