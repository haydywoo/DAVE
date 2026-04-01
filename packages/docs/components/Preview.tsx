'use client';

import { useState } from 'react';

interface PreviewProps {
  children: React.ReactNode;
  code?: string;
  center?: boolean;
}

export function Preview({ children, code, center = true }: PreviewProps) {
  const [tab, setTab] = useState<'preview' | 'code'>('preview');
  const [copied, setCopied] = useState(false);

  function copy() {
    if (!code) return;
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }

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
        <div className="relative group">
          <button
            onClick={copy}
            className="absolute top-3.5 right-3.5 z-10 text-xs px-2.5 py-1.5 rounded-[3px] bg-white/10 text-white/60 hover:bg-white/20 hover:text-white transition-colors font-code opacity-0 group-hover:opacity-100"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
          <pre className="p-6 bg-[#0d1117] text-[#e6edf3] text-xs font-code overflow-x-auto leading-relaxed">
            <code>{code}</code>
          </pre>
        </div>
      )}
    </div>
  );
}
