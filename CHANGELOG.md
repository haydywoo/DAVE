# Changelog

All notable changes to DAVE are documented here.
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [Unreleased] — 2026-04-25

### Changed
- **Experimental Charts section — Observable Plot replaced with Altair / Vega-Lite** — the four `/docs/charts/observable-plot/{bar,line,scatter,heatmap}` example pages have been re-implemented in Vega-Lite specs rendered via `react-vega`. Path renamed to `/docs/charts/altair/*`; sidebar entries relabelled from "Plot — *" to "Altair — *". Specs live as plain `VisualizationSpec` JSON objects, the exact shape Python's Altair emits, so analyses authored in a notebook can be lifted into the docs site without rewriting the chart layer. New shared `<VegaChart>` + `useDaveTokens()` helper in `components/VegaChart.tsx` reads DAVE design tokens via `getComputedStyle` and re-reads on theme toggle so colours in the resulting SVG follow the active light/dark theme. `react-vega`, `vega`, and `vega-lite` added as docs dependencies; `@observablehq/plot` no longer used by these pages but stays installed for now.

## [Unreleased] — 2026-04-23

### Added
- **`List` + `ListItem`** — minimal stacked-row component for settings pages, activity feeds, inboxes, and file listings. Props: `divided`, `bordered`, `ordered`, `size` (`sm` | `md`). Items accept `onClick` (renders as `<button>`) or `href` (renders as `<a>`) with built-in hover + focus-ring treatment and optional `selected` state. No named slots — compose leading/trailing content with inline flex.
- **`Banner`** — fixed top-of-viewport notification strip for outages, maintenance windows, and global announcements. Four variants (`info`, `success`, `warning`, `error`). Optional action link and dismiss button. Mounts a `--banner-height` CSS custom property so the sticky nav offsets automatically. Controlled — caller owns visibility and can persist dismissal via `localStorage`.
- **Docs `FeedbackWidget` — now live** — the previously-unmounted in-page feedback popover (thumbs + optional comment + page URL) is wired to a Formspree endpoint and mounted in the root layout. Optimistic UX — the "thanks" view shows immediately, POST runs in the background, errors swallowed.
- **Docs `ConsentGate`** — small bottom-left consent card shown on first visit; loads Microsoft Clarity via `next/script` only after the user accepts. Choice persisted in `localStorage` (`dave-analytics-consent`). Clarity is no longer loaded unconditionally from the root layout.
- **Legal page — §7 Feedback & Privacy, §8 Analytics** — disclosure of Formspree as feedback processor (no cookies) and Microsoft Clarity as the analytics processor (cookies — loaded only after consent). "Changes to These Terms" renumbered to §9.
- **Docs sidebar badges** — `new` (primary solid) and `updated` (success solid) badges on nav items to surface recently shipped work. Currently applied to `Banner`, `Badge`, and `List`.
- **Observable Plot — Experimental section** — four example pages added under Charts › Experimental: Bar, Line, Scatter, and Calendar Heatmap. Uses a shared `PlotPage` wrapper for consistent layout. `@observablehq/plot` installed in docs. All examples use DAVE token CSS variables directly — no hex values.
  - **Calendar Heatmap** — GitHub-style 365-day contribution grid using `Plot.cell`. 5-step discrete accent colour scale via `color-mix()`. `Plot.tip` + `Plot.pointer` for instant hover tooltips. Month and day-of-week labels.

### Changed
- **`Badge`** — `appearance` prop (`solid` | `outline` | `dashed`). `dot` boolean prop renders a small status dot before the label. Neutral border token applied for better light/dark contrast.
- **Docs tables — horizontal-scroll dogfooding** — every table (MDX-rendered, `SemanticTable`, `PropsTable` desktop variant, typography scale/weight tables) is now wrapped in `@dave/react`'s `Table`, picking up left/right scroll shadows on narrow viewports. Replaces inline `overflow-hidden` wrappers that were clipping content on mobile.
- **MDX inline `<code>` pills** — `whitespace-nowrap` applied so token identifiers like `--color-accent-subtle-border` stay on one line instead of fragmenting across multiple mini-pills on narrow screens.
- **Body-text link style unified** — all prose links (legal page, `ConsentGate`, home roadmap callout, MDX content) now flow through a single `.prose-link` utility in `globals.css`: accent-foreground text, always-underlined at `underline-offset-4`, hover brightens to `text-accent`. Replaces three competing inline-className patterns.
- **Docs pricing card demo** — equal-width tiers, Pro differentiates via a 3px `border-t-accent` top rail, `shadow-raised` elevation, hero `text-5xl` display price, accent-foreground micro-type labels, and a primary CTA. Starter uses secondary CTA. Check icons dropped — plain text features. No dark-mode stunt.
- **Docs nav** — `v1.1` version badge added next to the DAVE wordmark. Uses `font-body` to stay in Instrument Sans rather than inheriting the display font. GitHub icon is now icon-only (`w-8 h-8`, matching ThemeToggle). Tooltips added to GitHub and theme toggle icons via `@dave/react` `Tooltip`. `ThemeToggle` refactored to `forwardRef` to support Radix trigger wiring.
- **AI overview** — amber "Under development" badge added inline with the `AI Components` page heading.
- **Docs favicon** — indigo geometric mark added; displayed next to the DAVE wordmark in the nav.
- **Docs sidebar** — section icons added using `@radix-ui/react-icons`; icon alignment corrected to match item left edge. Experimental charts section moved below Chart Types.
- **Token cascade** — dark mode refactored to a primitive-driven cascade. Status border contrast lifted.

