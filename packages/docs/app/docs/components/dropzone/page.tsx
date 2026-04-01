import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { DropzoneDemos } from './demos';

export const metadata: Metadata = { title: 'Dropzone' };

const props = [
  { name: 'onFiles',   type: '(files: File[]) => void',  required: true,   description: 'Called with the accepted File array after drop or file selection.' },
  { name: 'accept',    type: 'string',                                       description: 'Accepted MIME types or extensions, e.g. "image/*,.pdf". Passed to the hidden file input.' },
  { name: 'multiple',  type: 'boolean',  default: 'false',                  description: 'Allow selecting more than one file.' },
  { name: 'maxSize',   type: 'number',                                       description: 'Maximum file size in bytes. Files exceeding this are filtered out before onFiles is called.' },
  { name: 'maxFiles',  type: 'number',                                       description: 'Maximum number of files accepted per drop/selection.' },
  { name: 'label',     type: 'string',                                       description: 'Label rendered above the drop area.' },
  { name: 'hint',      type: 'string',                                       description: 'Overrides the auto-generated hint text.' },
  { name: 'error',     type: 'boolean',  default: 'false',                  description: 'Error border and background.' },
  { name: 'disabled',  type: 'boolean',  default: 'false',                  description: 'Disables all interaction.' },
  { name: 'children',  type: 'ReactNode',                                    description: 'Custom content inside the drop area — replaces the default icon and hint.' },
  { name: 'className', type: 'string',                                       description: 'Additional classes on the wrapper.' },
];

export default function DropzonePage() {
  return (
    <div>
      <h1 className="font-display font-extrabold text-3xl text-foreground mb-2">Dropzone</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        File upload area that accepts drag-and-drop or click-to-browse. Supports file type filtering, size limits, and multiple files. The drop area highlights on drag-over.
      </p>

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Examples</h2>
      <DropzoneDemos />

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Props</h2>
      <PropsTable props={props} />
    </div>
  );
}
