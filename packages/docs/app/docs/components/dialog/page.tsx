import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { DialogDemos } from './demos';

export const metadata: Metadata = { title: 'Dialog' };

const contentProps = [
  { name: 'size', type: "'sm' | 'md' | 'lg' | 'xl' | 'full'", default: "'md'", description: 'Max width of the dialog panel.' },
  { name: 'children', type: 'ReactNode', required: true, description: 'Dialog content.' },
];

export default function DialogPage() {
  return (
    <div>
      <h1 className="font-display font-extrabold text-3xl text-foreground mb-2">Dialog</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        General-purpose modal for forms, detail views, and confirmations. For destructive confirms, prefer AlertDialog. Built on Radix UI.
      </p>

      <h3 className="text-sm text-fg-secondary mb-2">Anatomy</h3>
      <pre className="font-code text-xs text-fg-secondary bg-surface border border-border rounded-[3px] p-4 mb-8 leading-relaxed">{`<Dialog>
  <DialogTrigger />
  <DialogContent>
    <DialogHeader>
      <DialogTitle />
      <DialogDescription />
    </DialogHeader>
    <DialogBody />
    <DialogFooter>
      <DialogClose />
    </DialogFooter>
  </DialogContent>
</Dialog>`}</pre>

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Examples</h2>
      <DialogDemos />

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">DialogContent props</h2>
      <PropsTable props={contentProps} />
    </div>
  );
}
