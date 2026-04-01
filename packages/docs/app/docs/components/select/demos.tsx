'use client';

import { Select, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectField } from '@dave/react';
import { Preview } from '@/components/Preview';

export function SelectDemos() {
  return (
    <>
      <Preview code={`<Select placeholder="Select a role…">
  <SelectItem value="admin">Admin</SelectItem>
  <SelectItem value="member">Member</SelectItem>
  <SelectItem value="viewer">Viewer</SelectItem>
</Select>`}>
        <div className="w-56">
          <Select placeholder="Select a role…">
            <SelectItem value="admin">Admin</SelectItem>
            <SelectItem value="member">Member</SelectItem>
            <SelectItem value="viewer">Viewer</SelectItem>
          </Select>
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">With label and hint</h3>
      <Preview code={`<SelectField label="Role" hint="Controls what the user can do.">
  <Select placeholder="Select a role…">
    <SelectItem value="admin">Admin</SelectItem>
    <SelectItem value="member">Member</SelectItem>
    <SelectItem value="viewer">Viewer</SelectItem>
  </Select>
</SelectField>`}>
        <div className="w-56">
          <SelectField label="Role" hint="Controls what the user can do.">
            <Select placeholder="Select a role…">
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="member">Member</SelectItem>
              <SelectItem value="viewer">Viewer</SelectItem>
            </Select>
          </SelectField>
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">With groups</h3>
      <Preview code={`<Select placeholder="Select a timezone…">
  <SelectGroup>
    <SelectLabel>Europe</SelectLabel>
    <SelectItem value="london">London (GMT+0)</SelectItem>
    <SelectItem value="paris">Paris (GMT+1)</SelectItem>
  </SelectGroup>
  <SelectSeparator />
  <SelectGroup>
    <SelectLabel>Americas</SelectLabel>
    <SelectItem value="new-york">New York (GMT-5)</SelectItem>
  </SelectGroup>
</Select>`}>
        <div className="w-64">
          <Select placeholder="Select a timezone…">
            <SelectGroup>
              <SelectLabel>Europe</SelectLabel>
              <SelectItem value="london">London (GMT+0)</SelectItem>
              <SelectItem value="paris">Paris (GMT+1)</SelectItem>
              <SelectItem value="helsinki">Helsinki (GMT+2)</SelectItem>
            </SelectGroup>
            <SelectSeparator />
            <SelectGroup>
              <SelectLabel>Americas</SelectLabel>
              <SelectItem value="new-york">New York (GMT-5)</SelectItem>
              <SelectItem value="chicago">Chicago (GMT-6)</SelectItem>
              <SelectItem value="los-angeles">Los Angeles (GMT-8)</SelectItem>
            </SelectGroup>
          </Select>
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Sizes</h3>
      <Preview code={`<Select size="sm" placeholder="Small" />
<Select size="md" placeholder="Medium" />
<Select size="lg" placeholder="Large" />`}>
        <div className="flex flex-col gap-3 w-48">
          {(['sm', 'md', 'lg'] as const).map(size => (
            <Select key={size} size={size} placeholder={`Size: ${size}`}>
              <SelectItem value="a">Option A</SelectItem>
              <SelectItem value="b">Option B</SelectItem>
            </Select>
          ))}
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Error state</h3>
      <Preview code={`<SelectField label="Country" hint="Please select a country." error>
  <Select error placeholder="Select a country…">
    <SelectItem value="gb">United Kingdom</SelectItem>
  </Select>
</SelectField>`}>
        <div className="w-56">
          <SelectField label="Country" hint="Please select a country." error>
            <Select error placeholder="Select a country…">
              <SelectItem value="gb">United Kingdom</SelectItem>
              <SelectItem value="us">United States</SelectItem>
            </Select>
          </SelectField>
        </div>
      </Preview>
    </>
  );
}
