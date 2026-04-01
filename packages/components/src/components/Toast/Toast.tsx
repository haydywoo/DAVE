'use client';

import * as React from 'react';
import * as RadixToast from '@radix-ui/react-toast';
import { cn } from '../../lib/cn';

// ─── Provider ─────────────────────────────────────────────────────────────────

export function ToastProvider({ children }: { children: React.ReactNode }) {
  return (
    <RadixToast.Provider swipeDirection="right">
      {children}
      <ToastViewport />
    </RadixToast.Provider>
  );
}

// ─── Viewport ─────────────────────────────────────────────────────────────────

export function ToastViewport() {
  return (
    <RadixToast.Viewport className="fixed bottom-0 right-0 z-[100] flex max-h-screen w-full flex-col-reverse gap-2 p-4 sm:max-w-[380px]" />
  );
}

// ─── Toast ────────────────────────────────────────────────────────────────────

export type ToastVariant = 'default' | 'success' | 'warning' | 'error';

export interface ToastProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  title?: string;
  description?: string;
  action?: React.ReactNode;
  variant?: ToastVariant;
  duration?: number;
}

const variantStyles: Record<ToastVariant, { container: string; icon: string }> = {
  default: {
    container: 'bg-card border-border',
    icon:      '',
  },
  success: {
    container: 'bg-card border-success-border',
    icon:      'text-success',
  },
  warning: {
    container: 'bg-card border-warning-border',
    icon:      'text-warning',
  },
  error: {
    container: 'bg-card border-error-border',
    icon:      'text-error',
  },
};

function VariantIcon({ variant }: { variant: ToastVariant }) {
  if (variant === 'default') return null;
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={cn('shrink-0 mt-0.5', variantStyles[variant].icon)}>
      {variant === 'success' && <><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></>}
      {variant === 'warning' && <><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><path d="M12 9v4M12 17h.01" /></>}
      {variant === 'error'   && <><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6M9 9l6 6" /></>}
    </svg>
  );
}

export function Toast({ open, onOpenChange, title, description, action, variant = 'default', duration = 4000 }: ToastProps) {
  const { container } = variantStyles[variant];

  return (
    <RadixToast.Root
      open={open}
      onOpenChange={onOpenChange}
      duration={duration}
      className={cn(
        'pointer-events-auto flex w-full items-start gap-3 rounded-[3px] border p-4 shadow-lg',
        'data-[state=open]:animate-in data-[state=closed]:animate-out',
        'data-[state=closed]:fade-out-80 data-[state=open]:fade-in-0',
        'data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-bottom-full',
        container,
      )}
    >
      <VariantIcon variant={variant} />
      <div className="flex-1 min-w-0">
        {title && (
          <RadixToast.Title className="text-sm font-semibold text-foreground">
            {title}
          </RadixToast.Title>
        )}
        {description && (
          <RadixToast.Description className="text-xs text-fg-secondary mt-0.5">
            {description}
          </RadixToast.Description>
        )}
        {action && <div className="mt-2">{action}</div>}
      </div>
      <RadixToast.Close className="shrink-0 rounded-[3px] p-0.5 text-fg-secondary hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-card">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
        <span className="sr-only">Close</span>
      </RadixToast.Close>
    </RadixToast.Root>
  );
}

// ─── useToast hook ────────────────────────────────────────────────────────────

export interface ToastOptions {
  title?: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number;
  action?: React.ReactNode;
}

interface ToastState extends ToastOptions {
  id: string;
  open: boolean;
}

const ToastContext = React.createContext<{ toast: (opts: ToastOptions) => void } | null>(null);

export function ToastProviderWithHook({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<ToastState[]>([]);

  const toast = React.useCallback((opts: ToastOptions) => {
    const id = Math.random().toString(36).slice(2);
    setToasts(prev => [...prev, { ...opts, id, open: true }]);
  }, []);

  function dismiss(id: string) {
    setToasts(prev => prev.map(t => t.id === id ? { ...t, open: false } : t));
  }

  return (
    <ToastContext.Provider value={{ toast }}>
      <RadixToast.Provider swipeDirection="right">
        {children}
        {toasts.map(t => (
          <Toast
            key={t.id}
            open={t.open}
            onOpenChange={open => { if (!open) dismiss(t.id); }}
            title={t.title}
            description={t.description}
            variant={t.variant}
            duration={t.duration}
            action={t.action}
          />
        ))}
        <ToastViewport />
      </RadixToast.Provider>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = React.useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used inside <ToastProviderWithHook>');
  return ctx;
}
