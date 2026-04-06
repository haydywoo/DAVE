'use client';

import * as React from 'react';
import {
  ComposedChart,
  Bar,
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

export interface ComboChartProps {
  data: Record<string, string | number>[];
  /** Key used as the x-axis label */
  index: string;
  /** Keys to render as bars */
  bars: string[];
  /** Keys to render as lines */
  lines: string[];
  /** Override chart palette colours. Bars are coloured first, then lines. */
  colors?: string[];
  /**
   * When true, line series are plotted against a second y-axis on the right.
   * Useful when bars and lines have very different value scales.
   */
  dualAxis?: boolean;
  /** Format values on the primary (left) y-axis and bar tooltips */
  valueFormatter?: (value: number) => string;
  /** Format values on the secondary (right) y-axis and line tooltips */
  secondaryFormatter?: (value: number) => string;
  /** Curve type for line series. Defaults to 'monotone'. */
  curveType?: 'linear' | 'monotone' | 'step';
  showLegend?: boolean;
  showGrid?: boolean;
  height?: number;
  className?: string;
}

// ─── Axis ticks ───────────────────────────────────────────────────────────────

function XTick({ x, y, payload }: { x?: number; y?: number; payload?: { value: string } }) {
  return (
    <text x={x} y={(y ?? 0) + 12} textAnchor="middle" style={{ fill: 'var(--color-foreground-secondary)', fontSize: 11 }}>
      {payload?.value}
    </text>
  );
}

function YTick({ x, y, payload, formatter, anchor = 'end' }: {
  x?: number; y?: number; payload?: { value: number };
  formatter?: (v: number) => string; anchor?: 'end' | 'start';
}) {
  const label = payload ? (formatter ? formatter(payload.value) : payload.value.toLocaleString()) : '';
  return (
    <text
      x={anchor === 'end' ? (x ?? 0) - 8 : (x ?? 0) + 8}
      y={(y ?? 0) + 4}
      textAnchor={anchor}
      style={{ fill: 'var(--color-foreground-secondary)', fontSize: 11 }}
    >
      {label}
    </text>
  );
}

// ─── Legend ───────────────────────────────────────────────────────────────────

function ChartLegend({
  payload,
  bars,
}: {
  payload?: { value: string; color: string }[];
  bars: string[];
}) {
  if (!payload?.length) return null;
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', paddingTop: 12 }}>
      {payload.map((entry, i) => {
        const isBar = bars.includes(entry.value);
        return (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            {isBar ? (
              <span style={{ width: 10, height: 10, borderRadius: 2, backgroundColor: entry.color, flexShrink: 0 }} />
            ) : (
              <span style={{ width: 12, height: 2, borderRadius: 1, backgroundColor: entry.color, flexShrink: 0 }} />
            )}
            <span style={{ color: 'var(--color-foreground-secondary)', fontSize: 12 }}>{entry.value}</span>
          </div>
        );
      })}
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export function ComboChart({
  data,
  index,
  bars,
  lines,
  colors,
  dualAxis = false,
  valueFormatter,
  secondaryFormatter,
  curveType = 'monotone',
  showLegend = true,
  showGrid = true,
  height = 300,
  className,
}: ComboChartProps) {
  const chartColors = useChartColors(colors);
  // Bars take the first N colours, lines continue from there
  const lineOffset = bars.length;

  const primaryFormatter = React.useCallback(
    (v: number) => (valueFormatter ? valueFormatter(v) : v.toLocaleString()),
    [valueFormatter],
  );
  const secFormatter = React.useCallback(
    (v: number) => (secondaryFormatter ? secondaryFormatter(v) : valueFormatter ? valueFormatter(v) : v.toLocaleString()),
    [secondaryFormatter, valueFormatter],
  );

  // Unified tooltip formatter — picks the right formatter per key
  const tooltipFormatter = React.useCallback(
    (value: number, name: string) => {
      const isLine = lines.includes(name);
      return (isLine ? secFormatter : primaryFormatter)(value);
    },
    [lines, primaryFormatter, secFormatter],
  );

  return (
    <div className={className} style={{ width: '100%', height }}>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data} margin={{ top: 4, right: dualAxis ? 52 : 8, bottom: 0, left: 0 }} barCategoryGap="28%" barGap={3}>
          {showGrid && (
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
          )}

          <XAxis
            dataKey={index}
            axisLine={false}
            tickLine={false}
            tick={<XTick />}
            interval="preserveStartEnd"
          />

          {/* Primary y-axis (left) — bars */}
          <YAxis
            yAxisId="primary"
            axisLine={false}
            tickLine={false}
            tick={(props) => <YTick {...props} formatter={primaryFormatter} />}
            width={52}
          />

          {/* Secondary y-axis (right) — lines, only when dualAxis */}
          {dualAxis && (
            <YAxis
              yAxisId="secondary"
              orientation="right"
              axisLine={false}
              tickLine={false}
              tick={(props) => <YTick {...props} formatter={secFormatter} anchor="start" />}
              width={52}
            />
          )}

          <Tooltip
            content={
              <ComboTooltip
                valueFormatter={tooltipFormatter}
                bars={bars}
                lines={lines}
                chartColors={chartColors}
                lineOffset={lineOffset}
              />
            }
            cursor={{ fill: 'var(--color-surface)' }}
          />

          {showLegend && (
            <Legend
              content={(props) => (
                <ChartLegend
                  payload={props.payload as { value: string; color: string }[]}
                  bars={bars}
                />
              )}
            />
          )}

          {bars.map((key, i) => (
            <Bar
              key={key}
              yAxisId="primary"
              dataKey={key}
              fill={chartColors[i % chartColors.length]}
              radius={[3, 3, 0, 0]}
              maxBarSize={48}
              isAnimationActive={false}
            />
          ))}

          {lines.map((key, i) => {
            const color = chartColors[(lineOffset + i) % chartColors.length];
            return (
              <Line
                key={key}
                yAxisId={dualAxis ? 'secondary' : 'primary'}
                type={curveType}
                dataKey={key}
                stroke={color}
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4, strokeWidth: 0, fill: color }}
                isAnimationActive={false}
              />
            );
          })}
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}