### Fixed
- **Tailwind content paths** — `./mdx-components.tsx` was missing from the `content` glob, so any unique utility class used only in MDX renderers silently failed to compile. Added to the glob.
- **Heading + badge mobile wrapping** — `flex-wrap` added to all heading/badge flex containers (AI overview, Observable Plot overview, Plot example pages) so badges drop to the next line on small screens rather than squishing against the heading.

---

## [0.1.0] — 2026-04-20

First public release.

### Added
- **`DocCodeBlock`** — new client component for MDX pages. Matches the component demo `CodeBlock` exactly: `bg-[#161b22]` header bar with language label and copy button, `text-sm font-mono`, github-dark theme.
- **`CONTRIBUTING.md`** — contribution guidelines and local dev instructions.

### Changed

#### Tokens — dark mode overhaul
- **Surface hue** — all dark mode surfaces shifted from warm grays (H=80°) to indigo-blue (H=250°) to match industry-standard dark UI (GitHub, Linear). New scale: background `12%`, surface `16%`, card `21%`, raised `27%`, border `34%`.
- **Accent hue** — shifted from mauve (H=295°) to true indigo (H=265°), coherent with the H=250° surface family. Updated throughout both light and dark scales.
- **Selected / interactive states** — `--color-selected` now uses H=250° surface-matched values in dark mode (`oklch(36% 0.025 250)`); light mode uses neutral `var(--neutral-3/4)` — no more purple tint on hover.
- **Focus rings** — H=265° (indigo, matching accent) throughout light and dark.
- **`--color-accent-subtle` dark** — lifted to `oklch(25% 0.070 265)` so the soft button variant sits visibly above the card surface.
- **`--color-on-accent` / `--color-inverse`** — changed from pure white (100%) to off-white (95%) for A11Y best practice.

#### Code blocks
- **MDX code blocks** — now rendered via `DocCodeBlock` instead of a plain `<pre>`. Full syntax highlighting, header bar, copy button, and `text-sm font-mono` — visually identical to the component demo `CodeBlock`.
- **CodeBlock header** — explicit `bg-[#161b22]` (GitHub toolbar colour) applied to both `CodeBlock` and `DocCodeBlock` to distinguish header from code body.

#### Docs
- **MDX typography** — paragraph `mb-3` restored; `Disclaimer` upgraded from `bg-surface` to `bg-card` for sufficient contrast in dark mode; `[&>p]:mb-0` scoped to prevent paragraph margin inside disclaimer.
- **Tokens page** — introductory ASCII table replaced with a proper MDX table.
- **Accordion demos** — added bordered card wrapper so the transparent component has visible context.
- **CommandPalette active item** — changed from `bg-accent-subtle` to `bg-[var(--color-selected)]` for a neutral highlight consistent with nav selected states.
- **Preview alignment** — breadcrumb, textarea, file-input, and progress demos corrected to `center={false}`.

### Fixed
- **Focus ring hue** — linter had drifted `--color-focus` from H=265° to H=210°; restored.
- **Light mode nav hover/selected** — interactive tokens were only defined in `.dark`, causing accent colour to bleed into light mode hover states.
- **Roadmap link** — `<a href="/roadmap">` → Next.js `<Link>` so the `/DAVE` basePath prefix is applied in the GitHub Pages build.

### Accessibility
- Resolved all `jsx-a11y` errors breaking CI: invalid ARIA roles on `<Message>` (`ignoreNonDOM: true`), missing keyboard handlers on CommandPalette result items, unassociated labels in popover and settings forms, invalid `href="#"` on button demos.

