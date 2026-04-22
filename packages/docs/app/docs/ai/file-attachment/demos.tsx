'use client';

import { FileAttachment } from '@haydywoo/dave-react';
import { Preview } from '@/components/Preview';

export function FileAttachmentDemos() {
  return (
    <>
      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">File types</h3>
      <Preview
        code={`<FileAttachment name="report.pdf" type="application/pdf" size={204800} onRemove={() => {}} />
<FileAttachment name="photo.jpg" type="image/jpeg" size={512000} onRemove={() => {}} />
<FileAttachment name="data.csv" type="text/csv" size={8192} onRemove={() => {}} />
<FileAttachment name="index.ts" type="text/typescript" size={3120} onRemove={() => {}} />
<FileAttachment name="archive.zip" type="application/zip" size={1048576} onRemove={() => {}} />
<FileAttachment name="presentation.pptx" type="application/vnd.ms-powerpoint" size={2097152} onRemove={() => {}} />
<FileAttachment name="clip.mp4" type="video/mp4" size={10485760} onRemove={() => {}} />
<FileAttachment name="track.mp3" type="audio/mpeg" size={5242880} onRemove={() => {}} />`}
      >
        <div className="flex flex-wrap gap-2">
          <FileAttachment name="report.pdf" type="application/pdf" size={204800} onRemove={() => {}} />
          <FileAttachment name="photo.jpg" type="image/jpeg" size={512000} onRemove={() => {}} />
          <FileAttachment name="data.csv" type="text/csv" size={8192} onRemove={() => {}} />
          <FileAttachment name="index.ts" type="text/typescript" size={3120} onRemove={() => {}} />
          <FileAttachment name="archive.zip" type="application/zip" size={1048576} onRemove={() => {}} />
          <FileAttachment name="presentation.pptx" type="application/vnd.ms-powerpoint" size={2097152} onRemove={() => {}} />
          <FileAttachment name="clip.mp4" type="video/mp4" size={10485760} onRemove={() => {}} />
          <FileAttachment name="track.mp3" type="audio/mpeg" size={5242880} onRemove={() => {}} />
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Compact</h3>
      <Preview
        code={`<FileAttachment compact name="report.pdf" type="application/pdf" onRemove={() => {}} />
<FileAttachment compact name="photo.jpg" type="image/jpeg" onRemove={() => {}} />
<FileAttachment compact name="data.csv" type="text/csv" onRemove={() => {}} />
<FileAttachment compact name="archive.zip" type="application/zip" onRemove={() => {}} />`}
      >
        <div className="flex flex-wrap gap-2">
          <FileAttachment compact name="report.pdf" type="application/pdf" onRemove={() => {}} />
          <FileAttachment compact name="photo.jpg" type="image/jpeg" onRemove={() => {}} />
          <FileAttachment compact name="data.csv" type="text/csv" onRemove={() => {}} />
          <FileAttachment compact name="archive.zip" type="application/zip" onRemove={() => {}} />
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Without remove button</h3>
      <Preview code={`<FileAttachment name="attachment.pdf" type="application/pdf" size={51200} />`}>
        <FileAttachment name="attachment.pdf" type="application/pdf" size={51200} />
      </Preview>
    </>
  );
}
