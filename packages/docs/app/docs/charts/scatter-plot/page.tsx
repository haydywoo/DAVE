import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { ScatterPlotDemos } from './demos';

export const metadata: Metadata = { title: 'Scatter Plot' };

const props = [
  { name: 'series',       type: 'ScatterSeries[]',               required: true,    description: 'One or more named data series. Each series has a name and data array of { x, y, label? } objects.' },
  { name: 'colors',       type: 'string[]',                      default: 'palette', description: 'Override chart palette colours.' },
  { name: 'xLabel',       type: 'string',                        default: '—',       description: 'Label for the x-axis.' },
  { name: 'yLabel',       type: 'string',                        default: '—',       description: 'Label for the y-axis.' },
  { name: 'xFormatter',   type: '(value: number) => string',     default: '—',       description: 'Format x-axis tick values and tooltip.' },
  { name: 'yFormatter',   type: '(value: number) => string',     default: '—',       description: 'Format y-axis tick values and tooltip.' },
  { name: 'dotRadius',    type: 'number',                        default: '5',       description: 'Radius of each data point dot in px.' },
  { name: 'showLegend',   type: 'boolean',                       default: 'auto',    description: 'Show series legend. Auto-shown when series.length > 1.' },
  { name: 'showGrid',     type: 'boolean',                       default: 'true',    description: 'Show a background grid.' },
  { name: 'height',       type: 'number',                        default: '300',     description: 'Fixed height of the chart in px.' },
  { name: 'className',    type: 'string',                        default: '—',       description: 'Extra class on the outer container.' },
];

const seriesProps = [
  { name: 'name', type: 'string',                              required: true, description: 'Series name shown in the legend and tooltip.' },
  { name: 'data', type: '{ x: number; y: number; label?: string }[]', required: true, description: 'Data points. label overrides the series name in the tooltip for that point.' },
];

export default function ScatterPlotPage() {
  return (
    <div>
      <h1 className="font-display font-extrabold text-3xl text-foreground mb-2">Scatter Plot</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        Two-dimensional correlation chart. Each point has an x and y value, with an optional per-point label shown in the tooltip.
      </p>

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Examples</h2>
      <ScatterPlotDemos />

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Props</h2>
      <PropsTable props={props} />

      <h2 className="font-display font-extrabold text-xl text-foreground mt-8 mb-4">ScatterSeries</h2>
      <PropsTable props={seriesProps} />
    </div>
  );
}
