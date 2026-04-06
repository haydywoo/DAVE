import * as React from 'react';
import { cn } from '../../../lib/cn';
import { Button } from '../../Button/Button';
import { Badge } from '../../Badge/Badge';

export interface ApprovalGateProps {
  /** What the agent wants to do */
  title: string;
  description?: string;
  /** The tool or action name */
  tool?: string;
  /** Structured input to show as a preview */
  input?: Record<string, unknown>;
  onApprove?: () => void;
  onDeny?: () => void;
  isLoading?: boolean;
  className?: string;
}

function ShieldIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <path d="m9 12 2 2 4-4"/>
    </svg>
  );
}

export function ApprovalGate({
  title,
  description,
  tool,
  input,
  onApprove,
  onDeny,
  isLoading = false,
  className,
}: ApprovalGateProps) {
  return (
    <div className={cn(
      'rounded-[4px] bg-card border border-border border-l-[3px] border-l-warning',
      className,
    )}>
      {/* Header */}
      <div className="flex items-start gap-3 p-4">
        <span className="shrink-0 mt-0.5 text-warning">
          <ShieldIcon />
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <p className="text-sm font-semibold text-foreground">{title}</p>
            {tool && <Badge variant="warning" size="sm">{tool}</Badge>}
          </div>
          {description && (
            <p className="mt-1 text-xs text-fg-secondary leading-relaxed">{description}</p>
          )}
        </div>
      </div>

      {/* Input preview */}
      {input && Object.keys(input).length > 0 && (
        <div className="mx-4 mb-3 rounded-[3px] border border-border bg-card p-3">
          <pre className="text-xs font-mono text-fg-secondary leading-relaxed whitespace-pre-wrap break-words m-0 overflow-x-auto">
            {JSON.stringify(input, null, 2)}
          </pre>
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center justify-end gap-2 px-4 pb-4">
        <Button variant="secondary" size="sm" onClick={onDeny} disabled={isLoading}>
          Deny
        </Button>
        <Button variant="primary" size="sm" onClick={onApprove} isLoading={isLoading}>
          Approve
        </Button>
      </div>
    </div>
  );
}
