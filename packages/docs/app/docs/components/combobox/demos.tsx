'use client';

import { useState } from 'react';
import { Combobox } from '@dave/react';
import { Preview } from '@/components/Preview';

const frameworks = [
  { value: 'next',   label: 'Next.js' },
  { value: 'react',  label: 'React' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'vue',    label: 'Vue' },
  { value: 'astro',  label: 'Astro' },
  { value: 'remix',  label: 'Remix' },
  { value: 'nuxt',   label: 'Nuxt' },
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

export function ComboboxDemos() {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');

  return (
    <>
      <Preview
        center={false}
        code={`const [value, setValue] = useState('');

<Combobox
  items={frameworks}
  value={value}
  onValueChange={setValue}
  placeholder="Select framework…"
/>`}
      >
        <div className="w-72">
          <Combobox items={frameworks} value={value1} onValueChange={setValue1} placeholder="Select framework…" />
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Grouped options</h3>
      <Preview
        center={false}
        code={`<Combobox
  items={[
    { label: 'Frontend', options: [{ value: 'next', label: 'Next.js' }, …] },
    { label: 'Meta-frameworks', options: [{ value: 'astro', label: 'Astro' }, …] },
  ]}
  value={value}
  onValueChange={setValue}
  placeholder="Select framework…"
/>`}
      >
        <div className="w-72">
          <Combobox items={grouped} value={value2} onValueChange={setValue2} placeholder="Select framework…" />
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Sizes</h3>
      <Preview
        center={false}
        code={`<Combobox size="sm" items={frameworks} placeholder="Small" />
<Combobox size="md" items={frameworks} placeholder="Medium" />
<Combobox size="lg" items={frameworks} placeholder="Large" />`}
      >
        <div className="w-72 flex flex-col gap-3">
          <Combobox size="sm" items={frameworks} placeholder="Small" />
          <Combobox size="md" items={frameworks} placeholder="Medium" />
          <Combobox size="lg" items={frameworks} placeholder="Large" />
        </div>
      </Preview>
    </>
  );
}
