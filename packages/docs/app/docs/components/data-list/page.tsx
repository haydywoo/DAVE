import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { DataListDemos } from './demos';
import { AnatomyBlock } from '@/components/AnatomyBlock';

export const metadata: Metadata = { title: 'DataList' };

const rootProps = [
  { name: 'orientation', type: "'horizontal' | 'vertical'", default: "'horizontal'", description: 'horizontal — label and value side by side. vertical — label above value.' },
  { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Controls text size and row padding.' },
  { name: 'className', type: 'string', description: 'Additional classes on the dl element.' },
];

const labelProps = [
  { name: 'minWidth', type: 'string', default: "'8rem'", description: 'Minimum width of the label column in horizontal orientation.' },
  { name: 'className', type: 'string', description: 'Additional classes.' },
];

export default function DataListPage() {
  return (
    <div>
      <h1 className="font-display font-semibold text-4xl text-foreground mb-2">DataList</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        A key-value pair list for displaying metadata, settings, and detail views. Renders semantic <code className="font-code text-xs bg-surface px-1 py-0.5 rounded">dl</code>/<code className="font-code text-xs bg-surface px-1 py-0.5 rounded">dt</code>/<code className="font-code text-xs bg-surface px-1 py-0.5 rounded">dd</code> HTML. Supports horizontal and vertical orientations, three sizes, and any ReactNode as a value.
      </p>

      <AnatomyBlock>{`<DataList orientation="horizontal" size="md">
  <DataListItem>
    <DataListLabel>Label</DataListLabel>
    <DataListValue>Value</DataListValue>
  </DataListItem>
</DataList>`}</AnatomyBlock>

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Examples</h2>
      <DataListDemos />

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">DataList props</h2>
      <PropsTable props={rootProps} />

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">DataListLabel props</h2>
      <PropsTable props={labelProps} />
    </div>
  );
}
