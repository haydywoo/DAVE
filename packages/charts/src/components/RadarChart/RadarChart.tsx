'use client';

import * as React from 'react';
import {
  RadarChart as RechartsRadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { useChartColors } from '../../lib/useChartColors';
import { ChartTooltip } from '../ChartTooltip/ChartTooltip';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface RadarChartProps {
  /** Each object represents one axis spoke. Must include the index key plus one key per category. */
  data: Record<string, string | number>[];
  /** Key used as the spoke label */
  index: string;
  /** Keys to render as radar series */
  categories: string[];
  /** Override chart palette colours */
  colors?: string[];
  /** Opacity of the filled polygon. Defaults to 0.15. */
  fillOpacity?: number;
  /**
   * `'polygon'` — straight-edged polygon grid (default).
   * `'circle'` — circular grid lines.
   */
  gridType?: 'polygon' | 'circle';
  /** Format values in the tooltip */
  valueFormatter?: (value: number) => string;
  showLegend?: boolean;
  height?: number;
  className?: string;
}

// ─── Legend ───────────────────────────────────────────────────────────────────

function ChartLegend({ payload }: { payload?: { value: string; color: string }[] }) {
  if (!payload?.length) return null;
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', paddingTop: 8 }}>
      {payload.map((entry, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{
            width: 10, height: 10, borderRadius: 2,
            backgroundColor: entry.color, flexShrink: 0, opacity: 0.8,
          }} />
          <span style={{ color: 'var(--color-foreground-secondary)', fontSize: 12 }}>
            {entry.value}
          </span>
        </div>
      ))}
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export function RadarChart({
  data,
  index,
  categories,
  colors,
  fillOpacity = 0.15,
  gridType = 'polygon',
  valueFormatter,
  showLegend,
  height = 320,
  className,
}: RadarChartProps) {
  const chartColors = useChartColors(colors);
  const displayLegend = showLegend ?? categories.length > 1;

  return (
    <div className={className} style={{ width: '100%', height }}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsRadarChart data={data} margin={{ top: 8, right: 24, bottom: 8, left: 24 }}>
          <PolarGrid
            gridType={gridType}
            stroke="var(--color-border)"
          />

          <PolarAngleAxis
            dataKey={index}
            tick={{ fontSize: 11, fill: 'var(--color-foreground-secondary)' }}
            tickLine={false}
          />

          {/* Hide radius axis numbers — the shape communicates the values */}
          <PolarRadiusAxis tick={false} axisLine={false} />

          <Tooltip content={<ChartTooltip valueFormatter={valueFormatter} />} />

          {displayLegend && (
            <Legend
              content={(props) => (
                <ChartLegend payload={props.payload as { value: string; color: string }[]} />
              )}
            />
          )}

          {categories.map((category, i) => {
            const color = chartColors[i % chartColors.length];
            return (
              <Radar
                key={category}
                name={category}
                dataKey={category}
                stroke={color}
                strokeWidth={2}
                fill={color}
                fillOpacity={fillOpacity}
                isAnimationActive={false}
              />
            );
          })}
        </RechartsRadarChart>
      </ResponsiveContainer>
    </div>
  );
}