// ─── Custom tooltip ───────────────────────────────────────────────────────────

function ComboTooltip({
  active,
  payload,
  label,
  valueFormatter,
  bars,
  lines,
  chartColors,
  lineOffset,
}: {
  active?: boolean;
  payload?: { name: string; value: number; color: string }[];
  label?: string;
  valueFormatter?: (value: number, name: string) => string;
  bars: string[];
  lines: string[];
  chartColors: string[];
  lineOffset: number;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div style={{
      background: 'var(--color-card)',
      border: '1px solid var(--color-border)',
      borderRadius: 4,
      padding: '8px 12px',
      boxShadow: '0 1px 4px 0 rgba(0,0,0,0.08)',
      fontSize: 12,
      minWidth: 120,
    }}>
      {label != null && (
        <p style={{ color: 'var(--color-foreground-secondary)', marginBottom: 6, fontWeight: 500 }}>{label}</p>
      )}
      {/* Bars first, then lines */}
      {[
        ...bars.map((key) => payload.find((p) => p.name === key)).filter(Boolean),
        ...lines.map((key) => payload.find((p) => p.name === key)).filter(Boolean),
      ].map((entry, i) => {
        if (!entry) return null;
        const isLine = lines.includes(entry.name);
        const idx = isLine
          ? lineOffset + lines.indexOf(entry.name)
          : bars.indexOf(entry.name);
        const color = chartColors[idx % chartColors.length];
        const formatted = valueFormatter
          ? valueFormatter(entry.value, entry.name)
          : entry.value.toLocaleString();
        return (
          <div key={entry.name} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '2px 0' }}>
            {isLine ? (
              <span style={{ width: 12, height: 2, borderRadius: 1, backgroundColor: color, flexShrink: 0 }} />
            ) : (
              <span style={{ width: 8, height: 8, borderRadius: 2, backgroundColor: color, flexShrink: 0 }} />
            )}
            <span style={{ color: 'var(--color-foreground-secondary)', flex: 1 }}>{entry.name}</span>
            <span style={{ color: 'var(--color-foreground)', fontWeight: 600, fontVariantNumeric: 'tabular-nums', paddingLeft: 12 }}>
              {formatted}
            </span>
          </div>
        );
      })}
    </div>
  );
}
