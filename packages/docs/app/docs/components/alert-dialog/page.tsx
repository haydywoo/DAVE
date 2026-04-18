import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { AlertDialogDemos } from './demos';
import { AnatomyBlock } from '@/components/AnatomyBlock';

export const metadata: Metadata = { title: 'Alert Dialog' };

const actionProps = [
  { name: 'variant', type: "'default' | 'destructive'", default: "'default'", description: "Use 'destructive' for delete or irreversible actions." },
  { name: 'children', type: 'ReactNode', required: true, description: 'Button label.' },
];

export default function AlertDialogPage() {
  return (
    <div>
      <h1 className="font-display font-extrabold text-3xl text-foreground mb-2">Alert Dialog</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        Modal dialog that interrupts the user and requires a decision. Built on Radix UI — includes focus trap, escape key, and backdrop dismiss.
      </p>

      <AnatomyBlock>{`<AlertDialog>
  <AlertDialogTrigger />
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle />
      <AlertDialogDescription />
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel />
      <AlertDialogAction />
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`}</AnatomyBlock>

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Examples</h2>
      <AlertDialogDemos />

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">AlertDialogAction props</h2>
      <PropsTable props={actionProps} />
    </div>
  );
}
