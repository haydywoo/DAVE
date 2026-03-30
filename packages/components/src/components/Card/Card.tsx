import * as React from 'react';

// ─── Root ────────────────────────────────────────────────────────────────────

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Removes padding — useful when the card contains a full-bleed image or table */
  noPadding?: boolean;
}

export function Card({ noPadding = false, className, children, ...props }: CardProps) {
  return (
    <div
      className={[
        'rounded-[3px] border border-border bg-card',
        noPadding ? '' : 'p-6',
        className,
      ].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  );
}

// ─── Header ──────────────────────────────────────────────────────────────────

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export function CardHeader({ className, children, ...props }: CardHeaderProps) {
  return (
    <div
      className={['mb-4 flex flex-col gap-1', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  );
}

// ─── Title ───────────────────────────────────────────────────────────────────

export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export function CardTitle({ as: Tag = 'h3', className, children, ...props }: CardTitleProps) {
  return (
    <Tag
      className={['text-base font-semibold text-foreground', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </Tag>
  );
}

// ─── Description ─────────────────────────────────────────────────────────────

export interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export function CardDescription({ className, children, ...props }: CardDescriptionProps) {
  return (
    <p
      className={['text-sm text-fg-secondary', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </p>
  );
}

// ─── Content ─────────────────────────────────────────────────────────────────

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export function CardContent({ className, children, ...props }: CardContentProps) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export function CardFooter({ className, children, ...props }: CardFooterProps) {
  return (
    <div
      className={['mt-6 flex items-center gap-3', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  );
}

// ─── Divider ─────────────────────────────────────────────────────────────────
// Useful for breaking sections within a card, e.g. above a footer

export function CardDivider({ className }: { className?: string }) {
  return (
    <hr
      className={['-mx-6 my-6 border-t border-border', className].filter(Boolean).join(' ')}
      aria-hidden="true"
    />
  );
}
