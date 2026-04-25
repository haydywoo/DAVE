'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import type { VisualizationSpec } from 'vega-embed';

// Vega imports a Node-only `canvas` dep during module load and assumes a DOM
// at runtime. Both break Next.js static prerender. Defer the import to the
// client and skip SSR for this component entirely.
const VegaEmbed = dynamic(() => import('react-vega').then(m => m.VegaEmbed), { ssr: false });

export interface DaveTokens {
  accent:      string;
  success:     string;
  warning:     string;
  error:       string;
  foreground:  string;
  fgSecondary: string;
  fgSubdued:   string;
  border:      string;
  borderStrong:string;
  surface:     string;
  background:  string;
  card:        string;
}

const TOKEN_KEYS: Array<[keyof DaveTokens, string]> = [
  ['accent',       '--color-accent'],
  ['success',      '--color-success'],
  ['warning',      '--color-warning'],
  ['error',        '--color-error'],
  ['foreground',   '--color-foreground'],
  ['fgSecondary',  '--color-foreground-secondary'],
  ['fgSubdued',    '--color-foreground-subdued'],
  ['border',       '--color-border'],
  ['borderStrong', '--color-border-strong'],
  ['surface',      '--color-surface'],
  ['background',   '--color-background'],
  ['card',         '--color-card'],
];

function readTokens(): DaveTokens {
  const cs = getComputedStyle(document.body);
  const out = {} as DaveTokens;
  for (const [key, css] of TOKEN_KEYS) out[key] = cs.getPropertyValue(css).trim();
  return out;
}

/**
 * Reads DAVE design tokens from `:root` CSS custom properties on mount, and
 * re-reads when the theme class on `<html>` changes (light ↔ dark). Returns
 * `null` until first read so charts can defer rendering until colours are known.
 */
export function useDaveTokens(): DaveTokens | null {
  const [tokens, setTokens] = useState<DaveTokens | null>(null);
  useEffect(() => {
    setTokens(readTokens());
    const obs = new MutationObserver(() => setTokens(readTokens()));
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => obs.disconnect();
  }, []);
  return tokens;
}

interface VegaChartProps {
  spec:       VisualizationSpec;
  className?: string;
}

/** Thin wrapper around react-vega's VegaEmbed. Hides the action menu and
 * scopes to a responsive container for our pages. */
export function VegaChart({ spec, className }: VegaChartProps) {
  return (
    <VegaEmbed
      spec={spec}
      options={{ actions: false, renderer: 'svg' }}
      className={className ?? 'w-full overflow-x-auto'}
    />
  );
}
