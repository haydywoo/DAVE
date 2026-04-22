'use client';

import { Sparkline } from '@haydywoo/dave-charts';
import { Preview } from '@/components/Preview';

const trend = [12, 18, 14, 22, 19, 28, 24, 31, 27, 35, 30, 38];

export function SparklineDemos() {
  return (
    <>
      <Preview code={`<Sparkline data={[12, 18, 14, 22, 19, 28, 24, 31]} />`}>
        <Sparkline data={trend} height={48} width={160} />
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Bar</h3>
      <Preview code={`<Sparkline data={[12, 18, 14, 22, 19, 28, 24, 31]} type="bar" />`}>
        <Sparkline data={trend} type="bar" height={48} width={160} />
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Reference line</h3>
      <Preview
        code={`<Sparkline
  data={[40, 22, 38, 15, 42, 28, 50, 18, 44, 33]}
  referenceLine={30}
  valueFormatter={(v) => \`\${v}%\`}
/>`}
      >
        <Sparkline
          data={[40, 22, 38, 15, 42, 28, 50, 18, 44, 33]}
          referenceLine={30}
          valueFormatter={(v) => `${v}%`}
          height={48}
          width={160}
        />
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">In a stat card</h3>
      <Preview
        code={`<div className="flex items-center gap-4 rounded-[6px] border border-border bg-card px-4 py-3">
  <div className="flex-1">
    <p className="text-xs text-fg-secondary mb-1">Revenue</p>
    <p className="text-xl font-bold text-foreground">$38.2k</p>
  </div>
  <span className="text-xs font-semibold text-success">+12%</span>
  <Sparkline data={data} color="var(--color-chart-1)" height={40} width={80} />
</div>`}
      >
        <div className="flex items-center gap-4 rounded-[6px] border border-border bg-card px-4 py-3 max-w-sm">
          <div className="flex-1">
            <p className="text-xs text-fg-secondary mb-1">Revenue</p>
            <p className="text-xl font-bold text-foreground">$38.2k</p>
          </div>
          <span className="text-xs font-semibold text-success">+12%</span>
          <Sparkline data={trend} color="var(--color-chart-1)" height={40} width={80} />
        </div>
      </Preview>
    </>
  );
}