### Repository
- Removed draft homepage variants and chat demo page before going public.
- All packages bumped `0.0.1` → `0.1.0`.
- README updated: correct token import path, OKLCH theming example, accurate colour description, Node version range.
- GitHub repo description and topics set.

---

## [Unreleased — pre-release history]

### Added

#### Components
- **Table** — `bordered` prop (default `true`). Set `bordered={false}` to remove the outer border and rounded corners when embedding inside a `Card`.
- **Table / DataTable** — `size` prop (`'sm' | 'md'`). Controls cell padding (`py-2` vs `py-3`) and text size (`text-xs` vs `text-sm`) via context — one prop coordinates the whole table.
- **DataTable** — `bordered` prop threaded through to `Table`.
- **Stat** — `sparkline` prop (`React.ReactNode` slot). Renders in the bottom-right corner alongside the change indicator — pass a `<Sparkline />` from `@dave/charts`.
- **Textarea** — `size` prop (`'sm' | 'md' | 'lg'`). Maps padding, text size, and `min-height` consistently with the form-control scale. Defaults to `'md'` (no breaking change).
- **RangeCalendar** — `footer` prop (`React.ReactNode`). Replaces the default hint text — pass `null` to hide entirely. Used by `DateRangePicker` to inject the Apply / Cancel bar.
- **RangeCalendar** — `initialMonth` prop. Controls which month is shown on the left when the calendar first renders. `DateRangePicker` uses this to open near the `to` date rather than the `from` date.

### Changed

#### Components
- **Button (link variant)** — size classes (`h-*`, `px-*`) are no longer applied to `variant="link"`. The link variant now renders as true inline text with no imposed height or padding.
- **Button (link variant)** — `hover:no-underline` removed. Underline now persists on hover; only the colour shifts to `accent-hover`.
- **SegmentedControl** — `sm / md / lg` trigger heights corrected to `h-7 / h-9 / h-11` (previously `h-6 / h-8 / h-10`). Now sits flush with `Button`, `Input`, and `Select` at every size.
- **Nav** — `depth` added to `NavContext`. `border-l-2` active indicator is scoped to depth-0 items only, preventing double borders on nested items. `NavGroup` gains an `active` prop and matching border logic. Item and group spacing tightened to `gap-0.5`.
- **Tabs** — hover states added to both `line` variant (`hover:bg-surface`) and `pill` variant (`data-[state=inactive]:hover:bg-card`).
- **DateRangePicker** — reworked to use a draft state pattern. The calendar now operates on an internal draft while the popover is open; changes are only committed on **Apply**. **Cancel** discards and closes. A **Clear** button resets the draft. Footer shows a live summary of the selected range as you pick.
- **DateRangePicker** — opens showing the months around `to` (the end of the range) rather than `from`, so the selection endpoint is immediately visible.
- **DateRangePicker / RangeCalendar** — range fill now persists correctly after both dates are selected (previously collapsed to a single point when `selecting` reset to `'from'`).

#### Visual — Colour Tokens (`tokens.css`)
- **Dark mode contrast** — wider surface elevation steps: background `8.5%→7.5%`, card `17.5%→18.5%`, raised `22%→25%`. `--color-border` was identical to `--color-raised` (both `oklch(22%)`); now `oklch(26.5%)` so borders are visible on all surfaces. `--color-border-strong` lifted from `28%` to `36%`.
- **Dark mode foreground** — secondary text lifted from `neutral-8` (65%) to `neutral-7` (74%); subdued from `neutral-9` (48%) to `neutral-8` (65%); disabled from `neutral-10` (34%) to `neutral-9` (48%).

### Changed

#### Visual — Colour Tokens (`tokens.css`)
- **Muted neutral scale** — chroma reduced ~50% across all 12 steps; lightness nudged up. Backgrounds now read as washed-out warm whites rather than saturated earth tones.
- **Accent shifted to mauve** — hue moved from indigo (H=270°) to mauve (H=295°) and chroma lowered slightly. Bridges the warm neutral base without the corporate purple feel.
- **Status colours converted to OKLCH** — success (sage green H=145°), warning (ochre H=72°), error (clay red H=22°) replaced saturated Tailwind hex values with perceptually-consistent OKLCH at lower chroma. Consistent with the softer overall palette.

#### Docs
- **Preview code tab** — replaced plain `<pre>` with the `CodeBlock` component (Shiki / github-dark). All component example code tabs now have full syntax highlighting, a language label, and a copy button — consistent with MDX code blocks.

---

### Fixed

