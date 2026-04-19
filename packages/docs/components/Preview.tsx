'use client';

import { useState } from 'react';
import { CodeBlock } from '@dave/react';

interface PreviewProps {
  children: React.ReactNode;
  code?: string;
  language?: string;
  center?: boolean;
}

function GridIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <circle cx="1.5"  cy="1.5"  r="1.5" fill="currentColor" />
      <circle cx="7"    cy="1.5"  r="1.5" fill="currentColor" />
      <circle cx="12.5" cy="1.5"  r="1.5" fill="currentColor" />
      <circle cx="1.5"  cy="7"    r="1.5" fill="currentColor" />
      <circle cx="7"    cy="7"    r="1.5" fill="currentColor" />
      <circle cx="12.5" cy="7"    r="1.5" fill="currentColor" />
      <circle cx="1.5"  cy="12.5" r="1.5" fill="currentColor" />
      <circle cx="7"    cy="12.5" r="1.5" fill="currentColor" />
      <circle cx="12.5" cy="12.5" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function Preview({ children, code, language = 'tsx', center = true }: PreviewProps) {
  const [tab, setTab]         = useState<'preview' | 'code'>('preview');
  const [dotGrid, setDotGrid] = useState(false);

  return (
    <div className="rounded-lg border border-border overflow-hidden mb-8 bg-card">

      {/* Tab bar — only when there's code to show */}
      {code && (
        <div className="flex items-center border-b border-border px-4 bg-surface">
          {(['preview', 'code'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={[
                'px-1 py-3 mr-4 text-sm font-medium capitalize transition-colors border-b-2 -mb-px',
                tab === t
                  ? 'border-foreground text-foreground'
                  : 'border-transparent text-fg-secondary hover:text-foreground',
              ].join(' ')}
            >
              {t}
            </button>
          ))}
        </div>
      )}

      {/* Preview pane */}
      {tab === 'preview' && (
        <div className="relative">
          {/* Dot-grid toggle */}
          <button
            onClick={() => setDotGrid((v) => !v)}
            title="Toggle background"
            className={[
              'absolute top-3 right-3 z-10 p-1.5 rounded transition-colors',
              dotGrid
                ? 'text-foreground bg-black/8 dark:bg-white/10'
                : 'text-fg-secondary hover:text-foreground hover:bg-black/5 dark:hover:bg-white/8',
            ].join(' ')}
          >
            <GridIcon />
          </button>

          <div
            className={[
              'p-4 sm:p-10 flex flex-wrap gap-4 min-h-[160px]',
              center ? 'items-center justify-center' : 'items-start',
            ].join(' ')}
            style={dotGrid ? {
              backgroundImage: 'radial-gradient(circle, color-mix(in srgb, currentColor 10%, transparent) 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            } : { background: 'var(--color-card)' }}
          >
            {children}
          </div>
        </div>
      )}

      {/* Code pane */}
      {code && tab === 'code' && (
        <CodeBlock code={code} language={language} className="rounded-none" />
      )}

    </div>
  );
}
