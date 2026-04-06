import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { ComboChartDemos } from './demos';

export const metadata: Metadata = { title: 'Combo Chart' };

const props = [
  { name: 'data',               type: 'Record<string, string | number>[]', required: true,    description: 'Array of data objects, one per x-axis point.' },
  { name: 'index',              type: 'string',                            required: true,    description: 'Key used as the x-axis label.' },
  { name: 'bars',               type: 'string[]',                          required: true,    description: 'Keys to render as bar series.' },
  { name: 'lines',              type: 'string[]',                          required: true,    description: 'Keys to render as line series.' },
  { name: 'colors',             type: 'string[]',                          default: 'palette', description: 'Override chart palette colours. Bars are coloured first, then lines.' },
  { name: 'dualAxis',           type: 'boolean',                           default: 'false',  description: 'Plot line series against a second y-axis on the right. Use when bars and lines have very different scales.' },
  { name: 'valueFormatter',     type: '(value: number) => string',         default: '—',      description: 'Format values on the primary (left) y-axis and bar tooltips.' },
  { name: 'secondaryFormatter', type: '(value: number) => string',         default: '—',      description: 'Format values on the secondary (right) y-axis and line tooltips. Falls back to valueFormatter.' },
  { name: 'curveType',          type: "'linear' | 'monotone' | 'step'",   default: "'monotone'", description: 'Interpolation style for line series.' },
  { name: 'showLegend',         type: 'boolean',                           default: 'true',   description: 'Show the series legend.' },
  { name: 'showGrid',           type: 'boolean',                           default: 'true',   description: 'Show a horizontal background grid.' },
  { name: 'height',             type: 'number',                            default: '300',    description: 'Fixed height of the chart in px.' },
  { name: 'className',          type: 'string',                            default: '—',      description: 'Extra class on the outer container.' },
];

export default function ComboChartPage() {
  return (
    <div>
      <h1 className="font-display font-extrabold text-3xl text-foreground mb-2">Combo Chart</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        Bars and lines on the same chart. Common for showing volume alongside a rate — revenue bars with a margin line, sessions with a conversion rate. Use <code className="font-code text-xs bg-surface px-1 py-0.5 rounded">dualAxis</code> when the two scales are very different.
      </p>

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Examples</h2>
      <ComboChartDemos />

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Props</h2>
      <PropsTable props={props} />
    </div>
  );
}
