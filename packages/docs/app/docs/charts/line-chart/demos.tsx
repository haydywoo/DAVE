'use client';

import { LineChart } from '@haydywoo/dave-charts';
import { Preview } from '@/components/Preview';

const monthly = [
  { month: 'Jan', revenue: 4200, target: 4000 },
  { month: 'Feb', revenue: 3800, target: 4200 },
  { month: 'Mar', revenue: 5100, target: 4400 },
  { month: 'Apr', revenue: 4700, target: 4600 },
  { month: 'May', revenue: 6200, target: 4800 },
  { month: 'Jun', revenue: 5800, target: 5000 },
  { month: 'Jul', revenue: 6900, target: 5200 },
  { month: 'Aug', revenue: 7200, target: 5400 },
];

export function LineChartDemos() {
  return (
    <>
      <Preview
        code={`<LineChart
  data={monthly}
  index="month"
  categories={['revenue']}
  valueFormatter={(v) => \`$\${(v / 1000).toFixed(1)}k\`}
/>`}
      >
        <LineChart
          data={monthly}
          index="month"
          categories={['revenue']}
          valueFormatter={(v) => `$${(v / 1000).toFixed(1)}k`}
        />
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Multiple series</h3>
      <Preview
        code={`<LineChart
  data={monthly}
  index="month"
  categories={['revenue', 'target']}
  valueFormatter={(v) => \`$\${(v / 1000).toFixed(1)}k\`}
/>`}
      >
        <LineChart
          data={monthly}
          index="month"
          categories={['revenue', 'target']}
          valueFormatter={(v) => `$${(v / 1000).toFixed(1)}k`}
        />
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">With dots</h3>
      <Preview
        code={`<LineChart
  data={monthly}
  index="month"
  categories={['revenue', 'target']}
  showDots
  valueFormatter={(v) => \`$\${(v / 1000).toFixed(1)}k\`}
/>`}
      >
        <LineChart
          data={monthly}
          index="month"
          categories={['revenue', 'target']}
          showDots
          valueFormatter={(v) => `$${(v / 1000).toFixed(1)}k`}
        />
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Stepped</h3>
      <Preview
        code={`<LineChart
  data={data}
  index="week"
  categories={['active']}
  curveType="step"
/>`}
      >
        <LineChart
          data={[
            { week: 'W1', active: 120 },
            { week: 'W2', active: 120 },
            { week: 'W3', active: 145 },
            { week: 'W4', active: 145 },
            { week: 'W5', active: 160 },
            { week: 'W6', active: 182 },
            { week: 'W7', active: 182 },
            { week: 'W8', active: 210 },
          ]}
          index="week"
          categories={['active']}
          curveType="step"
        />
      </Preview>
    </>
  );
}
