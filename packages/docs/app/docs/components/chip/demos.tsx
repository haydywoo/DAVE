'use client';

import { useState } from 'react';
import { Chip } from '@dave/react';
import { Preview } from '@/components/Preview';

export function ChipDemos() {
  const [active, setActive] = useState<string[]>(['Design']);
  const [tags, setTags] = useState(['React', 'TypeScript', 'Tailwind', 'Next.js']);

  function toggle(f: string) {
    setActive(prev => prev.includes(f) ? prev.filter(x => x !== f) : [...prev, f]);
  }

  return (
    <>
      {/* Variants */}
      <Preview code={`<Chip variant="neutral">Neutral</Chip>
<Chip variant="primary">Primary</Chip>
<Chip variant="success">Success</Chip>
<Chip variant="warning">Warning</Chip>
<Chip variant="error">Error</Chip>`}>
        <Chip variant="neutral">Neutral</Chip>
        <Chip variant="primary">Primary</Chip>
        <Chip variant="success">Success</Chip>
        <Chip variant="warning">Warning</Chip>
        <Chip variant="error">Error</Chip>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Selected</h3>
      <Preview code={`<Chip variant="primary" selected>Primary</Chip>
<Chip variant="success" selected>Success</Chip>
<Chip variant="warning" selected>Warning</Chip>
<Chip variant="error" selected>Error</Chip>`}>
        <Chip variant="primary" selected>Primary</Chip>
        <Chip variant="success" selected>Success</Chip>
        <Chip variant="warning" selected>Warning</Chip>
        <Chip variant="error" selected>Error</Chip>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Toggleable</h3>
      <Preview code={`const [active, setActive] = useState(['Design']);

{filters.map(f => (
  <Chip
    key={f}
    variant="primary"
    selected={active.includes(f)}
    onClick={() => toggle(f)}
  >
    {f}
  </Chip>
))}`}>
        {['Design', 'Engineering', 'Product', 'Marketing'].map(f => (
          <Chip
            key={f}
            variant="primary"
            selected={active.includes(f)}
            onClick={() => toggle(f)}
          >
            {f}
          </Chip>
        ))}
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Dismissible</h3>
      <Preview code={`<Chip onRemove={() => remove(tag)}>{tag}</Chip>`}>
        <div className="flex flex-wrap gap-2">
          {tags.map(t => (
            <Chip key={t} onRemove={() => setTags(prev => prev.filter(x => x !== t))}>
              {t}
            </Chip>
          ))}
          {tags.length === 0 && (
            <button className="text-xs text-accent-foreground underline" onClick={() => setTags(['React', 'TypeScript', 'Tailwind', 'Next.js'])}>
              Reset
            </button>
          )}
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">With icon</h3>
      <Preview code={`<Chip variant="success" selected icon={<CheckIcon />}>Approved</Chip>
<Chip variant="error" selected icon={<XIcon />}>Rejected</Chip>
<Chip variant="warning" selected icon={<InfoIcon />}>Pending</Chip>`}>
        <Chip variant="success" selected icon={
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
        }>Approved</Chip>
        <Chip variant="error" selected icon={
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6M9 9l6 6" /></svg>
        }>Rejected</Chip>
        <Chip variant="warning" selected icon={
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" /></svg>
        }>Pending</Chip>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Sizes</h3>
      <Preview code={`<Chip size="sm">Small</Chip>
<Chip size="md">Medium</Chip>`}>
        <Chip size="sm">Small</Chip>
        <Chip size="md">Medium</Chip>
      </Preview>
    </>
  );
}
