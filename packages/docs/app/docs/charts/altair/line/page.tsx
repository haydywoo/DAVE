'use client';

import type { VisualizationSpec } from 'vega-embed';
import { useDaveTokens, VegaChart } from '@/components/VegaChart';
import { PlotPage } from '@/components/PlotPage';

type Series = 'Components' | 'Charts' | 'AI';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
const raw: Record<Series, number[]> = {
  Components: [12, 18, 24, 31, 40, 52],
  Charts:     [0,  2,  4,  6,  7,  9 ],
  AI:         [0,  0,  3,  7,  11, 15],
};

const data = (Object.keys(raw) as Series[]).flatMap(name =>
  months.map((month, i) => ({ month, name, value: raw[name][i] })),
);

function Code({ children }: { children: string }) {
  return <code className="font-code text-xs bg-surface px-1 py-0.5 rounded-[3px] border border-border">{children}</code>;
}

function LineChart() {
  const t = useDaveTokens();
  if (!t) return <div className="h-[280px]" />;

  const colourRange = [t.accent, t.success, t.warning];

  const spec: VisualizationSpec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    width:  'container',
    height: 260,
    data:   { values: data },
    encoding: {
      x: {
        field: 'month', type: 'ordinal', sort: months,
        axis: { title: null, domain: false, ticks: false, labelColor: t.fgSecondary, labelPadding: 6 },
      },
      y: {
        field: 'value', type: 'quantitative',
        axis: { title: 'Count', grid: true, gridDash: [2, 3], gridColor: t.border, domain: false, ticks: false, labelColor: t.fgSecondary, titleColor: t.fgSecondary },
      },
      color: {
        field: 'name', type: 'nominal',
        scale: { domain: ['Components', 'Charts', 'AI'], range: colourRange },
        legend: null,
      },
    },
    layer: [
      { mark: { type: 'line', strokeWidth: 2 } },
      { mark: { type: 'point', filled: true, size: 60 } },
      {
        transform: [{ filter: 'datum.month == "Jun"' }],
        mark: { type: 'text', dx: 8, align: 'left', fontSize: 11 },
        encoding: { text: { field: 'name', type: 'nominal' } },
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

export default function AltairLinePage() {
  return (
    <PlotPage
      title="Altair — Line Chart"
      description={<>Multi-series line chart with point markers and direct end-of-line labels — no separate legend element. Each series uses a status colour token.</>}
      notes={[
        <>The chart is one <Code>VisualizationSpec</Code> with three layered marks: a <Code>line</Code>, a <Code>point</Code>, and a filtered <Code>text</Code> that draws the series name only on the last data point.</>,
        <><Code>color.scale.range</Code> takes resolved DAVE token values, set once per render. Theme toggling re-reads the tokens automatically.</>,
        <>Vega-Lite&rsquo;s <Code>transform.filter</Code> with a JavaScript-style expression is how a single dataset feeds multiple marks at different scopes.</>,
      ]}
    >
      <LineChart />
    </PlotPage>
  );
}
