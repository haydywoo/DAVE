import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { RatingDemos } from './demos';

export const metadata: Metadata = { title: 'Rating' };

const props = [
  { name: 'value',        type: 'number',                     description: 'Controlled value (1–max). 0 means no selection.' },
  { name: 'defaultValue', type: 'number',                     default: '0',      description: 'Initial value for uncontrolled usage.' },
  { name: 'max',          type: 'number',                     default: '5',      description: 'Number of stars.' },
  { name: 'size',         type: "'sm' | 'md' | 'lg'",         default: "'md'",   description: 'Star dimensions.' },
  { name: 'readOnly',     type: 'boolean',                    default: 'false',  description: 'Display-only — no hover or click interaction.' },
  { name: 'disabled',     type: 'boolean',                    default: 'false',  description: 'Muted and non-interactive.' },
  { name: 'onChange',     type: '(value: number) => void',                       description: 'Called when a star is clicked. Clicking the active star passes 0 (deselect).' },
  { name: 'label',        type: 'string',                     default: "'Rating'", description: 'Accessible label for the group.' },
  { name: 'className',    type: 'string',                                         description: 'Extra class on the outer wrapper.' },
];

export default function RatingPage() {
  return (
    <div>
      <h1 className="font-display font-extrabold text-3xl text-foreground mb-2">Rating</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        Star rating input for reviews, feedback, and scoring. Supports hover preview, controlled and uncontrolled modes, read-only display, and custom star counts.
      </p>

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Examples</h2>
      <RatingDemos />

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Props</h2>
      <PropsTable props={props} />
    </div>
  );
}
