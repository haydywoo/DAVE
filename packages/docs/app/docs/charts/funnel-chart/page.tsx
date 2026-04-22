import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { FunnelChartDemos } from './demos';

export const metadata: Metadata = { title: 'Funnel Chart' };

const props = [
  { name: 'data',            type: 'FunnelStep[]',                  required: true,    description: 'Ordered array of steps. First step is the widest (100%).' },
  { name: 'colors',          type: 'string[]',                      default: 'palette', description: 'Override chart palette colours.' },
  { name: 'colorMode',       type: "'sequential' | 'single'",       default: "'sequential'", description: 'sequential = each step gets the next palette colour. single = one colour at decreasing opacity.' },
  { name: 'showConversions', type: 'boolean',                       default: 'true',   description: 'Show conversion percentage between each step.' },
  { name: 'valueFormatter',  type: '(value: number) => string',     default: '—',      description: 'Format the value label on each step.' },
  { name: 'stepHeight',      type: 'number',                        default: '44',     description: 'Height of each step bar in px.' },
  { name: 'gap',             type: 'number',                        default: '6',      description: 'Gap between step bars in px.' },
  { name: 'height',          type: 'number',                        default: 'auto',   description: 'Fixed height override. Auto-calculated from steps and gaps by default.' },
  { name: 'className',       type: 'string',                        default: '—',      description: 'Extra class on the outer container.' },
];

const stepProps = [
  { name: 'name',  type: 'string', required: true, description: 'Step label shown to the left of the bar.' },
  { name: 'value', type: 'number', required: true, description: 'Numeric value. The first step is treated as 100%.' },
];

export default function FunnelChartPage() {
  return (
    <div>
      <h1 className="font-display font-semibold text-4xl text-foreground mb-2">Funnel Chart</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        Visualise drop-off through a sequential process — sign-up flows, sales pipelines, conversion funnels. Each step narrows relative to the first, with optional conversion rates between steps.
      </p>

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Examples</h2>
      <FunnelChartDemos />

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Props</h2>
      <PropsTable props={props} />

      <h2 className="font-display font-semibold text-2xl text-foreground mt-8 mb-4">FunnelStep</h2>
      <PropsTable props={stepProps} />
    </div>
  );
}
