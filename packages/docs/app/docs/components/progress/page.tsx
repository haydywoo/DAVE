import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { ProgressDemos } from './demos';

export const metadata: Metadata = { title: 'Progress' };

const progressProps = [
  { name: 'value', type: 'number', default: '0', description: 'Current progress value.' },
  { name: 'max', type: 'number', default: '100', description: 'Maximum value.' },
  { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Track height.' },
  { name: 'variant', type: "'default' | 'success' | 'warning' | 'error'", default: "'default'", description: 'Indicator colour.' },
  { name: 'label', type: 'string', description: 'Text label displayed above the track.' },
  { name: 'showValue', type: 'boolean', description: 'Show the percentage value above the track.' },
  { name: 'className', type: 'string', description: 'Additional classes on the wrapper.' },
];

export default function ProgressPage() {
  return (
    <div>
      <h1 className="font-display font-extrabold text-3xl text-foreground mb-2">Progress</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        A horizontal bar that visualises task completion or loading state. Supports four variants to convey status at a glance.
      </p>

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Examples</h2>
      <ProgressDemos />

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Props</h2>
      <PropsTable props={progressProps} />
    </div>
  );
}
