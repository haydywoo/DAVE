import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { DateRangePickerDemos } from './demos';

export const metadata: Metadata = { title: 'DateRangePicker' };

const pickerProps = [
  { name: 'value',         type: 'DateRange',                              description: 'Controlled selected range.' },
  { name: 'defaultValue',  type: 'DateRange',                              description: 'Initial range for uncontrolled usage.' },
  { name: 'onValueChange', type: '(range: DateRange | undefined) => void', description: 'Called when the range changes.' },
  { name: 'dateFormat',    type: 'string',  default: "'dd/MM/yyyy'",       description: 'date-fns format string for the trigger display.' },
  { name: 'placeholder',   type: 'string',                                 description: "Trigger placeholder. Defaults to 'Select date range…'." },
  { name: 'min',           type: 'Date',                                   description: 'Earliest selectable date.' },
  { name: 'max',           type: 'Date',                                   description: 'Latest selectable date.' },
  { name: 'size',          type: "'sm' | 'md' | 'lg' | 'xl'", default: "'md'", description: 'Trigger height and text size.' },
  { name: 'label',         type: 'string',                                 description: 'Label above the trigger.' },
  { name: 'hint',          type: 'string',                                 description: 'Helper text below.' },
  { name: 'error',         type: 'boolean', default: 'false',              description: 'Error border and hint colour.' },
  { name: 'disabled',      type: 'boolean', default: 'false',              description: 'Disables the trigger.' },
  { name: 'className',     type: 'string',                                 description: 'Additional classes on the wrapper.' },
];

const calendarProps = [
  { name: 'value',         type: 'DateRange',                              description: 'Controlled range.' },
  { name: 'onValueChange', type: '(range: DateRange | undefined) => void', description: 'Called when range changes.' },
  { name: 'min',           type: 'Date',                                   description: 'Earliest selectable date.' },
  { name: 'max',           type: 'Date',                                   description: 'Latest selectable date.' },
  { name: 'disabled',      type: '(date: Date) => boolean',                description: 'Disable individual dates.' },
  { name: 'className',     type: 'string',                                 description: 'Additional classes on the calendar wrapper.' },
];

export default function DateRangePickerPage() {
  return (
    <div>
      <h1 className="font-display font-extrabold text-3xl text-foreground mb-2">DateRangePicker</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        Trigger button with a two-month calendar popover for selecting a date range. Built on date-fns with hover preview, min/max constraints, and a standalone RangeCalendar for embedding directly in layouts.
      </p>

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Examples</h2>
      <DateRangePickerDemos />

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">DateRangePicker props</h2>
      <PropsTable props={pickerProps} />

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">RangeCalendar props</h2>
      <PropsTable props={calendarProps} />
    </div>
  );
}
