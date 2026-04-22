'use client';

import { ComboChart } from '@haydywoo/dave-charts';
import { Preview } from '@/components/Preview';

const monthly = [
  { month: 'Jan', revenue: 4200, cost: 2400, margin: 42 },
  { month: 'Feb', revenue: 3800, cost: 1800, margin: 52 },
  { month: 'Mar', revenue: 5100, cost: 2900, margin: 43 },
  { month: 'Apr', revenue: 4700, cost: 2200, margin: 53 },
  { month: 'May', revenue: 6200, cost: 3100, margin: 50 },
  { month: 'Jun', revenue: 5800, cost: 2700, margin: 53 },
  { month: 'Jul', revenue: 6900, cost: 3400, margin: 51 },
  { month: 'Aug', revenue: 7200, cost: 3600, margin: 50 },
];

export function ComboChartDemos() {
  return (
    <>
      <Preview
        code={`<ComboChart
  data={monthly}
  index="month"
  bars={['revenue']}
  lines={['margin']}
  valueFormatter={(v) => \`$\${(v / 1000).toFixed(1)}k\`}
/>`}
      >
        <ComboChart
          data={monthly}
          index="month"
          bars={['revenue']}
          lines={['margin']}
          valueFormatter={(v) => `$${(v / 1000).toFixed(1)}k`}
        />
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Dual axis</h3>
      <Preview
        code={`<ComboChart
  data={monthly}
  index="month"
  bars={['revenue']}
  lines={['margin']}
  dualAxis
  valueFormatter={(v) => \`$\${(v / 1000).toFixed(1)}k\`}
  secondaryFormatter={(v) => \`\${v}%\`}
/>`}
      >
        <ComboChart
          data={monthly}
          index="month"
          bars={['revenue']}
          lines={['margin']}
          dualAxis
          valueFormatter={(v) => `$${(v / 1000).toFixed(1)}k`}
          secondaryFormatter={(v) => `${v}%`}
        />
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Multiple bars + line</h3>
      <Preview
        code={`<ComboChart
  data={monthly}
  index="month"
  bars={['revenue', 'cost']}
  lines={['margin']}
  dualAxis
  valueFormatter={(v) => \`$\${(v / 1000).toFixed(1)}k\`}
  secondaryFormatter={(v) => \`\${v}%\`}
/>`}
      >
        <ComboChart
          data={monthly}
          index="month"
          bars={['revenue', 'cost']}
          lines={['margin']}
          dualAxis
          valueFormatter={(v) => `$${(v / 1000).toFixed(1)}k`}
          secondaryFormatter={(v) => `${v}%`}
        />
      </Preview>
    </>
  );
}
