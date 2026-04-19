'use client';

import * as React from 'react';
import { cn } from '../../lib/cn';

export type CopyButtonSize = 'sm' | 'md' | 'lg';
export type CopyButtonVariant = 'ghost' | 'outline' | 'solid';

export interface CopyButtonProps {
  value: string;
  size?: CopyButtonSize;
  variant?: CopyButtonVariant;
  /** Duration in ms to show the copied state. Default: 2000 */
  resetDelay?: number;
  label?: string;
  className?: string;
  onCopy?: () => void;
}

const sizes: Record<CopyButtonSize, string> = {
  sm: 'h-7 w-7 [&>svg]:h-3.5 [&>svg]:w-3.5',
  md: 'h-8 w-8 [&>svg]:h-4 [&>svg]:w-4',
  lg: 'h-9 w-9 [&>svg]:h-4.5 [&>svg]:w-4.5',
};

const sizesWithLabel: Record<CopyButtonSize, string> = {
  sm: 'h-7 px-2.5 gap-1.5 text-xs [&>svg]:h-3.5 [&>svg]:w-3.5',
  md: 'h-8 px-3 gap-2 text-sm [&>svg]:h-4 [&>svg]:w-4',
  lg: 'h-9 px-3.5 gap-2 text-sm [&>svg]:h-4 [&>svg]:w-4',
};

const variants: Record<CopyButtonVariant, string> = {
  ghost:   'text-fg-secondary hover:text-foreground hover:bg-surface',
  outline: 'border border-border text-fg-secondary hover:text-foreground hover:bg-surface hover:border-border-strong',
  solid:   'bg-surface border border-border text-fg-secondary hover:text-foreground hover:bg-border',
};

function CopyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function CopyButton({
  value,
  size = 'md',
  variant = 'ghost',
  resetDelay = 2000,
  label,
  className,
}: CopyButtonProps) {
  const [copied, setCopied] = React.useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      onCopy?.();
      setTimeout(() => setCopied(false), resetDelay);
    } catch {
      // Clipboard API unavailable — silent fail
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? 'Copied' : (label ? `Copy ${label}` : 'Copy')}
      className={cn(
        'inline-flex items-center justify-center rounded-[3px] transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1',
        variants[variant],
        label ? sizesWithLabel[size] : sizes[size],
        copied && 'text-success',
        className,
      )}
    >
      {copied ? <CheckIcon /> : <CopyIcon />}
      {label && <span>{copied ? 'Copied' : label}</span>}
    </button>
  );
}
