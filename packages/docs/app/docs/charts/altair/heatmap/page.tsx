'use client';

import type { VisualizationSpec } from 'vega-embed';
import { useDaveTokens, VegaChart } from '@/components/VegaChart';
import { PlotPage } from '@/components/PlotPage';

interface CalendarDay {
  date:    string; // ISO date for tooltip readability
  value:   number;
  week:    number;
  day:     number;
  weekday: string;
}

function Code({ children }: { children: string }) {
  return <code className="font-code text-xs bg-surface px-1 py-0.5 rounded-[3px] border border-border">{children}</code>;
}

const WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function buildData(): CalendarDay[] {
  const days: CalendarDay[] = [];
  const start = new Date(2024, 0, 1);

  // Anchor on the Monday on or before Jan 1
  const dow = start.getDay();
  const anchorOffset = dow === 0 ? 6 : dow - 1;
  const anchor = new Date(start);
  anchor.setDate(anchor.getDate() - anchorOffset);

  // Deterministic pseudo-random so SSR + client agree on values
  let seed = 1;
  const rand = () => {
    seed = (seed * 16807) % 2147483647;
    return seed / 2147483647;
  };

  for (let i = 0; i < 365; i++) {
    const date = new Date(start);
    date.setDate(start.getDate() + i);

    const diffDays = Math.floor((date.getTime() - anchor.getTime()) / 86400000);
    const week     = Math.floor(diffDays / 7);
    const day      = date.getDay();
    const dayMon   = day === 0 ? 6 : day - 1;
    const isWeekend = dayMon >= 5;
    const base     = isWeekend ? 0.3 : 0.7;
    const spike    = rand() < 0.06 ? 3 : 0;
    const raw      = base * rand() * 8 + spike;

    days.push({
      date:    date.toISOString().slice(0, 10),
      value:   Math.round(Math.min(raw, 12)),
      week,
      day:     dayMon,
      weekday: WEEKDAYS[dayMon],
    });
  }
  return days;
}

const calendarData = buildData();

function CalendarHeatmap() {
  const t = useDaveTokens();
  if (!t) return <div className="h-[200px]" />;

  // Single-colour fill modulated by an opacity encoding — readable over either
  // theme's background, no muddy low-end blend, GitHub-style visual.
  const spec: VisualizationSpec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    width:  'container',
    height: 160,
    data:   { values: calendarData },
    mark:   { type: 'rect', cornerRadius: 2, color: t.accent, stroke: t.border, strokeWidth: 0.5 },
    encoding: {
      x: { field: 'week',    type: 'ordinal', axis: null },
      y: {
        field: 'weekday', type: 'ordinal', sort: WEEKDAYS,
        axis: { title: null, domain: false, ticks: false, labelColor: t.fgSecondary, labelFontSize: 10, labelPadding: 4 },
      },
      opacity: {
        field: 'value', type: 'quantitative',
        scale:  { range: [0.08, 1], domain: [0, 12] },
        legend: { title: 'Activity', titleColor: t.fgSecondary, labelColor: t.fgSecondary, gradientLength: 80 },
      },
      tooltip: [
        { field: 'date',    type: 'temporal',     title: 'Date'     },
        { field: 'weekday', type: 'nominal',      title: 'Day'      },
        { field: 'value',   type: 'quantitative', title: 'Activity' },
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

export default function AltairHeatmapPage() {
  return (
    <PlotPage
      title="Altair — Calendar Heatmap"
      description={<>GitHub-style 365-day grid: weeks across, days of the week down. Colour interpolates from <Code>surface</Code> to <Code>accent</Code> based on activity. Hover any cell for the exact date.</>}
      notes={[
        <>Each cell is a Vega-Lite <Code>rect</Code> with x = week, y = weekday. The colour scale is a two-stop linear interpolation, which renders as a continuous palette rather than the 5-step discrete one we used in the Plot version.</>,
        <>Tooltips show ISO-date, weekday name, and activity count — all from declarative <Code>encoding.tooltip</Code> entries.</>,
        <>Vega-Lite&rsquo;s <Code>legend</Code> renders an automatic colour gradient. We kept the title short (<Code>Activity</Code>) and pinned <Code>gradientLength</Code> to keep it compact.</>,
        <>Pseudo-random data is generated once at module scope with a deterministic seed so SSR and client agree on cell values.</>,
      ]}
    >
      <CalendarHeatmap />
    </PlotPage>
  );
}
