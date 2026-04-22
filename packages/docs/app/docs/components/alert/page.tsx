import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { AlertDemos } from './demos';

export const metadata: Metadata = { title: 'Alert' };

const props = [
  { name: 'variant', type: "'info' | 'success' | 'warning' | 'error'", default: "'info'", description: 'Sets the colour and icon.' },
  { name: 'title', type: 'string', description: 'Optional bold heading rendered above the message.' },
  { name: 'children', type: 'ReactNode', required: true, description: 'Alert body content.' },
  { name: 'onDismiss', type: '() => void', description: 'If provided, renders a dismiss (×) button.' },
];

export default function AlertPage() {
  return (
    <div>
      <h1 className="font-display font-semibold text-4xl text-foreground mb-2">Alert</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        Inline feedback message with icon and optional title. Use for contextual status — not for system-level notifications.
      </p>

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Variants</h2>
      <AlertDemos />

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Props</h2>
      <PropsTable props={props} />
    </div>
  );
}
