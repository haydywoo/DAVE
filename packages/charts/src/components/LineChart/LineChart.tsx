'use client';

import * as React from 'react';
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { useChartColors } from '../../lib/useChartColors';
import { ChartTooltip } from '../ChartTooltip/ChartTooltip';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface LineChartProps {
  data: Record<string, string | number>[];
  /** Key used as the x-axis label */
  index: string;
  /** Keys to render as line series */
  categories: string[];
  /** Override chart palette colours */
  colors?: string[];
  /**
   * `'linear'` — straight segments between points (default).
   * `'monotone'` — smooth curved line.
   * `'step'` — stepped line.
   */
  curveType?: 'linear' | 'monotone' | 'step';
  /** Show dots at each data point */
  showDots?: boolean;
  /** Format values on the y-axis and in the tooltip */
  valueFormatter?: (value: number) => string;
  showLegend?: boolean;
  showGrid?: boolean;
  height?: number;
  className?: string;
}

// ─── Shared axis ticks (reuse same style as BarChart) ─────────────────────────

function XTick({ x, y, payload }: { x?: number; y?: number; payload?: { value: string } }) {
  return (
    <text
      x={x}
      y={(y ?? 0) + 12}
      textAnchor="middle"
      style={{ fill: 'var(--color-foreground-secondary)', fontSize: 11 }}
    >
      {payload?.value}
    </text>
  );
}

function YTick({
  x,
  y,
  payload,
  formatter,
}: {
  x?: number;
  y?: number;
  payload?: { value: number };
  formatter?: (v: number) => string;
}) {
  const label = payload ? (formatter ? formatter(payload.value) : payload.value.toLocaleString()) : '';
  return (
    <text
      x={(x ?? 0) - 8}
      y={(y ?? 0) + 4}
      textAnchor="end"
      style={{ fill: 'var(--color-foreground-secondary)', fontSize: 11 }}
    >
      {label}
    </text>
  );
}

// ─── Custom legend ────────────────────────────────────────────────────────────

function ChartLegend({ payload }: { payload?: { value: string; color: string }[] }) {
  if (!payload?.length) return null;
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', paddingTop: 12 }}>
      {payload.map((entry, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span
            style={{
              width: 12,
              height: 2,
              borderRadius: 1,
              backgroundColor: entry.color,
              flexShrink: 0,
            }}
          />
          <span style={{ color: 'var(--color-foreground-secondary)', fontSize: 12 }}>
            {entry.value}
          </span>
        </div>
      ))}
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export function LineChart({
  data,
  index,
  categories,
  colors,
  curveType = 'monotone',
  showDots = false,
  valueFormatter,
  showLegend,
  showGrid = true,
  height = 300,
  className,
}: LineChartProps) {
  const chartColors = useChartColors(colors);
  const displayLegend = showLegend ?? categories.length > 1;

  const yTickFormatter = React.useCallback(
    (v: number) => (valueFormatter ? valueFormatter(v) : v.toLocaleString()),
    [valueFormatter],
  );

  return (
    <div className={className} style={{ width: '100%', height }}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsLineChart
          data={data}
          margin={{ top: 4, right: 8, bottom: 0, left: 0 }}
        >
          {showGrid && (
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="var(--color-border)"
              vertical={false}
            />
          )}

          <XAxis
            dataKey={index}
            axisLine={false}
            tickLine={false}
            tick={<XTick />}
            interval="preserveStartEnd"
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={(props) => <YTick {...props} formatter={yTickFormatter} />}
            width={52}
          />

          <Tooltip
            content={<ChartTooltip valueFormatter={valueFormatter} />}
            cursor={{ stroke: 'var(--color-border)', strokeWidth: 1 }}
          />

          {displayLegend && (
            <Legend
              content={(props) => <ChartLegend payload={props.payload as { value: string; color: string }[]} />}
            />
          )}

          {categories.map((category, i) => (
            <Line
              key={category}
              type={curveType}
              dataKey={category}
              stroke={chartColors[i % chartColors.length]}
              strokeWidth={2}
              dot={showDots ? { r: 3, strokeWidth: 0, fill: chartColors[i % chartColors.length] } : false}
              activeDot={{ r: 4, strokeWidth: 0, fill: chartColors[i % chartColors.length] }}
              isAnimationActive={false}
            />
          ))}
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  );
}
