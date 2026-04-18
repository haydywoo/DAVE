import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { PopoverDemos } from './demos';
import { AnatomyBlock } from '@/components/AnatomyBlock';

export const metadata: Metadata = { title: 'Popover' };

const popoverContentProps = [
  { name: 'children', type: 'ReactNode', required: true, description: 'Content rendered inside the popover.' },
  { name: 'side', type: "'top' | 'right' | 'bottom' | 'left'", default: "'bottom'", description: 'Preferred side to render.' },
  { name: 'align', type: "'start' | 'center' | 'end'", default: "'start'", description: 'Alignment along the side.' },
  { name: 'sideOffset', type: 'number', default: '6', description: 'Distance in pixels from the trigger.' },
  { name: 'className', type: 'string', description: 'Additional classes on the panel.' },
];

export default function PopoverPage() {
  return (
    <div>
      <h1 className="font-display font-extrabold text-3xl text-foreground mb-2">Popover</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        A floating panel anchored to a trigger. Use for forms, filters, or any inline UI that needs to be contextual but non-blocking.
      </p>

      <AnatomyBlock>{`<Popover>
  <PopoverTrigger asChild>
    <Button>Open</Button>
  </PopoverTrigger>
  <PopoverContent>
    {/* anything */}
  </PopoverContent>
</Popover>`}</AnatomyBlock>

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Examples</h2>
      <PopoverDemos />

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">PopoverContent props</h2>
      <PropsTable props={popoverContentProps} />
    </div>
  );
}
