'use client';

import { useState } from 'react';
import { DatePicker } from '@haydywoo/dave-react';
import { addDays, format } from 'date-fns';
import { Preview } from '@/components/Preview';

export function DatePickerDemos() {
  const [date, setDate] = useState<Date | undefined>();
  const today = new Date();

  return (
    <>
      <Preview
        center={false}
        code={`<DatePicker
  label="Date"
  defaultValue={new Date()}
/>`}
      >
        <div className="w-72">
          <DatePicker label="Date" defaultValue={new Date()} />
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Controlled</h3>
      <Preview
        center={false}
        code={`const [date, setDate] = useState<Date | undefined>();

<DatePicker
  label="Start date"
  value={date}
  onValueChange={setDate}
  hint="Select the project start date."
/>`}
      >
        <div className="w-72 space-y-2">
          <DatePicker
            label="Start date"
            value={date}
            onValueChange={setDate}
            hint={date ? `Selected: ${format(date, 'MMMM d, yyyy')}` : 'No date selected.'}
          />
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">US format</h3>
      <Preview
        center={false}
        code={`<DatePicker
  label="Date"
  dateFormat="MM/dd/yyyy"
  defaultValue={new Date()}
/>`}
      >
        <div className="w-72">
          <DatePicker label="Date" dateFormat="MM/dd/yyyy" defaultValue={new Date()} />
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Min / max</h3>
      <Preview
        center={false}
        code={`<DatePicker
  label="Appointment"
  min={today}
  max={addDays(today, 30)}
  hint="Available within the next 30 days."
/>`}
      >
        <div className="w-72">
          <DatePicker
            label="Appointment"
            min={today}
            max={addDays(today, 30)}
            hint="Available within the next 30 days."
          />
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Sizes</h3>
      <Preview
        center={false}
        code={`<DatePicker size="sm" label="Small"  defaultValue={new Date()} />
<DatePicker size="md" label="Medium" defaultValue={new Date()} />
<DatePicker size="lg" label="Large"  defaultValue={new Date()} />
<DatePicker size="xl" label="XL"     defaultValue={new Date()} />`}
      >
        <div className="w-72 flex flex-col gap-4">
          <DatePicker size="sm" label="Small"  defaultValue={new Date()} />
          <DatePicker size="md" label="Medium" defaultValue={new Date()} />
          <DatePicker size="lg" label="Large"  defaultValue={new Date()} />
          <DatePicker size="xl" label="XL"     defaultValue={new Date()} />
        </div>
      </Preview>
    </>
  );
}
