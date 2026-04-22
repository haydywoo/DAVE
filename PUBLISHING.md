# Publishing DAVE to npm

Status: **not yet published**. This doc is the step-by-step for when you're ready.

## Why this matters

Right now `@dave/react`, `@dave/charts`, and `@dave/tokens` are workspace-internal packages at `0.1.0`. Anyone following the install docs hits a 404 on their first `pnpm add`. See the smoke-test report at `~/Desktop/dave-install-test/FINDINGS.md` for the full play-by-play.

Publishing unblocks all three P0 install failures in one move.

## Decision needed: scope

The `@dave` npm scope is almost certainly taken. Three realistic options:

1. **`@haydywoo/*`** — your GitHub scope. Almost certainly free on npm. Naming: `@haydywoo/dave-react`, `@haydywoo/dave-charts`, `@haydywoo/dave-tokens`. Imports become `import { Button } from '@haydywoo/dave-react'`.
2. **Unscoped `dave-*`** — `dave-react`, `dave-charts`, `dave-tokens`. Shorter imports, but these names are **probably already squatted** — check `npm view dave-react` before committing.
3. **Different scope altogether** — `@dave-ds/*`, `@buildwithdave/*`, etc. Pick something you'll be happy with for a long time; renaming a published package is painful.

My recommendation: **Option 1**. `@haydywoo` is free, keeps authorship clear, and is easy to rebrand later if the project grows.

## Prep checklist (before running `npm publish`)

### 1. Rename the packages

If you pick `@haydywoo/dave-*`, these files need updating:

- `packages/components/package.json` — `"name"` field
- `packages/charts/package.json` — `"name"` field + internal dep on `@dave/tokens`
- `packages/tokens/package.json` — `"name"` field
- `packages/components/package.json` — internal dep on `@dave/tokens`
- All source imports across the monorepo currently using `@dave/react`, `@dave/charts`, `@dave/tokens`

Worth noting: renaming imports across the docs site is ~280 lines of sed. Happy to do this in one pass once you pick the name.

### 2. Add required metadata

Each package needs these fields in its `package.json`:

```json
{
  "version": "0.1.0",
  "description": "...",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/haydywoo/DAVE.git",
    "directory": "packages/components"
  },
  "homepage": "https://haydywoo.github.io/DAVE/",
  "bugs": "https://github.com/haydywoo/DAVE/issues",
  "keywords": ["react", "components", "design-system", "tailwindcss"],
  "files": ["dist", "README.md", "LICENSE"],
  "publishConfig": {
    "access": "public"
  }
}
```

The `files` field prevents the tarball from including source, tests, tsconfig, node_modules, etc.

The `publishConfig.access: "public"` is required for first-time scoped publishes (otherwise npm assumes private and 402s).

### 3. Handle `@dave/tokens` → peer or runtime dep

`@dave/react` currently has `"@dave/tokens": "workspace:*"` as a regular dependency. On publish, `pnpm pack` rewrites this to `"@dave/tokens": "0.1.0"` in the tarball. That's fine as long as you publish `@dave/tokens` **first** so the registry resolves the version.

Recommended publish order:
1. `@haydywoo/dave-tokens` (no dependencies on other DAVE packages)
2. `@haydywoo/dave-react` (depends on tokens)
3. `@haydywoo/dave-charts` (depends on tokens)

### 4. Add a README to each package

Each package's tarball root needs a `README.md` — npm shows it as the package's landing page. Can be as short as a title + link back to the main docs site. Currently none of the three packages have one.

### 5. Build fresh dists before publishing

```bash
pnpm -F @dave/tokens build
pnpm -F @dave/react build
pnpm -F @dave/charts build
```

Verify:
- `packages/tokens/dist/tokens.css` exists
- `packages/components/dist/index.js` and `index.d.ts` exist
- `packages/charts/dist/index.js` and `index.d.ts` exist

### 6. Dry-run the publish

```bash
cd packages/tokens
pnpm publish --dry-run --access public
```

Check the file list it prints — make sure no secrets, no `src/`, no `node_modules`. If `files` in package.json is set correctly you'll just see `dist/` + README + LICENSE.

### 7. Actually publish

```bash
npm login   # one-time, opens browser

cd packages/tokens     && pnpm publish --access public
cd ../components       && pnpm publish --access public
cd ../charts           && pnpm publish --access public
```

### 8. After publish — update install docs

Remove the "Consuming from source" section and the "Not published yet" callout in `packages/docs/app/docs/getting-started/page.mdx`. Replace the scoped package names if you went with `@haydywoo/*`.

## Post-publish: versioning

DAVE has no versioning promise per the disclaimer, but once published you still need to bump versions before re-publishing. Simplest workflow:

```bash
# In the relevant package dir:
pnpm version patch   # 0.1.0 → 0.1.1
pnpm publish --access public
```

For coordinated cross-package bumps across a monorepo: consider [changesets](https://github.com/changesets/changesets) when the release cadence picks up. Overkill for now.

## If you decide NOT to publish

Keep the "Consuming from source" section in the install docs. Anyone technical enough to want DAVE can follow the tarball + `pnpm.overrides` dance. Anyone else will bounce — that's fine if the intent is "personal design system" per the disclaimer.
