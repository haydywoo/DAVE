'use client';

import * as React from 'react';
import { cn } from '../../../lib/cn';
import { Button } from '../../Button/Button';
import { Tooltip } from '../../Tooltip/Tooltip';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Conversation {
  id: string;
  title: string;
  /** ISO string or Date for the last message */
  updatedAt?: string | Date;
  /** Unread count badge */
  unread?: number;
}

export interface ConversationGroup {
  label: string;
  items: Conversation[];
}

export interface ConversationListProps {
  /** Flat list or date-grouped list of conversations */
  conversations: Conversation[] | ConversationGroup[];
  activeId?: string;
  onSelect?: (conversation: Conversation) => void;
  onDelete?: (id: string) => void;
  onNewChat?: () => void;
  /** Label for the new chat button */
  newChatLabel?: string;
  className?: string;
}

// ─── Icons ────────────────────────────────────────────────────────────────────

function PlusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 5v14M5 12h14"/>
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 6h18M19 6 18 20a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
    </svg>
  );
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function isGrouped(items: Conversation[] | ConversationGroup[]): items is ConversationGroup[] {
  return items.length > 0 && 'items' in items[0];
}

function formatRelative(value: string | Date): string {
  const d = typeof value === 'string' ? new Date(value) : value;
  const now = Date.now();
  const diff = now - d.getTime();
  const mins = Math.floor(diff / 60_000);
  const hours = Math.floor(diff / 3_600_000);
  const days = Math.floor(diff / 86_400_000);
  if (mins < 1)  return 'Just now';
  if (mins < 60) return `${mins}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days < 7)  return `${days}d ago`;
  return d.toLocaleDateString([], { month: 'short', day: 'numeric' });
}

// ─── ConversationItem ─────────────────────────────────────────────────────────

function ConversationItem({
  conversation,
  isActive,
  onSelect,
  onDelete,
}: {
  conversation: Conversation;
  isActive: boolean;
  onSelect?: (c: Conversation) => void;
  onDelete?: (id: string) => void;
}) {
  return (
    <div
      className={cn(
        'group relative flex items-center gap-2 rounded-[3px] px-2.5 py-1.5 cursor-pointer',
        'transition-colors',
        isActive
          ? 'bg-accent-subtle text-accent-foreground'
          : 'text-foreground hover:bg-surface',
      )}
      role="button"
      tabIndex={0}
      aria-current={isActive ? 'page' : undefined}
      onClick={() => onSelect?.(conversation)}
      onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && onSelect?.(conversation)}
    >
      {/* Title */}
      <span className="flex-1 min-w-0 text-sm truncate">{conversation.title}</span>

      {/*
        Right meta slot — layout never changes, only opacity transitions.
        The slot is sized by its static content (timestamp + badge).
        The delete button lives in an absolute layer that crossfades in on
        hover. Neither layer ever changes display, so there is no reflow
        and Radix Tooltip always has a real element to measure.
      */}
      <div className="relative shrink-0 min-w-6 flex items-center justify-end">
        {/* Default layer: timestamp + badge */}
        <div className={cn(
          'flex items-center gap-1 transition-opacity duration-150',
          onDelete && 'group-hover:opacity-0 group-hover:pointer-events-none',
        )}>
          {conversation.updatedAt && (
            <span className="text-[11px] text-fg-secondary tabular-nums">
              {formatRelative(conversation.updatedAt)}
            </span>
          )}
          {conversation.unread != null && conversation.unread > 0 && (
            <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-accent text-accent-on text-[10px] font-semibold px-1">
              {conversation.unread > 99 ? '99+' : conversation.unread}
            </span>
          )}
        </div>

        {/* Hover layer: delete button */}
        {onDelete && (
          <div className="absolute inset-0 flex items-center justify-end opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-150">
            <Tooltip content="Delete conversation">
              <button
                type="button"
                aria-label={`Delete "${conversation.title}"`}
                onClick={e => { e.stopPropagation(); onDelete(conversation.id); }}
                className={cn(
                  'shrink-0 rounded p-1 -mr-1',
                  'text-fg-secondary hover:text-error hover:bg-error-subtle transition-colors',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
                )}
              >
                <TrashIcon />
              </button>
            </Tooltip>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export function ConversationList({
  conversations,
  activeId,
  onSelect,
  onDelete,
  onNewChat,
  newChatLabel = 'New chat',
  className,
}: ConversationListProps) {
  const grouped = isGrouped(conversations);

  return (
    <div className={cn('flex flex-col gap-1', className)}>
      {/* New chat button */}
      {onNewChat && (
        <div className="mb-2">
          <Button
            variant="secondary"
            size="sm"
            leftIcon={<PlusIcon />}
            onClick={onNewChat}
            className="w-full justify-start"
          >
            {newChatLabel}
          </Button>
        </div>
      )}

      {/* Conversation list */}
      {grouped ? (
        (conversations as ConversationGroup[]).map((group, i) => (
          <div key={group.label} className={`flex flex-col gap-0.5${i > 0 ? ' mt-4' : ''}`}>
            <p className="px-2.5 pb-1 text-[11px] font-semibold uppercase tracking-wide text-fg-secondary">
              {group.label}
            </p>
            {group.items.map(conv => (
              <ConversationItem
                key={conv.id}
                conversation={conv}
                isActive={conv.id === activeId}
                onSelect={onSelect}
                onDelete={onDelete}
              />
            ))}
          </div>
        ))
      ) : (
        (conversations as Conversation[]).map(conv => (
          <ConversationItem
            key={conv.id}
            conversation={conv}
            isActive={conv.id === activeId}
            onSelect={onSelect}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
}
