import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { SegmentedControl } from '@haydywoo/dave-react';

const meta: Meta<typeof SegmentedControl> = {
  title: 'Components/SegmentedControl',
  component: SegmentedControl,
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<typeof SegmentedControl>;

const GridIcon = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>;
const ListIcon = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>;
const ColumnsIcon = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="8" height="18" rx="1"/><rect x="13" y="3" width="8" height="18" rx="1"/></svg>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('month');
    return (
      <SegmentedControl
        value={value}
        onValueChange={setValue}
        options={[
          { value: 'day', label: 'Day' },
          { value: 'week', label: 'Week' },
          { value: 'month', label: 'Month' },
          { value: 'year', label: 'Year' },
        ]}
      />
    );
  },
};

export const WithIcons: Story = {
  render: () => {
    const [value, setValue] = useState('grid');
    return (
      <SegmentedControl
        value={value}
        onValueChange={setValue}
        options={[
          { value: 'grid', label: 'Grid', icon: <GridIcon /> },
          { value: 'list', label: 'List', icon: <ListIcon /> },
          { value: 'columns', label: 'Columns', icon: <ColumnsIcon /> },
        ]}
      />
    );
  },
};

export const IconOnly: Story = {
  render: () => {
    const [value, setValue] = useState('grid');
    return (
      <SegmentedControl
        value={value}
        onValueChange={setValue}
        options={[
          { value: 'grid', label: <GridIcon /> },
          { value: 'list', label: <ListIcon /> },
          { value: 'columns', label: <ColumnsIcon /> },
        ]}
      />
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const opts = [
      { value: 'a', label: 'Alpha' },
      { value: 'b', label: 'Beta' },
      { value: 'c', label: 'Gamma' },
    ];
    return (
      <div className="flex flex-col gap-4 items-start">
        <SegmentedControl options={opts} defaultValue="a" size="sm" />
        <SegmentedControl options={opts} defaultValue="a" size="md" />
        <SegmentedControl options={opts} defaultValue="a" size="lg" />
      </div>
    );
  },
};

export const FullWidth: Story = {
  render: () => (
    <div className="w-72">
      <SegmentedControl
        fullWidth
        defaultValue="monthly"
        options={[
          { value: 'monthly', label: 'Monthly' },
          { value: 'annual', label: 'Annual' },
        ]}
      />
    </div>
  ),
};

export const WithDisabledOption: Story = {
  render: () => (
    <SegmentedControl
      defaultValue="free"
      options={[
        { value: 'free', label: 'Free' },
        { value: 'pro', label: 'Pro' },
        { value: 'enterprise', label: 'Enterprise', disabled: true },
      ]}
    />
  ),
};

export const Disabled: Story = {
  render: () => (
    <SegmentedControl
      disabled
      defaultValue="week"
      options={[
        { value: 'day', label: 'Day' },
        { value: 'week', label: 'Week' },
        { value: 'month', label: 'Month' },
      ]}
    />
  ),
};
