'use client';

import { useEffect, useRef } from 'react';
import * as Plot from '@observablehq/plot';
import { PlotPage, plotStyle } from '@/components/PlotPage';

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
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const chart = Plot.plot({
      marginLeft: 90,
      marginBottom: 40,
      x: { label: 'Count', grid: true },
      y: { label: null },
      style: plotStyle,
      marks: [
        Plot.barX(data, {
          x: 'count',
          y: 'category',
          fill: 'var(--color-accent)',
          rx: 3,
          sort: { y: '-x' },
        }),
        Plot.gridX({ stroke: 'var(--color-border)', strokeDasharray: '2,3' }),
        Plot.axisY({ tickSize: 0, dx: -6 }),
        Plot.axisX({ tickSize: 0 }),
      ],
    });
    ref.current.append(chart);
    return () => chart.remove();
  }, []);

  return <div ref={ref} className="w-full overflow-x-auto" />;
}

export default function PlotBarPage() {
  return (
    <PlotPage
      title="Plot — Bar Chart"
      description={<>Horizontal bar chart using <Code>Plot.barX</Code>. Sorted descending. Accent fill, DAVE body font, transparent background.</>}
      notes={[
        <>Plot reads CSS custom properties directly in the <Code>style</Code> option — tokens work without any conversion layer.</>,
        <>Font family and size are set once on the root <Code>style</Code> and inherited by all marks.</>,
        <>Cleanup via <Code>chart.remove()</Code> in the <Code>useEffect</Code> return prevents double-mount in React strict mode.</>,
      ]}
    >
      <BarChart />
    </PlotPage>
  );
}
