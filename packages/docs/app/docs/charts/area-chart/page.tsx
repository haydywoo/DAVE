import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { AreaChartDemos } from './demos';

export const metadata: Metadata = { title: 'Area Chart' };

const props = [
  { name: 'data',           type: 'Record<string, string | number>[]',  required: true,    description: 'Array of data objects, one per x-axis point.' },
  { name: 'index',          type: 'string',                              required: true,    description: 'Key used as the x-axis label.' },
  { name: 'categories',     type: 'string[]',                            required: true,    description: 'Keys to render as area series.' },
  { name: 'colors',         type: 'string[]',                            default: 'palette', description: 'Override chart palette colours for this instance.' },
  { name: 'curveType',      type: "'linear' | 'monotone' | 'step'",      default: "'monotone'", description: 'Interpolation style between data points.' },
  { name: 'stack',          type: "'none' | 'stack' | 'expand'",         default: "'none'", description: 'none = overlapping areas, stack = stacked absolute, expand = stacked 100%.' },
  { name: 'fillOpacity',    type: 'number',                              default: '0.15',   description: 'Opacity of the filled area (0–1). The gradient fades to 0 at the bottom.' },
  { name: 'valueFormatter', type: '(value: number) => string',           default: '—',      description: 'Format values on the y-axis and in the tooltip.' },
  { name: 'showLegend',     type: 'boolean',                             default: 'auto',   description: 'Show series legend. Auto-shown when categories.length > 1.' },
  { name: 'showGrid',       type: 'boolean',                             default: 'true',   description: 'Show a horizontal background grid.' },
  { name: 'height',         type: 'number',                              default: '300',    description: 'Fixed height of the chart in px.' },
  { name: 'className',      type: 'string',                              default: '—',      description: 'Extra class on the outer container.' },
];

export default function AreaChartPage() {
  return (
    <div>
      <h1 className="font-display font-semibold text-4xl text-foreground mb-2">Area Chart</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        Filled area for visualising volume and cumulative data over time. Supports overlapping, stacked, and percentage stacking modes.
      </p>

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Examples</h2>
      <AreaChartDemos />

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Props</h2>
      <PropsTable props={props} />
    </div>
  );
}
