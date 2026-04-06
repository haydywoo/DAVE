'use client';

import * as React from 'react';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  TooltipProps,
} from 'recharts';
import type { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';
import { useChartColors } from '../../lib/useChartColors';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ScatterSeries {
  name: string;
  data: { x: number; y: number; label?: string }[];
}

export interface ScatterPlotProps {
  /** One or more named data series */
  series: ScatterSeries[];
  /** Override chart palette colours */
  colors?: string[];
  /** Label for the x-axis */
  xLabel?: string;
  /** Label for the y-axis */
  yLabel?: string;
  /** Format x-axis tick values */
  xFormatter?: (value: number) => string;
  /** Format y-axis tick values */
  yFormatter?: (value: number) => string;
  /** Dot radius in px. Defaults to 5. */
  dotRadius?: number;
  showLegend?: boolean;
  showGrid?: boolean;
  height?: number;
  className?: string;
}

// ─── Axis ticks ───────────────────────────────────────────────────────────────

function XTick({
  x, y, payload, formatter,
}: {
  x?: number; y?: number; payload?: { value: number }; formatter?: (v: number) => string;
}) {
  const label = payload ? (formatter ? formatter(payload.value) : payload.value.toLocaleString()) : '';
  return (
    <text x={x} y={(y ?? 0) + 12} textAnchor="middle" style={{ fill: 'var(--color-foreground-secondary)', fontSize: 11 }}>
      {label}
    </text>
  );
}

function YTick({
  x, y, payload, formatter,
}: {
  x?: number; y?: number; payload?: { value: number }; formatter?: (v: number) => string;
}) {
  const label = payload ? (formatter ? formatter(payload.value) : payload.value.toLocaleString()) : '';
  return (
    <text x={(x ?? 0) - 8} y={(y ?? 0) + 4} textAnchor="end" style={{ fill: 'var(--color-foreground-secondary)', fontSize: 11 }}>
      {label}
    </text>
  );
}

// ─── Axis label ───────────────────────────────────────────────────────────────

function AxisLabel({ value, angle = 0, x = 0, y = 0 }: { value?: string; angle?: number; x?: number; y?: number }) {
  if (!value) return null;
  return (
    <text
      x={x}
      y={y}
      textAnchor="middle"
      transform={angle ? `rotate(${angle}, ${x}, ${y})` : undefined}
      style={{ fill: 'var(--color-foreground-secondary)', fontSize: 11 }}
    >
      {value}
    </text>
  );
}

// ─── Tooltip ──────────────────────────────────────────────────────────────────

function ScatterTooltip({
  active,
  payload,
  xFormatter,
  yFormatter,
}: TooltipProps<ValueType, NameType> & {
  xFormatter?: (v: number) => string;
  yFormatter?: (v: number) => string;
}) {
  if (!active || !payload?.length) return null;
  const point = payload[0].payload as { x: number; y: number; label?: string };
  const seriesName = payload[0].name;
  const color = payload[0].color;

  return (
    <div style={{
      background: 'var(--color-card)',
      border: '1px solid var(--color-border)',
      borderRadius: 4,
      padding: '8px 12px',
      fontSize: 12,
      minWidth: 100,
      boxShadow: '0 1px 4px 0 rgba(0,0,0,0.08)',
    }}>
      {seriesName && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: color, flexShrink: 0 }} />
          <span style={{ color: 'var(--color-foreground-secondary)', fontWeight: 500 }}>{point.label ?? seriesName}</span>
        </div>
      )}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
          <span style={{ color: 'var(--color-foreground-secondary)' }}>x</span>
          <span style={{ color: 'var(--color-foreground)', fontWeight: 600, fontVariantNumeric: 'tabular-nums' }}>
            {xFormatter ? xFormatter(point.x) : point.x.toLocaleString()}
          </span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
          <span style={{ color: 'var(--color-foreground-secondary)' }}>y</span>
          <span style={{ color: 'var(--color-foreground)', fontWeight: 600, fontVariantNumeric: 'tabular-nums' }}>
            {yFormatter ? yFormatter(point.y) : point.y.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── Legend ───────────────────────────────────────────────────────────────────

function ChartLegend({ payload }: { payload?: { value: string; color: string }[] }) {
  if (!payload?.length) return null;
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', paddingTop: 12 }}>
      {payload.map((entry, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: entry.color, flexShrink: 0 }} />
          <span style={{ color: 'var(--color-foreground-secondary)', fontSize: 12 }}>{entry.value}</span>
        </div>
      ))}
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export function ScatterPlot({
  series,
  colors,
  xLabel,
  yLabel,
  xFormatter,
  yFormatter,
  dotRadius = 5,
  showLegend,
  showGrid = true,
  height = 300,
  className,
}: ScatterPlotProps) {
  const chartColors = useChartColors(colors);
  const displayLegend = showLegend ?? series.length > 1;

  return (
    <div className={className} style={{ width: '100%', height }}>
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart margin={{ top: 4, right: 8, bottom: xLabel ? 24 : 4, left: 0 }}>
          {showGrid && (
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
          )}

          <XAxis
            type="number"
            dataKey="x"
            axisLine={false}
            tickLine={false}
            tick={(props) => <XTick {...props} formatter={xFormatter} />}
            label={xLabel ? <AxisLabel value={xLabel} x={0} y={0} /> : undefined}
          />
          <YAxis
            type="number"
            dataKey="y"
            axisLine={false}
            tickLine={false}
            tick={(props) => <YTick {...props} formatter={yFormatter} />}
            width={52}
            label={yLabel ? <AxisLabel value={yLabel} angle={-90} x={0} y={0} /> : undefined}
          />

          <Tooltip
            content={
              <ScatterTooltip xFormatter={xFormatter} yFormatter={yFormatter} />
            }
            cursor={{ stroke: 'var(--color-border)', strokeDasharray: '3 3' }}
          />

          {displayLegend && (
            <Legend
              content={(props) => (
                <ChartLegend payload={props.payload as { value: string; color: string }[]} />
              )}
            />
          )}

          {series.map((s, i) => (
            <Scatter
              key={s.name}
              name={s.name}
              data={s.data}
              fill={chartColors[i % chartColors.length]}
              r={dotRadius}
              isAnimationActive={false}
            />
          ))}
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}
