import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { LineChartDemos } from './demos';

export const metadata: Metadata = { title: 'Line Chart' };

const props = [
  { name: 'data',           type: 'Record<string, string | number>[]', required: true,   description: 'Array of data objects, one per x-axis point.' },
  { name: 'index',          type: 'string',                            required: true,   description: 'Key used as the x-axis label.' },
  { name: 'categories',     type: 'string[]',                          required: true,   description: 'Keys to render as line series.' },
  { name: 'colors',         type: 'string[]',                          default: 'palette', description: 'Override chart palette colours for this instance.' },
  { name: 'curveType',      type: "'linear' | 'monotone' | 'step'",   default: "'monotone'", description: 'Interpolation style between data points.' },
  { name: 'showDots',       type: 'boolean',                           default: 'false', description: 'Show a dot at each data point.' },
  { name: 'valueFormatter', type: '(value: number) => string',         default: '—',     description: 'Format values on the y-axis and in the tooltip.' },
  { name: 'showLegend',     type: 'boolean',                           default: 'auto',  description: 'Show series legend. Auto-shown when categories.length > 1.' },
  { name: 'showGrid',       type: 'boolean',                           default: 'true',  description: 'Show a horizontal background grid.' },
  { name: 'height',         type: 'number',                            default: '300',   description: 'Fixed height of the chart in px.' },
  { name: 'className',      type: 'string',                            default: '—',     description: 'Extra class on the outer container.' },
];

export default function LineChartPage() {
  return (
    <div>
      <h1 className="font-display font-extrabold text-3xl text-foreground mb-2">Line Chart</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        Continuous trends over time with multiple series support. Supports smooth, linear, and stepped interpolation.
      </p>

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Examples</h2>
      <LineChartDemos />

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Props</h2>
      <PropsTable props={props} />
    </div>
  );
}
