'use client';

import { useState } from 'react';
import { FileInput } from '@dave/react';
import { Preview } from '@/components/Preview';

export function FileInputDemos() {
  const [files, setFiles] = useState<FileList | null>(null);

  return (
    <>
      <Preview center={false} code={`<FileInput />`}>
        <div className="w-full max-w-sm">
          <FileInput />
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Sizes</h3>
      <Preview center={false}
        code={`<FileInput size="sm" />
<FileInput size="md" />
<FileInput size="lg" />
<FileInput size="xl" />`}
      >
        <div className="flex flex-col gap-3 w-full max-w-sm">
          <FileInput size="sm" />
          <FileInput size="md" />
          <FileInput size="lg" />
          <FileInput size="xl" />
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Accept specific types</h3>
      <Preview center={false}
        code={`<FileInput accept="image/*" placeholder="No image chosen" />
<FileInput accept=".pdf,.doc,.docx" placeholder="No document chosen" />`}
      >
        <div className="flex flex-col gap-3 w-full max-w-sm">
          <FileInput accept="image/*" placeholder="No image chosen" />
          <FileInput accept=".pdf,.doc,.docx" placeholder="No document chosen" />
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Multiple files</h3>
      <Preview center={false}
        code={`<FileInput multiple placeholder="No files chosen" />`}
      >
        <div className="w-full max-w-sm">
          <FileInput multiple placeholder="No files chosen" />
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Error state</h3>
      <Preview center={false}
        code={`<FileInput error placeholder="No file chosen" />`}
      >
        <div className="w-full max-w-sm">
          <FileInput error placeholder="No file chosen" />
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Disabled</h3>
      <Preview center={false}
        code={`<FileInput disabled />`}
      >
        <div className="w-full max-w-sm">
          <FileInput disabled />
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Custom button label</h3>
      <Preview center={false}
        code={`<FileInput buttonLabel="Choose file" />`}
      >
        <div className="w-full max-w-sm">
          <FileInput buttonLabel="Choose file" />
        </div>
      </Preview>
    </>
  );
}
