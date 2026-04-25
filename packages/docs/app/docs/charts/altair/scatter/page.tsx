'use client';

import type { VisualizationSpec } from 'vega-embed';
import { useDaveTokens, VegaChart } from '@/components/VegaChart';
import { PlotPage } from '@/components/PlotPage';

type Group = 'A' | 'B' | 'C';

interface DataPoint {
  x:     number;
  y:     number;
  size:  number;
  group: Group;
  label: string;
}

const data: DataPoint[] = [
  { x: 2,  y: 4,  size: 8,  group: 'A', label: 'Alert'  },
  { x: 3,  y: 7,  size: 12, group: 'A', label: 'Button' },
  { x: 5,  y: 5,  size: 6,  group: 'B', label: 'Input'  },
  { x: 7,  y: 9,  size: 14, group: 'A', label: 'Dialog' },
  { x: 4,  y: 2,  size: 5,  group: 'C', label: 'Badge'  },
  { x: 8,  y: 6,  size: 10, group: 'B', label: 'Select' },
  { x: 6,  y: 11, size: 9,  group: 'A', label: 'Toast'  },
  { x: 9,  y: 3,  size: 7,  group: 'C', label: 'Chip'   },
  { x: 2,  y: 9,  size: 11, group: 'B', label: 'Tabs'   },
  { x: 10, y: 8,  size: 13, group: 'A', label: 'Table'  },
  { x: 1,  y: 6,  size: 4,  group: 'C', label: 'Kbd'    },
  { x: 7,  y: 2,  size: 8,  group: 'B', label: 'Switch' },
];

function Code({ children }: { children: string }) {
  return <code className="font-code text-xs bg-surface px-1 py-0.5 rounded-[3px] border border-border">{children}</code>;
}

function ScatterChart() {
  const t = useDaveTokens();
  if (!t) return <div className="h-[360px]" />;

  const colourRange = [t.accent, t.success, t.warning];

  const spec: VisualizationSpec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    width:  'container',
    height: 340,
    data:   { values: data },
    encoding: {
      x: { field: 'x', type: 'quantitative', axis: { title: 'Complexity →', grid: true, gridDash: [2, 3], gridColor: t.border, domain: false, ticks: false, labelColor: t.fgSecondary, titleColor: t.fgSecondary } },
      y: { field: 'y', type: 'quantitative', axis: { title: '↑ Usage',      grid: true, gridDash: [2, 3], gridColor: t.border, domain: false, ticks: false, labelColor: t.fgSecondary, titleColor: t.fgSecondary } },
      color: {
        field: 'group', type: 'nominal',
        scale: { domain: ['A', 'B', 'C'], range: colourRange },
        legend: { title: 'Group', titleColor: t.fgSecondary, labelColor: t.fgSecondary, symbolStrokeWidth: 0 },
      },
    },
    layer: [
      {
        mark: { type: 'circle', opacity: 0.7, stroke: null },
        encoding: {
          size: { field: 'size', type: 'quantitative', scale: { range: [60, 600] }, legend: null },
          tooltip: [
            { field: 'label', type: 'nominal',      title: 'Component' },
            { field: 'group', type: 'nominal',      title: 'Group'     },
            { field: 'x',     type: 'quantitative', title: 'Complexity'},
            { field: 'y',     type: 'quantitative', title: 'Usage'     },
          ],
        },
      },
      {
        mark: { type: 'text', dy: -14, fontSize: 10 },
        encoding: { text: { field: 'label', type: 'nominal' }, color: { value: t.fgSecondary } },
      },
    ],
    config: {
      background: 'transparent',
      view:       { stroke: null },
      font:       'var(--font-body)',
    },
  };

  return <VegaChart spec={spec} />;
}

export default function AltairScatterPage() {
  return (
    <PlotPage
      title="Altair — Scatter Plot"
      description={<>Bubble scatter where size encodes component popularity, colour groups by category, and every point carries a four-field tooltip on hover.</>}
      notes={[
        <><Code>encoding.size</Code> with a custom <Code>scale.range</Code> gives a clear visual gradient between smallest and largest bubble.</>,
        <>Layered <Code>circle</Code> + <Code>text</Code> marks share the same dataset and x/y encodings — that&rsquo;s how labels track their points without duplicating data.</>,
        <>Tooltips are declarative: name the fields, give them friendlier titles, and Vega-Lite renders the panel on hover with no custom DOM.</>,
      ]}
    >
      <ScatterChart />
    </PlotPage>
  );
}
