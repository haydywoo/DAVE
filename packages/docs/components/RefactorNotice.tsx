'use client';

import { useState } from 'react';
import { Alert } from '@haydywoo/dave-react';

export function RefactorNotice() {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;
  return (
    <div className="my-6">
      <Alert
        variant="warning"
        title="DAVE is undergoing a Next.js refactor"
        onDismiss={() => setDismissed(true)}
      >
        The GitHub repository is currently unavailable. For now, please use this
        site as a visual reference — install instructions below will be live
        again once the refactor lands.
      </Alert>
    </div>
  );
}
