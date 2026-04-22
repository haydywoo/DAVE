import type { Meta, StoryObj } from '@storybook/react-vite';
import { RadioGroup, RadioItem } from '@haydywoo/dave-react';

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/Radio',
  component: RadioGroup,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="member">
      <RadioItem value="admin"  label="Admin" />
      <RadioItem value="member" label="Member" />
      <RadioItem value="viewer" label="Viewer" />
    </RadioGroup>
  ),
};

export const WithDescriptions: Story = {
  render: () => (
    <RadioGroup defaultValue="member">
      <RadioItem
        value="admin"
        label="Admin"
        description="Full access to all resources and settings."
      />
      <RadioItem
        value="member"
        label="Member"
        description="Can view and edit assigned projects."
      />
      <RadioItem
        value="viewer"
        label="Viewer"
        description="Read-only access. Cannot make changes."
      />
    </RadioGroup>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <RadioGroup defaultValue="month" orientation="horizontal">
      <RadioItem value="day"   label="Day" />
      <RadioItem value="week"  label="Week" />
      <RadioItem value="month" label="Month" />
      <RadioItem value="year"  label="Year" />
    </RadioGroup>
  ),
};

export const Disabled: Story = {
  render: () => (
    <RadioGroup defaultValue="member">
      <RadioItem value="admin"  label="Admin" disabled />
      <RadioItem value="member" label="Member" />
      <RadioItem value="viewer" label="Viewer" disabled />
    </RadioGroup>
  ),
};
