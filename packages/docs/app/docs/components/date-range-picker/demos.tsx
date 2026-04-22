'use client';

import { useState } from 'react';
import { DateRangePicker, RangeCalendar } from '@haydywoo/dave-react';
import type { DateRange } from '@haydywoo/dave-react';
import { addDays, format } from 'date-fns';
import { Preview } from '@/components/Preview';

export function DateRangePickerDemos() {
  const [range, setRange] = useState<DateRange | undefined>();
  const today = new Date();

  return (
    <>
      <Preview
        center={false}
        code={`<DateRangePicker label="Date range" />`}
      >
        <div className="w-80">
          <DateRangePicker label="Date range" />
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Controlled</h3>
      <Preview
        center={false}
        code={`const [range, setRange] = useState<DateRange | undefined>();

<DateRangePicker
  label="Date range"
  value={range}
  onValueChange={setRange}
/>`}
      >
        <div className="w-80 space-y-2">
          <DateRangePicker
            label="Date range"
            value={range}
            onValueChange={setRange}
            hint={
              range?.from
                ? range.to
                  ? `${format(range.from, 'MMM d')} – ${format(range.to, 'MMM d, yyyy')}`
                  : `From ${format(range.from, 'MMM d, yyyy')}`
                : 'No range selected.'
            }
          />
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Min / max</h3>
      <Preview
        center={false}
        code={`<DateRangePicker
  label="Booking window"
  min={today}
  max={addDays(today, 60)}
  hint="Available within the next 60 days."
/>`}
      >
        <div className="w-80">
          <DateRangePicker
            label="Booking window"
            min={today}
            max={addDays(today, 60)}
            hint="Available within the next 60 days."
          />
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Sizes</h3>
      <Preview
        center={false}
        code={`<DateRangePicker size="sm" label="Small"  />
<DateRangePicker size="md" label="Medium" />
<DateRangePicker size="lg" label="Large"  />
<DateRangePicker size="xl" label="XL"     />`}
      >
        <div className="w-80 flex flex-col gap-4">
          <DateRangePicker size="sm" label="Small"  />
          <DateRangePicker size="md" label="Medium" />
          <DateRangePicker size="lg" label="Large"  />
          <DateRangePicker size="xl" label="XL"     />
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">RangeCalendar standalone</h3>
      <Preview
        center
        code={`<RangeCalendar />`}
      >
        <RangeCalendar />
      </Preview>
    </>
  );
}
