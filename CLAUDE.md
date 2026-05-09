# DAVE — Claude working notes

## Stack
Next.js 14 App Router · TypeScript · Tailwind CSS · Radix UI · `@dave/react` component library · `@dave/tokens` CSS custom properties · pnpm monorepo

## Dogfooding rule
ALWAYS use `@dave/react` components when one fits the use case. If it's not clear whether one exists, check `packages/components/src/components/` and read the component before deciding. Never hand-roll a badge, button, chip, or other primitive that already exists in the library. If no component fits, flag it and agree on an approach before building.

## Radii
- Controls (buttons, inputs, badges, tags): `rounded-[3px]`
- Surfaces (cards, popovers, modals, panels): `rounded-[6px]`
- Never use Tailwind's named radius scale (`rounded-md`, `rounded-lg`, etc.)

## Colour tokens (Tailwind classes)
Always use semantic tokens, never raw hex or Tailwind palette colours.

| Purpose | Class |
|---|---|
| Page background | `bg-background` |
| Subtle fill, inputs | `bg-surface` |
| Card / panel | `bg-card` |
| Elevated overlay (dropdown, popover, dialog) | `bg-raised` |
| Primary text | `text-foreground` |
| Secondary text | `text-fg-secondary` |
| Muted / hint text | `text-fg-subdued` |
| Disabled text | `text-fg-disabled` |
| Default border | `border-border` |
| Strong border | `border-border-strong` |
| Accent (buttons, links, focus) | `bg-accent` / `text-accent` |

## Interactive states
Use the `.interactive` utility class for hover/active/focus on clickable non-button elements (nav items, list rows, etc.). Do **not** write raw `hover:bg-*` utilities for interactive surfaces — `.interactive` is already wired to the correct tokens.

```tsx
// correct
<div className="rounded-[3px] px-3 py-2 interactive">...</div>

// wrong
<div className="rounded-[3px] px-3 py-2 hover:bg-gray-100">...</div>
```

## Focus rings
Always `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1`. Never `focus:ring-*` (applies on mouse click too).

## Icon buttons
Standard size: `w-8 h-8`, `rounded-[3px]`, icon `15×15`. Use `aria-label`, no visible text.

## Typography
- Display / headings: `font-display font-semibold` (Syne 600)
- Body: default (Instrument Sans via `font-body` on `<body>`)
- Code: `font-code` or `font-mono`

### Heading scale
- Marketing hero: `text-5xl md:text-6xl font-semibold`
- Page title (h1): `text-4xl font-semibold`
- Dashboard / sidebar h1: `text-3xl font-semibold`
- Section header (h2): `text-2xl font-semibold`
- Brand / wordmark: `text-lg font-extrabold` (only place Syne 800 is used)

## Breakpoints in the docs site
- Desktop nav and sidebar visible from `lg` (1024 px)
- Hamburger visible below `lg`
- Search bar visible from `sm` (640 px)

## Shadows / elevation
- Cards: `shadow-card`
- Overlays (dropdowns, dialogs): `shadow-raised`
- Never use `shadow-md`, `shadow-lg`, etc.

## Disabled state
Always `opacity-40`. Never `opacity-50` or `opacity-60`.

## Monorepo packages
- `packages/components` → `@dave/react` (UI + AI components)
- `packages/charts` → `@dave/charts`
- `packages/tokens` → `@dave/tokens` (tokens.css)
- `packages/docs` → Next.js docs site
- `packages/storybook` → Storybook

## Workspace dev loop
The docs app aliases `@dave/react` → `packages/components/dist/index.js` via webpack (see `packages/docs/next.config.mjs`). The dev server does **not** hot-reload this dist. So when editing `packages/components/src/`:

1. `pnpm -F @dave/react build` to update dist
2. Restart `pnpm -F @dave/docs dev` (Ctrl+C then re-run)

Symptom if you skip this: your component edits don't appear, even after save and browser refresh.

## Static export + basePath
Docs deploy via `output: 'export'` to GitHub Pages under `/DAVE`. Next's `basePath` auto-prefixes `<Link>` href and bundled assets, but **not** raw `<img src>`, inline `background-image` URLs, or `<a href>` outside `next/link`. For these, prepend the base path manually:

