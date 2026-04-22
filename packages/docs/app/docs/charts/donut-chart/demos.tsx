'use client';

import { DonutChart } from '@haydywoo/dave-charts';
import { Preview } from '@/components/Preview';

const traffic = [
  { name: 'Organic',  value: 4200 },
  { name: 'Direct',   value: 2800 },
  { name: 'Referral', value: 1900 },
  { name: 'Social',   value: 1100 },
  { name: 'Email',    value: 600  },
];

export function DonutChartDemos() {
  return (
    <>
      <Preview
        code={`<DonutChart
  data={[
    { name: 'Organic',  value: 4200 },
    { name: 'Direct',   value: 2800 },
    { name: 'Referral', value: 1900 },
    { name: 'Social',   value: 1100 },
    { name: 'Email',    value: 600  },
  ]}
  valueFormatter={(v) => v.toLocaleString()}
/>`}
      >
        <DonutChart data={traffic} valueFormatter={(v) => v.toLocaleString()} />
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Centre label</h3>
      <Preview
        code={`<DonutChart
  data={traffic}
  centerLabel={
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: 24, fontWeight: 700, color: 'var(--color-foreground)', lineHeight: 1 }}>
        10.6k
      </div>
      <div style={{ fontSize: 12, color: 'var(--color-foreground-secondary)', marginTop: 4 }}>
        visitors
      </div>
    </div>
  }
/>`}
      >
        <DonutChart
          data={traffic}
          centerLabel={
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 24, fontWeight: 700, color: 'var(--color-foreground)', lineHeight: 1 }}>
                10.6k
              </div>
              <div style={{ fontSize: 12, color: 'var(--color-foreground-secondary)', marginTop: 4 }}>
                visitors
              </div>
            </div>
          }
        />
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Thin ring</h3>
      <Preview
        code={`<DonutChart
  data={traffic}
  innerRadius="72%"
  outerRadius="84%"
  centerLabel={
    <span style={{ fontSize: 20, fontWeight: 700, color: 'var(--color-foreground)' }}>
      10.6k
    </span>
  }
/>`}
      >
        <DonutChart
          data={traffic}
          innerRadius="72%"
          outerRadius="84%"
          centerLabel={
            <span style={{ fontSize: 20, fontWeight: 700, color: 'var(--color-foreground)' }}>
              10.6k
            </span>
          }
        />
      </Preview>
    </>
  );
}
