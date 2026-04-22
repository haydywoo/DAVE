import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Calendar } from '@haydywoo/dave-react';
import { addDays } from 'date-fns';

const meta: Meta<typeof Calendar> = {
  title: 'Forms/Calendar',
  component: Calendar,
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<Date | undefined>(new Date());
    return <Calendar value={value} onValueChange={setValue} />;
  },
};

export const NoSelection: Story = {
  render: () => {
    const [value, setValue] = useState<Date | undefined>();
    return <Calendar value={value} onValueChange={setValue} />;
  },
};

export const WithMinMax: Story = {
  render: () => {
    const [value, setValue] = useState<Date | undefined>();
    const today = new Date();
    return (
      <Calendar
        value={value}
        onValueChange={setValue}
        min={today}
        max={addDays(today, 30)}
      />
    );
  },
};

export const WithDisabledDates: Story = {
  render: () => {
    const [value, setValue] = useState<Date | undefined>();
    return (
      <Calendar
        value={value}
        onValueChange={setValue}
        disabled={(date) => date.getDay() === 0 || date.getDay() === 6}
      />
    );
  },
};
