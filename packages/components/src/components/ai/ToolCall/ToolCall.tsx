'use client';

import * as React from 'react';
import { cn } from '../../../lib/cn';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '../../Collapsible/Collapsible';
import { Badge } from '../../Badge/Badge';
import { Spinner } from '../../Spinner/Spinner';
import { CopyButton } from '../../CopyButton/CopyButton';

// ─── Shared ───────────────────────────────────────────────────────────────────

export type ToolStatus = 'pending' | 'running' | 'success' | 'error';

const statusConfig: Record<ToolStatus, { label: string; variant: 'neutral' | 'primary' | 'success' | 'warning' | 'error' }> = {
  pending: { label: 'Pending',  variant: 'neutral' },
  running: { label: 'Running',  variant: 'primary' },
  success: { label: 'Done',     variant: 'success' },
  error:   { label: 'Error',    variant: 'error' },
};

function JsonView({ value }: { value: unknown }) {
  const json = JSON.stringify(value, null, 2);
  return (
    <pre className="overflow-x-auto text-xs leading-relaxed font-mono text-fg-secondary bg-transparent m-0 whitespace-pre-wrap break-words">
      {json}
    </pre>
  );
}

// ─── ToolCall ─────────────────────────────────────────────────────────────────

export interface ToolCallProps {
  /** The function/tool name, e.g. "search_web" */
  name: string;
  /** Arguments passed to the tool */
  input?: Record<string, unknown>;
  status?: ToolStatus;
  defaultOpen?: boolean;
  className?: string;
}

export function ToolCall({ name, input, status = 'running', defaultOpen = false, className }: ToolCallProps) {
  const { label, variant } = statusConfig[status];
  const isRunning = status === 'running';
  const hasInput = input && Object.keys(input).length > 0;

  return (
    <Collapsible defaultOpen={defaultOpen} disabled={!hasInput}>
      <div className={cn('rounded-[6px] border border-border bg-surface overflow-hidden', className)}>
        <CollapsibleTrigger showChevron={false} className={cn('flex w-full items-center gap-2 px-3 py-2.5 text-left', !hasInput && 'cursor-default')}>
          {/* Tool icon */}
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-[3px] bg-accent-subtle text-accent">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
            </svg>
          </span>

          <span className="flex-1 font-mono text-xs font-medium text-foreground truncate">{name}</span>

          <div className="flex items-center gap-2 shrink-0">
            {isRunning && <Spinner size="xs" className="text-accent" />}
            <Badge variant={variant} size="sm">{label}</Badge>
            {hasInput && (
              <svg
                className="h-3.5 w-3.5 text-fg-secondary transition-transform duration-200 [[data-state=open]_&]:rotate-90"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            )}
          </div>
        </CollapsibleTrigger>

        {hasInput && (
          <CollapsibleContent>
            <div className="group relative border-t border-border px-3 py-2.5">
              <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <CopyButton value={JSON.stringify(input, null, 2)} size="sm" />
              </div>
              <JsonView value={input} />
            </div>
          </CollapsibleContent>
        )}
      </div>
    </Collapsible>
  );
}

// ─── ToolResult ───────────────────────────────────────────────────────────────

export interface ToolResultProps {
  /** The tool that produced this result */
  toolName?: string;
  output: unknown;
  isError?: boolean;
  defaultOpen?: boolean;
  className?: string;
}

export function ToolResult({ toolName, output, isError = false, defaultOpen = false, className }: ToolResultProps) {
  const isString = typeof output === 'string';
  const displayValue = isString ? output : output;
  const copyValue = isString ? output : JSON.stringify(output, null, 2);
  const hasContent = output !== undefined && output !== null && output !== '';

  return (
    <Collapsible defaultOpen={defaultOpen} disabled={!hasContent}>
      <div className={cn(
        'rounded-[6px] border bg-surface overflow-hidden',
        isError ? 'border-error-border' : 'border-border',
        className,
      )}>
        <CollapsibleTrigger showChevron={false} className={cn('flex w-full items-center gap-2 px-3 py-2.5 text-left', !hasContent && 'cursor-default')}>
          <span className={cn(
            'flex h-5 w-5 shrink-0 items-center justify-center rounded-[3px]',
            isError ? 'bg-error-subtle text-error' : 'bg-success-subtle text-success',
          )}>
            {isError ? (
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/><path d="m15 9-6 6M9 9l6 6"/>
              </svg>
            ) : (
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 6 9 17l-5-5"/>
              </svg>
            )}
          </span>

          <span className="flex-1 text-xs font-medium text-foreground truncate">
            {toolName ? `${toolName} result` : 'Tool result'}
          </span>

          <div className="flex items-center gap-2 shrink-0">
            <Badge variant={isError ? 'error' : 'success'} size="sm">{isError ? 'Error' : 'Success'}</Badge>
            {hasContent && (
              <svg
                className="h-3.5 w-3.5 text-fg-secondary transition-transform duration-200 [[data-state=open]_&]:rotate-90"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            )}
          </div>
        </CollapsibleTrigger>

        {hasContent && (
          <CollapsibleContent>
            <div className="group relative border-t border-border px-3 py-2.5">
              <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <CopyButton value={copyValue} size="sm" />
              </div>
              {isString ? (
                <p className="text-xs text-fg-secondary leading-relaxed whitespace-pre-wrap break-words">{output as string}</p>
              ) : (
                <JsonView value={displayValue} />
              )}
            </div>
          </CollapsibleContent>
        )}
      </div>
    </Collapsible>
  );
}
