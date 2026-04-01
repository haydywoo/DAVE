import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { CalendarDemos } from './demos';

export const metadata: Metadata = { title: 'Calendar' };

const props = [
  { name: 'value',          type: 'Date',                           description: 'Controlled selected date.' },
  { name: 'defaultValue',   type: 'Date',                           description: 'Initial selected date for uncontrolled usage.' },
  { name: 'onValueChange',  type: '(date: Date) => void',           description: 'Called when a date is selected.' },
  { name: 'min',            type: 'Date',                           description: 'Earliest selectable date. Dates before this are disabled.' },
  { name: 'max',            type: 'Date',                           description: 'Latest selectable date. Dates after this are disabled.' },
  { name: 'disabled',       type: '(date: Date) => boolean',        description: 'Called for each date — return true to disable it.' },
  { name: 'defaultMonth',   type: 'Date',                           description: 'Month to display initially. Defaults to the selected date or today.' },
  { name: 'className',      type: 'string',                         description: 'Additional classes on the calendar wrapper.' },
];

export default function CalendarPage() {
  return (
    <div>
      <h1 className="font-display font-extrabold text-3xl text-foreground mb-2">Calendar</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        Standalone date grid with month navigation, keyboard accessibility, and date constraints. Use directly when you need an always-visible calendar, or compose with DatePicker for an input-triggered popover.
      </p>

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Examples</h2>
      <CalendarDemos />

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Props</h2>
      <PropsTable props={props} />
    </div>
  );
}
