'use client';

import { SourceCard } from '@dave/react';
import { Preview } from '@/components/Preview';

export function SourceCardDemos() {
  return (
    <>
      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">With snippet and index</h3>
      <Preview
        code={`<div className="grid grid-cols-2 gap-3 max-w-lg">
  <SourceCard
    title="React — The library for web and native user interfaces"
    url="https://react.dev"
    snippet="React lets you build user interfaces out of individual pieces called components."
    index={1}
  />
  <SourceCard
    title="Tailwind CSS — Rapidly build modern websites"
    url="https://tailwindcss.com"
    snippet="A utility-first CSS framework packed with classes that can be composed to build any design."
    index={2}
  />
</div>`}
      >
        <div className="grid grid-cols-2 gap-3 max-w-lg">
          <SourceCard
            title="React — The library for web and native user interfaces"
            url="https://react.dev"
            snippet="React lets you build user interfaces out of individual pieces called components."
            index={1}
          />
          <SourceCard
            title="Tailwind CSS — Rapidly build modern websites"
            url="https://tailwindcss.com"
            snippet="A utility-first CSS framework packed with classes that can be composed to build any design."
            index={2}
          />
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Minimal</h3>
      <Preview
        code={`<SourceCard title="MDN Web Docs" url="https://developer.mozilla.org" className="max-w-xs" />`}
      >
        <SourceCard title="MDN Web Docs" url="https://developer.mozilla.org" className="max-w-xs" />
      </Preview>
    </>
  );
}
