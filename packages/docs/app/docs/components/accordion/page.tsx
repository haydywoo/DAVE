import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { AccordionDemos } from './demos';
import { AnatomyBlock } from '@/components/AnatomyBlock';

export const metadata: Metadata = { title: 'Accordion' };

const rootProps = [
  { name: 'type', type: "'single' | 'multiple'", required: true, description: "Single allows one open item at a time. Multiple allows any number." },
  { name: 'collapsible', type: 'boolean', default: 'false', description: "When type is 'single', allows closing the active item by clicking it again." },
  { name: 'value', type: 'string | string[]', description: 'Controlled open value(s).' },
  { name: 'defaultValue', type: 'string | string[]', description: 'Initial open value(s) for uncontrolled usage.' },
  { name: 'onValueChange', type: '(value) => void', description: 'Called when open values change.' },
];

const itemProps = [
  { name: 'value', type: 'string', required: true, description: 'Unique identifier for this item.' },
  { name: 'children', type: 'ReactNode', required: true, description: 'Should contain AccordionTrigger and AccordionContent.' },
];

export default function AccordionPage() {
  return (
    <div>
      <h1 className="font-display font-semibold text-4xl text-foreground mb-2">Accordion</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        Expandable sections with animated height transition. Supports single and multiple open modes, full keyboard navigation, and ARIA.
      </p>

      <AnatomyBlock>{`<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Label</AccordionTrigger>
    <AccordionContent>Content</AccordionContent>
  </AccordionItem>
</Accordion>`}</AnatomyBlock>

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Examples</h2>
      <AccordionDemos />

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Accordion props</h2>
      <PropsTable props={rootProps} />

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">AccordionItem props</h2>
      <PropsTable props={itemProps} />
    </div>
  );
}
