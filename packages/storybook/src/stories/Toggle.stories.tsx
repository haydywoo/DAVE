import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from '@dave/react';

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    defaultChecked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: { label: 'Enable notifications' },
};

export const On: Story = {
  args: { label: 'Enabled', defaultChecked: true },
};

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Toggle label="Off and disabled" disabled />
      <Toggle label="On and disabled" disabled defaultChecked />
    </div>
  ),
};

export const WithoutLabel: Story = {
  args: { defaultChecked: true },
};

export const Group: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Toggle label="Email notifications" defaultChecked />
      <Toggle label="Push notifications" />
      <Toggle label="SMS notifications" disabled />
    </div>
  ),
};
