import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import {
  FormField,
  FormLabel,
  FormControl,
  FormHint,
  FormSection,
  Input,
  Textarea,
  Select,
  SelectField,
  Checkbox,
  Switch,
} from '@dave/react';

const meta: Meta = {
  title: 'Components/FormField',
  parameters: { layout: 'centered' },
  decorators: [Story => <div className="w-96"><Story /></div>],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <FormField id="email">
      <FormLabel>Email address</FormLabel>
      <FormControl>
        <Input placeholder="you@example.com" />
      </FormControl>
      <FormHint>We'll never share your email.</FormHint>
    </FormField>
  ),
};

export const WithError: Story = {
  render: () => (
    <FormField id="email-error" error>
      <FormLabel>Email address</FormLabel>
      <FormControl>
        <Input defaultValue="not-an-email" error />
      </FormControl>
      <FormHint>Please enter a valid email address.</FormHint>
    </FormField>
  ),
};

export const Required: Story = {
  render: () => (
    <FormField id="name" required>
      <FormLabel>Full name</FormLabel>
      <FormControl>
        <Input placeholder="Jane Smith" />
      </FormControl>
    </FormField>
  ),
};

export const WithSelect: Story = {
  render: () => (
    <FormField id="role">
      <FormLabel>Role</FormLabel>
      <FormControl>
        <SelectField placeholder="Select a role…">
          <Select.Item value="admin">Admin</Select.Item>
          <Select.Item value="editor">Editor</Select.Item>
          <Select.Item value="viewer">Viewer</Select.Item>
        </SelectField>
      </FormControl>
      <FormHint>Controls what the user can access.</FormHint>
    </FormField>
  ),
};

export const WithTextarea: Story = {
  render: () => (
    <FormField id="bio">
      <FormLabel>Bio</FormLabel>
      <FormControl>
        <Textarea placeholder="Tell us about yourself…" showCount maxLength={200} />
      </FormControl>
      <FormHint>Shown on your public profile.</FormHint>
    </FormField>
  ),
};

export const SectionLayout: Story = {
  render: () => (
    <div className="flex flex-col gap-8 w-96">
      <FormSection title="Personal details" description="Used for your profile and notifications.">
        <FormField id="fullname" required>
          <FormLabel>Full name</FormLabel>
          <FormControl><Input placeholder="Jane Smith" /></FormControl>
        </FormField>
        <FormField id="email2">
          <FormLabel>Email</FormLabel>
          <FormControl><Input placeholder="you@example.com" type="email" /></FormControl>
        </FormField>
      </FormSection>
      <FormSection title="Preferences">
        <FormField id="notifications">
          <div className="flex items-center justify-between gap-4">
            <div>
              <FormLabel>Email notifications</FormLabel>
              <FormHint>Receive updates about activity.</FormHint>
            </div>
            <Switch />
          </div>
        </FormField>
      </FormSection>
    </div>
  ),
};
