'use client';

import { RadioGroup, RadioItem } from '@dave/react';
import { Preview } from '@/components/Preview';

export function RadioDemos() {
  return (
    <>
      <Preview code={`<RadioGroup defaultValue="member">
  <RadioItem value="admin"  label="Admin" />
  <RadioItem value="member" label="Member" />
  <RadioItem value="viewer" label="Viewer" />
</RadioGroup>`}>
        <RadioGroup defaultValue="member">
          <RadioItem value="admin"  label="Admin" />
          <RadioItem value="member" label="Member" />
          <RadioItem value="viewer" label="Viewer" />
        </RadioGroup>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">With descriptions</h3>
      <Preview code={`<RadioGroup defaultValue="member">
  <RadioItem value="admin"  label="Admin"  description="Full access to all resources and settings." />
  <RadioItem value="member" label="Member" description="Can view and edit assigned projects." />
  <RadioItem value="viewer" label="Viewer" description="Read-only access. Cannot make changes." />
</RadioGroup>`}>
        <RadioGroup defaultValue="member">
          <RadioItem value="admin"  label="Admin"  description="Full access to all resources and settings." />
          <RadioItem value="member" label="Member" description="Can view and edit assigned projects." />
          <RadioItem value="viewer" label="Viewer" description="Read-only access. Cannot make changes." />
        </RadioGroup>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Horizontal</h3>
      <Preview code={`<RadioGroup defaultValue="month" orientation="horizontal">
  <RadioItem value="day"   label="Day" />
  <RadioItem value="week"  label="Week" />
  <RadioItem value="month" label="Month" />
  <RadioItem value="year"  label="Year" />
</RadioGroup>`}>
        <RadioGroup defaultValue="month" orientation="horizontal">
          <RadioItem value="day"   label="Day" />
          <RadioItem value="week"  label="Week" />
          <RadioItem value="month" label="Month" />
          <RadioItem value="year"  label="Year" />
        </RadioGroup>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Disabled</h3>
      <Preview code={`<RadioGroup defaultValue="member">
  <RadioItem value="admin"  label="Admin"  disabled />
  <RadioItem value="member" label="Member" />
  <RadioItem value="viewer" label="Viewer" disabled />
</RadioGroup>`}>
        <RadioGroup defaultValue="member">
          <RadioItem value="admin"  label="Admin"  disabled />
          <RadioItem value="member" label="Member" />
          <RadioItem value="viewer" label="Viewer" disabled />
        </RadioGroup>
      </Preview>
    </>
  );
}
