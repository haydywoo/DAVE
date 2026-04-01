import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { CopyButtonDemos } from './demos';

export const metadata: Metadata = { title: 'Copy Button' };

const props = [
  { name: 'value',      type: 'string',                          required: true,  description: 'Text written to the clipboard on click.' },
  { name: 'variant',    type: "'ghost' | 'outline' | 'solid'", default: "'ghost'", description: 'Visual style.' },
  { name: 'size',       type: "'sm' | 'md' | 'lg'",            default: "'md'",   description: 'Button size.' },
  { name: 'label',      type: 'string',                                            description: 'Optional text label rendered beside the icon. When set, shows "Copied" on success.' },
  { name: 'resetDelay', type: 'number',                         default: '2000',   description: 'Milliseconds before reverting from the copied state.' },
  { name: 'className',  type: 'string',                                            description: 'Additional classes.' },
];

export default function CopyButtonPage() {
  return (
    <div>
      <h1 className="font-display font-extrabold text-3xl text-foreground mb-2">Copy Button</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        Copies a value to the clipboard on click and briefly shows a checkmark confirmation. Use inside code blocks, beside token values, or anywhere text needs to be easily copied.
      </p>

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Examples</h2>
      <CopyButtonDemos />

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Props</h2>
      <PropsTable props={props} />
    </div>
  );
}
