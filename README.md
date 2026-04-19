# DAVE Design System

**Design · Accessibility · Value · Engineering**

An open-source design system built for teams who care about craft. DAVE provides a complete set of React components, design tokens, chart primitives, and AI-ready UI components — all built on Radix UI and Tailwind CSS, and styled with a warm, opinionated visual language.

> Named after one of my best friends.

---

## Packages

| Package | Description |
|---|---|
| `@dave/react` | 54 production-ready React components |
| `@dave/charts` | 10 chart components built on Recharts |
| `@dave/tokens` | Design tokens as CSS custom properties |
| `@dave/docs` | Documentation site (Next.js + MDX) |
| `@dave/storybook` | Storybook for component development |

---

## Components

### UI (`@dave/react`)

**Layout**
Accordion · Card · Collapsible · Divider · Tabs

**Navigation**
Breadcrumb · Nav · Navbar · Pagination · Stepper

**Forms**
Button · Checkbox · Chip · Combobox · Copy Button · Date Picker · Date Range Picker · Dropzone · File Input · Form Field · Input · Number Input · OTP Input · Radio · Rating · Segmented Control · Select · Slider · Switch · Tag Input · Textarea

**Overlays**
Alert Dialog · Command · Context Menu · Dialog · Drawer · Dropdown · Popover · Tooltip

**Feedback**
Alert · Progress · Skeleton · Spinner · Toast

**Data Display**
Avatar · Badge · Data Table · Empty State · Kbd · Stat · Table · Timeline

### AI (`@dave/react`)

Chat Container · Message · Message Input · Conversation List · Code Block · Streaming Text · Thinking Block · Approval Gate · File Attachment · Source Card · Tool Call · Feedback Bar · Model Selector · Suggestion Chips

### Charts (`@dave/charts`)

Bar Chart · Line Chart · Area Chart · Donut Chart · Sparkline · Scatter Plot · Combo Chart · Radar Chart · Funnel Chart

---

> **Heads up** — DAVE is a personal design system built for my own projects. It's MIT licensed and you're welcome to use it, but it comes with no stability guarantees, no versioning promise, and no support commitment. Things can change between releases without notice. Use it at your own risk, and fork it if you need something you can rely on long-term.

---

## Getting Started

### Installation

```bash
npm install @dave/react @dave/tokens

# Peer dependencies
npm install react react-dom
```

### Setup

**1. Import the token CSS**

```css
@import '@dave/tokens/tokens.css';
```

**2. Configure Tailwind**

```js
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background:     'var(--color-background)',
        foreground:     'var(--color-foreground)',
        'fg-secondary': 'var(--color-foreground-secondary)',
        border: {
          DEFAULT: 'var(--color-border)',
          strong:  'var(--color-border-strong)',
        },
        accent: {
          DEFAULT:    'var(--color-accent)',
          hover:      'var(--color-accent-hover)',
          subtle:     'var(--color-accent-subtle)',
          foreground: 'var(--color-accent-foreground)',
        },
        // full map: packages/docs/tailwind.config.js
      },
    },
  },
};
```

**3. Use components**

```tsx
import { Button, Badge, Input } from '@dave/react';

export function Example() {
  return (
    <div>
      <Badge variant="success">Live</Badge>
      <Input placeholder="Search…" />
      <Button>Get started</Button>
    </div>
  );
}
```

### Theming

Override the accent scale in your own CSS — every component updates automatically, no rebuild required:

```css
:root {
  --accent-1:  #f0f4ff;
  --accent-9:  #2563eb;   /* solid button colour */
  --accent-10: #1d4ed8;   /* hover */
  --accent-11: #1e40af;   /* text on tinted backgrounds */
}
```

---

## Local Development

Requires [pnpm](https://pnpm.io/) and Node.js 20+.

```bash
git clone https://github.com/haydywoo/DAVE.git
cd DAVE
pnpm install

# Build packages first (required before running docs)
pnpm --filter @dave/react build
pnpm --filter @dave/charts build

# Docs site
cd packages/docs && pnpm dev

# Storybook
cd packages/storybook && pnpm dev
```

### Monorepo Structure

```
DAVE/
├── packages/
│   ├── components/     # @dave/react
│   ├── charts/         # @dave/charts
│   ├── tokens/         # @dave/tokens — tokens.css
│   ├── docs/           # Next.js 14 docs site
│   └── storybook/      # Storybook 8
└── .github/
    └── workflows/
        └── deploy-docs.yml
```

---

## Docs

Live at **[haydywoo.github.io/DAVE](https://haydywoo.github.io/DAVE)**

Built with Next.js 14, MDX, and DAVE itself. Auto-deploys to GitHub Pages on every push to `main`.

---

## Design Language

- **Typography** — Syne (display) · Instrument Sans (body) · JetBrains Mono (code)
- **Colour** — Warm neutrals (`#F7F5F0` light / `#0F0E0C` dark) with a purple-indigo accent (`#2D24AE`)
- **Radius** — Sharp and intentional: `3px` for controls, `6px` for surfaces
- **Tokens** — CSS custom properties throughout; swap the accent scale to retheme everything

---

## Licence

MIT. See [Terms & EULA](https://haydywoo.github.io/DAVE/docs/legal/).

Use it. Fork it. Build on it.
