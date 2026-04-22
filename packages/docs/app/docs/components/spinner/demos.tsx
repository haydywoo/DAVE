'use client';

import { Spinner, Button, Card } from '@dave/react';
import { Preview } from '@/components/Preview';

export function SpinnerDemos() {
  return (
    <>
      <Preview code={`<Spinner />`}>
        <Spinner />
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Sizes</h3>
      <Preview code={`<Spinner size="xs" />
<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />`}>
        <div className="flex items-center gap-6">
          <Spinner size="xs" />
          <Spinner size="sm" />
          <Spinner size="md" />
          <Spinner size="lg" />
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Inline with text</h3>
      <Preview code={`<div className="flex items-center gap-2 text-sm text-fg-secondary">
  <Spinner size="sm" />
  <span>Loading data…</span>
</div>`}>
        <div className="flex items-center gap-2 text-sm text-fg-secondary">
          <Spinner size="sm" />
          <span>Loading data…</span>
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">In a loading state</h3>
      <Preview code={`<Card noPadding className="flex h-40 items-center justify-center">
  <div className="flex flex-col items-center gap-3">
    <Spinner size="lg" />
    <p className="text-sm text-fg-secondary">Loading…</p>
  </div>
</Card>`}>
        <Card noPadding className="flex h-40 w-64 items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <Spinner size="lg" />
            <p className="text-sm text-fg-secondary">Loading…</p>
          </div>
        </Card>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">In a button</h3>
      <Preview code={`<Button isLoading>Saving</Button>
<Button variant="secondary" isLoading>Processing</Button>`}>
        <div className="flex gap-3">
          <Button isLoading>Saving</Button>
          <Button variant="secondary" isLoading>Processing</Button>
        </div>
      </Preview>
    </>
  );
}
