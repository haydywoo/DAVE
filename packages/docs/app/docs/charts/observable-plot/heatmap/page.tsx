'use client';

import { useEffect, useRef } from 'react';
import * as Plot from '@observablehq/plot';
import { PlotPage, plotStyle } from '@/components/PlotPage';

interface CalendarDay {
  date: Date;
  value: number;
  week: number;
  day: number;
}

function Code({ children }: { children: string }) {
  return <code className="font-code text-xs bg-surface px-1 py-0.5 rounded-[3px] border border-border">{children}</code>;
}

function buildData(): CalendarDay[] {
  const days: CalendarDay[] = [];
  const start = new Date(2024, 0, 1); // Jan 1 2024 (Monday-ish anchor)

  // find the Monday on or before Jan 1
  const dow = start.getDay(); // 0=Sun
  const anchorOffset = dow === 0 ? 6 : dow - 1; // offset to Monday
  const anchor = new Date(start);
  anchor.setDate(anchor.getDate() - anchorOffset);

  for (let i = 0; i < 365; i++) {
    const date = new Date(start);
    date.setDate(start.getDate() + i);

    const diffMs = date.getTime() - anchor.getTime();
    const diffDays = Math.floor(diffMs / 86400000);
    const week = Math.floor(diffDays / 7);
    const day = date.getDay(); // 0=Sun, shift to 0=Mon
    const dayMon = day === 0 ? 6 : day - 1;

    // weekday-weighted random value; occasional spikes
    const isWeekend = dayMon >= 5;
    const base = isWeekend ? 0.3 : 0.7;
    const spike = Math.random() < 0.06 ? 3 : 0;
    const raw = base * Math.random() * 8 + spike;
    const value = Math.round(Math.min(raw, 12));

    days.push({ date, value, week, day: dayMon });
  }
  return days;
}

const calendarData = buildData();

// month label positions: find the first week index for each month
const monthLabels = (() => {
  const seen = new Set<number>();
  const labels: { week: number; label: string }[] = [];
  const fmt = new Intl.DateTimeFormat('en', { month: 'short' });
  for (const d of calendarData) {
    const m = d.date.getMonth();
    if (!seen.has(m)) {
      seen.add(m);
      labels.push({ week: d.week, label: fmt.format(d.date) });
    }
  }
  return labels;
})();

// 5-step scale: 0 = surface, 1–4 progressively stronger accent
const STEPS = 5;
function stepFill(value: number): string {
  if (value === 0) return 'var(--color-surface)';
  const step = Math.min(Math.ceil((value / 12) * (STEPS - 1)), STEPS - 1);
  const pcts = ['8%', '25%', '50%', '80%', '100%'];
  return `color-mix(in srgb, var(--color-accent) ${pcts[step]}, var(--color-background))`;
}

function CalendarHeatmap() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const chart = Plot.plot({
      marginTop: 24,
      marginLeft: 28,
      marginBottom: 8,
      width: ref.current.clientWidth || 700,
      height: 140,
      x: { axis: null },
      y: { axis: null },
      style: plotStyle,
      marks: [
        // cells
        Plot.cell(calendarData, {
          x: 'week',
          y: 'day',
          fill: (d: CalendarDay) => stepFill(d.value),
          rx: 2,
          inset: 1,
          stroke: 'var(--color-border)',
          strokeWidth: 0.5,
        }),
        // hover tooltip
        Plot.tip(calendarData, Plot.pointer({
          x: 'week',
          y: 'day',
          title: (d: CalendarDay) =>
            `${d.date.toLocaleDateString('en', { month: 'short', day: 'numeric', year: 'numeric' })}\n${d.value} contribution${d.value !== 1 ? 's' : ''}`,
        })),
        // month labels
        Plot.text(monthLabels, {
          x: 'week',
          y: -1,
          text: 'label',
          textAnchor: 'start',
          fontSize: 10,
          fill: 'var(--color-foreground-secondary)',
          dy: -4,
        }),
        // day-of-week labels
        Plot.text(
          [
            { day: 0, label: 'Mon' },
            { day: 2, label: 'Wed' },
            { day: 4, label: 'Fri' },
          ],
          {
            x: -1,
            y: 'day',
            text: 'label',
            textAnchor: 'end',
            fontSize: 10,
            fill: 'var(--color-foreground-secondary)',
            dx: -4,
          }
        ),
      ],
    });

    ref.current.append(chart);
    return () => chart.remove();
  }, []);

  return (
    <div className="space-y-4">
      <div ref={ref} className="w-full overflow-x-auto" />
      <div className="flex items-center gap-2 text-xs text-fg-subdued">
        <span>Less</span>
        {Array.from({ length: STEPS }, (_, i) => (
          <span
            key={i}
            className="inline-block w-3 h-3 rounded-[2px] border border-border"
            style={{ background: stepFill(i === 0 ? 0 : Math.round((i / (STEPS - 1)) * 12)) }}
          />
        ))}
        <span>More</span>
      </div>
    </div>
  );
}

export default function PlotHeatmapPage() {
  return (
    <PlotPage
      title="Plot — Calendar Heatmap"
      description={<>GitHub-style contribution grid using <Code>Plot.cell</Code>. 365 days mapped onto a week × day-of-week grid with a 5-step discrete accent scale. Hover any cell for the exact date and count.</>}
      notes={[
        <>Pre-computing <Code>week</Code> and <Code>day</Code> fields on each data point avoids a d3-time dependency — week is just <Code>Math.floor(daysSinceAnchor / 7)</Code>.</>,
        <>The colour scale uses <Code>color-mix(in srgb, var(--color-accent) N%, var(--color-background))</Code> at five opacity steps — no hex values, no token resolution, automatic dark mode support.</>,
        <>Month labels are derived by scanning for the first data point in each month and pinning a <Code>Plot.text</Code> mark at that week index — no separate label array needed beyond one pass.</>,
        <><Code>Plot.tip</Code> + <Code>Plot.pointer</Code> gives an instant floating tooltip on hover — far more reliable than SVG <Code>&lt;title&gt;</Code> which requires a ~1 s delay and is inconsistent across browsers.</>,
      ]}
    >
      <CalendarHeatmap />
    </PlotPage>
  );
}
