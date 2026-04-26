'use client';

import * as React from 'react';
import { cn } from '../../lib/cn';

export interface DropzoneProps {
  onFiles: (files: File[]) => void;
  accept?: string;          // e.g. "image/*,.pdf"
  multiple?: boolean;
  maxSize?: number;         // bytes
  maxFiles?: number;
  disabled?: boolean;
  error?: boolean;
  hint?: string;
  label?: string;
  /** Custom inner content — replaces the default icon + text */
  children?: React.ReactNode;
  className?: string;
}

const formatSize = (bytes: number) => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

function UploadIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" y1="3" x2="12" y2="15" />
    </svg>
  );
}

export function Dropzone({
  onFiles,
  accept,
  multiple = false,
  maxSize,
  maxFiles,
  disabled = false,
  error = false,
  hint,
  label,
  children,
  className,
}: DropzoneProps) {
  const [dragging, setDragging] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  function processFiles(rawFiles: FileList | null) {
    if (!rawFiles) return;
    let files = Array.from(rawFiles);
    if (maxSize) files = files.filter((f) => f.size <= maxSize);
    if (maxFiles) files = files.slice(0, maxFiles);
    if (files.length) onFiles(files);
  }

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
    if (!disabled) setDragging(true);
  }

  function handleDragLeave(e: React.DragEvent) {
    // Only clear if leaving the zone entirely
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setDragging(false);
    }
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setDragging(false);
    if (!disabled) processFiles(e.dataTransfer.files);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    processFiles(e.target.files);
    // Reset so the same file can be re-selected
    e.target.value = '';
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      inputRef.current?.click();
    }
  }

  const defaultHint = [
    'Drag and drop or click to upload',
    accept && `Accepted: ${accept}`,
    maxSize && `Max size: ${formatSize(maxSize)}`,
    maxFiles && !multiple && undefined,
    maxFiles && multiple && `Up to ${maxFiles} files`,
  ].filter(Boolean).join(' · ');

  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      {label && (
        <span className="text-sm font-semibold text-foreground">{label}</span>
      )}

      <div
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-label="File upload area"
        aria-disabled={disabled}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => !disabled && inputRef.current?.click()}
        onKeyDown={handleKeyDown}
        className={cn(
          'relative flex flex-col items-center justify-center gap-3 rounded-[3px] border-2 border-dashed px-6 py-10',
          'text-center transition-colors cursor-pointer',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1',
          dragging
            ? 'border-accent bg-accent-subtle'
            : error
            ? 'border-error bg-error-subtle'
            : 'border-border bg-card hover:border-border-strong hover:bg-surface',
          disabled && 'pointer-events-none opacity-40 cursor-not-allowed',
        )}
      >
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          onChange={handleChange}
          className="sr-only"
          tabIndex={-1}
          aria-hidden="true"
        />

        {children ?? (
          <>
            <div className={cn(
              'flex h-12 w-12 items-center justify-center rounded-full',
              dragging ? 'bg-accent text-accent-on' : 'bg-surface text-fg-secondary',
            )}>
              <UploadIcon />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">
                {dragging ? 'Drop to upload' : 'Drag & drop or click to upload'}
              </p>
              <p className="mt-1 text-xs text-fg-secondary">
                {hint ?? defaultHint}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
