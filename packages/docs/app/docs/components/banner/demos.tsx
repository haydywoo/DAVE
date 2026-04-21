'use client';

import { useState } from 'react';
import { Preview } from '@/components/Preview';

type BannerVariant = 'info' | 'success' | 'warning' | 'error';

const variantStyles: Record<BannerVariant, { root: string; icon: string }> = {
  info:    { root: 'bg-accent/10 border-b border-accent/30',       icon: 'text-accent'                        },
  success: { root: 'bg-success/10 border-b border-success/30',     icon: 'text-success'                       },
  warning: { root: 'bg-warning-subtle border-b border-warning-border', icon: 'text-warning-foreground' },
  error:   { root: 'bg-error/10 border-b border-error/30',         icon: 'text-error'                         },
};

const variantIcons: Record<BannerVariant, React.ReactNode> = {
  info: (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" />
    </svg>
  ),
  success: (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" />
    </svg>
  ),
  warning: (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><path d="M12 9v4M12 17h.01" />
    </svg>
  ),
  error: (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" /><path d="m15 9-6 6M9 9l6 6" />
    </svg>
  ),
};

function MockBanner({
  variant = 'info',
  message,
  action,
  dismissible,
}: {
  variant?: BannerVariant;
  message: string;
  action?: { label: string; href: string };
  dismissible?: boolean;
}) {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) {
    return (
      <div className="h-10 flex items-center justify-center">
        <button className="text-xs text-fg-secondary underline" onClick={() => setDismissed(false)}>
          Reset
        </button>
      </div>
    );
  }
  const { root, icon: iconClass } = variantStyles[variant];
  return (
    <div className={`relative h-10 flex items-center justify-center px-4 gap-2 rounded-[3px] ${root}`}>
      <span className={iconClass}>{variantIcons[variant]}</span>
      <p className="text-sm text-foreground">{message}</p>
      {action && (
        <a href={action.href} className="text-sm font-medium underline underline-offset-2 text-foreground hover:text-fg-secondary transition-colors shrink-0">
          {action.label}
        </a>
      )}
      {dismissible && (
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Dismiss banner"
          className="absolute right-3 flex items-center justify-center w-6 h-6 rounded-[3px] opacity-60 hover:opacity-100 transition-opacity"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
}

export function BannerDemos() {
  return (
    <>
      <Preview
        center={false}
        code={`<Banner variant="info"    message="A new version of DAVE is available." />
<Banner variant="success" message="The incident has been resolved. All systems operational." />
<Banner variant="warning" message="Scheduled maintenance on Friday at 2 am UTC." />
<Banner variant="error"   message="We're experiencing a service disruption. Our team is on it." />`}
      >
        <div className="w-full flex flex-col gap-2">
          <MockBanner variant="info"    message="A new version of DAVE is available." />
          <MockBanner variant="success" message="The incident has been resolved. All systems operational." />
          <MockBanner variant="warning" message="Scheduled maintenance on Friday at 2 am UTC." />
          <MockBanner variant="error"   message="We're experiencing a service disruption. Our team is on it." />
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">With action</h3>
      <Preview
        center={false}
        code={`<Banner
  variant="warning"
  message="Scheduled maintenance on Friday at 2 am UTC."
  action={{ label: 'Learn more', href: '/status' }}
/>`}
      >
        <div className="w-full">
          <MockBanner
            variant="warning"
            message="Scheduled maintenance on Friday at 2 am UTC."
            action={{ label: 'Learn more', href: '#' }}
          />
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Dismissible</h3>
      <Preview
        center={false}
        code={`const [visible, setVisible] = useState(true);

{visible && (
  <Banner
    variant="info"
    message="We've updated our privacy policy."
    action={{ label: 'Review', href: '/privacy' }}
    onDismiss={() => setVisible(false)}
  />
)}`}
      >
        <div className="w-full">
          <MockBanner
            variant="info"
            message="We've updated our privacy policy."
            action={{ label: 'Review', href: '#' }}
            dismissible
          />
        </div>
      </Preview>
    </>
  );
}
