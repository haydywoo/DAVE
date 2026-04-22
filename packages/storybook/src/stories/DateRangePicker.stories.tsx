import type { Meta, StoryObj } from '@storybook/react-vite';
import { DateRangePicker, RangeCalendar } from '@haydywoo/dave-react';
import { addDays } from 'date-fns';

const meta: Meta<typeof DateRangePicker> = {
  title: 'Forms/DateRangePicker',
  component: DateRangePicker,
  parameters: { layout: 'padded' },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof DateRangePicker>;

export const Default: Story = {
  args: {
    label: 'Date range',
  },
};

export const WithHint: Story = {
  args: {
    label: 'Date range',
    hint: 'Select a start and end date.',
  },
};

export const WithMinMax: Story = {
  render: () => {
    const today = new Date();
    return (
      <DateRangePicker
        label="Booking window"
        hint="Available within the next 60 days."
        min={today}
        max={addDays(today, 60)}
      />
    );
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <DateRangePicker size="sm" label="Small"  />
      <DateRangePicker size="md" label="Medium" />
      <DateRangePicker size="lg" label="Large"  />
      <DateRangePicker size="xl" label="XL"     />
    </div>
  ),
};

export const Error: Story = {
  args: {
    label: 'Date range',
    hint: 'A date range is required.',
    error: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Date range',
    disabled: true,
  },
};

export const CalendarOnly: Story = {
  render: () => (
    <div className="w-auto">
      <RangeCalendar />
    </div>
  ),
  decorators: [(Story) => <Story />],
};
