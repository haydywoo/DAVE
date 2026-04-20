import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from '@dave/react';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    indeterminate: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: { label: 'Accept terms and conditions' },
};

export const Checked: Story = {
  args: { label: 'Checked', defaultChecked: true },
};

export const Indeterminate: Story = {
  args: { label: 'Select all', indeterminate: true },
};

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Checkbox label="Unchecked disabled" disabled />
      <Checkbox label="Checked disabled" disabled defaultChecked />
    </div>
  ),
};

export const Group: Story = {
  render: () => (
    <div className="flex flex-col gap-2.5">
      <Checkbox label="Option one" defaultChecked />
      <Checkbox label="Option two" />
      <Checkbox label="Option three" defaultChecked />
      <Checkbox label="Option four (disabled)" disabled />
    </div>
  ),
};
