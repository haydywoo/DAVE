'use client';

import { Button } from '@dave/react';
import { Preview } from '@/components/Preview';

const PlusIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function ButtonDemos() {
  return (
    <>
      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Variants</h3>
      <Preview
        code={`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="soft">Soft</Button>
<Button variant="link">Link</Button>`}
      >
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="soft">Soft</Button>
        <Button variant="link">Link</Button>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Inverse</h3>
      <Preview
        code={`// Use inverse on coloured or dark backgrounds where primary would clash.
<div className="bg-accent p-6 rounded-[3px] flex gap-3">
  <Button variant="inverse">Get started</Button>
  <Button variant="ghost">Learn more</Button>
</div>`}
        center={false}
      >
        <div className="w-full flex items-center gap-3 rounded-[3px] bg-accent p-6">
          <Button variant="inverse">Get started</Button>
          <Button variant="ghost" className="text-accent-on hover:bg-white/10 hover:text-accent-on">Learn more</Button>
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Sizes</h3>
      <Preview
        code={`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="xl">X-Large</Button>`}
      >
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
        <Button size="xl">X-Large</Button>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">With icons</h3>
      <Preview
        code={`<Button variant="primary" leftIcon={<PlusIcon />}>New item</Button>
<Button variant="secondary" rightIcon={<ArrowIcon />}>Continue</Button>
<Button variant="soft" leftIcon={<PlusIcon />}>New item</Button>`}
      >
        <Button variant="primary" leftIcon={<PlusIcon />}>New item</Button>
        <Button variant="secondary" rightIcon={<ArrowIcon />}>Continue</Button>
        <Button variant="soft" leftIcon={<PlusIcon />}>New item</Button>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Loading</h3>
      <Preview
        code={`<Button isLoading>Saving…</Button>
<Button variant="secondary" isLoading>Loading</Button>`}
      >
        <Button isLoading>Saving…</Button>
        <Button variant="secondary" isLoading>Loading</Button>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Icon only</h3>
      <Preview
        code={`<Button icon={<PlusIcon />} aria-label="Add item" />
<Button variant="secondary" icon={<PlusIcon />} aria-label="Add item" />
<Button variant="ghost" icon={<PlusIcon />} aria-label="Add item" />`}
      >
        <Button icon={<PlusIcon />} aria-label="Add item" size="sm" />
        <Button icon={<PlusIcon />} aria-label="Add item" />
        <Button icon={<PlusIcon />} aria-label="Add item" size="lg" />
        <Button variant="secondary" icon={<PlusIcon />} aria-label="Add item" />
        <Button variant="ghost" icon={<PlusIcon />} aria-label="Add item" />
        <Button variant="soft" icon={<PlusIcon />} aria-label="Add item" />
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Disabled</h3>
      <Preview
        code={`<Button disabled>Primary</Button>
<Button variant="secondary" disabled>Secondary</Button>
<Button variant="soft" disabled>Soft</Button>`}
      >
        <Button disabled>Primary</Button>
        <Button variant="secondary" disabled>Secondary</Button>
        <Button variant="soft" disabled>Soft</Button>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">As link</h3>
      <Preview
        code={`// Pass asChild and nest an <a> (or Next.js Link) to render a
// fully accessible link that looks like a button.
<Button asChild variant="primary">
  <a href="/docs/getting-started">Get started</a>
</Button>
<Button asChild variant="secondary">
  <a href="/docs/getting-started">Get started</a>
</Button>`}
      >
        <Button asChild variant="primary">
          <a href="#">Get started</a>
        </Button>
        <Button asChild variant="secondary">
          <a href="#">Documentation</a>
        </Button>
      </Preview>
    </>
  );
}
