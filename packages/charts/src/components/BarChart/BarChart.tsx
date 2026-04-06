'use client';

import * as React from 'react';
import {
  BarChart as RechartsBarChart,
  Bar,
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

export interface BarChartProps {
  /** Array of data objects, one per bar group */
  data: Record<string, string | number>[];
  /** The key in each data object used as the category axis label */
  index: string;
  /** Keys to render as bar series */
  categories: string[];
  /**
   * Override the chart palette colours for this instance.
   * Accepts any valid CSS colour string (hex, rgb, CSS variable, etc.).
   */
  colors?: string[];
  /** Stack bars on top of each other instead of grouping side-by-side */
  stacked?: boolean;
  /**
   * `'vertical'` — bars grow upward (default).
   * `'horizontal'` — bars grow rightward.
   */
  layout?: 'vertical' | 'horizontal';
  /** Format value labels on the axis and inside the tooltip */
  valueFormatter?: (value: number) => string;
  /** Show the series legend. Defaults to true when there are multiple categories. */
  showLegend?: boolean;
  /** Show a background grid. Defaults to true. */
  showGrid?: boolean;
  /** Fixed height of the chart in px. Defaults to 300. */
  height?: number;
  className?: string;
}

// ─── Custom axis tick ─────────────────────────────────────────────────────────

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
              width: 8,
              height: 8,
              borderRadius: '50%',
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

export function BarChart({
  data,
  index,
  categories,
  colors,
  stacked = false,
  layout = 'vertical',
  valueFormatter,
  showLegend,
  showGrid = true,
  height = 300,
  className,
}: BarChartProps) {
  const chartColors = useChartColors(colors);
  const displayLegend = showLegend ?? categories.length > 1;

  // Recharts uses opposite naming: layout="horizontal" draws upward bars,
  // layout="vertical" draws sideways bars.
  const rechartsLayout = layout === 'vertical' ? 'horizontal' : 'vertical';
  const isVertical = layout === 'vertical';

  const yTickFormatter = React.useCallback(
    (v: number) => (valueFormatter ? valueFormatter(v) : v.toLocaleString()),
    [valueFormatter],
  );

  return (
    <div className={className} style={{ width: '100%', height }}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart
          data={data}
          layout={rechartsLayout}
          margin={{ top: 4, right: 8, bottom: 0, left: 0 }}
          barCategoryGap="28%"
          barGap={3}
        >
          {showGrid && (
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="var(--color-border)"
              horizontal={isVertical}
              vertical={!isVertical}
            />
          )}

          {isVertical ? (
            <>
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
            </>
          ) : (
            <>
              <XAxis
                type="number"
                axisLine={false}
                tickLine={false}
                tick={(props) => <YTick {...props} formatter={yTickFormatter} />}
              />
              <YAxis
                type="category"
                dataKey={index}
                axisLine={false}
                tickLine={false}
                tick={<XTick />}
                width={80}
              />
            </>
          )}

          <Tooltip
            content={<ChartTooltip valueFormatter={valueFormatter} />}
            cursor={{ fill: 'var(--color-surface)' }}
          />

          {displayLegend && (
            <Legend
              content={(props) => <ChartLegend payload={props.payload as { value: string; color: string }[]} />}
            />
          )}

          {categories.map((category, i) => (
            <Bar
              key={category}
              dataKey={category}
              fill={chartColors[i % chartColors.length]}
              stackId={stacked ? 'stack' : undefined}
              radius={
                stacked
                  ? i === categories.length - 1
                    ? [3, 3, 0, 0]
                    : [0, 0, 0, 0]
                  : [3, 3, 0, 0]
              }
              maxBarSize={48}
              isAnimationActive={false}
            />
          ))}
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
}
