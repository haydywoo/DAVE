import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { DatePicker } from '@dave/react';
import { addDays } from 'date-fns';

const meta: Meta<typeof DatePicker> = {
  title: 'Forms/DatePicker',
  component: DatePicker,
  parameters: { layout: 'padded' },
  decorators: [(Story) => <div className="w-72"><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  args: {
    label: 'Date',
    defaultValue: new Date(),
  },
};

export const WithHint: Story = {
  args: {
    label: 'Start date',
    hint: 'Select the project start date.',
  },
};

export const USFormat: Story = {
  args: {
    label: 'Date',
    dateFormat: 'MM/dd/yyyy',
    defaultValue: new Date(),
  },
};

export const WithMinMax: Story = {
  render: () => {
    const today = new Date();
    return (
      <DatePicker
        label="Appointment"
        hint="Available dates: next 30 days only."
        min={today}
        max={addDays(today, 30)}
      />
    );
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-72">
      <DatePicker size="sm" label="Small"  defaultValue={new Date()} />
      <DatePicker size="md" label="Medium" defaultValue={new Date()} />
      <DatePicker size="lg" label="Large"  defaultValue={new Date()} />
      <DatePicker size="xl" label="XL"     defaultValue={new Date()} />
    </div>
  ),
};

export const Error: Story = {
  args: {
    label: 'Due date',
    hint: 'A due date is required.',
    error: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Date',
    defaultValue: new Date(),
    disabled: true,
  },
};