- **Anatomy block mobile overflow** — added `overflow-x-auto` to all `<pre>` anatomy blocks across component pages and the homepage so wide content scrolls horizontally rather than breaking the layout.
- **ConversationList unread badge hidden on hover** — badge was using `group-hover:hidden` which made it disappear; replaced with an opacity-crossfade slot pattern so the badge and delete button transition smoothly without layout shift or judder.
- **ConversationList delete button top-left positioning** — Radix Tooltip anchors via `getBoundingClientRect()`; a `display:none` trigger returns `{x:0, y:0}` causing the tooltip to appear at the viewport origin. Fixed by keeping the button in the DOM at all times using `opacity-0 pointer-events-none` instead of conditional rendering.
- **Chart overview card links 404** — card `<a>` tags replaced with Next.js `<Link>` for internal routes. Static export with `trailingSlash: true` requires client-side routing for all internal links.
- **Sparkline bar cursor** — `cursor` fill was fully opaque, covering the bars on hover. Changed to `foreground` colour at 5% opacity so bars remain visible.
- **Message hydration mismatch** — `toLocaleTimeString()` without a pinned locale returns different formats in Node (server) vs browser. Pinned to `en-GB` for consistent HH:mm output.
- **Calendar width rendering** — day grid uses `absolute inset-0` so doesn't contribute to the `inline-flex` intrinsic width. Header text was determining width (~170px), making 7 columns too narrow for 32px day buttons. Added `min-w-[17rem]` to the outer container.
- **MDX internal links 404** — `<a>` elements in `mdx-components.tsx` now detect internal hrefs (starting with `/`) and render `<Link>` from `next/link` for client-side navigation.
- **Mobile nav sidebar offset** — added `overflow-x: hidden` to `body` to prevent horizontal content overflow from making the viewport scrollable, which caused `fixed left: 0` elements to appear shifted on iOS Safari. Closed sidebar also translated 1px further off-screen to eliminate subpixel hairline.
- **DataTable mobile scroll** — table had `w-full` inside the `overflow-x-auto` wrapper, forcing it to exactly the container width and preventing horizontal scroll. Changed to `min-w-full` so the table can grow wider than the container on small screens.

---

### Added

#### Components
- **DataTable** — `isLoading` prop renders organic-width skeleton rows while data is fetching; pagination footer hidden during load. Accepts optional `loadingRows` to control skeleton count.
- **Textarea** — `resize` prop (`'none' | 'y' | 'x' | 'both'`). Previously hard-coded to vertical-only.
- **FileAttachment** — `compact` boolean prop for single-line icon + name layout (no file size). Extended file-type icon set: video, audio, spreadsheet, word, presentation, archive, plain text/markdown.
- **Calendar** — month/year picker drill-down view. Click the month header to switch to a month grid; chevrons navigate years. Escape returns to day view.
- **Select / SelectField** — `SelectField` now auto-generates an id with `React.useId()` and passes it to the child `Select` via `cloneElement`, wiring `<label htmlFor>` correctly without manual id management.
- **Skeleton** — extends `HTMLAttributes<HTMLDivElement>` so `style`, `data-*`, and other native props work. Convenience `width` / `height` props retained.
- **Tokens** — `--color-raised` semantic alias (4th surface level above `card`, used by overlay components). `--shadow-card` and `--shadow-raised` CSS custom properties for elevation.
- **globals.css** — `.touch-target` utility class: on `@media (pointer: coarse)` devices, expands the `::after` hit area to a minimum of 44 × 44 px without affecting visual layout.

#### Tailwind
- `raised` colour token added to both `docs` and `storybook` Tailwind configs.
- `shadow-card` and `shadow-raised` box-shadow tokens added to both configs.

---

### Changed

#### Visual — Colour Tokens (`tokens.css`)
- **OKLCH migration** — entire colour primitive scale rewritten in OKLCH for perceptually-uniform lightness steps across neutral and accent scales.
- **Dark mode accent** — significantly more vivid: `oklch(66% 0.160 270)` vs the previous flat `#7977D6`. Accent hover lifted to `oklch(72% 0.145 270)`.
- **Dark mode status colours** — success/warning/error subtle backgrounds and foreground text re-tuned in OKLCH for correct perceived saturation.
- **Chart palette** — improved hue spread and vibrancy in both light and dark modes.
- **4-level dark surface hierarchy** — background → surface → card → raised are now visually distinct steps (previously card and surface-hovered were conflated).
- **Dark mode shadows** — `--shadow-card` uses a hairline top highlight (`oklch(100% 0 0 / 0.04)`) rather than a drop shadow (which is invisible dark-on-dark). `--shadow-raised` adds a ring + strong drop shadow.

