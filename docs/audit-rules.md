# Codebase Audit Rules

A repeatable, machine-checkable rubric for auditing the DAVE monorepo. Each rule has a **detection command** (greppable), a **severity**, and a **resolution path**. Designed to be run by humans, CI, or a Claude agent on demand.

Companion to `docs/code-quality.md` (which defines the layers) — this file defines **what to check, how, and when**.

---

## How to run an audit

### One-shot CLI sweep
```bash
pnpm audit:rules            # runs every detection command, prints violations
pnpm audit:rules --fix      # runs auto-fixable rules (focus rings, opacity, etc.)
pnpm audit:rules --report   # writes audit-report.md with findings
```

(Scripts to be added to root `package.json`. Until then, the grep commands in each rule below can be run directly.)

### Agent-driven audit
Spawn a Claude agent with the prompt at the bottom of this file. It returns a structured markdown report ranked by severity. Useful for periodic deep audits where context-aware judgement matters more than mechanical greps.

### CI integration
Recommended: a `audit-rules` GitHub Action job that runs on PRs, fails the build on any **High** severity violation introduced in the diff. **Medium** and **Low** are advisory only.

---

## Severity scale

| Severity | Meaning | CI behaviour |
|---|---|---|
| **High** | Breaks the design system contract or ships broken UX (a11y, broken tokens, type-unsafe escape hatches without justification). | Fail PR. |
| **Medium** | Convention drift that compounds over time (focus rings, named radii, missing dogfooding). | Warn — visible in PR comment. |
| **Low** | Stylistic or low-impact nits (TODO comments, console.logs in non-storybook code). | Advisory only. |

A rule's severity is fixed in this document. Don't downgrade in CI without amending the spec here first.

---

## Rule catalogue

Each rule has:
- **ID** — stable identifier for cross-referencing
- **Severity**
- **Why it matters** — the failure mode this prevents
- **Detection** — exact grep / AST query
- **Resolution** — what a fix looks like
- **Auto-fixable?** — yes if a deterministic codemod exists

---

### DS-001 — Focus rings must use `ring-offset-1`

- **Severity:** Medium
- **Why:** Inconsistent ring offset is the most common drift symptom. CLAUDE.md mandates `ring-offset-1` for all focus-visible rings.
- **Detection:**
  ```bash
  grep -rn "ring-offset-2\|ring-offset-4\|ring-offset-8" packages/ \
    --include="*.tsx" --include="*.ts" --include="*.mdx" \
    | grep -v node_modules | grep -v dist
  ```
- **Resolution:** Replace with `ring-offset-1`. Mechanical.
- **Auto-fixable?** Yes — `find ... -exec sed -i '' 's/ring-offset-2/ring-offset-1/g' {} +`

---

### DS-002 — No raw hex or named Tailwind palette colours

- **Severity:** High
- **Why:** Bypasses the token system, breaks light/dark mode.
- **Detection:**
  ```bash
  # raw hex in className strings
  grep -rnE "(bg|text|border|fill|stroke)-\[#[0-9a-fA-F]{3,8}\]" packages/ \
    --include="*.tsx" --include="*.ts"

  # Tailwind palette colours
  grep -rnE "(bg|text|border)-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-[0-9]+" packages/ \
    --include="*.tsx" --include="*.ts"
  ```
  Allowlist: `packages/storybook/`, charts demos with chart-specific encoding tokens.
- **Resolution:** Map to a semantic token (`bg-card`, `text-fg-secondary`, etc.). If no token fits, add one to `packages/tokens/tokens.css` first.
- **Auto-fixable?** No — requires semantic intent.

---

### DS-003 — No named Tailwind radii on controls or surfaces

- **Severity:** Medium
- **Why:** CLAUDE.md mandates `rounded-[3px]` for controls and `rounded-[6px]` for surfaces. `rounded-md`/`rounded-lg`/etc. drift the corner scale.
- **Detection:**
  ```bash
  grep -rnE "rounded-(sm|md|lg|xl|2xl|3xl)\b" packages/ \
    --include="*.tsx" --include="*.ts" --include="*.mdx" \
    | grep -v node_modules | grep -v dist
  ```
  `rounded-full` is a separate rule (DS-004) — not flagged here.
