import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16 md:py-24">

      {/* Intro */}
      <div className="mb-16">
        <h1 className="font-display font-extrabold text-3xl md:text-4xl text-foreground mb-6 leading-tight">
          DAVE is my personal design system.
        </h1>
        <div className="space-y-4 text-fg-secondary leading-relaxed">
          <p>
            I got tired of rebuilding the same components every time I started something new. So I built this — a single place with all the UI I actually reach for.
          </p>
          <p>
            It's not trying to be Radix or shadcn. It's just mine. Opinionated, consistent, and good enough that I can start a new project without thinking about buttons for the fifth time.
          </p>
        </div>
      </div>

      {/* What's in it */}
      <div className="mb-16">
        <h2 className="text-xs font-semibold text-fg-secondary uppercase tracking-wider mb-4">What's in here</h2>
        <div className="space-y-3">
          {[
            { label: 'Components', detail: '50+ React components — forms, tables, overlays, data display, navigation.' },
            { label: 'Charts', detail: 'A small charting library built on Recharts, styled to match.' },
            { label: 'AI components', detail: 'A few things for building LLM interfaces. Work in progress.' },
            { label: 'Tokens', detail: 'A colour + spacing system that themes the whole thing with a few CSS variables.' },
          ].map(({ label, detail }) => (
            <div key={label} className="flex gap-4 py-3 border-b border-border last:border-0">
              <span className="text-sm font-semibold text-foreground w-28 shrink-0">{label}</span>
              <span className="text-sm text-fg-secondary">{detail}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Honesty section */}
      <div className="mb-16 rounded-[3px] border border-border bg-surface p-6">
        <h2 className="text-sm font-semibold text-foreground mb-3">A few honest things</h2>
        <ul className="space-y-2 text-sm text-fg-secondary">
          <li className="flex gap-2"><span className="text-fg-disabled mt-0.5">—</span><span>There's no roadmap. I add things when I need them.</span></li>
          <li className="flex gap-2"><span className="text-fg-disabled mt-0.5">—</span><span>There's no versioning promise. This is for me first.</span></li>
          <li className="flex gap-2"><span className="text-fg-disabled mt-0.5">—</span><span>It's MIT licensed. Take whatever's useful.</span></li>
          <li className="flex gap-2"><span className="text-fg-disabled mt-0.5">—</span><span>Accessibility matters to me, so that part is done properly.</span></li>
          <li className="flex gap-2"><span className="text-fg-disabled mt-0.5">—</span><span>Built with Claude. We have a good working relationship.</span></li>
        </ul>
      </div>

      {/* CTAs */}
      <div className="flex flex-wrap gap-3">
        <Link
          href="/docs/getting-started"
          className="inline-flex items-center justify-center h-9 px-4 rounded-[3px] bg-accent text-background text-sm font-semibold hover:bg-accent-hover transition-colors"
        >
          Look around
        </Link>
        <Link
          href="/docs/components/button"
          className="inline-flex items-center justify-center h-9 px-4 rounded-[3px] border border-border text-foreground text-sm font-medium hover:bg-surface transition-colors"
        >
          Components
        </Link>
        <a
          href="https://github.com/haydywoo/DAVE"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 justify-center h-9 px-4 rounded-[3px] border border-border text-foreground text-sm font-medium hover:bg-surface transition-colors"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
          </svg>
          GitHub
        </a>
      </div>

    </div>
  );
}
