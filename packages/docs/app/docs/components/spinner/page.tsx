import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { SpinnerDemos } from './demos';

export const metadata: Metadata = { title: 'Spinner' };

const spinnerProps = [
  { name: 'size', type: "'xs' | 'sm' | 'md' | 'lg'", default: "'md'", description: 'Controls the diameter and border width.' },
  { name: 'label', type: 'string', default: "'Loading…'", description: 'Accessible label read by screen readers.' },
  { name: 'className', type: 'string', description: 'Additional classes.' },
];

export default function SpinnerPage() {
  return (
    <div>
      <h1 className="font-display font-extrabold text-3xl text-foreground mb-2">Spinner</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        An animated ring that signals an indeterminate loading state. Use inline for buttons and forms, or centred for full-area loading states.
      </p>

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Examples</h2>
      <SpinnerDemos />

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Props</h2>
      <PropsTable props={spinnerProps} />
    </div>
  );
}
