'use client';

import { BarChart } from '@haydywoo/dave-charts';
import { Preview } from '@/components/Preview';

const monthly = [
  { month: 'Jan', revenue: 4200, cost: 2400 },
  { month: 'Feb', revenue: 3800, cost: 1800 },
  { month: 'Mar', revenue: 5100, cost: 2900 },
  { month: 'Apr', revenue: 4700, cost: 2200 },
  { month: 'May', revenue: 6200, cost: 3100 },
  { month: 'Jun', revenue: 5800, cost: 2700 },
];

const single = [
  { month: 'Jan', visitors: 12400 },
  { month: 'Feb', visitors: 9800 },
  { month: 'Mar', visitors: 14200 },
  { month: 'Apr', visitors: 13100 },
  { month: 'May', visitors: 17600 },
  { month: 'Jun', visitors: 15900 },
];

export function BarChartDemos() {
  return (
    <>
      <Preview
        code={`<BarChart
  data={[
    { month: 'Jan', visitors: 12400 },
    { month: 'Feb', visitors: 9800 },
    { month: 'Mar', visitors: 14200 },
  ]}
  index="month"
  categories={['visitors']}
/>`}
      >
        <BarChart data={single} index="month" categories={['visitors']} />
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Multiple series</h3>
      <Preview
        code={`<BarChart
  data={monthly}
  index="month"
  categories={['revenue', 'cost']}
  valueFormatter={(v) => \`$\${(v / 1000).toFixed(1)}k\`}
/>`}
      >
        <BarChart
          data={monthly}
          index="month"
          categories={['revenue', 'cost']}
          valueFormatter={(v) => `$${(v / 1000).toFixed(1)}k`}
        />
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Stacked</h3>
      <Preview
        code={`<BarChart
  data={monthly}
  index="month"
  categories={['revenue', 'cost']}
  stacked
  valueFormatter={(v) => \`$\${(v / 1000).toFixed(1)}k\`}
/>`}
      >
        <BarChart
          data={monthly}
          index="month"
          categories={['revenue', 'cost']}
          stacked
          valueFormatter={(v) => `$${(v / 1000).toFixed(1)}k`}
        />
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Horizontal</h3>
      <Preview
        code={`<BarChart
  data={[
    { product: 'Pro plan',     sales: 4200 },
    { product: 'Starter plan', sales: 3100 },
    { product: 'Enterprise',   sales: 2800 },
    { product: 'Add-ons',      sales: 1400 },
  ]}
  index="product"
  categories={['sales']}
  layout="horizontal"
  valueFormatter={(v) => \`$\${(v / 1000).toFixed(1)}k\`}
  height={240}
/>`}
      >
        <BarChart
          data={[
            { product: 'Pro plan',     sales: 4200 },
            { product: 'Starter plan', sales: 3100 },
            { product: 'Enterprise',   sales: 2800 },
            { product: 'Add-ons',      sales: 1400 },
          ]}
          index="product"
          categories={['sales']}
          layout="horizontal"
          valueFormatter={(v) => `$${(v / 1000).toFixed(1)}k`}
          height={240}
        />
      </Preview>
    </>
  );
}
