import Link from 'next/link';

export default function HomePage() {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: 'radial-gradient(circle, color-mix(in srgb, currentColor 8%, transparent) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }}
    >
    <div className="mx-auto max-w-2xl px-6 py-16 md:py-24">

      {/* Intro */}
      <div className="mb-16">
        <h1 className="font-display font-extrabold text-3xl md:text-4xl text-foreground mb-6 leading-tight">
          DAVE is a personal and experimental design system.
        </h1>

        <h2 className="text-lg font-semibold text-fg-secondary mb-3">DAVE was created so I can experiment rapidly building outputs for mixed-methods research, AGUI and software for various projects.</h2>
        <div className="space-y-4 text-fg-secondary leading-relaxed">
         
          <p>
            It's built on the shoulders of a lot of amazing open source work, but it's ultimately for me — a sandbox to learn, iterate, and build things I actually want to use in my projects. If it happens to be useful to you too, that's a wonderful bonus.
          </p>

          <p>
            DAVE stands for DesignAdVancedEngineering. But really it's named after my best mate who is a no nonsense carpenter.
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

      {/* Technologies */}
      <div className="mb-16">
        <h2 className="text-xs font-semibold text-fg-secondary uppercase tracking-wider mb-4">Built on the shoulders of</h2>
        <div className="space-y-3">
          {[
            { name: 'Radix UI',      note: 'Every interactive component is built on Radix primitives. Accessibility and behaviour, done right at the base layer.' },
            { name: 'Tailwind CSS',  note: 'All styling. No CSS files, no modules, no fighting specificity — just utility classes that compose cleanly.' },
            { name: 'TypeScript',    note: 'Everything is typed. Props, variants, context values. If it compiles, it works.' },
            { name: 'React',         note: 'Obviously. But worth saying — this is a React-first system, not framework-agnostic by accident.' },
            { name: 'Recharts',      note: 'The chart layer. Wrapped tightly enough that you don\'t need to know it\'s there.' },
            { name: 'Next.js',       note: 'Powers this docs site. The components themselves are framework-agnostic.' },
          ].map(({ name, note }) => (
            <div key={name} className="flex gap-4 py-3 border-b border-border last:border-0">
              <span className="text-sm font-semibold text-foreground w-28 shrink-0">{name}</span>
              <span className="text-sm text-fg-secondary">{note}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Honesty section */}
      <div className="mb-16 rounded-[3px] border border-border bg-surface p-6">
        <h2 className="text-sm font-semibold text-foreground mb-3">A few honest things</h2>
        <ul className="space-y-2 text-sm text-fg-secondary">
          <li className="flex gap-2"><span className="text-fg-disabled mt-0.5">—</span><span>There is a <Link href="/roadmap" className="underline underline-offset-2 hover:text-foreground transition-colors">roadmap</Link>. I just don't promise to follow it.</span></li>
          <li className="flex gap-2"><span className="text-fg-disabled mt-0.5">—</span><span>There's no versioning promise. This is for me first.</span></li>
          <li className="flex gap-2"><span className="text-fg-disabled mt-0.5">—</span><span>It's MIT licensed. Take whatever's useful.</span></li>
          <li className="flex gap-2"><span className="text-fg-disabled mt-0.5">—</span><span>Accessibility matters to me, so that part is done properly.</span></li>
          <li className="flex gap-2"><span className="text-fg-disabled mt-0.5">—</span><span>Built with Claude. We have a good working relationship.</span></li>
        </ul>
      </div>

      {/* About */}
      <div className="mb-16">
        <h2 className="text-xs font-semibold text-fg-secondary uppercase tracking-wider mb-4">Conceptualised by</h2>
        <div className="flex items-center gap-3">
          <div>
            <a
              href="https://www.linkedin.com/in/hphillips/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-foreground hover:text-accent transition-colors"
            >
              Haydyn Phillips
            </a>
            <p className="text-sm text-fg-secondary">0 to 1 product leader, psychologist and researcher.</p>
          </div>
        </div>
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
    </div>
  );
}
