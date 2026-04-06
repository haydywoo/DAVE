/**
 * Chart colour palette.
 *
 * `getChartColors()` reads the resolved CSS variable values at runtime so the
 * palette automatically switches between light and dark values when the theme
 * changes.  Call it inside a component or effect — not at module top-level.
 *
 * Static `CHART_COLOR_VARS` gives you the raw CSS variable references for use
 * in SVG `fill`/`stroke` props that accept CSS variables directly.
 */

export const CHART_COLOR_VARS = [
  'var(--color-chart-1)',
  'var(--color-chart-2)',
  'var(--color-chart-3)',
  'var(--color-chart-4)',
  'var(--color-chart-5)',
  'var(--color-chart-6)',
  'var(--color-chart-7)',
  'var(--color-chart-8)',
] as const;

export type ChartColorIndex = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

/**
 * Resolve the current CSS variable values from the document root.
 * Returns an array of 8 hex/rgb strings in palette order.
 */
export function getChartColors(el: Element = document.documentElement): string[] {
  const style = getComputedStyle(el);
  return Array.from({ length: 8 }, (_, i) =>
    style.getPropertyValue(`--color-chart-${i + 1}`).trim(),
  );
}
