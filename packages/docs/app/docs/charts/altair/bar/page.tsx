'use client';

import type { VisualizationSpec } from 'vega-embed';
import { useDaveTokens, VegaChart } from '@/components/VegaChart';
import { PlotPage } from '@/components/PlotPage';

const data = [
  { category: 'Components', count: 52 },
  { category: 'Charts',     count: 9  },
  { category: 'AI',         count: 15 },
  { category: 'Tokens',     count: 34 },
  { category: 'Utilities',  count: 8  },
];

function Code({ children }: { children: string }) {
  return <code className="font-code text-xs bg-surface px-1 py-0.5 rounded-[3px] border border-border">{children}</code>;
}

function BarChart() {
  const t = useDaveTokens();
  if (!t) return <div className="h-[260px]" />;

  const spec: VisualizationSpec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    width:  'container',
    height: 240,
    data:   { values: data },
    mark:   { type: 'bar', cornerRadiusTopRight: 3, cornerRadiusBottomRight: 3, color: t.accent },
    encoding: {
      x: {
        field: 'count', type: 'quantitative',
        axis: { title: 'Count', grid: true, gridDash: [2, 3], gridColor: t.border, domain: false, tickColor: t.border, labelColor: t.fgSecondary, titleColor: t.fgSecondary },
      },
      y: {
        field: 'category', type: 'nominal', sort: '-x',
        axis: { title: null, domain: false, ticks: false, labelColor: t.fgSecondary, labelPadding: 6 },
      },
      tooltip: [
        { field: 'category', type: 'nominal',      title: 'Category' },
        { field: 'count',    type: 'quantitative', title: 'Count'    },
      ],
    },
    config: {
      background: 'transparent',
      view:       { stroke: null },
      font:       'var(--font-body)',
    },
  };

  return <VegaChart spec={spec} />;
}

export default function AltairBarPage() {
  return (
    <PlotPage
      title="Altair — Bar Chart"
      description={<>Horizontal bar chart specified in Vega-Lite. Sorted descending by count. Hover any bar for an exact tooltip.</>}
      notes={[
        <>The chart is a <Code>VisualizationSpec</Code> JSON object passed to <Code>react-vega</Code>&rsquo;s <Code>VegaLite</Code> — no imperative mounting code.</>,
        <>DAVE tokens are read via <Code>getComputedStyle</Code> on mount and re-read on theme toggle, then injected into the spec. Vega-Lite needs concrete colours, not CSS variables.</>,
        <>Hover tooltips come from the <Code>encoding.tooltip</Code> array — no separate mark, no custom DOM.</>,
      ]}
    >
      <BarChart />
    </PlotPage>
  );
}
