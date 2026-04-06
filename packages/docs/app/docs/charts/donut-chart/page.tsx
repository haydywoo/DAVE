import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { DonutChartDemos } from './demos';

export const metadata: Metadata = { title: 'Donut Chart' };

const props = [
  { name: 'data',           type: '{ name: string; value: number }[]', required: true,    description: 'Array of slice objects.' },
  { name: 'colors',         type: 'string[]',                          default: 'palette', description: 'Override chart palette colours for this instance.' },
  { name: 'centerLabel',    type: 'ReactNode',                         default: '—',       description: 'Content rendered in the centre of the donut hole.' },
  { name: 'valueFormatter', type: '(value: number) => string',         default: '—',       description: 'Format values in the tooltip.' },
  { name: 'showLegend',     type: 'boolean',                           default: 'true',    description: 'Show the slice legend below the chart.' },
  { name: 'innerRadius',    type: 'string | number',                   default: "'60%'",   description: 'Inner radius of the donut ring.' },
  { name: 'outerRadius',    type: 'string | number',                   default: "'80%'",   description: 'Outer radius of the donut ring.' },
  { name: 'height',         type: 'number',                            default: '300',     description: 'Fixed height of the chart in px.' },
  { name: 'className',      type: 'string',                            default: '—',       description: 'Extra class on the outer container.' },
];

export default function DonutChartPage() {
  return (
    <div>
      <h1 className="font-display font-extrabold text-3xl text-foreground mb-2">Donut Chart</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        Part-to-whole proportions with an optional centre label. Accepts any React node as the centre content — use it for a total, a metric, or a status indicator.
      </p>

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Examples</h2>
      <DonutChartDemos />

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Props</h2>
      <PropsTable props={props} />
    </div>
  );
}
