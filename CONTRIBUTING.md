# Contributing

DAVE is a personal design system — built for my own projects first, open-sourced as a reference. Contributions are welcome, but with honest expectations.

## Before opening a PR

- **Bug fixes and a11y issues** — always welcome.
- **New components or API changes** — open an issue first. If something doesn't fit the system's direction it won't be merged, and I'd rather save you the time.
- **Design opinions** — I have strong ones. PRs that meaningfully change the visual language or token system are unlikely to land unless we've talked about it first.

## Running locally

Requires [pnpm](https://pnpm.io/) and Node.js 18–24.

```bash
git clone https://github.com/haydywoo/DAVE.git
cd DAVE
pnpm install

# Build packages first
pnpm --filter @dave/react build
pnpm --filter @dave/charts build

# Docs
cd packages/docs && pnpm dev

# Storybook
cd packages/storybook && pnpm dev
```

## Code style

- TypeScript throughout — no `any` without a comment explaining why
- Tailwind for styling — no inline style objects except where Tailwind can't reach
- Radix UI primitives for interactive components — don't roll your own focus management
- Tokens, not raw colours — components reference semantic aliases, never primitives directly
- Run `pnpm lint` before pushing

## Licence

By contributing you agree your changes will be released under the [MIT licence](./LICENSE).
