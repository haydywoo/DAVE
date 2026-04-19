import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roadmap',
  description: 'What\'s coming next to DAVE.',
};

const items = [
  {
    id: '01',
    area: 'AI',
    title: 'A proper AI component section',
    status: 'next',
    description:
      'The existing AI components are useful but loose. The plan is a full agent-interaction toolkit: structured message threads with tool-call rendering, streaming states that feel native, a thinking block that actually conveys cognitive weight, and a first-class approval gate pattern for human-in-the-loop flows.',
    details: [
      'Richer Message component — citations, inline tool results, collapsible reasoning',
      'Streaming cursor + token-level animation that degrades gracefully',
      'Agent trace view — a collapsible tree of tool calls and results',
      'Conversation branching UI for multi-turn comparison',
    ],
  },
  {
    id: '02',
    area: 'Quant',
    title: 'Visualising complex research',
    status: 'exploring',
    description:
      'Quant research involves data that defies standard chart types — regime transitions, factor loading matrices, rolling correlation surfaces. The goal is a small suite of purpose-built visualisation primitives that sit on top of the existing chart layer and handle the complexity without the caller needing to know how.',
    details: [
      'Heatmap calendar with density encoding',
      'Correlation matrix with hierarchical clustering',
      'Factor exposure bar with error bounds',
      'Drawdown chart with regime shading overlay',
    ],
  },
  {
    id: '03',
    area: 'AGUI',
    title: 'Agent-User Interface patterns',
    status: 'exploring',
    description:
      'AGUI is an emerging interaction layer — the space between a user and an autonomous agent acting on their behalf. The primitives don\'t exist yet. I want to build the first credible component set for this: progress surfaces that convey agent state without overwhelming, interruption patterns, and delegation UI that makes handing off to an agent feel safe.',
    details: [
      'Agent status surface — what it\'s doing, what it\'s decided, what it\'s waiting on',
      'Interrupt / override controls that don\'t break flow',
      'Permission & scope UI — what can the agent touch?',
      'Result handoff — structured output the user can verify and accept',
    ],
  },
  {
    id: '04',
    area: 'Platform',
    title: 'General improvements',
    status: 'ongoing',
    description:
      'Ongoing work to keep the system sharp: better docs, consistent APIs, and a few things that have been quietly annoying me for a while.',
    details: [
      'Dark mode polish — a few edge cases still catch light in the wrong places',
      'Full keyboard navigation audit across interactive components',
      'Motion system — a shared easing + duration token set so animations feel related',
      'Storybook integration for isolated component development',
    ],
  },
];

const statusConfig: Record<string, { label: string; color: string; dot: string }> = {
  next:      { label: 'Up next',    color: 'text-accent',             dot: 'bg-accent' },
  exploring: { label: 'Exploring',  color: 'text-fg-secondary',       dot: 'bg-fg-secondary' },
  ongoing:   { label: 'Ongoing',    color: 'text-fg-secondary',       dot: 'bg-fg-secondary' },
};

export default function RoadmapPage() {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: 'radial-gradient(circle, color-mix(in srgb, currentColor 8%, transparent) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }}
    >
      <div className="mx-auto max-w-2xl px-6 py-16 md:py-24">

        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-semibold text-fg-secondary uppercase tracking-wider mb-4">Roadmap</p>
          <h1 className="font-display font-extrabold text-3xl md:text-4xl text-foreground mb-6 leading-tight">
            What I want to build next.
          </h1>
          <p className="text-fg-secondary leading-relaxed">
            No sprints, no PMs, no deadlines. Just things I genuinely want to exist. This is the honest list.
          </p>
        </div>

        {/* Items */}
        <div className="space-y-0">
          {items.map((item, i) => {
            const sc = statusConfig[item.status];
            return (
              <div
                key={item.id}
                className="group border-b border-border py-10 first:border-t"
              >
                <div className="flex items-start gap-6">

                  {/* Number */}
                  <span className="font-display font-extrabold text-4xl text-fg-disabled leading-none select-none shrink-0 w-12 text-right">
                    {item.id}
                  </span>

                  <div className="flex-1 min-w-0">
                    {/* Area + status */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-semibold uppercase tracking-wider text-fg-disabled">{item.area}</span>
                      <span className="text-fg-disabled text-xs">·</span>
                      <span className={`flex items-center gap-1.5 text-xs font-medium ${sc.color}`}>
                        <span className={`inline-block w-1.5 h-1.5 rounded-full ${sc.dot}`} />
                        {sc.label}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="font-display font-extrabold text-xl text-foreground mb-3 leading-snug">
                      {item.title}
                    </h2>

                    {/* Description */}
                    <p className="text-sm text-fg-secondary leading-relaxed mb-5">
                      {item.description}
                    </p>

                    {/* Detail bullets */}
                    <ul className="space-y-1.5">
                      {item.details.map((d, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm text-fg-secondary">
                          <span className="text-fg-disabled mt-0.5 shrink-0">—</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <div className="mt-16 rounded-[3px] border border-border bg-surface p-6">
          <p className="text-sm text-fg-secondary leading-relaxed">
            This list changes. Something might jump the queue because I need it for a project. Something might disappear because it turned out to be a bad idea. That's fine — it's mine.
          </p>
        </div>

      </div>
    </div>
  );
}
