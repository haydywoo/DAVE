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
