import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { CollapsibleDemos } from './demos';
import { AnatomyBlock } from '@/components/AnatomyBlock';

export const metadata: Metadata = { title: 'Collapsible' };

const rootProps = [
  { name: 'children',      type: 'ReactNode',              required: true,  description: 'Must contain CollapsibleTrigger and CollapsibleContent.' },
  { name: 'open',          type: 'boolean',                                  description: 'Controlled open state.' },
  { name: 'defaultOpen',   type: 'boolean',  default: 'false',              description: 'Whether open by default (uncontrolled).' },
  { name: 'onOpenChange',  type: '(open: boolean) => void',                  description: 'Called when the open state changes.' },
  { name: 'disabled',      type: 'boolean',  default: 'false',              description: 'Prevents toggling.' },
  { name: 'className',     type: 'string',                                   description: 'Additional classes on the root.' },
];

const triggerProps = [
  { name: 'children',     type: 'ReactNode', required: true, description: 'Trigger label.' },
  { name: 'showChevron',  type: 'boolean',   default: 'true', description: 'Show a rotating chevron on the right.' },
  { name: 'className',    type: 'string',                     description: 'Additional classes.' },
];

const contentProps = [
  { name: 'children',  type: 'ReactNode', required: true, description: 'Revealed content.' },
  { name: 'className', type: 'string',                     description: 'Additional classes on the content wrapper.' },
];

export default function CollapsiblePage() {
  return (
    <div>
      <h1 className="font-display font-extrabold text-3xl text-foreground mb-2">Collapsible</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        Simple show/hide toggle for a single section. Use for FAQ items, filter panels, and inline detail sections. For grouped sections use Accordion instead.
      </p>

      <AnatomyBlock>{`<Collapsible>
  <CollapsibleTrigger />  {/* click to toggle */}
  <CollapsibleContent /> {/* revealed content */}
</Collapsible>`}</AnatomyBlock>

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Examples</h2>
      <CollapsibleDemos />

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Props</h2>
      <h3 className="text-sm font-medium text-foreground mb-3">Collapsible</h3>
      <PropsTable props={rootProps} />
      <h3 className="text-sm font-medium text-foreground mt-6 mb-3">CollapsibleTrigger</h3>
      <PropsTable props={triggerProps} />
      <h3 className="text-sm font-medium text-foreground mt-6 mb-3">CollapsibleContent</h3>
      <PropsTable props={contentProps} />
    </div>
  );
}
