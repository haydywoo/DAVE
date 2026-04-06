import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { RadarChartDemos } from './demos';

export const metadata: Metadata = { title: 'Radar Chart' };

const props = [
  { name: 'data',           type: 'Record<string, string | number>[]', required: true,    description: 'Array of objects — one per spoke. Must include the index key and one key per category.' },
  { name: 'index',          type: 'string',                            required: true,    description: 'Key used as the spoke label.' },
  { name: 'categories',     type: 'string[]',                          required: true,    description: 'Keys to render as radar series.' },
  { name: 'colors',         type: 'string[]',                          default: 'palette', description: 'Override chart palette colours.' },
  { name: 'fillOpacity',    type: 'number',                            default: '0.15',   description: 'Opacity of the filled polygon (0–1).' },
  { name: 'gridType',       type: "'polygon' | 'circle'",              default: "'polygon'", description: 'Shape of the background grid lines.' },
  { name: 'valueFormatter', type: '(value: number) => string',         default: '—',      description: 'Format values in the tooltip.' },
  { name: 'showLegend',     type: 'boolean',                           default: 'auto',   description: 'Show series legend. Auto-shown when categories.length > 1.' },
  { name: 'height',         type: 'number',                            default: '320',    description: 'Fixed height of the chart in px.' },
  { name: 'className',      type: 'string',                            default: '—',      description: 'Extra class on the outer container.' },
];

export default function RadarChartPage() {
  return (
    <div>
      <h1 className="font-display font-extrabold text-3xl text-foreground mb-2">Radar Chart</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        Multi-dimensional comparison chart. Each spoke represents a dimension; the filled polygon shows relative values across all dimensions. Ideal for scoring, capability mapping, and profile comparisons.
      </p>

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Examples</h2>
      <RadarChartDemos />

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Props</h2>
      <PropsTable props={props} />
    </div>
  );
}
