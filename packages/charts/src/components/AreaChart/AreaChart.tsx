'use client';

import * as React from 'react';
import {
  AreaChart as RechartsAreaChart,
  Area,
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

export interface AreaChartProps {
  data: Record<string, string | number>[];
  /** Key used as the x-axis label */
  index: string;
  /** Keys to render as area series */
  categories: string[];
  /** Override chart palette colours */
  colors?: string[];
  /**
   * `'monotone'` — smooth curves (default).
   * `'linear'` — straight segments.
   * `'step'` — stepped.
   */
  curveType?: 'linear' | 'monotone' | 'step';
  /**
   * `'expand'` — stack areas and normalise to 100% (percentage area chart).
   * `'stack'` — stack areas with absolute values.
   * `'none'` — independent overlapping areas (default).
   */
  stack?: 'none' | 'stack' | 'expand';
  /** 0–1 opacity for the filled area. Defaults to 0.15. */
  fillOpacity?: number;
  /** Format values on the y-axis and in the tooltip */
  valueFormatter?: (value: number) => string;
  showLegend?: boolean;
  showGrid?: boolean;
  height?: number;
  className?: string;
}

// ─── Axis ticks ───────────────────────────────────────────────────────────────

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

// ─── Legend ───────────────────────────────────────────────────────────────────

function ChartLegend({ payload }: { payload?: { value: string; color: string }[] }) {
  if (!payload?.length) return null;
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', paddingTop: 12 }}>
      {payload.map((entry, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: 2,
              backgroundColor: entry.color,
              flexShrink: 0,
              opacity: 0.7,
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

export function AreaChart({
  data,
  index,
  categories,
  colors,
  curveType = 'monotone',
  stack = 'none',
  fillOpacity = 0.15,
  valueFormatter,
  showLegend,
  showGrid = true,
  height = 300,
  className,
}: AreaChartProps) {
  const chartColors = useChartColors(colors);
  const displayLegend = showLegend ?? categories.length > 1;

  const stackId = stack !== 'none' ? 'stack' : undefined;

  const yTickFormatter = React.useCallback(
    (v: number) => (valueFormatter ? valueFormatter(v) : v.toLocaleString()),
    [valueFormatter],
  );

  return (
    <div className={className} style={{ width: '100%', height }}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsAreaChart
          data={data}
          stackOffset={stack === 'expand' ? 'expand' : 'none'}
          margin={{ top: 4, right: 8, bottom: 0, left: 0 }}
        >
          <defs>
            {categories.map((category, i) => {
              const color = chartColors[i % chartColors.length];
              return (
                <linearGradient key={category} id={`grad-${category}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={color} stopOpacity={fillOpacity * 4} />
                  <stop offset="100%" stopColor={color} stopOpacity={0} />
                </linearGradient>
              );
            })}
          </defs>

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
            tickFormatter={stack === 'expand' ? (v) => `${Math.round(v * 100)}%` : undefined}
          />

          <Tooltip
            content={
              <ChartTooltip
                valueFormatter={
                  stack === 'expand'
                    ? (v) => `${Math.round(v * 100)}%`
                    : valueFormatter
                }
              />
            }
            cursor={{ stroke: 'var(--color-border)', strokeWidth: 1 }}
          />

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
              <Area
                key={category}
                type={curveType}
                dataKey={category}
                stroke={color}
                strokeWidth={2}
                fill={`url(#grad-${category})`}
                stackId={stackId}
                dot={false}
                activeDot={{ r: 4, strokeWidth: 0, fill: color }}
                isAnimationActive={false}
              />
            );
          })}
        </RechartsAreaChart>
      </ResponsiveContainer>
    </div>
  );
}
