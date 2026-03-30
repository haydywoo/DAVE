import * as React from 'react';
import * as RadixAlertDialog from '@radix-ui/react-alert-dialog';

// Re-export primitive parts that don't need styling
export const AlertDialog = RadixAlertDialog.Root;
export const AlertDialogTrigger = RadixAlertDialog.Trigger;

// ─── Overlay ─────────────────────────────────────────────────────────────────

export function AlertDialogOverlay({ className }: { className?: string }) {
  return (
    <RadixAlertDialog.Overlay
      className={[
        'fixed inset-0 z-50 bg-foreground/50',
        'data-[state=open]:animate-in data-[state=closed]:animate-out',
        'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        className,
      ].filter(Boolean).join(' ')}
    />
  );
}

// ─── Content ─────────────────────────────────────────────────────────────────

export interface AlertDialogContentProps {
  children: React.ReactNode;
  className?: string;
}

export function AlertDialogContent({ children, className }: AlertDialogContentProps) {
  return (
    <RadixAlertDialog.Portal>
      <AlertDialogOverlay />
      <RadixAlertDialog.Content
        className={[
          'fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2',
          'w-full max-w-md rounded-[3px] bg-card p-6 shadow-lg',
          'data-[state=open]:animate-in data-[state=closed]:animate-out',
          'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
          'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
          'data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]',
          'data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]',
          className,
        ].filter(Boolean).join(' ')}
      >
        {children}
      </RadixAlertDialog.Content>
    </RadixAlertDialog.Portal>
  );
}

// ─── Header ──────────────────────────────────────────────────────────────────

export function AlertDialogHeader({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={['mb-4', className].filter(Boolean).join(' ')}>
      {children}
    </div>
  );
}

// ─── Title ───────────────────────────────────────────────────────────────────

export function AlertDialogTitle({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <RadixAlertDialog.Title
      className={['text-base font-semibold text-foreground', className].filter(Boolean).join(' ')}
    >
      {children}
    </RadixAlertDialog.Title>
  );
}

// ─── Description ─────────────────────────────────────────────────────────────

export function AlertDialogDescription({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <RadixAlertDialog.Description
      className={['mt-2 text-sm text-fg-secondary', className].filter(Boolean).join(' ')}
    >
      {children}
    </RadixAlertDialog.Description>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────

export function AlertDialogFooter({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={['mt-6 flex justify-end gap-3', className].filter(Boolean).join(' ')}>
      {children}
    </div>
  );
}

// ─── Cancel ──────────────────────────────────────────────────────────────────

export function AlertDialogCancel({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <RadixAlertDialog.Cancel asChild>
      <button
        type="button"
        className={[
          'inline-flex items-center justify-center gap-2 h-9 px-4 text-sm font-semibold rounded-[3px] transition-colors',
          'bg-background text-foreground border border-border hover:border-border-strong',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background',
          className,
        ].filter(Boolean).join(' ')}
      >
        {children}
      </button>
    </RadixAlertDialog.Cancel>
  );
}

// ─── Action ──────────────────────────────────────────────────────────────────

export interface AlertDialogActionProps {
  children: React.ReactNode;
  /** Use 'destructive' for delete/irreversible actions */
  variant?: 'default' | 'destructive';
  className?: string;
}

export function AlertDialogAction({ children, variant = 'default', className }: AlertDialogActionProps) {
  return (
    <RadixAlertDialog.Action asChild>
      <button
        type="button"
        className={[
          'inline-flex items-center justify-center gap-2 h-9 px-4 text-sm font-semibold rounded-[3px] transition-colors',
          variant === 'destructive'
            ? 'bg-error text-background hover:bg-error-hover'
            : 'bg-accent text-background hover:bg-accent-hover',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
          variant === 'destructive' ? 'focus-visible:ring-error' : 'focus-visible:ring-accent',
          className,
        ].filter(Boolean).join(' ')}
      >
        {children}
      </button>
    </RadixAlertDialog.Action>
  );
}
