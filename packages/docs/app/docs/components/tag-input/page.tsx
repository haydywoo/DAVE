import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { TagInputDemos } from './demos';

export const metadata: Metadata = { title: 'Tag Input' };

const props = [
  { name: 'value',        type: 'string[]',                     description: 'Controlled tag list.' },
  { name: 'defaultValue', type: 'string[]',   default: '[]',    description: 'Initial tags for uncontrolled usage.' },
  { name: 'onChange',     type: '(tags: string[]) => void',     description: 'Called when tags change.' },
  { name: 'delimiters',   type: 'string[]', default: "['Enter', ',']", description: 'Keys that confirm a new tag.' },
  { name: 'placeholder',  type: 'string',   default: "'Add tag…'",     description: 'Input placeholder when no tags are present.' },
  { name: 'max',          type: 'number',                       description: 'Maximum number of tags. Hides the input when reached.' },
  { name: 'validate',     type: '(tag: string) => boolean',     description: 'Called before adding a tag — return false to reject.' },
  { name: 'size',         type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Height and text size.' },
  { name: 'label',        type: 'string',                       description: 'Label above the input.' },
  { name: 'hint',         type: 'string',                       description: 'Helper text below.' },
  { name: 'error',        type: 'boolean',   default: 'false',  description: 'Error border and hint colour.' },
  { name: 'disabled',     type: 'boolean',   default: 'false',  description: 'Disables all interaction.' },
  { name: 'className',    type: 'string',                       description: 'Additional classes on the wrapper.' },
];

export default function TagInputPage() {
  return (
    <div>
      <h1 className="font-display font-semibold text-4xl text-foreground mb-2">Tag Input</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        Multi-value text input where each entry becomes a removable tag. Confirm tags with Enter or comma. Paste a comma-separated list to add multiple at once.
      </p>

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Examples</h2>
      <TagInputDemos />

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Props</h2>
      <PropsTable props={props} />
    </div>
  );
}