- **Resolution:** Replace with `rounded-[3px]` (control) or `rounded-[6px]` (surface). Apply judgement on which.
- **Auto-fixable?** Partially — `rounded-md` → `rounded-[3px]` is usually safe for controls; needs review for surfaces.

---

### DS-004 — `rounded-full` review

- **Severity:** Low
- **Why:** Most uses are legitimately circular (avatar, switch thumb, dot, FAB). A handful (chip pill, tag pill) are stylistic decisions that may contradict the "tags use `rounded-[3px]`" rule. Reviewer judgement required.
- **Detection:**
  ```bash
  grep -rn "rounded-full" packages/components/src packages/docs \
    --include="*.tsx" --include="*.ts"
  ```
- **Resolution:** Treat as a flagged report, not a fix. Each violation needs a design call.
- **Auto-fixable?** No.

---

### DS-005 — `.interactive` utility instead of raw `hover:bg-*` on non-button surfaces

- **Severity:** Medium (docs site only)
- **Why:** `.interactive` is wired to `--color-interactive-hover`/`-active` and includes the focus ring. Raw `hover:` utilities drift away from token control.
- **Scope:** **Docs site only.** The component library (`packages/components`) cannot use `.interactive` — it's defined in `packages/docs/app/globals.css`. Component-internal `hover:` is unavoidable and not a violation.
- **Detection:**
  ```bash
  # find hover utilities on non-button elements in docs
  grep -rn "hover:bg-\|hover:text-" packages/docs \
    --include="*.tsx" --include="*.ts" \
    | grep -v "<button\|<Button"
  ```
  Manual review required — links changing text colour on hover are fine; clickable rows / nav items / cards should use `.interactive`.
- **Resolution:** Replace `hover:bg-surface hover:border-border-strong` patterns with `interactive` class. Keep border highlight only if intentional.
- **Auto-fixable?** No — requires per-call judgement.

---

### DS-006 — Disabled state must use `opacity-40`

- **Severity:** Medium
- **Why:** CLAUDE.md mandates `opacity-40` for disabled state. `opacity-50`/`opacity-60` drift.
- **Scope:** **Disabled state only.** `opacity-50`/`-60` for muted-icon-when-idle dismiss buttons (Alert, Chip, Banner close X) is a separate visual treatment and not a violation.
- **Detection:**
  ```bash
  # opacity tied to disabled prop / disabled: utility
  grep -rnE "(disabled.*opacity-(50|60)|opacity-(50|60).*disabled)" packages/ \
    --include="*.tsx" --include="*.ts"
  ```
- **Resolution:** Replace with `opacity-40`.
- **Auto-fixable?** Yes for confirmed disabled-state matches; needs review otherwise.

---

### DS-007 — Focus rings must use `focus-visible:`, not `focus:`

- **Severity:** High
- **Why:** `focus:ring-*` fires on mouse click — visually noisy, bad UX. CLAUDE.md mandates `focus-visible:`.
- **Detection:**
  ```bash
  grep -rnE "\bfocus:ring-" packages/ \
    --include="*.tsx" --include="*.ts" --include="*.mdx" \
    | grep -v node_modules | grep -v dist
  ```
- **Resolution:** Rename `focus:` → `focus-visible:` for ring utilities.
- **Auto-fixable?** Yes — narrowly scoped sed.

---

### DS-008 — Shadows must use `shadow-card` or `shadow-raised`

- **Severity:** Medium
- **Why:** Tailwind named shadows (`shadow-md`/`-lg`) bypass the token system.
- **Detection:**
  ```bash
  grep -rnE "shadow-(sm|md|lg|xl|2xl|inner)\b" packages/ \
    --include="*.tsx" --include="*.ts"
  ```
- **Resolution:** Replace with `shadow-card` (cards) or `shadow-raised` (overlays).
- **Auto-fixable?** Partially — `shadow-md` → `shadow-card` is usually safe.

---

### DS-009 — Dogfooding `@dave/react` components

- **Severity:** Medium
- **Why:** Hand-rolled badges/buttons/chips in docs drift from the library. CLAUDE.md mandates dogfooding.
- **Detection:** No grep — requires inspection. Heuristics:
  - `<button` in docs `app/` files with non-trivial className → likely should be `<Button>`
  - `<span>` with `inline-flex.*rounded` and `bg-accent-subtle` → likely should be `<Chip>` or `<Badge>`
  - Modal/dialog markup using raw Radix → should use `<Dialog>` or `<Drawer>`
