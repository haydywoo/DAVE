import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { ToastDemos } from './demos';

export const metadata: Metadata = { title: 'Toast' };

const toastProps = [
  { name: 'title', type: 'string', description: 'Bold heading line.' },
  { name: 'description', type: 'string', description: 'Secondary detail text.' },
  { name: 'variant', type: "'default' | 'success' | 'warning' | 'error'", default: "'default'", description: 'Sets the border accent and icon.' },
  { name: 'duration', type: 'number', default: '4000', description: 'Auto-dismiss delay in milliseconds.' },
  { name: 'action', type: 'ReactNode', description: 'Optional action rendered below the description.' },
];

export default function ToastPage() {
  return (
    <div>
      <h1 className="font-display font-semibold text-4xl text-foreground mb-2">Toast</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        Temporary notification that appears in the corner. Dismisses automatically. Use the <code className="font-code text-[13px] bg-surface text-accent-foreground px-1.5 py-0.5 rounded-[3px] border border-border">useToast</code> hook to trigger from anywhere in the tree.
      </p>

      <h3 className="text-sm text-fg-secondary mb-2">Setup</h3>
      <pre className="font-code text-xs text-fg-secondary bg-surface border border-border rounded-[3px] p-4 mb-8 leading-relaxed overflow-x-auto">{`// Wrap your app (or layout) once
<ToastProviderWithHook>
  {children}
</ToastProviderWithHook>

// Then call from any component
const { toast } = useToast();
toast({ title: 'Done', variant: 'success' });`}</pre>

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Examples</h2>
      <ToastDemos />

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Props</h2>
      <h3 className="font-semibold text-sm text-foreground mb-3">Toast</h3>
      <PropsTable props={toastProps} />
      <h3 className="font-semibold text-sm text-foreground mt-8 mb-3">ToastAction</h3>
      <PropsTable props={[
        { name: 'altText', type: 'string', required: true, description: 'Describes the action for screen readers in case the toast has already dismissed.' },
        { name: 'onClick', type: '() => void', description: 'Called when the action button is clicked.' },
        { name: 'children', type: 'ReactNode', required: true, description: 'Button label.' },
      ]} />
    </div>
  );
}
