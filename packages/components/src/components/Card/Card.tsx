import * as React from 'react';
import { cn } from '../../lib/cn';

// ─── Root ────────────────────────────────────────────────────────────────────

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Removes padding — useful when the card contains a full-bleed image or table */
  noPadding?: boolean;
}

export function Card({ noPadding = false, className, children, ...props }: CardProps) {
  return (
    <div
      className={cn('rounded-[6px] border border-border bg-card shadow-card', !noPadding && 'p-6', className)}
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
      className={cn('mb-4 flex flex-col gap-1', className)}
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
      className={cn('text-base font-semibold text-foreground', className)}
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
      className={cn('text-sm text-fg-secondary', className)}
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
      className={cn('mt-6 flex items-center gap-3', className)}
      {...props}
    >
      {children}
    </div>
  );
}

// ─── Image ───────────────────────────────────────────────────────────────────

export interface CardImageProps {
  src: string;
  alt?: string;
  /** Which edge the image sits flush against — controls rounding and layout hints */
  position?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
}

const imageStyles: Record<string, string> = {
  top:    'w-full aspect-video object-cover rounded-t-[2px]',
  bottom: 'w-full aspect-video object-cover rounded-b-[2px]',
  left:   'w-36 shrink-0 self-stretch object-cover rounded-l-[2px]',
  right:  'w-36 shrink-0 self-stretch object-cover rounded-r-[2px]',
};

export function CardImage({ src, alt = '', position = 'top', className }: CardImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={cn(imageStyles[position], className)}
    />
  );
}

// ─── Divider ─────────────────────────────────────────────────────────────────
// Useful for breaking sections within a card, e.g. above a footer

export function CardDivider({ className }: { className?: string }) {
  return (
    <hr
      className={cn('-mx-6 my-6 border-t border-border', className)}
      aria-hidden="true"
    />
  );
}
