'use client';

import * as React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { useChartColors } from '../../lib/useChartColors';
import { ChartTooltip } from '../ChartTooltip/ChartTooltip';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface DonutChartProps {
  /** Array of { name, value } objects */
  data: { name: string; value: number }[];
  /** Override chart palette colours */
  colors?: string[];
  /** Content rendered in the centre of the donut hole */
  centerLabel?: React.ReactNode;
  /** Format values in the tooltip */
  valueFormatter?: (value: number) => string;
  showLegend?: boolean;
  /** Inner radius as a percentage string or px number. Defaults to '60%'. */
  innerRadius?: string | number;
  /** Outer radius as a percentage string or px number. Defaults to '80%'. */
  outerRadius?: string | number;
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

export function DonutChart({
  data,
  colors,
  centerLabel,
  valueFormatter,
  showLegend = true,
  innerRadius = '60%',
  outerRadius = '80%',
  height = 300,
  className,
}: DonutChartProps) {
  const chartColors = useChartColors(colors);

  // Legend is ~36px tall; shift centre label up slightly so it sits in the
  // pie's visual centre rather than the full container's centre.
  const legendOffset = showLegend ? 18 : 0;

  return (
    <div className={className} style={{ width: '100%', height, position: 'relative' }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            strokeWidth={0}
            paddingAngle={2}
            isAnimationActive={false}
          >
            {data.map((_, i) => (
              <Cell key={i} fill={chartColors[i % chartColors.length]} />
            ))}
          </Pie>

          <Tooltip content={<ChartTooltip valueFormatter={valueFormatter} />} />

          {showLegend && (
            <Legend
              content={(props) => (
                <ChartLegend payload={props.payload as { value: string; color: string }[]} />
              )}
            />
          )}
        </PieChart>
      </ResponsiveContainer>

      {/* Centre label — absolutely centred, nudged up to account for legend */}
      {centerLabel && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: legendOffset,
            pointerEvents: 'none',
          }}
        >
          {centerLabel}
        </div>
      )}
    </div>
  );
}