#### Components
- **Card** — `shadow-card` elevation added. Cards now have visible depth in light mode.
- **All overlay surfaces** (Dropdown, ContextMenu, Select popover, Combobox popover, Popover, Dialog, AlertDialog, Drawer, CommandDialog, DateRangePicker calendar) — switched from `bg-card shadow-md/lg/xl` to `bg-raised shadow-raised`. In dark mode this produces a clearly elevated surface rather than a flat panel.
- **Button** — `transition-all` → `transition-colors duration-150 ease-out`. Removed `hover:shadow-md` from primary variant (caused layout thrash during hover).
- **Tooltip** — `shadow-md` → `shadow-sm` (appropriate for a 12 px tooltip bubble).
- **SuggestionChips** — `<div role="list">` → `<ul>`, buttons wrapped in `<li>`. `role="listitem"` removed from buttons (implicit from `<li>`).
- **TagInput** — thin `|` separator (`h-4 w-px bg-border-strong`) now appears between chips and the text input when tags are present. Disabled opacity `opacity-60` → `opacity-40`.
- **Combobox** — empty state upgraded from a plain text line to a muted search icon + message. `aria-activedescendant`, `aria-controls`, and stable option ids wired to search input.
- **Command / CommandEmpty** — empty state upgraded to match Combobox (icon + message).
- **Textarea** — error state now uses `focus-visible:ring-error` instead of `focus:ring-error`.
- **Calendar / DateRangePicker** — nav chevron buttons get `touch-target` class for 44 px hit area on touch devices.
- **TagInput** — remove-tag buttons get `touch-target` class.

#### Accessibility
- **`focus:ring-2` → `focus-visible:ring-2`** — corrected across all components that were applying focus rings on mouse click as well as keyboard navigation: Textarea, Navbar search, Pagination page-size select, NumberInput, FileInput, Combobox trigger, DateRangePicker trigger, OTPInput, Select trigger.
- **Disabled opacity** — standardised to `opacity-40` everywhere. Previously mixed between `opacity-40`, `opacity-50`, and `opacity-60` (Rating, DatePicker, DateRangePicker, TagInput).
- **FormField** — removed module-level `let fieldCount = 0` counter; now uses `React.useId()` (SSR-safe, no hydration mismatch).
- **Command / CommandItem** — removed module-level `let itemCounter = 0`; now uses `React.useId()`. Fixed `aria-expanded="true"` string literal → boolean `{true}`.
- **Table** — sortable `TableHead` and clickable `TableRow` now receive `tabIndex={0}` and `onKeyDown` (Enter / Space activates). Both get `focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent`.
- **CodeBlock** — fixed CSS counter Tailwind classes for line numbers: added `[counter-reset:line]` on container, corrected `[&_.line]:before:[counter-increment:line]` arbitrary variant.
- **DateRangePicker / MonthGrid** — always renders exactly 6 weeks using `addWeeks(gridStart, 5)`, eliminating height jitter when navigating between months with different week counts. Matches the fix applied to Calendar in the previous release.

#### Infrastructure
- **Node.js** — engine range tightened to `>=18 <25`; `.nvmrc` pins local dev to Node 24.

---

### Fixed

- **Sidebar active state** — `usePathname()` returns trailing slashes under `trailingSlash: true` (Next.js static export). Active-link comparison now strips the trailing slash before comparing against item hrefs.
- **Mobile sidebar scroll** — `overflow-y-auto` was gated on `lg:` breakpoint; now unconditional so the sidebar scrolls on mobile too.
- **Horizontal bar chart axis labels** — `BottomTick` (textAnchor `middle`, y+12) and `LeftTick` (textAnchor `end`, x−8, y+4) introduced to replace the previous single tick component that rendered incorrectly for horizontal layouts.
- **PropsTable mobile** — added dual representation: below `sm` breakpoint renders stacked cards (prop name, type full-width, description); `sm`+ retains the 4-column table. The monospace union types in the type column were unreadable at 375 px.
- **Prose link underline** — rewritten in explicit CSS (not `@apply`) to ensure `text-decoration-line: underline` is present in both default and `:hover` states. Previous `@apply hover:decoration-foreground` had specificity issues causing the underline to vanish on hover.
- **Skeleton** — `width` / `height` convenience props temporarily dropped in Wave 4 refactor, breaking the docs demo build. Restored alongside `HTMLAttributes` extension.

---

## Previous releases

See git log for changes prior to the audit cycle.
