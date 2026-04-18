import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { TabsDemos } from './demos';

export const metadata: Metadata = { title: 'Tabs' };

const listProps = [
  { name: 'variant', type: "'line' | 'pill'", default: "'line'", description: 'Line shows a bottom border indicator. Pill shows a filled background on the active tab.' },
];

const triggerProps = [
  { name: 'value', type: 'string', required: true, description: 'Matches the value on the corresponding TabsContent.' },
  { name: 'variant', type: "'line' | 'pill'", default: "'line'", description: 'Must match the variant on TabsList.' },
  { name: 'disabled', type: 'boolean', description: 'Prevents selection.' },
];

export default function TabsPage() {
  return (
    <div>
      <h1 className="font-display font-extrabold text-3xl text-foreground mb-2">Tabs</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        Switches between related content panels. Two visual variants: line (default) and pill. Full keyboard navigation. Built on Radix UI.
      </p>

      <h3 className="text-sm text-fg-secondary mb-2">Anatomy</h3>
      <pre className="font-code text-xs text-fg-secondary bg-surface border border-border rounded-[3px] p-4 mb-8 leading-relaxed overflow-x-auto">{`<Tabs defaultValue="tab-1">
  <TabsList variant="line">
    <TabsTrigger value="tab-1" variant="line">Tab 1</TabsTrigger>
    <TabsTrigger value="tab-2" variant="line">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab-1">Content 1</TabsContent>
  <TabsContent value="tab-2">Content 2</TabsContent>
</Tabs>`}</pre>

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Examples</h2>
      <TabsDemos />

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">TabsList props</h2>
      <PropsTable props={listProps} />

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">TabsTrigger props</h2>
      <PropsTable props={triggerProps} />
    </div>
  );
}
