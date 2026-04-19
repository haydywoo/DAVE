'use client';

import * as React from 'react';
import { Tooltip } from '../Tooltip/Tooltip';
import { cn } from '../../lib/cn';

// ─── Types ────────────────────────────────────────────────────────────────────

export type NavSize = 'sm' | 'md' | 'lg';

// ─── Context ──────────────────────────────────────────────────────────────────

interface NavContextValue {
  collapsed: boolean;
  size: NavSize;
  depth: number;
}

const NavContext = React.createContext<NavContextValue>({ collapsed: false, size: 'md', depth: 0 });

// ─── Root ─────────────────────────────────────────────────────────────────────

export interface NavProps {
  children: React.ReactNode;
  size?: NavSize;
  /** Collapses all items to icon-only mode. Pair with tooltip on NavItem for accessibility. */
  collapsed?: boolean;
  className?: string;
}

const navSizeText: Record<NavSize, string> = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
};

const navItemPadding: Record<NavSize, string> = {
  sm: '[&_[data-nav-item]]:py-1 [&_[data-nav-item]]:px-2.5',
  md: '[&_[data-nav-item]]:py-1.5 [&_[data-nav-item]]:px-3',
  lg: '[&_[data-nav-item]]:py-2 [&_[data-nav-item]]:px-3',
};

export function Nav({ children, size = 'md', collapsed = false, className }: NavProps) {
  return (
    <NavContext.Provider value={{ collapsed, size, depth: 0 }}>
      <nav className={cn('flex flex-col gap-0.5', navSizeText[size], !collapsed && navItemPadding[size], className)}>
        {children}
      </nav>
    </NavContext.Provider>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export interface NavSectionProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export function NavSection({ children, title, className }: NavSectionProps) {
  const { collapsed } = React.useContext(NavContext);
  return (
    <div className={cn('flex flex-col gap-0.5 mt-5 first:mt-0', className)}>
      {title && !collapsed && (
        <p className="mb-1 px-3 text-xs font-semibold uppercase tracking-wider text-fg-secondary select-none">
          {title}
        </p>
      )}
      {children}
    </div>
  );
}

// ─── Item ─────────────────────────────────────────────────────────────────────

export interface NavItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  badge?: React.ReactNode;
  /** Render icon only — hides label and badge. Use `tooltip` for accessibility. */
  iconOnly?: boolean;
  /** Label shown in a tooltip when icon-only (either via `iconOnly` prop or `collapsed` Nav). */
  tooltip?: string;
  /** Polymorphic — pass a router Link component for client-side navigation, e.g. `as={Link}`. */
  as?: React.ElementType;
}

const iconOnlySizes: Record<NavSize, string> = {
  sm: 'h-7 w-7',
  md: 'h-8 w-8',
  lg: 'h-9 w-9',
};

export function NavItem({
  children,
  active = false,
  disabled = false,
  icon,
  badge,
  iconOnly: iconOnlyProp = false,
  tooltip,
  as: Comp = 'a',
  className,
  ...props
}: NavItemProps) {
  const { collapsed, size, depth } = React.useContext(NavContext);
  const isIconOnly = iconOnlyProp || collapsed;

  const element = (
    <Comp
      {...(!isIconOnly && { 'data-nav-item': '' })}
      aria-current={active ? 'page' : undefined}
      aria-disabled={disabled || undefined}
      aria-label={isIconOnly ? tooltip ?? (typeof children === 'string' ? children : undefined) : undefined}
      tabIndex={disabled ? -1 : undefined}
      className={cn(
        'group flex items-center rounded-[3px] transition-colors text-left',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1',
        active
          ? 'bg-surface text-foreground font-semibold'
          : 'text-fg-secondary hover:text-foreground hover:bg-surface',
        disabled && 'pointer-events-none opacity-40',
        isIconOnly
          ? cn('justify-center self-center', iconOnlySizes[size])
          : cn(
              'w-full gap-2.5',
              depth === 0 && cn('border-l-2', active ? 'border-accent' : 'border-transparent'),
            ),
        className,
      )}
      {...props}
    >
      {icon && (
        <span
          className={cn(
            'shrink-0 transition-colors',
            active ? 'text-foreground' : 'text-fg-secondary group-hover:text-foreground',
          )}
          aria-hidden="true"
        >
          {icon}
        </span>
      )}
      {!isIconOnly && <span className="flex-1 truncate">{children}</span>}
      {!isIconOnly && badge !== undefined && (
        <span
          className={cn(
            'ml-auto inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full px-1.5 text-[11px] font-semibold leading-none',
            active ? 'bg-accent text-accent-on' : 'bg-surface text-fg-secondary',
          )}
        >
          {badge}
        </span>
      )}
    </Comp>
  );

  if (isIconOnly && tooltip) {
    return (
      <Tooltip content={tooltip} side="right" sideOffset={8}>
        {element}
      </Tooltip>
    );
  }

  return element;
}

// ─── Group (collapsible section) ──────────────────────────────────────────────

export interface NavGroupProps {
  children: React.ReactNode;
  title: string;
  icon?: React.ReactNode;
  active?: boolean;
  defaultOpen?: boolean;
  className?: string;
}

export function NavGroup({
  children,
  title,
  icon,
  active = false,
  defaultOpen = false,
  className,
}: NavGroupProps) {
  const { collapsed, size, depth } = React.useContext(NavContext);
  const [open, setOpen] = React.useState(defaultOpen);

  // In collapsed mode, groups are hidden — only icon-only flat items make sense
  if (collapsed) return null;

  return (
    <div className={cn('flex flex-col gap-0.5', className)}>
      <button
        type="button"
        data-nav-item=""
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        className={cn(
          'group flex w-full items-center gap-2.5 rounded-[3px] font-medium transition-colors text-left',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1',
          active
            ? 'bg-surface text-foreground font-semibold'
            : 'text-fg-secondary hover:text-foreground hover:bg-surface',
          depth === 0 && cn('border-l-2', active ? 'border-accent' : 'border-transparent'),
        )}
      >
        {icon && (
          <span className={cn('shrink-0', active ? 'text-foreground' : 'text-fg-secondary group-hover:text-foreground')} aria-hidden="true">
            {icon}
          </span>
        )}
        <span className="flex-1 truncate text-left">{title}</span>
        <svg
          className={cn('h-3.5 w-3.5 shrink-0 transition-transform duration-200', open && 'rotate-180')}
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open && (
        <NavContext.Provider value={{ collapsed, size, depth: depth + 1 }}>
          <div className="ml-2 mt-0.5 border-l border-border pl-2.5 flex flex-col gap-0.5">
            {children}
          </div>
        </NavContext.Provider>
      )}
    </div>
  );
}

// ─── Separator ────────────────────────────────────────────────────────────────

export function NavSeparator({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn('my-1 h-px bg-border', className)} />
  );
}
