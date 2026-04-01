import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Combobox } from '@dave/react';

const frameworks = [
  { value: 'next',    label: 'Next.js' },
  { value: 'react',   label: 'React' },
  { value: 'svelte',  label: 'Svelte' },
  { value: 'vue',     label: 'Vue' },
  { value: 'astro',   label: 'Astro' },
  { value: 'remix',   label: 'Remix' },
  { value: 'nuxt',    label: 'Nuxt' },
];

const grouped = [
  {
    label: 'Frontend',
    options: [
      { value: 'next',   label: 'Next.js' },
      { value: 'react',  label: 'React' },
      { value: 'svelte', label: 'Svelte' },
      { value: 'vue',    label: 'Vue' },
    ],
  },
  {
    label: 'Meta-frameworks',
    options: [
      { value: 'astro', label: 'Astro' },
      { value: 'remix', label: 'Remix' },
      { value: 'nuxt',  label: 'Nuxt' },
    ],
  },
];

const meta: Meta = {
  title: 'Components/Combobox',
  tags: ['autodocs'],
  decorators: [(Story) => <div className="w-72"><Story /></div>],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return <Combobox items={frameworks} value={value} onValueChange={setValue} placeholder="Select framework…" />;
  },
};

export const Grouped: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return <Combobox items={grouped} value={value} onValueChange={setValue} placeholder="Select framework…" />;
  },
};

export const Sizes: Story = {
  render: () => {
    const [v1, setV1] = useState('');
    const [v2, setV2] = useState('');
    const [v3, setV3] = useState('');
    return (
      <div className="flex flex-col gap-3">
        <Combobox size="sm" items={frameworks} value={v1} onValueChange={setV1} placeholder="Small" />
        <Combobox size="md" items={frameworks} value={v2} onValueChange={setV2} placeholder="Medium" />
        <Combobox size="lg" items={frameworks} value={v3} onValueChange={setV3} placeholder="Large" />
      </div>
    );
  },
};

export const Error: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return <Combobox items={frameworks} value={value} onValueChange={setValue} placeholder="Select framework…" error />;
  },
};

export const Disabled: Story = {
  render: () => (
    <Combobox items={frameworks} placeholder="Select framework…" disabled />
  ),
};
