import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge, Callout } from '@dave/react';

export const metadata: Metadata = { title: 'Observable Plot — Experimental' };

export default function ObservablePlotPage() {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="font-display font-semibold text-4xl text-foreground">Observable Plot</h1>
        <Badge variant="warning" size="xs">Experimental</Badge>
      </div>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        Exploratory prototypes using <a href="https://observablehq.com/plot/" target="_blank" rel="noopener noreferrer" className="text-accent-foreground underline underline-offset-2 hover:text-accent transition-colors">Observable Plot</a> — a grammar-of-graphics library from the Observable team. These sit alongside the existing Recharts-based <code className="font-code text-xs bg-surface px-1 py-0.5 rounded-[3px] border border-border">@dave/charts</code> to evaluate whether Plot is worth building out as a second charting layer.
      </p>

      <Callout title="What we're testing" className="mb-10">
        <ul className="list-disc list-outside pl-5 space-y-1">
          <li>How well Plot's SVG output accepts DAVE colour tokens as style overrides</li>
          <li>How much wrapper code each chart type needs vs Recharts</li>
          <li>Whether Plot's defaults are closer to our visual language out of the box</li>
        </ul>
      </Callout>

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Examples</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {[
          { title: 'Bar Chart',    href: '/docs/charts/observable-plot/bar',     desc: 'Categorical comparison using Plot.barY.' },
          { title: 'Line Chart',   href: '/docs/charts/observable-plot/line',    desc: 'Time-series with multiple series using Plot.line.' },
          { title: 'Scatter Plot',      href: '/docs/charts/observable-plot/scatter', desc: 'Correlation and distribution using Plot.dot.' },
          { title: 'Calendar Heatmap', href: '/docs/charts/observable-plot/heatmap', desc: 'GitHub-style contribution grid using Plot.cell with a discrete accent scale.' },
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
