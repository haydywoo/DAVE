import type { Metadata } from 'next';
import Link from 'next/link';
import { PropsTable } from '@/components/PropsTable';
import { FileInputDemos } from './demos';

export const metadata: Metadata = { title: 'File Input' };

const props = [
  { name: 'size',        type: "'sm' | 'md' | 'lg' | 'xl'",  default: "'md'",            description: 'Height and text size of the control.' },
  { name: 'accept',      type: 'string',                       description: 'Native file type filter, e.g. "image/*" or ".pdf,.doc".' },
  { name: 'multiple',    type: 'boolean',                      default: 'false',           description: 'Allow selecting more than one file.' },
  { name: 'disabled',    type: 'boolean',                      default: 'false',           description: 'Prevents interaction.' },
  { name: 'error',       type: 'boolean',                      default: 'false',           description: 'Applies error styling.' },
  { name: 'placeholder', type: 'string',                       default: "'No file chosen'", description: 'Text shown when no file is selected.' },
  { name: 'buttonLabel', type: 'string',                       default: "'Browse'",        description: 'Label for the trigger button.' },
  { name: 'onChange',    type: '(files: FileList | null) => void', description: 'Called when the selection changes.' },
  { name: 'className',   type: 'string',                       description: 'Extra class on the outer wrapper.' },
];

export default function FileInputPage() {
  return (
    <div>
      <h1 className="font-display font-semibold text-4xl text-foreground mb-2">File Input</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        A styled file picker that wraps the native <code className="font-code text-xs bg-surface px-1 py-0.5 rounded-[3px] border border-border">input[type=file]</code>. Shows the selected filename and triggers the OS file dialog on click. For drag-and-drop uploads, use <Link href="/docs/components/dropzone" className="prose-link">Dropzone</Link> instead.
      </p>

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Examples</h2>
      <FileInputDemos />

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Props</h2>
      <PropsTable props={props} />
    </div>
  );
}
