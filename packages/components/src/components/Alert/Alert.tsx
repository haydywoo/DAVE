import * as React from 'react';
import { cn } from '../../lib/cn';

export type AlertVariant = 'info' | 'success' | 'warning' | 'error';

export interface AlertProps {
  variant?: AlertVariant;
  title?: string;
  children: React.ReactNode;
  onDismiss?: () => void;
  className?: string;
}

const styles: Record<AlertVariant, { container: string; icon: string }> = {
  info:    { container: 'bg-card border border-border border-l-[3px] border-l-accent',   icon: 'text-accent'   },
  success: { container: 'bg-card border border-border border-l-[3px] border-l-success', icon: 'text-success'  },
  warning: { container: 'bg-card border border-border border-l-[3px] border-l-warning', icon: 'text-warning'  },
  error:   { container: 'bg-card border border-border border-l-[3px] border-l-error',   icon: 'text-error'    },
};

function InfoIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" />
    </svg>
  );
}

function SuccessIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function WarningIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><path d="M12 9v4M12 17h.01" />
    </svg>
  );
}

function ErrorIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <circle cx="12" cy="12" r="10" /><path d="m15 9-6 6M9 9l6 6" />
    </svg>
  );
}

const icons: Record<AlertVariant, React.ComponentType<{ className?: string }>> = {
  info: InfoIcon, success: SuccessIcon, warning: WarningIcon, error: ErrorIcon,
};

export function Alert({ variant = 'info', title, children, onDismiss, className }: AlertProps) {
  const { container, icon: iconClass } = styles[variant];
  const Icon = icons[variant];

  return (
    <div role="alert" className={cn('rounded-[3px] p-4', container, className)}>
      <div className="flex gap-3">
        <Icon className={cn('mt-0.5 shrink-0', iconClass)} />
        <div className="flex-1 min-w-0">
          {title && <p className="text-sm font-semibold text-foreground mb-1">{title}</p>}
          <p className="text-sm text-fg-secondary">{children}</p>
        </div>
        {onDismiss && (
          <button
            type="button"
            onClick={onDismiss}
            aria-label="Dismiss"
            className="shrink-0 opacity-60 hover:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-[3px]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
