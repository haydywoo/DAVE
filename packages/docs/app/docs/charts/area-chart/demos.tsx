'use client';

import { AreaChart } from '@haydywoo/dave-charts';
import { Preview } from '@/components/Preview';

const monthly = [
  { month: 'Jan', revenue: 4200, cost: 2400 },
  { month: 'Feb', revenue: 3800, cost: 1800 },
  { month: 'Mar', revenue: 5100, cost: 2900 },
  { month: 'Apr', revenue: 4700, cost: 2200 },
  { month: 'May', revenue: 6200, cost: 3100 },
  { month: 'Jun', revenue: 5800, cost: 2700 },
  { month: 'Jul', revenue: 6900, cost: 3400 },
  { month: 'Aug', revenue: 7200, cost: 3600 },
];

export function AreaChartDemos() {
  return (
    <>
      <Preview
        code={`<AreaChart
  data={monthly}
  index="month"
  categories={['revenue']}
  valueFormatter={(v) => \`$\${(v / 1000).toFixed(1)}k\`}
/>`}
      >
        <AreaChart
          data={monthly}
          index="month"
          categories={['revenue']}
          valueFormatter={(v) => `$${(v / 1000).toFixed(1)}k`}
        />
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Multiple series</h3>
      <Preview
        code={`<AreaChart
  data={monthly}
  index="month"
  categories={['revenue', 'cost']}
  valueFormatter={(v) => \`$\${(v / 1000).toFixed(1)}k\`}
/>`}
      >
        <AreaChart
          data={monthly}
          index="month"
          categories={['revenue', 'cost']}
          valueFormatter={(v) => `$${(v / 1000).toFixed(1)}k`}
        />
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Stacked</h3>
      <Preview
        code={`<AreaChart
  data={monthly}
  index="month"
  categories={['revenue', 'cost']}
  stack="stack"
  valueFormatter={(v) => \`$\${(v / 1000).toFixed(1)}k\`}
/>`}
      >
        <AreaChart
          data={monthly}
          index="month"
          categories={['revenue', 'cost']}
          stack="stack"
          valueFormatter={(v) => `$${(v / 1000).toFixed(1)}k`}
        />
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Percentage</h3>
      <Preview
        code={`<AreaChart
  data={monthly}
  index="month"
  categories={['revenue', 'cost']}
  stack="expand"
/>`}
      >
        <AreaChart
          data={monthly}
          index="month"
          categories={['revenue', 'cost']}
          stack="expand"
        />
      </Preview>
    </>
  );
}
