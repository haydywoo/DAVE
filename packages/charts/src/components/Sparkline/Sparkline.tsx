'use client';

import * as React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  Tooltip,
  ReferenceLine,
} from 'recharts';
import { useChartColors } from '../../lib/useChartColors';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface SparklineProps {
  /** Array of numbers, or objects with a `value` key */
  data: number[] | { value: number }[];
  /** `'line'` (default) or `'bar'` */
  type?: 'line' | 'bar';
  /** Override the first chart colour */
  color?: string;
  /** Format the value shown in the minimal tooltip */
  valueFormatter?: (value: number) => string;
  /** Draw a horizontal reference line at this value (e.g. a target or zero) */
  referenceLine?: number;
  /** Curve type for line variant. Defaults to 'monotone'. */
  curveType?: 'linear' | 'monotone' | 'step';
  height?: number;
  width?: number | string;
  className?: string;
}

// ─── Minimal tooltip ──────────────────────────────────────────────────────────

function SparkTooltip({
  active,
  payload,
  valueFormatter,
}: {
  active?: boolean;
  payload?: { value: number }[];
  valueFormatter?: (v: number) => string;
}) {
  if (!active || !payload?.length) return null;
  const val = payload[0].value;
  return (
    <div
      style={{
        background: 'var(--color-card)',
        border: '1px solid var(--color-border)',
        borderRadius: 4,
        padding: '4px 8px',
        fontSize: 12,
        fontWeight: 600,
        color: 'var(--color-foreground)',
        whiteSpace: 'nowrap',
      }}
    >
      {valueFormatter ? valueFormatter(val) : val.toLocaleString()}
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export function Sparkline({
  data,
  type = 'line',
  color,
  valueFormatter,
  referenceLine,
  curveType = 'monotone',
  height = 48,
  width = '100%',
  className,
}: SparklineProps) {
  const chartColors = useChartColors();
  const resolvedColor = color ?? chartColors[0];

  // Normalise to [{ value }] objects
  const normalised = (data as (number | { value: number })[]).map((d) =>
    typeof d === 'number' ? { value: d } : d,
  );

  const tooltipContent = (
    <SparkTooltip valueFormatter={valueFormatter} />
  ) as React.ReactElement;

  if (type === 'bar') {
    return (
      <div className={className} style={{ width, height, display: 'inline-block' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={normalised} margin={{ top: 2, right: 0, bottom: 0, left: 0 }} barCategoryGap="20%">
            <Bar
              dataKey="value"
              fill={resolvedColor}
              radius={[2, 2, 0, 0]}
              isAnimationActive={false}
            />
            {referenceLine !== undefined && (
              <ReferenceLine
                y={referenceLine}
                stroke="var(--color-border-strong)"
                strokeDasharray="3 3"
                strokeWidth={1}
              />
            )}
            <Tooltip
              content={tooltipContent}
              cursor={{ fill: 'var(--color-surface)' }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }

  return (
    <div className={className} style={{ width, height, display: 'inline-block' }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={normalised} margin={{ top: 2, right: 0, bottom: 0, left: 0 }}>
          <Line
            type={curveType}
            dataKey="value"
            stroke={resolvedColor}
            strokeWidth={1.5}
            dot={false}
            activeDot={{ r: 3, strokeWidth: 0, fill: resolvedColor }}
            isAnimationActive={false}
          />
          {referenceLine !== undefined && (
            <ReferenceLine
              y={referenceLine}
              stroke="var(--color-border-strong)"
              strokeDasharray="3 3"
              strokeWidth={1}
            />
          )}
          <Tooltip
            content={tooltipContent}
            cursor={{ stroke: 'var(--color-border)', strokeWidth: 1 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