```tsx
<img src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/my-asset.jpg`} />
```

`NEXT_PUBLIC_BASE_PATH` is wired in `next.config.mjs` (empty in dev, `/DAVE` in prod).

## Commit messages

Conventional Commits, present tense, lowercase after the prefix.

**Type prefixes used in this repo:** `feat` (new feature), `fix` (bug fix), `chore` (housekeeping, deps, tooling), `docs` (docs site or README), `refactor` (no behaviour change), `revert` (revert).

**Subject line:** under 70 chars, lowercase after the prefix, no trailing period. Use a scope when one applies — `feat(docs):`, `fix(@dave/react):`, `chore(tooling):`.

**Body:** wrap at ~72 chars, explain *why* the change is needed; the *what* is in the diff. Bullet points for multiple distinct changes in one commit.

**Co-Authored-By trailer:** when Claude helps, end the message with
```
Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
```

### Generic phrasing in chore messages — non-negotiable

The public commit history is permanent. A message that says "remove leaked X path" *names X in the same breath as scrubbing it* — anyone reading `git log` learns exactly what used to be there. Fixing it after the fact requires a `git filter-repo` history rewrite + force-push to `main`, which is destructive and disruptive.

Apply generic phrasing in any commit — chore especially — that removes, renames, or scrubs something privacy-sensitive:

- Local-machine paths (anything containing `/Users/...`, `~/Desktop/...`, `~/dev/...`, `/home/...`)
- Personal email addresses
- Real third-party domains used as fake placeholders (use `example.com` / `example.org` / `example.net` instead — RFC 2606 reserves these so they never resolve to real services)
- Internal-only filenames you don't want catalogued in `git log` (private notes, draft checklists, scratch directories)
- Account identifiers tied to personal services (analytics IDs, form endpoints, dashboard URLs, third-party tokens of any kind)
- Any "personal" / "private" / "local-only" framing — even without specifics, this signals there was something worth scrubbing

The rule of thumb: **describe what the repo looks like *after* the change, not what was removed.** "Tidy demo data" describes the new state; "remove leaked personal email" describes the old state and signposts what to look for in the history.

### Bad → Good

| Avoid | Prefer |
|---|---|
| `chore: remove /Users/<user>/<folder> path from agent-rules` | `chore: replace example path in agent-rules` |
| `chore: scrub <category> references from public repo` | `chore: tidy <specific-file> and <specific-area>` |
| `chore: untrack local-only sandbox and <internal-doc>.md` | `chore: stop tracking stale sandbox and top-level checklist` |
| `chore: <name>@<real-domain>.com → placeholder@example.com (was real)` | `chore: use example.com placeholder in <demo-name>` |
| `docs: address findings from ~/Desktop/<folder>/<file>.md` | `docs: address findings from a fresh-install smoke test` |
| `chore: remove personal Clarity ID hardcoding` | `chore: move analytics ID to env var` |

### When specifics ARE fine

Don't go overly generic for non-sensitive cleanup. The rule kicks in only when the specific thing being named could itself be embarrassing or privacy-leaking after the cleanup is in. These are all fine to name verbatim:

- File paths inside the repo: `chore: delete unused packages/docs/components/old-Hero.tsx`
- Library names being removed: `chore: drop @observablehq/plot dep`
- Component or symbol renames: `refactor: rename PlotPage → ExperimentalChartPage`
- Specific bug fixes: `fix: avatar basePath prefix in production`
- Public APIs and public dependency names

### Never put in any commit message

- Absolute home-directory paths (`/Users/...`, `/home/...`, `~/Desktop/...`)
- Personal email addresses
- API keys, tokens, secrets — even ones being removed in that very commit
- Real third-party domains being used as fake placeholders (sanitize them on the way in, before they hit any commit)
- Internal-only filenames you wouldn't want on the front page

If the diff itself removes one of the above, the message describes the cleanup in *generic terms* — never quote the leaked value verbatim.

## How to work here

Behavioural rules, adapted from common LLM-coding failure modes. For trivial tasks use judgement — these bias toward caution over speed.

- **Think before coding.** State assumptions up front. If a task has more than one reasonable interpretation, present them — don't pick silently. If a simpler approach exists, say so and push back when warranted.
- **Verify the rendered output, not just the source.** Typecheck and build success are necessary but not sufficient. When a fix passes through Tailwind / `twMerge` / webpack / static export, grep the actually-produced HTML or CSS before declaring a change done. Pattern: a `cn()` class that looks correct in source can still be dropped by `twMerge` as a conflict-loser.
- **Surgical edits.** Every changed line must trace to the user's request. Don't "improve" adjacent code, comments, formatting, or unrelated dead code you notice in passing — flag it instead. Match existing style even if you'd write it differently.
- **Minimum viable change.** No speculative features, no configurability that wasn't asked for, no error handling for cases that can't happen. If a diff balloons past what feels right, ask: could this be half the code?
