'use client';

import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { cn } from '../../../lib/cn';
import { Avatar } from '../../Avatar/Avatar';
import { CodeBlock } from '../CodeBlock/CodeBlock';
import { FeedbackBar } from '../FeedbackBar/FeedbackBar';

// ─── Types ────────────────────────────────────────────────────────────────────

export type MessageRole = 'user' | 'assistant' | 'system';

export interface MessageProps {
  role: MessageRole;
  /** Markdown content */
  content: string;
  /** Display name override */
  name?: string;
  /** Avatar image URL (assistant/user) */
  avatar?: string;
  /** ISO string or Date */
  timestamp?: string | Date;
  /** When true, renders a streaming cursor at the end of content */
  isStreaming?: boolean;
  /** Hides the FeedbackBar */
  hideFeedback?: boolean;
  onCopy?: () => void;
  onThumbsUp?: () => void;
  onThumbsDown?: () => void;
  onRegenerate?: () => void;
  feedback?: 'up' | 'down' | null;
  /** Slot for additional actions (e.g. edit, branch) */
  actions?: React.ReactNode;
  className?: string;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const ROLE_LABELS: Record<MessageRole, string> = {
  user:      'You',
  assistant: 'Assistant',
  system:    'System',
};

function formatTime(value: string | Date): string {
  const d = typeof value === 'string' ? new Date(value) : value;
  return d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
}

// ─── Markdown components ──────────────────────────────────────────────────────

const markdownComponents: React.ComponentProps<typeof ReactMarkdown>['components'] = {
  // Code — inline vs block
  code({ className, children, ...props }) {
    const match = /language-(\w+)/.exec(className ?? '');
    const language = match?.[1];
    const code = String(children).replace(/\n$/, '');

    // Inline code
    if (!className || !language) {
      return (
        <code
          className="font-mono text-[0.85em] bg-surface text-accent-foreground px-1.5 py-0.5 rounded border border-border"
          {...props}
        >
          {children}
        </code>
      );
    }

    return <CodeBlock code={code} language={language} className="my-3" />;
  },

  // Prose elements — consistent sizing & spacing
  p({ children })        { return <p className="mb-3 last:mb-0 leading-relaxed">{children}</p>; },
  ul({ children })       { return <ul className="mb-3 last:mb-0 list-disc pl-5 space-y-1">{children}</ul>; },
  ol({ children })       { return <ol className="mb-3 last:mb-0 list-decimal pl-5 space-y-1">{children}</ol>; },
  li({ children })       { return <li className="leading-relaxed">{children}</li>; },
  blockquote({ children }) { return <blockquote className="border-l-2 border-border pl-3 text-fg-secondary italic my-3">{children}</blockquote>; },
  h1({ children })       { return <h1 className="text-lg font-semibold mt-4 mb-2 first:mt-0">{children}</h1>; },
  h2({ children })       { return <h2 className="text-base font-semibold mt-4 mb-2 first:mt-0">{children}</h2>; },
  h3({ children })       { return <h3 className="text-sm font-semibold mt-3 mb-1 first:mt-0">{children}</h3>; },
  hr()                   { return <hr className="my-4 border-border" />; },
  a({ href, children })  { return <a href={href} target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2 hover:no-underline">{children}</a>; },
  strong({ children })   { return <strong className="font-semibold text-foreground">{children}</strong>; },
  table({ children })    { return <div className="my-3 overflow-x-auto rounded-[3px] border border-border"><table className="w-full text-sm">{children}</table></div>; },
  thead({ children })    { return <thead className="bg-surface">{children}</thead>; },
  th({ children })       { return <th className="px-3 py-2 text-left text-xs font-semibold text-fg-secondary uppercase tracking-wide border-b border-border">{children}</th>; },
  td({ children })       { return <td className="px-3 py-2 text-sm border-b border-border last:border-0">{children}</td>; },
};

// ─── Component ────────────────────────────────────────────────────────────────

export function Message({
  role,
  content,
  name,
  avatar,
  timestamp,
  isStreaming = false,
  hideFeedback = false,
  onCopy,
  onThumbsUp,
  onThumbsDown,
  onRegenerate,
  feedback,
  actions,
  className,
}: MessageProps) {
  const isUser = role === 'user';
  const isSystem = role === 'system';
  const displayName = name ?? ROLE_LABELS[role];

  return (
    <div className={cn(
      'group flex gap-3',
      isUser && 'flex-row-reverse',
      className,
    )}>
      {/* Avatar */}
      {!isSystem && (
        <div className="shrink-0 mt-0.5">
          {avatar ? (
            <Avatar src={avatar} alt={displayName} size="sm" />
          ) : (
            <Avatar initials={displayName.slice(0, 2).toUpperCase()} alt={displayName} size="sm" />
          )}
        </div>
      )}

      {/* Bubble + meta */}
      <div className={cn('flex flex-col gap-1 min-w-0', isUser ? 'items-end' : 'items-start', isSystem && 'items-center w-full')}>
        {/* Name + timestamp */}
        <div className={cn('flex items-baseline gap-2', isUser && 'flex-row-reverse')}>
          <span className="text-xs font-semibold text-foreground">{displayName}</span>
          {timestamp && (
            <span className="text-[11px] text-fg-secondary tabular-nums">{formatTime(timestamp)}</span>
          )}
        </div>

        {/* Content bubble */}
        <div className={cn(
          'text-sm leading-relaxed',
          isUser
            ? 'rounded-[3px] rounded-tr-[2px] bg-accent text-accent-on px-3.5 py-2.5 max-w-[85%]'
            : isSystem
            ? 'text-xs text-fg-secondary italic'
            : 'max-w-full text-foreground',
        )}>
          {isUser ? (
            // User messages: plain text, no markdown
            <p className="whitespace-pre-wrap break-words">{content}</p>
          ) : (
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
              {content}
            </ReactMarkdown>
          )}
          {isStreaming && (
            <span
              aria-hidden="true"
              className="inline-block w-0.5 h-[1em] ml-px align-text-bottom bg-current animate-pulse"
            />
          )}
        </div>

        {/* Feedback bar — assistant only, visible on hover */}
        {!isUser && !isSystem && !hideFeedback && !isStreaming && (
          <div className="opacity-0 group-hover:opacity-100 transition-opacity">
            <FeedbackBar
              copyValue={content}
              onCopy={onCopy}
              onThumbsUp={onThumbsUp}
              onThumbsDown={onThumbsDown}
              onRegenerate={onRegenerate}
              feedback={feedback}
            />
          </div>
        )}

        {actions && <div className="mt-1">{actions}</div>}
      </div>
    </div>
  );
}
