import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { TextareaDemos } from './demos';

export const metadata: Metadata = { title: 'Textarea' };

const props = [
  { name: 'label', type: 'string', description: 'Label rendered above the textarea.' },
  { name: 'hint', type: 'string', description: 'Helper text below. Turns error colour when error is true.' },
  { name: 'error', type: 'boolean', description: 'Error border and hint colour.' },
  { name: 'disabled', type: 'boolean', description: 'Disables input and dims the field.' },
];

export default function TextareaPage() {
  return (
    <div>
      <h1 className="font-display font-extrabold text-3xl text-foreground mb-2">Textarea</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        Multi-line text input. Vertically resizable by default. Matches Input in API and visual style.
      </p>

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Examples</h2>
      <TextareaDemos />

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Props</h2>
      <PropsTable props={props} />
    </div>
  );
}
