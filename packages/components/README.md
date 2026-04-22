# @haydywoo/dave-react

DAVE React component library — accessible primitives built on Radix UI and Tailwind CSS.

## Install

```bash
pnpm add @haydywoo/dave-react @haydywoo/dave-tokens
```

## Quick start

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent } from '@haydywoo/dave-react';

export default function Page() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hello</CardTitle>
      </CardHeader>
      <CardContent>
        <Button variant="primary">Get started</Button>
      </CardContent>
    </Card>
  );
}
```

DAVE components use CSS custom properties from `@haydywoo/dave-tokens` — import that CSS file into your global stylesheet to pick up the tokens. Full setup (Tailwind config, Next.js `transpilePackages`, theming) at [haydywoo.github.io/DAVE](https://haydywoo.github.io/DAVE/).

## Built on the shoulders of

- [Radix UI](https://www.radix-ui.com/) — accessibility and behaviour at the base layer
- [Tailwind CSS](https://tailwindcss.com/) — utility-first styling

## License

MIT — see [LICENSE](./LICENSE).
