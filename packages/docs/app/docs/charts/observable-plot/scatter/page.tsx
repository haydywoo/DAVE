'use client';

import { useEffect, useRef } from 'react';
import * as Plot from '@observablehq/plot';
import { PlotPage, plotStyle } from '@/components/PlotPage';

type Group = 'A' | 'B' | 'C';

interface DataPoint {
  x: number;
  y: number;
  size: number;
  group: Group;
  label: string;
}

const colours: Record<Group, string> = {
  A: 'var(--color-accent)',
  B: 'var(--color-success)',
  C: 'var(--color-warning)',
};

const data: DataPoint[] = [
  { x: 2,  y: 4,  size: 8,  group: 'A', label: 'Alert' },
  { x: 3,  y: 7,  size: 12, group: 'A', label: 'Button' },
  { x: 5,  y: 5,  size: 6,  group: 'B', label: 'Input' },
  { x: 7,  y: 9,  size: 14, group: 'A', label: 'Dialog' },
  { x: 4,  y: 2,  size: 5,  group: 'C', label: 'Badge' },
  { x: 8,  y: 6,  size: 10, group: 'B', label: 'Select' },
  { x: 6,  y: 11, size: 9,  group: 'A', label: 'Toast' },
  { x: 9,  y: 3,  size: 7,  group: 'C', label: 'Chip' },
  { x: 2,  y: 9,  size: 11, group: 'B', label: 'Tabs' },
  { x: 10, y: 8,  size: 13, group: 'A', label: 'Table' },
  { x: 1,  y: 6,  size: 4,  group: 'C', label: 'Kbd' },
  { x: 7,  y: 2,  size: 8,  group: 'B', label: 'Switch' },
];

function Code({ children }: { children: string }) {
  return <code className="font-code text-xs bg-surface px-1 py-0.5 rounded-[3px] border border-border">{children}</code>;
}

function ScatterChart() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const chart = Plot.plot({
      marginLeft: 36,
      marginBottom: 40,
      x: { label: 'Complexity →', grid: true },
      y: { label: '↑ Usage', grid: true },
      style: plotStyle,
      marks: [
        Plot.gridX({ stroke: 'var(--color-border)', strokeDasharray: '2,3' }),
        Plot.gridY({ stroke: 'var(--color-border)', strokeDasharray: '2,3' }),
        Plot.dot(data, {
          x: 'x', y: 'y', r: 'size',
          fill: (d: DataPoint) => colours[d.group],
          fillOpacity: 0.15,
          stroke: (d: DataPoint) => colours[d.group],
          strokeWidth: 1.5,
        }),
        Plot.text(data, {
          x: 'x', y: 'y', text: 'label',
          dy: -10, fontSize: 10,
          fill: 'var(--color-foreground-secondary)',
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

export default function PlotScatterPage() {
  return (
    <PlotPage
      title="Plot — Scatter Plot"
      description={<>Bubble scatter using <Code>Plot.dot</Code> with variable radius. Grouped by colour, labelled with <Code>Plot.text</Code>. Fill opacity gives a semi-transparent bubble effect.</>}
      notes={[
        <>Variable radius via <Code>r: &apos;size&apos;</Code> — Plot maps the data field to pixel radius automatically.</>,
        <>Typed <Code>DataPoint</Code> interface means accessor functions like <Code>fill</Code> and <Code>stroke</Code> are fully type-safe with no assertions.</>,
        <><Code>fillOpacity: 0.15</Code> is an SVG attribute passthrough — Observable Plot forwards unknown mark options directly to the SVG element.</>,
      ]}
    >
      <ScatterChart />
    </PlotPage>
  );
}
