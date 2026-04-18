import * as React from 'react';
import { cn } from '../../../lib/cn';

export interface SuggestionChip {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

export interface SuggestionChipsProps {
  suggestions: SuggestionChip[];
  onSelect?: (chip: SuggestionChip) => void;
  className?: string;
}

export function SuggestionChips({ suggestions, onSelect, className }: SuggestionChipsProps) {
  return (
    <ul className={cn('flex flex-wrap gap-2 list-none', className)}>
      {suggestions.map(chip => (
        <li key={chip.id}>
          <button
            type="button"
            onClick={() => onSelect?.(chip)}
            className={cn(
              'inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5',
              'text-sm text-foreground transition-colors',
              'hover:bg-surface hover:border-border-strong',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1',
            )}
          >
            {chip.icon && <span className="shrink-0 text-fg-secondary" aria-hidden="true">{chip.icon}</span>}
            {chip.label}
          </button>
        </li>
      ))}
    </ul>
  );
}
