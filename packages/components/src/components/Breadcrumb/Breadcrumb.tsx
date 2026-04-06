import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '../../lib/cn';

// ─── Root ─────────────────────────────────────────────────────────────────────

export interface BreadcrumbProps {
  children: React.ReactNode;
  /** Accessible label for the nav landmark */
  label?: string;
  className?: string;
}

export function Breadcrumb({ children, label = 'Breadcrumb', className }: BreadcrumbProps) {
  return (
    <nav aria-label={label} className={cn('flex', className)}>
      <ol className="flex flex-wrap items-center gap-1 text-sm text-fg-secondary">
        {children}
      </ol>
    </nav>
  );
}

// ─── Item ─────────────────────────────────────────────────────────────────────

export interface BreadcrumbItemProps {
  children: React.ReactNode;
  /** When true, renders as the current page (no link styling, aria-current) */
  current?: boolean;
  className?: string;
}

export function BreadcrumbItem({ children, current = false, className }: BreadcrumbItemProps) {
  return (
    <li
      aria-current={current ? 'page' : undefined}
      className={cn('inline-flex items-center gap-1', className)}
    >
      {current ? (
        <span className="font-medium text-foreground truncate max-w-[12rem]">{children}</span>
      ) : (
        children
      )}
    </li>
  );
}

// ─── Link ─────────────────────────────────────────────────────────────────────

export interface BreadcrumbLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  /** Drop-in for router links via asChild pattern — pass your <Link> component */
  asChild?: boolean;
}

export function BreadcrumbLink({ children, asChild, className, ...props }: BreadcrumbLinkProps) {
  const Comp = asChild ? Slot : 'a';
  return (
    <Comp
      className={cn(
        'hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-[2px]',
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}

// ─── Separator ────────────────────────────────────────────────────────────────

export interface BreadcrumbSeparatorProps {
  /** Custom separator — defaults to "/" */
  children?: React.ReactNode;
  className?: string;
}

export function BreadcrumbSeparator({ children, className }: BreadcrumbSeparatorProps) {
  return (
    <li role="presentation" aria-hidden="true" className={cn('select-none text-fg-disabled', className)}>
      {children ?? (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m9 18 6-6-6-6" />
        </svg>
      )}
    </li>
  );
}

// ─── Ellipsis (collapsed middle items) ───────────────────────────────────────

export function BreadcrumbEllipsis({ className }: { className?: string }) {
  return (
    <li role="presentation" aria-hidden="true" className={cn('inline-flex items-center', className)}>
      <span className="select-none px-1">…</span>
    </li>
  );
}
