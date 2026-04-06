import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { SegmentedControlDemos } from './demos';

export const metadata: Metadata = { title: 'Segmented Control' };

const props = [
  { name: 'options', type: 'SegmentedControlOption[]', required: true, description: 'Array of segments. Each has value, label, optional icon, and optional disabled.' },
  { name: 'value', type: 'string', description: 'Controlled selected value.' },
  { name: 'defaultValue', type: 'string', description: 'Initial selected value (uncontrolled).' },
  { name: 'onValueChange', type: '(value: string) => void', description: 'Called when the selection changes.' },
  { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Height and padding scale.' },
  { name: 'fullWidth', type: 'boolean', default: 'false', description: 'Stretches segments to fill the container width equally.' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables all segments.' },
  { name: 'className', type: 'string', description: 'Additional classes on the track.' },
];

const optionProps = [
  { name: 'value', type: 'string', required: true, description: 'Unique value for this segment.' },
  { name: 'label', type: 'ReactNode', required: true, description: 'Segment label or icon-only element.' },
  { name: 'icon', type: 'ReactNode', description: 'Icon rendered before the label.' },
  { name: 'disabled', type: 'boolean', description: 'Disables this segment individually.' },
];

export default function SegmentedControlPage() {
  return (
    <div>
      <h1 className="font-display font-extrabold text-3xl text-foreground mb-2">Segmented Control</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        A group of mutually exclusive toggle buttons. Use for switching between views, time ranges, or modes — where the options are few and always visible. Built on Radix Tabs.
      </p>

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Examples</h2>
      <SegmentedControlDemos />

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Props</h2>
      <h3 className="font-semibold text-sm text-foreground mb-3">SegmentedControl</h3>
      <PropsTable props={props} />
      <h3 className="font-semibold text-sm text-foreground mt-8 mb-3">SegmentedControlOption</h3>
      <PropsTable props={optionProps} />
    </div>
  );
}
