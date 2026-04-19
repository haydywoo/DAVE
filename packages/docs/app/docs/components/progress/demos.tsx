'use client';

import { Progress } from '@dave/react';
import { Preview } from '@/components/Preview';

export function ProgressDemos() {
  return (
    <>
      <Preview center={false} code={`<Progress value={60} />`}>
        <div className="w-full max-w-sm">
          <Progress value={60} />
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">With label and value</h3>
      <Preview center={false} code={`<Progress value={45} label="Storage used" showValue />`}>
        <div className="w-full max-w-sm">
          <Progress value={45} label="Storage used" showValue />
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Sizes</h3>
      <Preview center={false} code={`<Progress value={60} size="sm" label="Small" />
<Progress value={60} size="md" label="Medium" />
<Progress value={60} size="lg" label="Large" />`}>
        <div className="flex flex-col gap-4 w-full max-w-sm">
          <Progress value={60} size="sm" label="Small" />
          <Progress value={60} size="md" label="Medium" />
          <Progress value={60} size="lg" label="Large" />
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Variants</h3>
      <Preview center={false} code={`<Progress value={70}  variant="default" label="Uploading…"            showValue />
<Progress value={100} variant="success" label="Complete"              showValue />
<Progress value={85}  variant="warning" label="Storage nearly full"   showValue />
<Progress value={20}  variant="error"   label="Failed — 3 errors"     showValue />`}>
        <div className="flex flex-col gap-4 w-full max-w-sm">
          <Progress value={70}  variant="default" label="Uploading…"          showValue />
          <Progress value={100} variant="success" label="Complete"            showValue />
          <Progress value={85}  variant="warning" label="Storage nearly full" showValue />
          <Progress value={20}  variant="error"   label="Failed — 3 errors"   showValue />
        </div>
      </Preview>
    </>
  );
}
