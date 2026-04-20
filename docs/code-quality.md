# Code Quality & Consistency

## Overview

Consistency in DAVE comes from three layers, each doing a different job:

1. **Design system** — the source of truth for visual decisions
2. **Linting & formatting** — catches bugs and enforces code correctness
3. **CLAUDE.md** — bridges the gap for AI-generated code

---

## Layer 1: Design System

The strongest consistency guarantee. When everything uses the same tokens and components, the output is consistent by construction.

### Tokens (`@dave/tokens`)
CSS custom properties defined in `packages/tokens/tokens.css`. Every colour, shadow, and surface in the UI comes from here. Tailwind is configured to map these to utility classes (e.g. `bg-surface`, `text-fg-secondary`). Using raw hex values or Tailwind palette colours (e.g. `bg-gray-100`) bypasses the system and breaks light/dark mode.

### Component library (`@dave/react`)
Radix UI primitives with DAVE's visual language applied. Using the library means spacing, radius, focus rings, and interactive states are already correct — you don't have to think about them. Building custom UI instead of reaching for an existing component is the main source of drift.

### Tailwind config (`packages/docs/tailwind.config.js`)
Maps token CSS variables to Tailwind utility names. This is what makes `bg-card` and `border-border` work. Any new token added to `tokens.css` needs a corresponding entry here to be usable in Tailwind.

---

## Layer 2: Linting & Formatting

### Prettier
Handles formatting only — indentation, quotes, line length, trailing commas. Runs via `pnpm format`. No project-level `.prettierrc` is configured so it uses defaults (2-space indent, 80-char print width, semicolons on).

**To run:**
```bash
pnpm format          # format everything
pnpm format:fix      # alias for the same
```

### ESLint
Catches correctness and quality issues. Configured in `.eslintrc.cjs` at the repo root. Active plugins:

| Plugin | Purpose |
|---|---|
| `@typescript-eslint` | TypeScript-specific rules — unused vars, no-explicit-any, unsafe patterns |
| `eslint-plugin-react` | React rules — missing keys, unescaped entities |
| `eslint-plugin-react-hooks` | Hooks violations — rules of hooks, exhaustive deps |
| `eslint-plugin-import` | Import hygiene — duplicates, circular deps, unresolved paths |
| `eslint-plugin-jsx-a11y` | Accessibility — ARIA roles, keyboard nav, label association |
| `eslint-config-prettier` | Turns off ESLint formatting rules that conflict with Prettier |

**To run:**
```bash
pnpm lint            # lint docs app and components
pnpm lint:all        # lint entire monorepo via Turbo
```

**Node 25 caveat:** `eslint-plugin-jsx-a11y` has a compatibility issue with Node 25 and is conditionally skipped. The `isNode25` guard in `.eslintrc.cjs` handles this. Accessibility rules still run on Node 18–24. CI tests against Node 20 and Node 24, so the full rule set runs in CI. The project engine range is `>=18 <25`.

### What linting does NOT cover
- Tailwind class ordering or which utility patterns to use
- Whether `rounded-[3px]` or `rounded-sm` is used
- Component structure and naming conventions
- Visual consistency — token choices, spacing scale, interactive patterns

These are handled by Layer 3.

---

## Layer 3: CLAUDE.md

Documents the non-obvious patterns that aren't enforced by tooling. Loaded automatically into Claude's context at the start of every session. Lives at `CLAUDE.md` in the repo root.

Currently documents:
- Radius values (`rounded-[3px]` for controls, `rounded-[6px]` for surfaces)
- Semantic token class names
- The `.interactive` utility pattern for hover/active states
- Focus ring convention (`focus-visible:` not `focus:`)
- Icon button sizing (`w-8 h-8`, 15×15 icon)
- Typography classes
- Breakpoint conventions for the docs site
- Shadow/elevation tokens
- Disabled opacity (`opacity-40`)

**Keep it up to date.** When a new pattern is established or a mistake is spotted in generated code, add a note to `CLAUDE.md` so it doesn't repeat.

---

## Summary

| Layer | Tool | Enforces |
|---|---|---|
| Design system | `@dave/tokens`, `@dave/react`, Tailwind config | Visual correctness by construction |
| Formatting | Prettier | Code style — indentation, quotes, line length |
| Code quality | ESLint | Bugs, bad patterns, accessibility, import hygiene |
| AI consistency | `CLAUDE.md` | Patterns not covered by tooling |
