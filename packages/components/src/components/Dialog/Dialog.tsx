import * as React from 'react';
import * as RadixDialog from '@radix-ui/react-dialog';
import { cn } from '../../lib/cn';

export const Dialog        = RadixDialog.Root;
export const DialogTrigger = RadixDialog.Trigger;

// ─── Overlay ─────────────────────────────────────────────────────────────────

export function DialogOverlay({ className }: { className?: string }) {
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

// ─── Content ─────────────────────────────────────────────────────────────────

export type DialogSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

export interface DialogContentProps {
  children: React.ReactNode;
  size?: DialogSize;
  className?: string;
}

const sizeMap: Record<DialogSize, string> = {
  sm:   'max-w-sm',
  md:   'max-w-md',
  lg:   'max-w-lg',
  xl:   'max-w-xl',
  full: 'max-w-[calc(100vw-2rem)]',
};

export function DialogContent({ children, size = 'md', className }: DialogContentProps) {
  return (
    <RadixDialog.Portal>
      <DialogOverlay />
      <RadixDialog.Content
        className={cn(
          'fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2',
          'w-full rounded-[3px] bg-card shadow-lg',
          sizeMap[size],
          'data-[state=open]:animate-in data-[state=closed]:animate-out',
          'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
          'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
          'data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]',
          'data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]',
          className,
        )}
      >
        {children}
      </RadixDialog.Content>
    </RadixDialog.Portal>
  );
}

// ─── Header ──────────────────────────────────────────────────────────────────

export function DialogHeader({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('flex items-start justify-between gap-4 px-6 pt-6 pb-4 border-b border-border', className)}>
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

// ─── Title ───────────────────────────────────────────────────────────────────

export function DialogTitle({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <RadixDialog.Title className={cn('text-base font-semibold text-foreground', className)}>
      {children}
    </RadixDialog.Title>
  );
}

// ─── Description ─────────────────────────────────────────────────────────────

export function DialogDescription({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <RadixDialog.Description className={cn('text-sm text-fg-secondary', className)}>
      {children}
    </RadixDialog.Description>
  );
}

// ─── Body ────────────────────────────────────────────────────────────────────

export function DialogBody({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('px-6 py-5', className)}>
      {children}
    </div>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────

export function DialogFooter({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('flex items-center justify-end gap-3 px-6 py-4 border-t border-border', className)}>
      {children}
    </div>
  );
}

// ─── Close ───────────────────────────────────────────────────────────────────

export const DialogClose = RadixDialog.Close;
