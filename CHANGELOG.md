# Changelog

All notable changes to DAVE are documented here.
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [Unreleased]

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
