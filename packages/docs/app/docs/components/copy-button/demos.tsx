'use client';

import { CopyButton } from '@haydywoo/dave-react';
import { Preview } from '@/components/Preview';

export function CopyButtonDemos() {
  return (
    <>
      <Preview
        code={`<CopyButton value="npm install @haydywoo/dave-react" />`}
      >
        <CopyButton value="npm install @haydywoo/dave-react" />
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">With label</h3>
      <Preview
        code={`<CopyButton value="npm install @haydywoo/dave-react" label="Copy" />`}
      >
        <CopyButton value="npm install @haydywoo/dave-react" label="Copy" />
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Variants</h3>
      <Preview
        code={`<CopyButton value="text" variant="ghost" />
<CopyButton value="text" variant="outline" />
<CopyButton value="text" variant="solid" />`}
      >
        <div className="flex items-center gap-3">
          <CopyButton value="text" variant="ghost" />
          <CopyButton value="text" variant="outline" />
          <CopyButton value="text" variant="solid" />
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">In a code block</h3>
      <Preview
        code={`<div className="flex items-center justify-between gap-4 rounded-[3px] border border-border bg-surface px-4 py-3">
  <code className="text-sm font-mono">npm install @haydywoo/dave-react</code>
  <CopyButton value="npm install @haydywoo/dave-react" variant="ghost" size="sm" />
</div>`}
      >
        <div className="flex items-center justify-between gap-4 rounded-[3px] border border-border bg-surface px-4 py-3 w-full max-w-sm">
          <code className="text-sm font-mono text-foreground">npm install @haydywoo/dave-react</code>
          <CopyButton value="npm install @haydywoo/dave-react" variant="ghost" size="sm" />
        </div>
      </Preview>
    </>
  );
}
