'use client';

import { useState } from 'react';
import { CodeBlock } from '@dave/react';

interface PreviewProps {
  children: React.ReactNode;
  code?: string;
  language?: string;
  center?: boolean;
}

export function Preview({ children, code, language = 'tsx', center = true }: PreviewProps) {
  const [tab, setTab] = useState<'preview' | 'code'>('preview');

  return (
    <div className="rounded-lg border border-border overflow-hidden mb-8 bg-card">
      {/* Tab bar */}
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
        <div
          className={[
            'p-10 bg-card flex flex-wrap gap-4 min-h-[160px]',
            center ? 'items-center justify-center' : 'items-start',
          ].join(' ')}
        >
          {children}
        </div>
      )}

      {/* Code pane */}
      {code && tab === 'code' && (
        <CodeBlock code={code} language={language} className="rounded-none" />
      )}
    </div>
  );
}
