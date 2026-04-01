import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { StatDemos } from './demos';

export const metadata: Metadata = { title: 'Stat' };

const props = [
  { name: 'label', type: 'string', required: true, description: 'Metric label shown above the value.' },
  { name: 'value', type: 'ReactNode', required: true, description: 'The primary metric value.' },
  { name: 'change', type: 'number', description: 'Percentage change. Positive renders green (up), negative renders red (down).' },
  { name: 'changeLabel', type: 'string', description: 'Context for the change, e.g. "vs last month".' },
  { name: 'icon', type: 'ReactNode', description: 'Icon displayed top-right.' },
  { name: 'className', type: 'string', description: 'Additional classes.' },
];

export default function StatPage() {
  return (
    <div>
      <h1 className="font-display font-extrabold text-3xl text-foreground mb-2">Stat</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        Metric card displaying a key number with an optional trend indicator. Designed to be used in grids on dashboards and overview pages.
      </p>

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Examples</h2>
      <StatDemos />

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Props</h2>
      <PropsTable props={props} />
    </div>
  );
}
