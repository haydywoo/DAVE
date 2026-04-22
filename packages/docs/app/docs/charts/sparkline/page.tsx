import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { SparklineDemos } from './demos';

export const metadata: Metadata = { title: 'Sparkline' };

const props = [
  { name: 'data',           type: 'number[] | { value: number }[]',  required: true,    description: 'Values to plot. Accepts a plain number array or objects with a value key.' },
  { name: 'type',           type: "'line' | 'bar'",                  default: "'line'", description: 'Line or bar variant.' },
  { name: 'color',          type: 'string',                          default: 'chart-1', description: 'Stroke/fill colour. Accepts any CSS colour string.' },
  { name: 'curveType',      type: "'linear' | 'monotone' | 'step'",  default: "'monotone'", description: 'Interpolation style (line variant only).' },
  { name: 'referenceLine',  type: 'number',                          default: '—',       description: 'Draw a dashed horizontal reference line at this value.' },
  { name: 'valueFormatter', type: '(value: number) => string',       default: '—',       description: 'Format the value shown in the hover tooltip.' },
  { name: 'height',         type: 'number',                          default: '48',      description: 'Height in px.' },
  { name: 'width',          type: 'number | string',                 default: "'100%'",  description: 'Width in px or CSS string.' },
  { name: 'className',      type: 'string',                          default: '—',       description: 'Extra class on the outer container.' },
];

export default function SparklinePage() {
  return (
    <div>
      <h1 className="font-display font-semibold text-4xl text-foreground mb-2">Sparkline</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        Compact inline chart for embedding trends inside stat cards, table cells, and dashboards. No axes, no labels — just the shape of the data.
      </p>

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Examples</h2>
      <SparklineDemos />

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Props</h2>
      <PropsTable props={props} />
    </div>
  );
}
