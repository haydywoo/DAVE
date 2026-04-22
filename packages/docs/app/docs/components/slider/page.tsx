import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { SliderDemos } from './demos';

export const metadata: Metadata = { title: 'Slider' };

const props = [
  { name: 'value',         type: 'number[]',                    description: 'Controlled value. Pass two numbers for a range slider.' },
  { name: 'defaultValue',  type: 'number[]',                    description: 'Initial value for uncontrolled usage.' },
  { name: 'onValueChange', type: '(value: number[]) => void',   description: 'Called continuously as the thumb moves.' },
  { name: 'onValueCommit', type: '(value: number[]) => void',   description: 'Called only when the thumb is released.' },
  { name: 'min',           type: 'number',   default: '0',      description: 'Minimum value.' },
  { name: 'max',           type: 'number',   default: '100',    description: 'Maximum value.' },
  { name: 'step',          type: 'number',   default: '1',      description: 'Step increment.' },
  { name: 'size',          type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Track height and thumb size.' },
  { name: 'label',         type: 'string',                      description: 'Label rendered above the track.' },
  { name: 'showValue',     type: 'boolean',  default: 'false',  description: 'Displays the current value next to the label.' },
  { name: 'formatValue',   type: '(value: number) => string',   description: 'Custom formatter for the displayed value and min/max labels.' },
  { name: 'disabled',      type: 'boolean',  default: 'false',  description: 'Disables interaction.' },
  { name: 'className',     type: 'string',                      description: 'Additional classes on the wrapper.' },
];

export default function SliderPage() {
  return (
    <div>
      <h1 className="font-display font-semibold text-4xl text-foreground mb-2">Slider</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        Range input with a draggable thumb. Supports single value and two-thumb range selection. Fully keyboard accessible.
      </p>

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Examples</h2>
      <SliderDemos />

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Props</h2>
      <PropsTable props={props} />
    </div>
  );
}
