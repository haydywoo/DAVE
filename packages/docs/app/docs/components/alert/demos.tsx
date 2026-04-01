'use client';

import { Alert } from '@dave/react';
import { Preview } from '@/components/Preview';
import { useState } from 'react';

export function AlertDemos() {
  const [dismissed, setDismissed] = useState(false);

  return (
    <>
      <Preview
        center={false}
        code={`<Alert variant="info" title="Heads up">Your trial expires in 3 days.</Alert>
<Alert variant="success" title="Payment received">Invoice #1042 has been paid.</Alert>
<Alert variant="warning" title="Storage almost full">You've used 90% of your quota.</Alert>
<Alert variant="error" title="Something went wrong">Please try again or contact support.</Alert>`}
      >
        <div className="w-full max-w-lg flex flex-col gap-3">
          <Alert variant="info" title="Heads up">Your trial expires in 3 days.</Alert>
          <Alert variant="success" title="Payment received">Invoice #1042 has been paid.</Alert>
          <Alert variant="warning" title="Storage almost full">You've used 90% of your quota.</Alert>
          <Alert variant="error" title="Something went wrong">Please try again or contact support.</Alert>
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Dismissible</h3>
      <Preview
        center={false}
        code={`<Alert variant="info" onDismiss={() => setDismissed(true)}>
  Click × to dismiss this alert.
</Alert>`}
      >
        <div className="w-full max-w-lg">
          {dismissed ? (
            <button
              className="text-xs text-fg-secondary underline"
              onClick={() => setDismissed(false)}
            >
              Reset
            </button>
          ) : (
            <Alert variant="info" onDismiss={() => setDismissed(true)}>
              Click × to dismiss this alert.
            </Alert>
          )}
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Without title</h3>
      <Preview
        center={false}
        code={`<Alert variant="warning">Your session will expire in 5 minutes.</Alert>`}
      >
        <div className="w-full max-w-lg">
          <Alert variant="warning">Your session will expire in 5 minutes.</Alert>
        </div>
      </Preview>
    </>
  );
}
