import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-[3px] border border-accent-subtle-border bg-accent-subtle px-3 py-1 mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="text-xs font-semibold text-accent-foreground">Early access</span>
          </div>

          <h1 className="font-display font-extrabold text-foreground leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}>
            Design with<br />
            <span className="text-accent">intention.</span>
          </h1>

          <p className="mt-6 text-lg text-fg-secondary max-w-xl leading-relaxed">
            DAVE is an open-source design system built for teams who care about accessibility,
            consistency, and craft — without looking like every other design system.
          </p>

          <div className="mt-10 flex items-center gap-4">
            <Link
              href="/docs/getting-started"
              className="inline-flex items-center justify-center h-10 px-5 rounded-[3px] bg-accent text-background text-sm font-semibold hover:bg-accent-hover transition-colors"
            >
              Get started
            </Link>
            <Link
              href="/docs/components/button"
              className="inline-flex items-center justify-center h-10 px-5 rounded-[3px] border border-border text-foreground text-sm font-semibold hover:border-border-strong transition-colors"
            >
              Browse components
            </Link>
          </div>
        </div>
      </section>

      {/* Feature strip */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="h-8 w-8 rounded-[3px] bg-accent-subtle flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="text-accent">
                  <path d="m9 12 2 2 4-4" /><circle cx="12" cy="12" r="10" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Accessible by default</h3>
              <p className="text-sm text-fg-secondary leading-relaxed">
                Every component meets WCAG 2.1 AA. Contrast ratios verified, keyboard navigation
                built in, ARIA attributes correct.
              </p>
            </div>

            <div>
              <div className="h-8 w-8 rounded-[3px] bg-accent-subtle flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="text-accent">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Themeable</h3>
              <p className="text-sm text-fg-secondary leading-relaxed">
                Override a handful of CSS custom properties and the entire system re-themes —
                no rebuild, no forking, no fighting the defaults.
              </p>
            </div>

            <div>
              <div className="h-8 w-8 rounded-[3px] bg-accent-subtle flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="text-accent">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Open source</h3>
              <p className="text-sm text-fg-secondary leading-relaxed">
                MIT licensed. Use it, fork it, contribute to it. The token architecture is
                designed for teams to build on top of.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Token callout */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-16 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
          <div className="max-w-lg">
            <h2 className="font-display font-extrabold text-2xl text-foreground mb-2">
              One line to theme it.
            </h2>
            <p className="text-sm text-fg-secondary leading-relaxed">
              Override the CSS custom properties for your accent colour. Every component — buttons,
              badges, checkboxes, focus rings — updates automatically.
            </p>
          </div>
          <pre className="font-code text-xs bg-inverse text-background rounded-[3px] p-5 shrink-0 leading-relaxed overflow-x-auto">
            <span className="text-fg-secondary">{`/* your-theme.css */`}</span>{`
:root {
  --accent-9:  `}<span className="text-accent" style={{ color: '#7977D6' }}>#2D24AE</span>{`;
  --accent-10: #231B9A;
  --accent-11: #3B33BB;
}`}
          </pre>
        </div>
      </section>
    </div>
  );
}
