import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { NumberInputDemos } from './demos';

export const metadata: Metadata = { title: 'Number Input' };

const props = [
  { name: 'value',        type: 'number',                    description: 'Controlled value.' },
  { name: 'defaultValue', type: 'number',   default: '0',   description: 'Initial value for uncontrolled usage.' },
  { name: 'onChange',     type: '(value: number) => void',   description: 'Called with the new numeric value on change.' },
  { name: 'min',          type: 'number',                    description: 'Minimum allowed value. Disables decrement at boundary.' },
  { name: 'max',          type: 'number',                    description: 'Maximum allowed value. Disables increment at boundary.' },
  { name: 'step',         type: 'number',   default: '1',   description: 'Increment/decrement amount.' },
  { name: 'precision',    type: 'number',                    description: 'Decimal places to round to on commit.' },
  { name: 'size',         type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Height and text size.' },
  { name: 'label',        type: 'string',                    description: 'Label rendered above the input.' },
  { name: 'hint',         type: 'string',                    description: 'Helper text shown below.' },
  { name: 'error',        type: 'boolean',  default: 'false', description: 'Applies error border and hint colour.' },
  { name: 'disabled',     type: 'boolean',  default: 'false', description: 'Disables all interaction.' },
  { name: 'readOnly',     type: 'boolean',  default: 'false', description: 'Shows value but prevents editing.' },
  { name: 'placeholder',  type: 'string',                    description: 'Placeholder text.' },
  { name: 'className',    type: 'string',                    description: 'Additional classes on the wrapper.' },
];

export default function NumberInputPage() {
  return (
    <div>
      <h1 className="font-display font-semibold text-4xl text-foreground mb-2">Number Input</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        Numeric input with increment and decrement buttons. Supports min/max clamping, step, and decimal precision. Arrow keys also increment and decrement.
      </p>

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Examples</h2>
      <NumberInputDemos />

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Props</h2>
      <PropsTable props={props} />
    </div>
  );
}
