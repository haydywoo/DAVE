import * as React from 'react';
import { cn } from '../../../lib/cn';

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function FileTypeIcon({ type, size = 14 }: { type: string; size?: number }) {
  const base = type.split('/')[0];
  const sub  = type.split('/')[1] ?? '';

  const props = {
    width: size, height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  };

  // Image
  if (base === 'image') return (
    <svg {...props}>
      <rect width="18" height="18" x="3" y="3" rx="2"/>
      <circle cx="9" cy="9" r="2"/>
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
    </svg>
  );

  // Video
  if (base === 'video') return (
    <svg {...props}>
      <path d="m22 8-6 4 6 4V8z"/>
      <rect width="14" height="12" x="2" y="6" rx="2"/>
    </svg>
  );

  // Audio
  if (base === 'audio') return (
    <svg {...props}>
      <path d="M9 18V5l12-2v13"/>
      <circle cx="6" cy="18" r="3"/>
      <circle cx="18" cy="16" r="3"/>
    </svg>
  );

  // PDF
  if (sub.includes('pdf')) return (
    <svg {...props}>
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
      <polyline points="14 2 14 8 20 8"/>
      <path d="M9 13h6M9 17h3"/>
    </svg>
  );

  // Spreadsheet
  if (sub.includes('csv') || sub.includes('sheet') || sub.includes('excel') || sub.includes('xls')) return (
    <svg {...props}>
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
      <polyline points="14 2 14 8 20 8"/>
      <path d="M8 13h2l2 4 2-4h2"/>
    </svg>
  );

  // Word / document
  if (sub.includes('word') || sub.includes('doc') || sub.includes('rtf') || sub.includes('odt')) return (
    <svg {...props}>
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
      <polyline points="14 2 14 8 20 8"/>
      <path d="M9 13h6M9 17h6"/>
    </svg>
  );

  // Presentation
  if (sub.includes('presentation') || sub.includes('powerpoint') || sub.includes('ppt')) return (
    <svg {...props}>
      <path d="M2 3h20v14H2z"/>
      <path d="M8 21h8M12 17v4"/>
      <circle cx="10" cy="10" r="3"/>
      <path d="M13 10h4"/>
    </svg>
  );

  // Archive
  if (sub.includes('zip') || sub.includes('rar') || sub.includes('tar') || sub.includes('gz') || sub.includes('7z')) return (
    <svg {...props}>
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
      <polyline points="14 2 14 8 20 8"/>
      <path d="M10 12v-1h4v1M10 15v-1h4v1M12 17v1"/>
    </svg>
  );

  // Code
  if (sub.includes('json') || sub.includes('javascript') || sub.includes('typescript') || sub.includes('html') || sub.includes('css') || sub.includes('xml')) return (
    <svg {...props}>
      <polyline points="16 18 22 12 16 6"/>
      <polyline points="8 6 2 12 8 18"/>
    </svg>
  );

  // Plain text / markdown
  if (sub.includes('plain') || sub.includes('markdown') || sub.includes('md')) return (
    <svg {...props}>
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
      <polyline points="14 2 14 8 20 8"/>
      <path d="M9 13h6M9 17h4"/>
    </svg>
  );

  // Generic file
  return (
    <svg {...props}>
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
      <polyline points="14 2 14 8 20 8"/>
    </svg>
  );
}

// ─── Types ────────────────────────────────────────────────────────────────────

export interface FileAttachmentProps {
  name: string;
  /** MIME type, e.g. "image/png" */
  type?: string;
  /** File size in bytes — omit to hide */
  size?: number;
  /** Preview URL — rendered as a thumbnail for image types */
  url?: string;
  /** Single-line compact layout — no size, icon + name inline */
  compact?: boolean;
  onRemove?: () => void;
  className?: string;
}

// ─── Component ────────────────────────────────────────────────────────────────

export function FileAttachment({
  name,
  type = 'application/octet-stream',
  size,
  url,
  compact = false,
  onRemove,
  className,
}: FileAttachmentProps) {
  const isImage = type.startsWith('image/');

  if (compact) {
    return (
      <div className={cn(
        'inline-flex items-center gap-1.5 rounded-[4px] border border-border bg-surface px-2 py-1 text-xs transition-colors',
        className,
      )}>
        <span className="shrink-0 text-fg-secondary">
          <FileTypeIcon type={type} size={12} />
        </span>
        <span className="font-medium text-foreground truncate max-w-[160px]">{name}</span>
        {onRemove && (
          <button
            type="button"
            onClick={onRemove}
            aria-label={`Remove ${name}`}
            className="ml-0.5 shrink-0 rounded-full p-0.5 text-fg-secondary hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M18 6 6 18M6 6l12 12"/>
            </svg>
          </button>
        )}
      </div>
    );
  }

  return (
    <div className={cn(
      'group relative inline-flex items-center gap-2 rounded-[4px] border border-border bg-surface pr-2 text-sm transition-colors',
      isImage ? 'pl-1 py-1' : 'pl-2.5 py-1.5',
      className,
    )}>
      {/* Thumbnail or icon */}
      {isImage && url ? (
        <img
          src={url}
          alt={name}
          className="h-8 w-8 rounded-[3px] object-cover shrink-0"
        />
      ) : (
        <span className="shrink-0 text-fg-secondary">
          <FileTypeIcon type={type} />
        </span>
      )}

      {/* Name + size */}
      <div className="flex flex-col min-w-0">
        <span className="text-xs font-medium text-foreground truncate max-w-[140px]">{name}</span>
        {size !== undefined && (
          <span className="text-[10px] text-fg-secondary">{formatBytes(size)}</span>
        )}
      </div>

      {/* Remove button */}
      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          aria-label={`Remove ${name}`}
          className="ml-1 shrink-0 rounded-full p-0.5 text-fg-secondary hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
      )}
    </div>
  );
}
