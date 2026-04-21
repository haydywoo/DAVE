'use client';

import * as React from 'react';
import { cn } from '../../lib/cn';

export type BannerVariant = 'info' | 'success' | 'warning' | 'error';

export interface BannerAction {
  label: string;
  href: string;
}

export interface BannerProps {
  variant?: BannerVariant;
  message: string;
  action?: BannerAction;
  onDismiss?: () => void;
  className?: string;
}

const styles: Record<BannerVariant, { root: string; icon: string }> = {
  info:    { root: 'bg-accent/10 border-b border-accent/30',       icon: 'text-accent'                          },
  success: { root: 'bg-success/10 border-b border-success/30',     icon: 'text-success'                         },
  warning: { root: 'bg-warning-subtle border-b border-warning-border', icon: 'text-warning-foreground' },
  error:   { root: 'bg-error/10 border-b border-error/30',         icon: 'text-error'                           },
};

function InfoIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" />
    </svg>
  );
}

function SuccessIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function WarningIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><path d="M12 9v4M12 17h.01" />
    </svg>
  );
}

function ErrorIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <circle cx="12" cy="12" r="10" /><path d="m15 9-6 6M9 9l6 6" />
    </svg>
  );
}

const icons: Record<BannerVariant, React.ComponentType<{ className?: string }>> = {
  info: InfoIcon, success: SuccessIcon, warning: WarningIcon, error: ErrorIcon,
};

export function Banner({ variant = 'info', message, action, onDismiss, className }: BannerProps) {
  React.useEffect(() => {
    document.documentElement.style.setProperty('--banner-height', '40px');
    return () => {
      document.documentElement.style.setProperty('--banner-height', '0px');
    };
  }, []);

  const { root, icon: iconClass } = styles[variant];
  const Icon = icons[variant];

  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        'fixed top-0 left-0 right-0 z-50 h-10 flex items-center justify-center px-4 gap-2',
        root,
        className,
      )}
    >
      <Icon className={cn('shrink-0', iconClass)} />
      <p className="text-sm text-foreground">{message}</p>
      {action && (
        <a
          href={action.href}
          className="text-sm font-medium underline underline-offset-2 text-foreground hover:text-fg-secondary transition-colors shrink-0"
        >
          {action.label}
        </a>
      )}
      {onDismiss && (
        <button
          type="button"
          onClick={onDismiss}
          aria-label="Dismiss banner"
          className="absolute right-3 flex items-center justify-center w-6 h-6 rounded-[3px] opacity-60 hover:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
}
