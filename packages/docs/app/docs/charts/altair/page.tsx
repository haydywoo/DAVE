import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge, Callout } from '@haydywoo/dave-react';

export const metadata: Metadata = { title: 'Altair — Experimental' };

export default function AltairOverviewPage() {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="font-display font-semibold text-4xl text-foreground">Altair</h1>
        <Badge variant="warning" size="xs">Experimental</Badge>
      </div>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        Exploratory prototypes using <a href="https://vega.github.io/vega-lite/" target="_blank" rel="noopener noreferrer" className="text-accent-foreground underline underline-offset-2 hover:text-accent transition-colors">Vega-Lite</a> via <a href="https://github.com/vega/react-vega" target="_blank" rel="noopener noreferrer" className="text-accent-foreground underline underline-offset-2 hover:text-accent transition-colors">react-vega</a>. Specs in this section are written by hand — exactly what Python&rsquo;s <a href="https://altair-viz.github.io/" target="_blank" rel="noopener noreferrer" className="text-accent-foreground underline underline-offset-2 hover:text-accent transition-colors">Altair</a> emits — so analysis built in a notebook can be lifted into the docs site as a JSON spec, no chart-rewriting tax.
      </p>

      <Callout title="What we&rsquo;re testing" className="mb-10">
        <ul className="list-disc list-outside pl-5 space-y-1">
          <li>How declarative Vega-Lite specs feel against imperative chart libraries (Plot, Recharts)</li>
          <li>How DAVE design tokens flow into Vega&rsquo;s colour and axis configuration</li>
          <li>Whether Python-authored Altair specs round-trip into the Next.js docs without per-chart wrapper code</li>
        </ul>
      </Callout>

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Examples</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {[
          { title: 'Bar Chart',        href: '/docs/charts/altair/bar',     desc: 'Categorical comparison with sort encoding and on-hover tooltips.' },
          { title: 'Line Chart',       href: '/docs/charts/altair/line',    desc: 'Multi-series time chart, layered line + point + end-of-line labels.' },
          { title: 'Scatter Plot',     href: '/docs/charts/altair/scatter', desc: 'Bubble scatter with size encoding and four-field tooltips.' },
          { title: 'Calendar Heatmap', href: '/docs/charts/altair/heatmap', desc: 'GitHub-style 365-day grid with a continuous colour gradient.' },
        ].map(({ title, href, desc }) => (
          <Link key={href} href={href} className="rounded-[6px] border border-border bg-card p-4 shadow-card hover:bg-surface hover:border-border-strong transition-colors">
            <p className="text-sm font-semibold text-foreground mb-1">{title}</p>
            <p className="text-xs text-fg-secondary leading-relaxed">{desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
