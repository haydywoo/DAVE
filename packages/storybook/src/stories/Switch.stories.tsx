import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '@dave/react';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md'] },
  },
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: { defaultChecked: true },
};

export const WithLabel: Story = {
  args: {
    label: 'Email notifications',
    defaultChecked: true,
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Marketing emails',
    description: 'Receive updates about new features and promotions.',
    defaultChecked: false,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Switch size="sm" label="Small" defaultChecked />
      <Switch size="md" label="Medium" defaultChecked />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Switch label="Disabled off" disabled />
      <Switch label="Disabled on" disabled defaultChecked />
    </div>
  ),
};

export const SettingsList: Story = {
  render: () => (
    <div className="flex flex-col gap-5 w-80">
      <Switch label="Email notifications" description="Get notified about activity." defaultChecked />
      <Switch label="Push notifications" description="Receive push alerts on mobile." />
      <Switch label="Weekly digest" description="A summary of your week every Monday." defaultChecked />
    </div>
  ),
};
