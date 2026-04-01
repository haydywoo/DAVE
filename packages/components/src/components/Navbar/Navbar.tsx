import * as React from 'react';
import { cn } from '../../lib/cn';

// ─── Root ─────────────────────────────────────────────────────────────────────

export interface NavbarProps {
  children: React.ReactNode;
  sticky?: boolean;
  bordered?: boolean;
  className?: string;
}

export function Navbar({ children, sticky = true, bordered = true, className }: NavbarProps) {
  return (
    <header
      className={cn(
        'z-40 w-full bg-background/90 backdrop-blur-sm',
        sticky && 'sticky top-0',
        bordered && 'border-b border-border',
        className,
      )}
    >
      <div className="mx-auto flex h-14 max-w-screen-xl items-center gap-4 px-4 sm:px-6">
        {children}
      </div>
    </header>
  );
}

// ─── Brand ────────────────────────────────────────────────────────────────────

export interface NavbarBrandProps {
  children: React.ReactNode;
  className?: string;
}

export function NavbarBrand({ children, className }: NavbarBrandProps) {
  return (
    <div className={cn('flex shrink-0 items-center', className)}>
      {children}
    </div>
  );
}

// ─── Content (nav links) ──────────────────────────────────────────────────────

export interface NavbarContentProps {
  children: React.ReactNode;
  /** Alignment within the navbar */
  align?: 'start' | 'center' | 'end';
  className?: string;
}

export function NavbarContent({ children, align = 'start', className }: NavbarContentProps) {
  return (
    <nav
      className={cn(
        'hidden md:flex items-center gap-1',
        align === 'center' && 'flex-1 justify-center',
        align === 'end'    && 'flex-1 justify-end',
        align === 'start'  && 'flex-1 justify-start',
        className,
      )}
    >
      {children}
    </nav>
  );
}

// ─── Actions (right-side buttons, avatar, etc.) ───────────────────────────────

export interface NavbarActionsProps {
  children: React.ReactNode;
  className?: string;
}

export function NavbarActions({ children, className }: NavbarActionsProps) {
  return (
    <div className={cn('ml-auto flex shrink-0 items-center gap-2', className)}>
      {children}
    </div>
  );
}

// ─── Link ─────────────────────────────────────────────────────────────────────

export interface NavbarLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  active?: boolean;
}

export function NavbarLink({ children, active = false, className, ...props }: NavbarLinkProps) {
  return (
    <a
      aria-current={active ? 'page' : undefined}
      className={cn(
        'inline-flex items-center px-3 py-1.5 text-sm rounded-[3px] transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1',
        active
          ? 'text-foreground font-semibold bg-surface'
          : 'text-fg-secondary hover:text-foreground hover:bg-surface',
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}

// ─── Divider ──────────────────────────────────────────────────────────────────

export function NavbarDivider({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn('h-5 w-px bg-border mx-1', className)}
    />
  );
}
