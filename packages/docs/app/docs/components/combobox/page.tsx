import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { ComboboxDemos } from './demos';

export const metadata: Metadata = { title: 'Combobox' };

const props = [
  { name: 'items', type: 'ComboboxOption[] | ComboboxGroup[]', required: true, description: 'Flat list of options or grouped options.' },
  { name: 'value', type: 'string', description: 'Controlled selected value.' },
  { name: 'defaultValue', type: 'string', description: 'Initial value for uncontrolled usage.' },
  { name: 'onValueChange', type: '(value: string) => void', description: 'Called when the selection changes.' },
  { name: 'placeholder', type: 'string', default: "'Select…'", description: 'Trigger label when nothing is selected.' },
  { name: 'searchPlaceholder', type: 'string', default: "'Search…'", description: 'Placeholder inside the search input.' },
  { name: 'emptyText', type: 'string', default: "'No results found.'", description: 'Message when search returns no matches.' },
  { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Height and padding scale.' },
  { name: 'error', type: 'boolean', default: 'false', description: 'Applies error border colour.' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the combobox.' },
];

export default function ComboboxPage() {
  return (
    <div>
      <h1 className="font-display font-extrabold text-3xl text-foreground mb-2">Combobox</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        Searchable select with keyboard navigation. Supports flat and grouped options. Use when the option list is long enough that filtering adds value.
      </p>

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Examples</h2>
      <ComboboxDemos />

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Props</h2>
      <PropsTable props={props} />
    </div>
  );
}
