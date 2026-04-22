'use client';

import { Divider } from '@haydywoo/dave-react';
import { Preview } from '@/components/Preview';

export function DividerDemos() {
  return (
    <>
      <Preview
        center={false}
        code={`<Divider />`}
      >
        <div className="w-full flex flex-col gap-4">
          <p className="text-sm text-foreground">Above the divider</p>
          <Divider />
          <p className="text-sm text-foreground">Below the divider</p>
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">With label</h3>
      <Preview
        center={false}
        code={`<Divider label="or continue with" />`}
      >
        <div className="w-full flex flex-col gap-4">
          <p className="text-sm text-foreground">Sign in with email</p>
          <Divider label="or continue with" />
          <p className="text-sm text-foreground">Sign in with Google</p>
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Vertical</h3>
      <Preview
        code={`<div className="flex items-center gap-4 h-8">
  <span>Docs</span>
  <Divider orientation="vertical" />
  <span>Blog</span>
  <Divider orientation="vertical" />
  <span>GitHub</span>
</div>`}
      >
        <div className="flex items-center gap-4 h-8">
          <span className="text-sm text-foreground">Docs</span>
          <Divider orientation="vertical" />
          <span className="text-sm text-foreground">Blog</span>
          <Divider orientation="vertical" />
          <span className="text-sm text-foreground">GitHub</span>
        </div>
      </Preview>
    </>
  );
}
