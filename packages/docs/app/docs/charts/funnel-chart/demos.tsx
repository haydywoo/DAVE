'use client';

import { FunnelChart } from '@haydywoo/dave-charts';
import { Preview } from '@/components/Preview';

const pipeline = [
  { name: 'Visitors',   value: 24800 },
  { name: 'Sign-ups',   value: 8600  },
  { name: 'Activated',  value: 4200  },
  { name: 'Subscribed', value: 1800  },
  { name: 'Retained',   value: 940   },
];

export function FunnelChartDemos() {
  return (
    <>
      <Preview
        code={`<FunnelChart
  data={[
    { name: 'Visitors',   value: 24800 },
    { name: 'Sign-ups',   value: 8600  },
    { name: 'Activated',  value: 4200  },
    { name: 'Subscribed', value: 1800  },
    { name: 'Retained',   value: 940   },
  ]}
  valueFormatter={(v) => v.toLocaleString()}
/>`}
      >
        <FunnelChart data={pipeline} valueFormatter={(v) => v.toLocaleString()} />
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Single colour</h3>
      <Preview
        code={`<FunnelChart
  data={pipeline}
  colorMode="single"
  valueFormatter={(v) => v.toLocaleString()}
/>`}
      >
        <FunnelChart data={pipeline} colorMode="single" valueFormatter={(v) => v.toLocaleString()} />
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Without conversions</h3>
      <Preview
        code={`<FunnelChart
  data={pipeline}
  showConversions={false}
  valueFormatter={(v) => v.toLocaleString()}
/>`}
      >
        <FunnelChart data={pipeline} showConversions={false} valueFormatter={(v) => v.toLocaleString()} />
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Revenue pipeline</h3>
      <Preview
        code={`<FunnelChart
  data={[
    { name: 'Pipeline',  value: 1_200_000 },
    { name: 'Qualified', value: 840_000   },
    { name: 'Proposed',  value: 520_000   },
    { name: 'Committed', value: 280_000   },
    { name: 'Closed',    value: 164_000   },
  ]}
  valueFormatter={(v) => \`$\${(v / 1000).toFixed(0)}k\`}
/>`}
      >
        <FunnelChart
          data={[
            { name: 'Pipeline',  value: 1_200_000 },
            { name: 'Qualified', value: 840_000   },
            { name: 'Proposed',  value: 520_000   },
            { name: 'Committed', value: 280_000   },
            { name: 'Closed',    value: 164_000   },
          ]}
          valueFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
        />
      </Preview>
    </>
  );
}
