# @haydywoo/dave-charts

DAVE chart components — built on Recharts with DAVE design tokens.

## Install

```bash
pnpm add @haydywoo/dave-charts @haydywoo/dave-tokens
```

## Quick start

```tsx
import { BarChart } from '@haydywoo/dave-charts';

const data = [
  { month: 'Jan', sales: 42, refunds: 6 },
  { month: 'Feb', sales: 51, refunds: 4 },
  { month: 'Mar', sales: 48, refunds: 9 },
];

<BarChart
  data={data}
  index="month"
  categories={['sales', 'refunds']}
  height={240}
/>
```

## Chart types

`BarChart`, `LineChart`, `AreaChart`, `DonutChart`, `Sparkline`, `ScatterPlot`, `ComboChart`, `RadarChart`, `FunnelChart`.

Full API reference at [haydywoo.github.io/DAVE/docs/charts/overview](https://haydywoo.github.io/DAVE/docs/charts/overview).

## Built on the shoulders of

- [Recharts](https://recharts.org/) — the chart layer

## License

MIT — see [LICENSE](./LICENSE).
