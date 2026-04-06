'use client';

import * as React from 'react';
import type { TooltipProps } from 'recharts';
import type { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';

interface ChartTooltipProps extends TooltipProps<ValueType, NameType> {
  valueFormatter?: (value: number) => string;
}

export function ChartTooltip({
  active,
  payload,
  label,
  valueFormatter,
}: ChartTooltipProps) {
  if (!active || !payload?.length) return null;

  return (
    <div
      style={{
        background: 'var(--color-card)',
        border: '1px solid var(--color-border)',
        borderRadius: 4,
        padding: '8px 12px',
        boxShadow: '0 1px 4px 0 rgba(0,0,0,0.08)',
        fontSize: 12,
        minWidth: 120,
      }}
    >
      {label != null && (
        <p style={{ color: 'var(--color-foreground-secondary)', marginBottom: 6, fontWeight: 500 }}>
          {label}
        </p>
      )}
      {payload.map((entry, i) => (
        <div
          key={i}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: '2px 0',
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              backgroundColor: entry.color,
              flexShrink: 0,
            }}
          />
          <span style={{ color: 'var(--color-foreground-secondary)', flex: 1 }}>
            {entry.name}
          </span>
          <span
            style={{
              color: 'var(--color-foreground)',
              fontWeight: 600,
              fontVariantNumeric: 'tabular-nums',
              paddingLeft: 12,
            }}
          >
            {valueFormatter
              ? valueFormatter(entry.value as number)
              : (entry.value as number).toLocaleString()}
          </span>
        </div>
      ))}
    </div>
  );
}
