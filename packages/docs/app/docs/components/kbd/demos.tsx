'use client';

import { Kbd } from '@haydywoo/dave-react';
import { Preview } from '@/components/Preview';

export function KbdDemos() {
  return (
    <>
      <Preview
        code={`<Kbd>⌘K</Kbd>`}
      >
        <Kbd>⌘K</Kbd>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Sizes</h3>
      <Preview
        code={`<Kbd size="sm">⌘K</Kbd>
<Kbd size="md">⌘K</Kbd>
<Kbd size="lg">⌘K</Kbd>`}
      >
        <div className="flex items-center gap-3">
          <Kbd size="sm">⌘K</Kbd>
          <Kbd size="md">⌘K</Kbd>
          <Kbd size="lg">⌘K</Kbd>
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Key combination</h3>
      <Preview
        code={`<Kbd>⌘</Kbd>
<Kbd>Shift</Kbd>
<Kbd>P</Kbd>`}
      >
        <div className="flex items-center gap-1.5">
          <Kbd>⌘</Kbd>
          <Kbd>Shift</Kbd>
          <Kbd>P</Kbd>
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Inline in text</h3>
      <Preview
        code={`<p>Press <Kbd>⌘K</Kbd> to open search, or <Kbd>Esc</Kbd> to close.</p>`}
      >
        <p className="text-sm text-foreground">
          Press <Kbd>⌘K</Kbd> to open search, or <Kbd>Esc</Kbd> to close.
        </p>
      </Preview>
    </>
  );
}
