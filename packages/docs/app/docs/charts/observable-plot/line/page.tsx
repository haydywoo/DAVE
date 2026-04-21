'use client';

import { useEffect, useRef } from 'react';
import * as Plot from '@observablehq/plot';
import { PlotPage, plotStyle } from '@/components/PlotPage';

type Series = 'Components' | 'Charts' | 'AI';

const series: Series[] = ['Components', 'Charts', 'AI'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
const raw: Record<Series, number[]> = {
  Components: [12, 18, 24, 31, 40, 52],
  Charts:     [0,  2,  4,  6,  7,  9 ],
  AI:         [0,  0,  3,  7,  11, 15],
};

const data = series.flatMap(name =>
  months.map((month, i) => ({ month, name, value: raw[name][i] }))
);

const colours: Record<Series, string> = {
  Components: 'var(--color-accent)',
  Charts:     'var(--color-success)',
  AI:         'var(--color-warning)',
};

function Code({ children }: { children: string }) {
  return <code className="font-code text-xs bg-surface px-1 py-0.5 rounded-[3px] border border-border">{children}</code>;
}

function LineChart() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const chart = Plot.plot({
      marginLeft: 36,
      marginRight: 80,
      marginBottom: 40,
      x: { label: null },
      y: { label: 'Count', grid: true },
      color: { domain: series, range: Object.values(colours) },
      style: plotStyle,
      marks: [
        Plot.gridY({ stroke: 'var(--color-border)', strokeDasharray: '2,3' }),
        Plot.line(data, { x: 'month', y: 'value', stroke: 'name', strokeWidth: 2 }),
        Plot.dot(data, { x: 'month', y: 'value', fill: 'name', r: 3 }),
        Plot.text(data.filter(d => d.month === 'Jun'), {
          x: 'month', y: 'value', text: 'name',
          dx: 8, textAnchor: 'start',
          fill: 'name',
          fontSize: 11,
        }),
        Plot.axisX({ tickSize: 0 }),
        Plot.axisY({ tickSize: 0, dx: -4 }),
      ],
    });
    ref.current.append(chart);
    return () => chart.remove();
  }, []);

  return <div ref={ref} className="w-full overflow-x-auto" />;
}

export default function PlotLinePage() {
  return (
    <PlotPage
      title="Plot — Line Chart"
      description={<>Multi-series line chart using <Code>Plot.line</Code> + <Code>Plot.dot</Code>. Direct labels instead of a legend. Status colour tokens for each series.</>}
      notes={[
        <><Code>color.range</Code> accepts CSS variables directly — no need to resolve tokens to hex.</>,
        <>Direct labelling with <Code>Plot.text</Code> filtered to the last data point removes the need for a separate legend element.</>,
        <>Plot doesn&apos;t natively support dark mode — tokens handle it automatically since they&apos;re CSS custom properties.</>,
      ]}
    >
      <LineChart />
    </PlotPage>
  );
}
