'use client';

import { useState } from 'react';
import { Dropzone } from '@dave/react';
import { Preview } from '@/components/Preview';

export function DropzoneDemos() {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <>
      <Preview
        center={false}
        code={`<Dropzone
  onFiles={(files) => console.log(files)}
  multiple
/>`}
      >
        <div className="w-full max-w-md space-y-3">
          <Dropzone onFiles={(f) => setFiles((p) => [...p, ...f])} multiple />
          {files.length > 0 && (
            <ul className="text-sm text-fg-secondary space-y-1">
              {files.map((f, i) => (
                <li key={i} className="flex justify-between">
                  <span>{f.name}</span>
                  <span>{(f.size / 1024).toFixed(1)} KB</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Accept specific types</h3>
      <Preview
        center={false}
        code={`<Dropzone
  onFiles={setFiles}
  accept="image/*"
  maxSize={2 * 1024 * 1024}
  label="Profile photo"
  hint="PNG, JPG or GIF · Max 2 MB"
/>`}
      >
        <div className="w-full max-w-md">
          <Dropzone
            onFiles={() => {}}
            accept="image/*"
            maxSize={2 * 1024 * 1024}
            label="Profile photo"
            hint="PNG, JPG or GIF · Max 2 MB"
          />
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Error state</h3>
      <Preview
        center={false}
        code={`<Dropzone
  onFiles={setFiles}
  error
  hint="File type not supported. Please upload a PDF."
/>`}
      >
        <div className="w-full max-w-md">
          <Dropzone
            onFiles={() => {}}
            error
            hint="File type not supported. Please upload a PDF."
          />
        </div>
      </Preview>
    </>
  );
}
