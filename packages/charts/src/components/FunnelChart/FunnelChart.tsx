'use client';

import * as React from 'react';
import { useChartColors } from '../../lib/useChartColors';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface FunnelStep {
  name: string;
  value: number;
}

export interface FunnelChartProps {
  data: FunnelStep[];
  /** Override chart palette colours. Each step gets its own colour by default. */
  colors?: string[];
  /**
   * `'sequential'` — each step gets the next palette colour (default).
   * `'single'` — all steps share the first colour at decreasing opacity.
   */
  colorMode?: 'sequential' | 'single';
  /** Show conversion percentage between each step. Defaults to true. */
  showConversions?: boolean;
  /** Format the value label on each step */
  valueFormatter?: (value: number) => string;
  /** Height of each step bar in px. Defaults to 44. */
  stepHeight?: number;
  /** Gap between step bars in px. Defaults to 6. */
  gap?: number;
  height?: number;
  className?: string;
}

// ─── Component ────────────────────────────────────────────────────────────────

export function FunnelChart({
  data,
  colors,
  colorMode = 'sequential',
  showConversions = true,
  valueFormatter,
  stepHeight = 44,
  gap = 6,
  height,
  className,
}: FunnelChartProps) {
  const chartColors = useChartColors(colors);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [width, setWidth] = React.useState(480);

  React.useEffect(() => {
    if (!containerRef.current) return;
    const ro = new ResizeObserver(([entry]) => {
      setWidth(entry.contentRect.width);
    });
    ro.observe(containerRef.current);
    setWidth(containerRef.current.offsetWidth);
    return () => ro.disconnect();
  }, []);

  if (!data.length) return null;

  const maxValue = data[0].value;
  const conversionRowHeight = showConversions ? 24 : 0;
  const totalHeight = height ?? data.length * stepHeight + (data.length - 1) * (gap + conversionRowHeight) + 16;

  // Layout constants
  const leftLabelWidth = 120;
  const rightLabelWidth = 80;
  const barAreaLeft = leftLabelWidth;
  const barAreaWidth = width - leftLabelWidth - rightLabelWidth;

  return (
    <div ref={containerRef} className={className} style={{ width: '100%', height: totalHeight }}>
      <svg width={width} height={totalHeight} overflow="visible">
        {data.map((step, i) => {
          const barWidth = maxValue > 0 ? (step.value / maxValue) * barAreaWidth : 0;
          const barX = barAreaLeft + (barAreaWidth - barWidth) / 2;
          const rowTop = i * (stepHeight + gap + conversionRowHeight);
          const barY = rowTop + (conversionRowHeight > 0 && i > 0 ? conversionRowHeight + gap : 0);

          // Trapezoid between previous and current step
          const prevStep = data[i - 1];
          const prevBarWidth = prevStep
            ? (prevStep.value / maxValue) * barAreaWidth
            : barWidth;
          const prevBarX = prevStep
            ? barAreaLeft + (barAreaWidth - prevBarWidth) / 2
            : barX;

          const color = colorMode === 'single'
            ? chartColors[0]
            : chartColors[i % chartColors.length];

          const opacity = colorMode === 'single'
            ? 1 - (i / data.length) * 0.5
            : 1;

          const conversionPct = prevStep
            ? Math.round((step.value / prevStep.value) * 100)
            : 100;

          const formattedValue = valueFormatter
            ? valueFormatter(step.value)
            : step.value.toLocaleString();

          return (
            <g key={step.name}>
              {/* Trapezoid connector between previous and this step */}
              {i > 0 && (
                <polygon
                  points={[
                    `${prevBarX},${barY - gap}`,
                    `${prevBarX + prevBarWidth},${barY - gap}`,
                    `${barX + barWidth},${barY}`,
                    `${barX},${barY}`,
                  ].join(' ')}
                  fill={color}
                  opacity={opacity * 0.25}
                />
              )}

              {/* Step bar */}
              <rect
                x={barX}
                y={barY}
                width={barWidth}
                height={stepHeight}
                fill={color}
                opacity={opacity}
                rx={3}
              />

              {/* Step name — fixed left column */}
              <text
                x={leftLabelWidth - 10}
                y={barY + stepHeight / 2 + 1}
                textAnchor="end"
                dominantBaseline="middle"
                style={{ fill: 'var(--color-foreground)', fontSize: 12, fontWeight: 500 }}
              >
                {step.name}
              </text>

              {/* Value — right of bar */}
              <text
                x={barX + barWidth + 10}
                y={barY + stepHeight / 2 + 1}
                textAnchor="start"
                dominantBaseline="middle"
                style={{ fill: 'var(--color-foreground-secondary)', fontSize: 11 }}
              >
                {formattedValue}
              </text>

              {/* Conversion rate — between this and next step */}
              {showConversions && i > 0 && (
                <text
                  x={leftLabelWidth + barAreaWidth / 2}
                  y={barY - gap / 2 - conversionRowHeight / 2}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  style={{ fill: 'var(--color-foreground-secondary)', fontSize: 11 }}
                >
                  {conversionPct}%
                </text>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
