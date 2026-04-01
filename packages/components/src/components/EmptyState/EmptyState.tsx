import * as React from 'react';
import { cn } from '../../lib/cn';

export interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
}

export function EmptyState({ icon, title, description, action, className }: EmptyStateProps) {
  return (
    <div className={cn('flex flex-col items-center justify-center text-center px-6 py-16', className)}>
      {icon && (
        <div className="mb-4 flex items-center justify-center h-12 w-12 rounded-full bg-surface text-fg-secondary" aria-hidden="true">
          {icon}
        </div>
      )}
      <p className="text-sm font-semibold text-foreground">{title}</p>
      {description && (
        <p className="mt-1 text-sm text-fg-secondary max-w-xs">{description}</p>
      )}
      {action && (
        <div className="mt-6">{action}</div>
      )}
    </div>
  );
}
