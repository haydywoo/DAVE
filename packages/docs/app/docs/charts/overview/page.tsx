import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Charts — Overview' };

const charts = [
  { name: 'Bar Chart',   href: '/docs/charts/bar-chart/',   desc: 'Grouped, stacked, and horizontal bars for comparing categorical data.' },
  { name: 'Line Chart',  href: '/docs/charts/line-chart/',  desc: 'Continuous trends over time with multiple series support.' },
  { name: 'Area Chart',  href: '/docs/charts/area-chart/',  desc: 'Filled area for volume and cumulative data over time.' },
  { name: 'Donut Chart', href: '/docs/charts/donut-chart/', desc: 'Part-to-whole proportions with an optional centre label.' },
  { name: 'Sparkline',    href: '/docs/charts/sparkline/',    desc: 'Compact inline chart for use inside stat cards and tables.' },
  { name: 'Scatter Plot', href: '/docs/charts/scatter-plot/', desc: 'Two-dimensional correlation chart with optional per-point labels.' },
  { name: 'Combo Chart',  href: '/docs/charts/combo-chart/',  desc: 'Bars and lines on the same chart, with optional dual y-axis.' },
  { name: 'Radar Chart',  href: '/docs/charts/radar-chart/',  desc: 'Multi-dimensional polygon chart for scoring and capability comparisons.' },
  { name: 'Funnel Chart', href: '/docs/charts/funnel-chart/', desc: 'Sequential drop-off chart for conversion flows and sales pipelines.' },
];

export default function ChartsOverviewPage() {
  return (
    <div>
      <h1 className="font-display font-extrabold text-3xl text-foreground mb-2">Charts</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        Data visualisation components built on Recharts. All charts use DAVE design tokens — colours, borders, and typography adapt automatically to light and dark themes.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {charts.map(item => (
          <a
            key={item.name}
            href={item.href}
            className="rounded-[4px] border border-border bg-card p-4 hover:bg-surface hover:border-border-strong transition-colors"
          >
            <p className="text-sm font-semibold text-foreground mb-1">{item.name}</p>
            <p className="text-xs text-fg-secondary leading-relaxed">{item.desc}</p>
          </a>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-border">
        <h2 className="font-display font-extrabold text-xl text-foreground mb-3">Installation</h2>
        <p className="text-sm text-fg-secondary mb-4">Charts live in a separate package so you only pay the bundle cost if you use them.</p>
        <pre className="rounded-[4px] bg-surface border border-border px-4 py-3 text-xs font-code text-foreground overflow-x-auto">
          {`pnpm add @dave/charts`}
        </pre>

        <h2 className="font-display font-extrabold text-xl text-foreground mt-10 mb-3">Colour palette</h2>
        <p className="text-sm text-fg-secondary mb-4 max-w-xl">
          Charts use a dedicated 8-colour categorical palette defined as CSS variables. Colours automatically switch between light and dark values when the theme changes.
        </p>
        <div className="flex flex-wrap gap-2">
          {[
            { label: 'chart-1', bg: 'var(--color-chart-1)' },
            { label: 'chart-2', bg: 'var(--color-chart-2)' },
            { label: 'chart-3', bg: 'var(--color-chart-3)' },
            { label: 'chart-4', bg: 'var(--color-chart-4)' },
            { label: 'chart-5', bg: 'var(--color-chart-5)' },
            { label: 'chart-6', bg: 'var(--color-chart-6)' },
            { label: 'chart-7', bg: 'var(--color-chart-7)' },
            { label: 'chart-8', bg: 'var(--color-chart-8)' },
          ].map(({ label, bg }) => (
            <div key={label} className="flex items-center gap-2 rounded-[3px] border border-border bg-card px-3 py-2">
              <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: bg }} />
              <span className="text-xs font-code text-fg-secondary">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
