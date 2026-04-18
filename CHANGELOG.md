# Changelog

All notable changes to DAVE are documented here.
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [Unreleased]

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
