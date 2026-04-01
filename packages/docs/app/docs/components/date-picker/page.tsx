import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { DatePickerDemos } from './demos';

export const metadata: Metadata = { title: 'DatePicker' };

const props = [
  { name: 'value',         type: 'Date',                           description: 'Controlled selected date.' },
  { name: 'defaultValue',  type: 'Date',                           description: 'Initial date for uncontrolled usage.' },
  { name: 'onValueChange', type: '(date: Date | undefined) => void', description: 'Called when a date is selected or cleared.' },
  { name: 'dateFormat',    type: 'string',  default: "'dd/MM/yyyy'",  description: 'date-fns format string used for display and manual input parsing.' },
  { name: 'placeholder',   type: 'string',                           description: 'Input placeholder. Defaults to the dateFormat string in lowercase.' },
  { name: 'min',           type: 'Date',                             description: 'Earliest selectable date.' },
  { name: 'max',           type: 'Date',                             description: 'Latest selectable date.' },
  { name: 'size',          type: "'sm' | 'md' | 'lg' | 'xl'", default: "'md'", description: 'Input height and text size.' },
  { name: 'label',         type: 'string',                           description: 'Label above the input.' },
  { name: 'hint',          type: 'string',                           description: 'Helper text below.' },
  { name: 'error',         type: 'boolean', default: 'false',        description: 'Error border and hint colour.' },
  { name: 'disabled',      type: 'boolean', default: 'false',        description: 'Disables the input and calendar.' },
  { name: 'className',     type: 'string',                           description: 'Additional classes on the wrapper.' },
];

export default function DatePickerPage() {
  return (
    <div>
      <h1 className="font-display font-extrabold text-3xl text-foreground mb-2">DatePicker</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        Text input with a calendar popover for date selection. Supports manual typing with automatic parsing, or click-to-pick from the calendar. Uses date-fns for formatting and parsing.
      </p>

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Examples</h2>
      <DatePickerDemos />

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Props</h2>
      <PropsTable props={props} />
    </div>
  );
}
