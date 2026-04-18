import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { DrawerDemos } from './demos';
import { AnatomyBlock } from '@/components/AnatomyBlock';

export const metadata: Metadata = { title: 'Drawer' };

const contentProps = [
  { name: 'side', type: "'left' | 'right' | 'top' | 'bottom'", default: "'right'", description: 'Which edge the drawer slides in from.' },
  { name: 'children', type: 'ReactNode', required: true, description: 'Drawer content.' },
  { name: 'className', type: 'string', description: 'Additional classes on the panel.' },
];

export default function DrawerPage() {
  return (
    <div>
      <h1 className="font-display font-extrabold text-3xl text-foreground mb-2">Drawer</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        Side panel that slides in from any edge. Built on Radix Dialog — includes focus trap, Escape key, and backdrop dismiss. Use for settings, filters, detail views, and mobile navigation.
      </p>

      <AnatomyBlock>{`<Drawer>
  <DrawerTrigger />
  <DrawerContent side="right">
    <DrawerHeader>
      <DrawerTitle />
      <DrawerDescription />
    </DrawerHeader>
    <DrawerBody />
    <DrawerFooter>
      <DrawerClose />
    </DrawerFooter>
  </DrawerContent>
</Drawer>`}</AnatomyBlock>

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Examples</h2>
      <DrawerDemos />

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">DrawerContent props</h2>
      <PropsTable props={contentProps} />
    </div>
  );
}
