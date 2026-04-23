'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@haydywoo/dave-react';

type Consent = 'accepted' | 'rejected';
const STORAGE_KEY = 'dave-analytics-consent';

export function ConsentGate() {
  const [consent, setConsent] = useState<Consent | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'accepted' || stored === 'rejected') setConsent(stored);
  }, []);

  function choose(value: Consent) {
    localStorage.setItem(STORAGE_KEY, value);
    setConsent(value);
  }

  if (!mounted) return null;

  return (
    <>
      {consent === 'accepted' && (
        <Script id="ms-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "we8wuhg5ue");`}
        </Script>
      )}

      {consent === null && (
        <div
          role="region"
          aria-label="Analytics consent"
          className="fixed bottom-4 left-4 right-4 sm:right-auto sm:max-w-sm z-50 rounded-[6px] border border-border bg-raised shadow-raised p-3 flex items-center gap-3"
        >
          <p className="text-xs text-fg-secondary flex-1">
            Allow Microsoft Clarity analytics?{' '}
            <Link href="/docs/legal" className="prose-link">Details</Link>
          </p>
          <div className="flex gap-1 shrink-0">
            <Button variant="ghost" size="sm" onClick={() => choose('rejected')}>
              No
            </Button>
            <Button variant="primary" size="sm" onClick={() => choose('accepted')}>
              OK
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
