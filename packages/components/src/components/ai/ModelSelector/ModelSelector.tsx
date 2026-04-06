'use client';

import * as React from 'react';
import { cn } from '../../../lib/cn';
import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  DropdownLabel,
  DropdownSeparator,
} from '../../Dropdown/Dropdown';
import { Badge } from '../../Badge/Badge';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface AIModel {
  id: string;
  name: string;
  provider?: string;
  /** Short badge label, e.g. "Pro", "New", "Fast" */
  badge?: string;
  badgeVariant?: 'neutral' | 'primary' | 'success' | 'warning';
  disabled?: boolean;
}

export interface ModelGroup {
  label?: string;
  models: AIModel[];
}

export interface ModelSelectorProps {
  /** Flat list or grouped list of models */
  models: AIModel[] | ModelGroup[];
  value?: string;
  onValueChange?: (modelId: string) => void;
  placeholder?: string;
  className?: string;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function isGrouped(models: AIModel[] | ModelGroup[]): models is ModelGroup[] {
  return models.length > 0 && 'models' in models[0];
}

function findModel(models: AIModel[] | ModelGroup[], id: string): AIModel | undefined {
  if (isGrouped(models)) {
    return models.flatMap(g => g.models).find(m => m.id === id);
  }
  return (models as AIModel[]).find(m => m.id === id);
}

// ─── Component ────────────────────────────────────────────────────────────────

export function ModelSelector({ models, value, onValueChange, placeholder = 'Select model…', className }: ModelSelectorProps) {
  const selected = value ? findModel(models, value) : undefined;

  return (
    <Dropdown>
      <DropdownTrigger asChild>
        <button
          type="button"
          className={cn(
            'inline-flex items-center gap-1.5 rounded-[3px] border border-border bg-card px-2.5 py-1.5',
            'text-sm text-foreground transition-colors',
            'hover:bg-surface hover:border-border-strong',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1',
            className,
          )}
        >
          <span className="truncate max-w-[180px]">
            {selected ? selected.name : <span className="text-fg-secondary">{placeholder}</span>}
          </span>
          {selected?.badge && (
            <Badge variant={selected.badgeVariant ?? 'primary'} size="sm">{selected.badge}</Badge>
          )}
          <svg className="ml-0.5 h-3.5 w-3.5 shrink-0 text-fg-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </button>
      </DropdownTrigger>

      <DropdownContent align="start" className="min-w-[220px]">
        {isGrouped(models) ? (
          (models as ModelGroup[]).map((group, gi) => (
            <React.Fragment key={gi}>
              {gi > 0 && <DropdownSeparator />}
              {group.label && <DropdownLabel>{group.label}</DropdownLabel>}
              {group.models.map(model => (
                <ModelItem key={model.id} model={model} selected={value === model.id} onSelect={() => onValueChange?.(model.id)} />
              ))}
            </React.Fragment>
          ))
        ) : (
          (models as AIModel[]).map(model => (
            <ModelItem key={model.id} model={model} selected={value === model.id} onSelect={() => onValueChange?.(model.id)} />
          ))
        )}
      </DropdownContent>
    </Dropdown>
  );
}

function ModelItem({ model, selected, onSelect }: { model: AIModel; selected: boolean; onSelect: () => void }) {
  return (
    <DropdownItem
      onSelect={onSelect}
      disabled={model.disabled}
      icon={selected ? (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M20 6 9 17l-5-5"/>
        </svg>
      ) : <span className="w-[14px]" />}
    >
      <span className="flex items-center justify-between w-full gap-4">
        <span>{model.name}</span>
        {model.badge && (
          <Badge variant={model.badgeVariant ?? 'primary'} size="xs">{model.badge}</Badge>
        )}
      </span>
    </DropdownItem>
  );
}
