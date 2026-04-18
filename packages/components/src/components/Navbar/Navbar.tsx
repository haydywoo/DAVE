'use client';

import * as React from 'react';
import { cn } from '../../lib/cn';

// ─── Types ────────────────────────────────────────────────────────────────────

export type NavbarColor = 'default' | 'subtle' | 'primary' | 'inverse';

// ─── Root ─────────────────────────────────────────────────────────────────────

export interface NavbarProps {
  children: React.ReactNode;
  sticky?: boolean;
  bordered?: boolean;
  color?: NavbarColor;
  maxWidth?: string;
  className?: string;
}

const colorStyles: Record<NavbarColor, string> = {
  default: 'bg-background/90 backdrop-blur-sm',
  subtle:  'bg-surface',
  primary: 'bg-accent',
  inverse: 'bg-foreground',
};

export function Navbar({
  children,
  sticky = true,
  bordered = true,
  color = 'default',
  maxWidth = 'max-w-screen-xl',
  className,
}: NavbarProps) {
  return (
    <header
      className={cn(
        'z-40 w-full',
        colorStyles[color],
        sticky && 'sticky top-0',
        bordered && 'border-b border-border',
        className,
      )}
    >
      <div className={cn('mx-auto flex h-14 items-center gap-4 px-4 sm:px-6', maxWidth)}>
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

// ─── Content (desktop nav links) ──────────────────────────────────────────────

export interface NavbarContentProps {
  children: React.ReactNode;
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

// ─── Actions ──────────────────────────────────────────────────────────────────

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
  icon?: React.ReactNode;
  badge?: React.ReactNode;
  as?: React.ElementType;
}

export function NavbarLink({
  children,
  active = false,
  icon,
  badge,
  as: Comp = 'a',
  className,
  ...props
}: NavbarLinkProps) {
  return (
    <Comp
      aria-current={active ? 'page' : undefined}
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-[3px] transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1',
        active
          ? 'text-foreground font-semibold bg-surface'
          : 'text-fg-secondary hover:text-foreground hover:bg-surface',
        className,
      )}
      {...props}
    >
      {icon && <span className="shrink-0" aria-hidden="true">{icon}</span>}
      {children}
      {badge !== undefined && (
        <span className="ml-0.5 inline-flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-accent px-1 text-[10px] font-semibold text-accent-on leading-none">
          {badge}
        </span>
      )}
    </Comp>
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

// ─── Search ───────────────────────────────────────────────────────────────────

export interface NavbarSearchProps {
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  className?: string;
}

export function NavbarSearch({
  placeholder = 'Search…',
  value,
  defaultValue,
  onValueChange,
  className,
}: NavbarSearchProps) {
  return (
    <div className={cn('relative hidden sm:flex items-center', className)}>
      <svg
        className="pointer-events-none absolute left-2.5 h-3.5 w-3.5 text-fg-secondary"
        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
      >
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
      </svg>
      <input
        type="search"
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        onChange={e => onValueChange?.(e.target.value)}
        className={cn(
          'h-8 w-44 rounded-[3px] border border-border bg-surface pl-8 pr-3 text-sm',
          'text-foreground placeholder:text-fg-secondary',
          'transition-[width] duration-200 focus:w-60',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-0 focus:border-accent',
        )}
      />
    </div>
  );
}

// ─── Menu Button (mobile hamburger) ───────────────────────────────────────────

export interface NavbarMenuButtonProps {
  open?: boolean;
  onClick?: () => void;
  className?: string;
}

export function NavbarMenuButton({ open = false, onClick, className }: NavbarMenuButtonProps) {
  return (
    <button
      type="button"
      aria-label={open ? 'Close menu' : 'Open menu'}
      aria-expanded={open}
      onClick={onClick}
      className={cn(
        'flex md:hidden h-8 w-8 items-center justify-center rounded-[3px]',
        'text-fg-secondary hover:bg-surface hover:text-foreground transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1',
        className,
      )}
    >
      {open ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      )}
    </button>
  );
}

// ─── Mobile Menu ──────────────────────────────────────────────────────────────

export interface NavbarMobileMenuProps {
  open?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function NavbarMobileMenu({ open = false, children, className }: NavbarMobileMenuProps) {
  if (!open) return null;
  return (
    <div
      className={cn(
        'md:hidden border-t border-border bg-background px-4 py-3 flex flex-col gap-1',
        className,
      )}
    >
      {children}
    </div>
  );
}

// ─── Mobile Link ──────────────────────────────────────────────────────────────

export interface NavbarMobileLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  active?: boolean;
  icon?: React.ReactNode;
  badge?: React.ReactNode;
  as?: React.ElementType;
}

export function NavbarMobileLink({
  children,
  active = false,
  icon,
  badge,
  as: Comp = 'a',
  className,
  ...props
}: NavbarMobileLinkProps) {
  return (
    <Comp
      aria-current={active ? 'page' : undefined}
      className={cn(
        'flex w-full items-center gap-2.5 rounded-[3px] px-3 py-2 text-sm transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
        active
          ? 'text-foreground font-semibold bg-surface'
          : 'text-fg-secondary hover:text-foreground hover:bg-surface',
        className,
      )}
      {...props}
    >
      {icon && <span className="shrink-0" aria-hidden="true">{icon}</span>}
      <span className="flex-1">{children}</span>
      {badge !== undefined && (
        <span className="inline-flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-accent px-1 text-[10px] font-semibold text-accent-on leading-none">
          {badge}
        </span>
      )}
    </Comp>
  );
}
