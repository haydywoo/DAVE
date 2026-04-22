import * as React from 'react';
import { cn } from '../../lib/cn';

export interface CalloutProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Optional small heading shown above the body */
  title?: React.ReactNode;
  /** Heading element tag */
  as?: 'h2' | 'h3' | 'h4' | 'p';
}

/**
 * Callout — a softer surface than Card. Use for inline notes, disclaimers,
 * and "by the way" content that belongs alongside body copy rather than
 * standing on its own. Uses `bg-surface` with no shadow.
 */
export function Callout({ title, as: TitleTag = 'p', className, children, ...props }: CalloutProps) {
  return (
    <div
      className={cn(
        'rounded-[6px] border border-border bg-surface p-5 text-sm text-fg-secondary leading-relaxed',
        className,
      )}
      {...props}
    >
      {title && (
        <TitleTag className="text-sm font-semibold text-foreground mb-2">
          {title}
        </TitleTag>
      )}
      {children}
    </div>
  );
}
