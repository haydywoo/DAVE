'use client';

import { FileAttachment } from '@dave/react';
import { Preview } from '@/components/Preview';

export function FileAttachmentDemos() {
  return (
    <>
      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">File types</h3>
      <Preview
        code={`<FileAttachment name="report.pdf" type="application/pdf" size={204800} onRemove={() => {}} />
<FileAttachment name="data.json" type="application/json" size={8192} onRemove={() => {}} />
<FileAttachment name="index.ts" type="text/typescript" size={3120} onRemove={() => {}} />
<FileAttachment name="archive.zip" type="application/zip" size={1048576} onRemove={() => {}} />`}
      >
        <div className="flex flex-wrap gap-2">
          <FileAttachment name="report.pdf" type="application/pdf" size={204800} onRemove={() => {}} />
          <FileAttachment name="data.json" type="application/json" size={8192} onRemove={() => {}} />
          <FileAttachment name="index.ts" type="text/typescript" size={3120} onRemove={() => {}} />
          <FileAttachment name="archive.zip" type="application/zip" size={1048576} onRemove={() => {}} />
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Without remove button</h3>
      <Preview code={`<FileAttachment name="attachment.pdf" type="application/pdf" size={51200} />`}>
        <FileAttachment name="attachment.pdf" type="application/pdf" size={51200} />
      </Preview>
    </>
  );
}
