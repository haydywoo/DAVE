'use client';

import * as React from 'react';
import { cn } from '../../../lib/cn';
import { Button } from '../../Button/Button';
import { Tooltip } from '../../Tooltip/Tooltip';
import { FileAttachment, FileAttachmentProps } from '../FileAttachment/FileAttachment';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface AttachedFile extends Omit<FileAttachmentProps, 'onRemove'> {
  id: string;
}

export interface MessageInputProps {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
  onStop?: () => void;
  /** When true, shows a Stop button and disables new input */
  isStreaming?: boolean;
  placeholder?: string;
  /** Attached files shown as chips above the textarea */
  attachments?: AttachedFile[];
  onAttachmentRemove?: (id: string) => void;
  /** Called when the user clicks the attach (paperclip) button */
  onAttach?: () => void;
  /** Hide the attach button entirely */
  hideAttach?: boolean;
  /** Slot for extra controls in the toolbar (left side) */
  toolbarLeft?: React.ReactNode;
  /** Slot for extra controls in the toolbar (right side, before send) */
  toolbarRight?: React.ReactNode;
  disabled?: boolean;
  maxLength?: number;
  className?: string;
}

// ─── Icons ────────────────────────────────────────────────────────────────────

function SendIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 2 11 13M22 2 15 22l-4-9-9-4 20-7z"/>
    </svg>
  );
}

function StopIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="2"/>
    </svg>
  );
}

function PaperclipIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
    </svg>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export function MessageInput({
  value,
  defaultValue = '',
  onChange,
  onSubmit,
  onStop,
  isStreaming = false,
  placeholder = 'Message…',
  attachments,
  onAttachmentRemove,
  onAttach,
  hideAttach = false,
  toolbarLeft,
  toolbarRight,
  disabled = false,
  maxLength,
  className,
}: MessageInputProps) {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = React.useState(defaultValue);
  const currentValue = isControlled ? (value ?? '') : internalValue;
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  // Auto-grow textarea
  React.useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${el.scrollHeight}px`;
  }, [currentValue]);

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const v = e.target.value;
    if (!isControlled) setInternalValue(v);
    onChange?.(v);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey && !isStreaming) {
      e.preventDefault();
      submit();
    }
  }

  function submit() {
    const trimmed = currentValue.trim();
    if (!trimmed || disabled) return;
    onSubmit?.(trimmed);
    if (!isControlled) setInternalValue('');
  }

  const canSubmit = currentValue.trim().length > 0 && !disabled;
  const hasAttachments = attachments && attachments.length > 0;

  return (
    <div className={cn(
      'rounded-[3px] border border-border bg-card transition-colors',
      'focus-within:border-accent focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-0',
      (disabled && !isStreaming) && 'opacity-40 cursor-not-allowed',
      className,
    )}>
      {/* Attachment chips */}
      {hasAttachments && (
        <div className="flex flex-wrap gap-2 px-3 pt-3">
          {attachments!.map(file => (
            <FileAttachment
              key={file.id}
              name={file.name}
              type={file.type}
              size={file.size}
              url={file.url}
              onRemove={onAttachmentRemove ? () => onAttachmentRemove(file.id) : undefined}
            />
          ))}
        </div>
      )}

      {/* Textarea */}
      <textarea
        ref={textareaRef}
        value={currentValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        disabled={disabled || isStreaming}
        maxLength={maxLength}
        rows={1}
        className={cn(
          'block w-full resize-none overflow-hidden bg-transparent px-3 pt-3 pb-2',
          'text-sm text-foreground placeholder:text-fg-secondary',
          'focus:outline-none',
          'disabled:cursor-not-allowed',
          // min 1 row, max ~8 rows before scrolling
          'min-h-[44px] max-h-[200px] overflow-y-auto',
        )}
        aria-label="Message"
      />

      {/* Toolbar */}
      <div className="flex items-center justify-between px-2 pb-2 pt-1 gap-2">
        {/* Left controls */}
        <div className="flex items-center gap-1">
          {!hideAttach && (
            <Tooltip content="Attach file">
              <Button
                variant="ghost"
                size="sm"
                icon={<PaperclipIcon />}
                aria-label="Attach file"
                onClick={onAttach}
                disabled={disabled || isStreaming}
                className="text-fg-secondary hover:text-foreground"
              />
            </Tooltip>
          )}
          {toolbarLeft}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-1">
          {toolbarRight}
          {isStreaming ? (
            <Tooltip content="Stop generating">
              <Button
                variant="secondary"
                size="sm"
                icon={<StopIcon />}
                aria-label="Stop generating"
                onClick={onStop}
              />
            </Tooltip>
          ) : (
            <Tooltip content="Send (Enter)">
              <Button
                variant="primary"
                size="sm"
                icon={<SendIcon />}
                aria-label="Send message"
                onClick={submit}
                disabled={!canSubmit}
              />
            </Tooltip>
          )}
        </div>
      </div>
    </div>
  );
}
