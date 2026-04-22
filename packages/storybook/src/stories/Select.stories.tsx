import type { Meta, StoryObj } from '@storybook/react-vite';
import { Select, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectField } from '@haydywoo/dave-react';

const meta: Meta = {
  title: 'Components/Select',
  parameters: { layout: 'centered' },
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <div className="w-56">
      <Select placeholder="Select a role…">
        <SelectItem value="admin">Admin</SelectItem>
        <SelectItem value="member">Member</SelectItem>
        <SelectItem value="viewer">Viewer</SelectItem>
      </Select>
    </div>
  ),
};

export const WithLabel: StoryObj = {
  render: () => (
    <div className="w-56">
      <SelectField label="Role" hint="Controls what the user can do.">
        <Select placeholder="Select a role…">
          <SelectItem value="admin">Admin</SelectItem>
          <SelectItem value="member">Member</SelectItem>
          <SelectItem value="viewer">Viewer</SelectItem>
        </Select>
      </SelectField>
    </div>
  ),
};

export const WithGroups: StoryObj = {
  render: () => (
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
  ),
};

export const Sizes: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-3 w-56">
      {(['sm', 'md', 'lg'] as const).map(size => (
        <Select key={size} size={size} placeholder={`Size: ${size}`}>
          <SelectItem value="a">Option A</SelectItem>
          <SelectItem value="b">Option B</SelectItem>
        </Select>
      ))}
    </div>
  ),
};

export const ErrorState: StoryObj = {
  render: () => (
    <div className="w-56">
      <SelectField label="Country" hint="Please select a country." error>
        <Select error placeholder="Select a country…">
          <SelectItem value="gb">United Kingdom</SelectItem>
          <SelectItem value="us">United States</SelectItem>
        </Select>
      </SelectField>
    </div>
  ),
};

export const Disabled: StoryObj = {
  render: () => (
    <div className="w-56">
      <Select disabled placeholder="Disabled select">
        <SelectItem value="a">Option A</SelectItem>
      </Select>
    </div>
  ),
};
