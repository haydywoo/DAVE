'use client';

import { ScatterPlot } from '@dave/charts';
import { Preview } from '@/components/Preview';

const marketing = [
  { x: 1200, y: 42, label: 'Email' },
  { x: 3400, y: 78, label: 'Paid search' },
  { x: 800,  y: 31, label: 'Social' },
  { x: 5100, y: 94, label: 'Display' },
  { x: 2200, y: 61, label: 'Referral' },
  { x: 4100, y: 85, label: 'Content' },
  { x: 600,  y: 22, label: 'Direct' },
  { x: 3800, y: 71, label: 'Podcast' },
];

export function ScatterPlotDemos() {
  return (
    <>
      <Preview
        code={`<ScatterPlot
  series={[{ name: 'Channels', data: marketing }]}
  xFormatter={(v) => \`$\${(v / 1000).toFixed(1)}k\`}
  yFormatter={(v) => \`\${v}%\`}
/>`}
      >
        <ScatterPlot
          series={[{ name: 'Channels', data: marketing }]}
          xFormatter={(v) => `$${(v / 1000).toFixed(1)}k`}
          yFormatter={(v) => `${v}%`}
        />
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Multiple series</h3>
      <Preview
        code={`<ScatterPlot
  series={[
    { name: 'Q1', data: [...] },
    { name: 'Q2', data: [...] },
  ]}
  xFormatter={(v) => \`\${v}h\`}
  yFormatter={(v) => \`\${v}%\`}
/>`}
      >
        <ScatterPlot
          series={[
            {
              name: 'Q1',
              data: [
                { x: 12, y: 88 }, { x: 28, y: 72 }, { x: 45, y: 65 },
                { x: 18, y: 80 }, { x: 35, y: 58 }, { x: 52, y: 91 },
              ],
            },
            {
              name: 'Q2',
              data: [
                { x: 15, y: 76 }, { x: 32, y: 84 }, { x: 48, y: 70 },
                { x: 22, y: 62 }, { x: 38, y: 95 }, { x: 55, y: 68 },
              ],
            },
          ]}
          xFormatter={(v) => `${v}h`}
          yFormatter={(v) => `${v}%`}
        />
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Larger dots</h3>
      <Preview
        code={`<ScatterPlot
  series={[{ name: 'Channels', data: marketing }]}
  dotRadius={7}
  xFormatter={(v) => \`$\${(v / 1000).toFixed(1)}k\`}
  yFormatter={(v) => \`\${v}%\`}
/>`}
      >
        <ScatterPlot
          series={[{ name: 'Channels', data: marketing }]}
          dotRadius={7}
          xFormatter={(v) => `$${(v / 1000).toFixed(1)}k`}
          yFormatter={(v) => `${v}%`}
        />
      </Preview>
    </>
  );
}
