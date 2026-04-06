'use client';

import * as React from 'react';
import { getChartColors } from './colors';

const SSR_FALLBACK = [
  '#5755C5', '#0D9488', '#D97706', '#E11D48',
  '#16A34A', '#0284C7', '#7C3AED', '#EA580C',
];

/**
 * Returns the 8 resolved chart colours, automatically updating when the
 * theme switches between light and dark.
 *
 * Pass `overrides` to use specific colours for a single chart instead of
 * pulling from the palette.
 */
export function useChartColors(overrides?: string[]): string[] {
  const [colors, setColors] = React.useState<string[]>(() =>
    typeof window === 'undefined' ? SSR_FALLBACK : getChartColors(),
  );

  React.useEffect(() => {
    const update = () => setColors(getChartColors());
    update();
    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
    return () => observer.disconnect();
  }, []);

  if (overrides?.length) return overrides;
  return colors;
}
