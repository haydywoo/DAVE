'use client';

import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@dave/react';
import { Preview } from '@/components/Preview';

const faqs = [
  { q: 'Is it free?', a: 'Yes, DAVE is open source and free to use in personal and commercial projects.' },
  { q: 'Which frameworks are supported?', a: 'Currently React with Tailwind CSS. Vue and other framework support is planned.' },
  { q: 'Can I customise the theme?', a: 'Yes — all colours and spacing values are CSS custom properties you can override per-project.' },
];

export function CollapsibleDemos() {
  return (
    <>
      <Preview
        center={false}
        code={`<Collapsible>
  <CollapsibleTrigger>What is DAVE?</CollapsibleTrigger>
  <CollapsibleContent>
    DAVE is a design system built with React and Tailwind CSS.
  </CollapsibleContent>
</Collapsible>`}
      >
        <div className="w-full max-w-md">
          <Collapsible className="border border-border rounded-[3px] px-4">
            <CollapsibleTrigger>What is DAVE?</CollapsibleTrigger>
            <CollapsibleContent>
              DAVE is a design system built with React and Tailwind CSS, providing a consistent set of components for building modern interfaces.
            </CollapsibleContent>
          </Collapsible>
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">FAQ list</h3>
      <Preview
        center={false}
        code={`<div className="border border-border rounded-[3px] divide-y divide-border">
  {faqs.map(({ q, a }) => (
    <Collapsible key={q} className="px-4">
      <CollapsibleTrigger>{q}</CollapsibleTrigger>
      <CollapsibleContent>{a}</CollapsibleContent>
    </Collapsible>
  ))}
</div>`}
      >
        <div className="w-full max-w-md border border-border rounded-[3px] divide-y divide-border">
          {faqs.map(({ q, a }) => (
            <Collapsible key={q} className="px-4">
              <CollapsibleTrigger>{q}</CollapsibleTrigger>
              <CollapsibleContent>{a}</CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Default open</h3>
      <Preview
        center={false}
        code={`<Collapsible defaultOpen>
  <CollapsibleTrigger>Advanced settings</CollapsibleTrigger>
  <CollapsibleContent>…</CollapsibleContent>
</Collapsible>`}
      >
        <div className="w-full max-w-md">
          <Collapsible defaultOpen className="border border-border rounded-[3px] px-4">
            <CollapsibleTrigger>Advanced settings</CollapsibleTrigger>
            <CollapsibleContent>
              These settings are expanded by default because they are commonly needed.
            </CollapsibleContent>
          </Collapsible>
        </div>
      </Preview>
    </>
  );
}
