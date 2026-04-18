import * as React from 'react';
import * as RadixDialog from '@radix-ui/react-dialog';
import { cn } from '../../lib/cn';

export const Drawer = RadixDialog.Root;
export const DrawerTrigger = RadixDialog.Trigger;
export const DrawerClose = RadixDialog.Close;

// ─── Side ─────────────────────────────────────────────────────────────────────

export type DrawerSide = 'left' | 'right' | 'top' | 'bottom';

// ─── Overlay ──────────────────────────────────────────────────────────────────

export function DrawerOverlay({ className }: { className?: string }) {
  return (
    <RadixDialog.Overlay
      className={cn(
        'fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm',
        'data-[state=open]:animate-in data-[state=closed]:animate-out',
        'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        className,
      )}
    />
  );
}

// ─── Content ──────────────────────────────────────────────────────────────────

export interface DrawerContentProps {
  children: React.ReactNode;
  side?: DrawerSide;
  className?: string;
}

const sideStyles: Record<DrawerSide, string> = {
  right:  'inset-y-0 right-0 h-full w-full max-w-md data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right',
  left:   'inset-y-0 left-0  h-full w-full max-w-md data-[state=closed]:slide-out-to-left  data-[state=open]:slide-in-from-left',
  bottom: 'inset-x-0 bottom-0 w-full max-h-[85vh]   data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
  top:    'inset-x-0 top-0    w-full max-h-[85vh]   data-[state=closed]:slide-out-to-top    data-[state=open]:slide-in-from-top',
};

export function DrawerContent({ children, side = 'right', className }: DrawerContentProps) {
  return (
    <RadixDialog.Portal>
      <DrawerOverlay />
      <RadixDialog.Content
        className={cn(
          'fixed z-50 bg-raised shadow-raised flex flex-col',
          'data-[state=open]:animate-in data-[state=closed]:animate-out duration-300',
          'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
          sideStyles[side],
          className,
        )}
      >
        {children}
      </RadixDialog.Content>
    </RadixDialog.Portal>
  );
}

// ─── Header ───────────────────────────────────────────────────────────────────

export function DrawerHeader({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('flex items-start justify-between gap-4 px-6 py-5 border-b border-border shrink-0', className)}>
      <div className="flex flex-col gap-1">{children}</div>
      <RadixDialog.Close className="shrink-0 rounded-[3px] p-1 text-fg-secondary hover:text-foreground hover:bg-surface transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-card">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
        <span className="sr-only">Close</span>
      </RadixDialog.Close>
    </div>
  );
}

// ─── Title ────────────────────────────────────────────────────────────────────

export function DrawerTitle({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <RadixDialog.Title className={cn('text-base font-semibold text-foreground', className)}>
      {children}
    </RadixDialog.Title>
  );
}

// ─── Description ──────────────────────────────────────────────────────────────

export function DrawerDescription({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <RadixDialog.Description className={cn('text-sm text-fg-secondary', className)}>
      {children}
    </RadixDialog.Description>
  );
}

// ─── Body ─────────────────────────────────────────────────────────────────────

export function DrawerBody({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('flex-1 overflow-y-auto px-6 py-5', className)}>
      {children}
    </div>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

export function DrawerFooter({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('flex items-center justify-end gap-3 px-6 py-4 border-t border-border shrink-0', className)}>
      {children}
    </div>
  );
}
