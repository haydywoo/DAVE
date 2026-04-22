'use client';

import { useState } from 'react';
import { Calendar } from '@haydywoo/dave-react';
import { addDays, format } from 'date-fns';
import { Preview } from '@/components/Preview';

export function CalendarDemos() {
  const [value, setValue] = useState<Date | undefined>(new Date());
  const today = new Date();

  return (
    <>
      <Preview
        code={`const [value, setValue] = useState(new Date());

<Calendar value={value} onValueChange={setValue} />`}
      >
        <div className="space-y-2 text-center">
          <Calendar value={value} onValueChange={setValue} />
          {value && (
            <p className="text-xs text-fg-secondary">{format(value, 'EEEE, MMMM d, yyyy')}</p>
          )}
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Min / max dates</h3>
      <Preview
        code={`<Calendar
  value={value}
  onValueChange={setValue}
  min={today}
  max={addDays(today, 30)}
/>`}
      >
        <Calendar
          onValueChange={() => {}}
          min={today}
          max={addDays(today, 30)}
        />
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Disabled dates</h3>
      <Preview
        code={`<Calendar
  value={value}
  onValueChange={setValue}
  disabled={(date) => date.getDay() === 0 || date.getDay() === 6}
/>`}
      >
        <Calendar
          onValueChange={() => {}}
          disabled={(date) => date.getDay() === 0 || date.getDay() === 6}
        />
      </Preview>
    </>
  );
}