- **Resolution:** Audit `packages/components/src/components/` for an existing fit; if none, flag for the library before hand-rolling.
- **Auto-fixable?** No.

---

### TS-001 — No `any` type or `as any` casts without justification

- **Severity:** High (without comment) / Low (with `eslint-disable` + reason)
- **Why:** Erodes type safety. Reasonable escape hatches (forwardRef polymorphism, third-party type gaps) are OK if documented.
- **Detection:**
  ```bash
  grep -rnE "\bas\s+any\b|:\s*any\b" packages/components/src packages/docs \
    --include="*.tsx" --include="*.ts" \
    | grep -v "// eslint-disable.*no-explicit-any"
  ```
- **Resolution:** Replace with a real type, or add an `eslint-disable-next-line @typescript-eslint/no-explicit-any` comment with a one-line reason.
- **Auto-fixable?** No.

---

### TS-002 — No `@ts-ignore`; prefer `@ts-expect-error` with a comment

- **Severity:** High
- **Why:** `@ts-ignore` silently rots when underlying types change. `@ts-expect-error` errors out when no longer needed.
- **Detection:**
  ```bash
  grep -rn "@ts-ignore" packages/ --include="*.ts" --include="*.tsx"
  ```
- **Resolution:** Replace with `@ts-expect-error -- <reason>`.
- **Auto-fixable?** Yes — `@ts-ignore` → `@ts-expect-error` is mechanical, but reasons need adding manually.

---

### TS-003 — `.tsbuildinfo` files must not be tracked

- **Severity:** Medium
- **Why:** Build artifact — diff noise + stale incremental state on checkout.
- **Detection:**
  ```bash
  git ls-files | grep tsbuildinfo
  ```
- **Resolution:** Add `*.tsbuildinfo` to `.gitignore`, then `git rm --cached <file>`.
- **Auto-fixable?** Yes.

---

### A11Y-001 — Icon buttons must have `aria-label`

- **Severity:** High
- **Why:** Screen readers announce icon-only buttons as nothing useful without one. Already partially enforced by `eslint-plugin-jsx-a11y` (Node 18–24 only).
- **Detection:** ESLint rule `jsx-a11y/control-has-associated-label` covers most cases. Manual sweep:
  ```bash
  # buttons that contain only an svg child
  grep -rnPzo "<button[^>]*>\s*<svg" packages/ --include="*.tsx" \
    | grep -v "aria-label"
  ```
- **Resolution:** Add `aria-label="…"`. Use `<span className="sr-only">` if the label is duplicated visibly elsewhere.
- **Auto-fixable?** No.

---

### A11Y-002 — All interactive elements must be keyboard-reachable and have a focus ring

- **Severity:** High
- **Why:** `onClick` on a `<div>` without `role`, `tabIndex`, and focus styling fails keyboard nav.
- **Detection:** Manual + ESLint `jsx-a11y/no-static-element-interactions`. Spot-check:
  ```bash
  grep -rn "<div[^>]*onClick" packages/ --include="*.tsx"
  ```
- **Resolution:** Use a `<button>`, or add `role="button" tabIndex={0}` + keyboard handler + focus-visible ring.
- **Auto-fixable?** No.

---

### CODE-001 — No `console.log` outside of Storybook stories

- **Severity:** Low
- **Why:** Leftover debug noise in production builds.
- **Detection:**
  ```bash
  grep -rn "console\.log" packages/components/src packages/docs \
    --include="*.tsx" --include="*.ts" \
    | grep -v storybook
  ```
- **Resolution:** Remove, or replace with a structured logger if intentional.
- **Auto-fixable?** No (deletion is rarely safe to automate).

---

### CODE-002 — No committed `.DS_Store` / OS artifacts

- **Severity:** Low
- **Why:** Cruft. Already in `.gitignore`, so any tracked occurrence is a slip.
- **Detection:**
  ```bash
  git ls-files | grep -E "(\.DS_Store$|Thumbs\.db$|\._.*)"
  ```
- **Resolution:** `git rm --cached <file>`.
- **Auto-fixable?** Yes.

---

### CODE-003 — Stale TODO / FIXME without owner or ticket

