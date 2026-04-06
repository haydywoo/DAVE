import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { FileAttachmentDemos } from './demos';

export const metadata: Metadata = { title: 'FileAttachment' };

const props = [
  { name: 'name', type: 'string', required: true, description: 'File name shown in the chip.' },
  { name: 'type', type: 'string', default: "'application/octet-stream'", description: 'MIME type — determines the icon and thumbnail behaviour.' },
  { name: 'size', type: 'number', description: 'File size in bytes — displayed as a formatted string (KB, MB).' },
  { name: 'url', type: 'string', description: 'Preview URL — renders as a thumbnail for image MIME types.' },
  { name: 'onRemove', type: '() => void', description: 'Shows a remove button and calls back when clicked.' },
];

export default function FileAttachmentPage() {
  return (
    <div>
      <h1 className="font-display font-extrabold text-3xl text-foreground mb-2">FileAttachment</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        A compact chip representing an attached file. The icon adapts to the MIME type — images show a thumbnail, PDFs and code files get type-specific icons. Pair with MessageInput&apos;s <code className="font-mono text-xs bg-surface px-1 py-0.5 rounded border border-border">attachments</code> prop for integrated file handling.
      </p>

      <FileAttachmentDemos />

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Props</h2>
      <PropsTable props={props} />
    </div>
  );
}
