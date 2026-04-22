import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { TooltipDemos } from './demos';

export const metadata: Metadata = { title: 'Tooltip' };

const tooltipProps = [
  { name: 'content', type: 'ReactNode', required: true, description: 'The tooltip content.' },
  { name: 'children', type: 'ReactNode', required: true, description: 'The element that triggers the tooltip.' },
  { name: 'side', type: "'top' | 'right' | 'bottom' | 'left'", default: "'top'", description: 'Preferred side to render the tooltip.' },
  { name: 'sideOffset', type: 'number', default: '6', description: 'Distance in pixels from the trigger.' },
  { name: 'delayDuration', type: 'number', default: '300', description: 'Delay in ms before showing.' },
];

export default function TooltipPage() {
  return (
    <div>
      <h1 className="font-display font-semibold text-4xl text-foreground mb-2">Tooltip</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        A floating label that appears on hover. Wraps any element — no extra markup needed on the trigger.
      </p>

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Examples</h2>
      <TooltipDemos />

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Props</h2>
      <PropsTable props={tooltipProps} />
    </div>
  );
}