- **Severity:** Low
- **Why:** Drives up grep noise; orphan TODOs rot.
- **Detection:**
  ```bash
  grep -rnE "TODO|FIXME|XXX|HACK" packages/ --include="*.tsx" --include="*.ts" \
    | grep -vE "TODO\([a-z]+\):|TODO\s*#[0-9]+"
  ```
- **Resolution:** Convert to `TODO(<owner>): <reason>` or `TODO #<issue>`. Or remove.
- **Auto-fixable?** No.

---

## Modern testing procedures

The audit rules above are static. Runtime correctness needs a parallel testing layer.

### T-1 — Visual regression (recommended, not yet wired)

- **Tool:** [Chromatic](https://www.chromatic.com/) or Playwright `toHaveScreenshot()`.
- **Scope:** All Storybook stories in `packages/storybook`.
- **Trigger:** Every PR touching `packages/components` or `packages/tokens`.
- **Why:** Token changes silently shift colour/spacing across dozens of components. Visual diff catches what eyes miss.

### T-2 — Component unit tests (Vitest + Testing Library)

- **Tool:** [Vitest](https://vitest.dev/) (faster than Jest, ESM-native, integrates with Vite).
- **Scope:** Critical primitives — Button, Form fields (Input, Select, Checkbox, Radio, Switch), Dialog, Drawer, Table, DataTable.
- **Test classes:**
  - **Render contract** — given props, the right semantic element is rendered (`<button>` vs `<a>` vs `<div>`).
  - **Interaction** — click, keyboard nav, focus management.
  - **A11y** — `axe-core` assertion on rendered tree (zero violations).
- **Setup template:**
  ```ts
  // packages/components/src/components/Button/Button.test.tsx
  import { render, screen } from '@testing-library/react';
  import userEvent from '@testing-library/user-event';
  import { axe } from 'jest-axe';
  import { Button } from './Button';

  test('renders button with accessible name', () => {
    render(<Button>Save</Button>);
    expect(screen.getByRole('button', { name: 'Save' })).toBeInTheDocument();
  });

  test('no a11y violations', async () => {
    const { container } = render(<Button>Save</Button>);
    expect(await axe(container)).toHaveNoViolations();
  });
  ```

### T-3 — Type tests (`tsd` or `expect-type`)

- **Tool:** [`expect-type`](https://github.com/mmkal/expect-type) — assertion-style type-level tests.
- **Scope:** Polymorphic components (Chip's `as button | span`), generic components (`<Select<T>>`), forwardRef chains.
- **Why:** Prevents the public API from regressing under refactors.

### T-4 — Accessibility (axe + manual)

- **Automated:** `jest-axe` in unit tests (T-2).
- **Storybook integration:** [`@storybook/addon-a11y`](https://storybook.js.org/addons/@storybook/addon-a11y) — runs axe in the Storybook UI per story.
- **Manual checklist** (per release):
  - Tab through every interactive element on a page; focus ring visible everywhere.
  - VoiceOver / NVDA pass on dialog, drawer, table, datepicker.
  - 200% browser zoom — no horizontal scroll, no clipped content.

### T-5 — End-to-end (Playwright)

- **Scope:** Docs site critical paths — search, navigation, theme toggle, feedback widget.
- **Trigger:** On main, post-deploy.
- **Frequency:** Daily smoke run + per-PR for changes touching `packages/docs/app`.

### T-6 — Build & bundle health

- **Bundle size budget:** [`size-limit`](https://github.com/ai/size-limit) on `@dave/react` exports. Fail PR if a component grows by > 5 KB gzipped without justification.
- **Tree-shaking check:** Verify each component is independently importable (`import { Button } from '@dave/react/Button'`) without pulling in the whole library.

---

## Code-based alignment protocols

How the rules in this doc stay aligned with the codebase, the design system, and AI-generated code.

### CBAP-1 — CLAUDE.md is the source of truth for AI alignment

- All design-system rules (radii, tokens, focus rings, opacity) live in `CLAUDE.md` at the repo root.
- This file (`docs/audit-rules.md`) **mirrors and operationalises** those rules — it does not invent new ones.
- When `CLAUDE.md` changes, audit rules must be updated in the same PR.

### CBAP-2 — Rules must be machine-checkable or explicitly flagged as judgement-required

Every rule in this document falls into one of two buckets:

1. **Mechanical** — has a grep / AST detection. Auto-fixable or near-auto-fixable. (DS-001, DS-006, DS-007, DS-008, TS-002, TS-003, CODE-001, CODE-002.)
2. **Judgement-required** — flagged for human review. (DS-004, DS-009, A11Y-002.)

A rule that is neither machine-checkable nor flagged as judgement is a bug in this document. Fix it.

### CBAP-3 — Token additions follow a fixed protocol

Adding a new colour, shadow, or spacing token:

1. Define in `packages/tokens/tokens.css` (light + dark variants).
2. Map to Tailwind utility in `packages/docs/tailwind.config.js`.
3. Document in CLAUDE.md if it has a non-obvious use case.
4. Build tokens (`pnpm -F @dave/tokens build`) before consuming.
5. Restart docs dev server to pick up dist changes (see CLAUDE.md "Workspace dev loop").

A new token without all four steps is incomplete and will break in some consumer.

### CBAP-4 — Component additions follow a fixed protocol

Adding a new component to `@dave/react`:

1. Component file in `packages/components/src/components/<Name>/<Name>.tsx`.
2. Export from the package barrel (`packages/components/src/index.ts`).
3. Storybook story in `packages/storybook/src/stories/<Name>.stories.tsx`.
4. Docs page in `packages/docs/app/docs/components/<name>/page.tsx` + demos.
5. Unit tests (T-2) for any component with non-trivial behaviour.
6. Build (`pnpm -F @dave/react build`) and restart docs dev server.

### CBAP-5 — Drift detection on every PR

CI runs the audit-rules sweep on every PR. The job:

1. Runs `pnpm audit:rules` against the diff (not the whole codebase — only changed files).
2. Comments on the PR with violations grouped by severity.
3. Blocks merge if any **High** severity is introduced.
4. Surfaces **Medium** as warnings — author may merge with reviewer sign-off.

A whole-codebase sweep runs nightly on `main` and posts to a `#design-system-drift` channel (or equivalent).

### CBAP-6 — Rules are versioned

Each rule has a stable ID (`DS-001`, `TS-002`, etc.). Removing or renaming a rule is a breaking change to this doc — note it in `CHANGELOG.md`. Adding rules is non-breaking. Severity changes are non-breaking but should be flagged in PR descriptions.

### CBAP-7 — Periodic deep audit

Run a Claude agent against the prompt in [Appendix A](#appendix-a-agent-prompt) once per quarter (or before major releases). The agent's report goes into `docs/audits/<YYYY-MM-DD>.md` and is reviewed in the next design-system meeting.

---

## Appendix A: Agent prompt

Use this prompt with the Explore subagent (or general-purpose agent) for a thorough audit pass. Saved here so it's runnable from anywhere with `claude` or via the Agent tool.

```
Audit the DAVE monorepo against docs/audit-rules.md. The repo lives at
/Users/haydynphillips/Desktop/DAVE.

For each rule (DS-001 through CODE-003):
1. Run the detection command exactly as specified.
2. Group violations by file:line.
3. Classify each violation: confirmed, false-positive, or judgement-required.
4. For judgement-required cases, give a one-line take.

Skip storybook unless explicitly told otherwise.

Output structure:
- Summary table: rule ID, severity, count of confirmed violations.
- Per-rule sections with file:line excerpts (cap at top 10 worst offenders).
- "Judgement-required" section listing cases needing human input.
- "Recommendations" section ordered by severity, with auto-fix suggestions
  where applicable.

Cap output at 1500 words. Do not fix anything — research only.
```

---

## Appendix B: Future rules to consider

Not yet implemented; stubs for discussion.

- **DS-010** — Spacing scale: enforce that all `gap-*`, `p-*`, `m-*` utilities use the 4px-multiple subset (`gap-1`, `gap-1.5`, `gap-2`, `gap-3`, `gap-4`, `gap-6`, `gap-8`...). Reject `gap-[5px]` and similar arbitrary values.
- **DS-011** — Typography: enforce that `text-*` size utilities are paired with line-height (`text-sm leading-5` etc.) for any block of body text.
- **PERF-001** — No client components (`'use client'`) in the docs app without a state/effect/event handler that requires it.
- **PERF-002** — No `import * as` from large packages — forces full bundle.
- **DOC-001** — Every component in `@dave/react` has a corresponding docs page with at least one Preview demo.
