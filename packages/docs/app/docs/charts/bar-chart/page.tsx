import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { BarChartDemos } from './demos';

export const metadata: Metadata = { title: 'Bar Chart' };

const props = [
  { name: 'data',           type: 'Record<string, string | number>[]', required: true,  description: 'Array of data objects, one per bar group.' },
  { name: 'index',          type: 'string',                            required: true,  description: 'Key used as the category axis label.' },
  { name: 'categories',     type: 'string[]',                          required: true,  description: 'Keys to render as bar series.' },
  { name: 'colors',         type: 'string[]',                          default: 'palette', description: 'Override chart palette colours for this instance.' },
  { name: 'stacked',        type: 'boolean',                           default: 'false', description: 'Stack bars instead of grouping side-by-side.' },
  { name: 'layout',         type: "'vertical' | 'horizontal'",         default: "'vertical'", description: 'Vertical = bars grow upward. Horizontal = bars grow rightward.' },
  { name: 'valueFormatter', type: '(value: number) => string',         default: '—',    description: 'Format values on the axis and in the tooltip.' },
  { name: 'showLegend',     type: 'boolean',                           default: 'auto', description: 'Show series legend. Auto-shown when categories.length > 1.' },
  { name: 'showGrid',       type: 'boolean',                           default: 'true', description: 'Show a background grid.' },
  { name: 'height',         type: 'number',                            default: '300',  description: 'Fixed height of the chart in px.' },
  { name: 'className',      type: 'string',                            default: '—',    description: 'Extra class on the outer container.' },
];

export default function BarChartPage() {
  return (
    <div>
      <h1 className="font-display font-semibold text-4xl text-foreground mb-2">Bar Chart</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        Grouped, stacked, and horizontal bars for comparing values across categories. Supports multiple series with automatic colour assignment from the chart palette.
      </p>

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Examples</h2>
      <BarChartDemos />

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Props</h2>
      <PropsTable props={props} />
    </div>
  );
}
