'use client';

import { Checkbox } from '@dave/react';
import { Preview } from '@/components/Preview';

export function CheckboxDemos() {
  return (
    <>
      <Preview
        code={`<Checkbox label="Accept terms and conditions" />
<Checkbox label="Subscribe to newsletter" defaultChecked />`}
      >
        <div className="flex flex-col gap-3">
          <Checkbox label="Accept terms and conditions" />
          <Checkbox label="Subscribe to newsletter" defaultChecked />
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Indeterminate</h3>
      <Preview
        code={`<Checkbox label="Select all" indeterminate />`}
      >
        <Checkbox label="Select all" indeterminate />
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Disabled</h3>
      <Preview
        code={`<Checkbox label="Unchecked disabled" disabled />
<Checkbox label="Checked disabled" defaultChecked disabled />`}
      >
        <div className="flex flex-col gap-3">
          <Checkbox label="Unchecked disabled" disabled />
          <Checkbox label="Checked disabled" defaultChecked disabled />
        </div>
      </Preview>
    </>
  );
}
