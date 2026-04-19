'use client';

import { useState } from 'react';

export function Disclaimer({ children }: { children: React.ReactNode }) {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;
  return (
    <div className="relative rounded-[3px] border border-border bg-surface px-5 py-4 pr-10 text-sm text-fg-secondary leading-relaxed mt-6 mb-8">
      {children}
      <button
        onClick={() => setDismissed(true)}
        aria-label="Dismiss"
        className="absolute top-3 right-3 p-1 rounded-[3px] text-fg-disabled hover:text-fg-secondary hover:bg-border transition-colors"
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}
