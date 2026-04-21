import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { BannerDemos } from './demos';

export const metadata: Metadata = { title: 'Banner' };

const props = [
  { name: 'message',   type: 'string',                                       required: true,  description: 'The text content of the banner.' },
  { name: 'variant',   type: "'info' | 'success' | 'warning' | 'error'",     default: "'info'", description: 'Sets the colour and icon.' },
  { name: 'action',    type: '{ label: string; href: string }',                                description: 'Optional CTA link rendered after the message.' },
  { name: 'onDismiss', type: '() => void',                                                    description: 'If provided, renders a dismiss button. Caller controls visibility.' },
];

export default function BannerPage() {
  return (
    <div>
      <h1 className="font-display font-extrabold text-3xl text-foreground mb-2">Banner</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        Full-width system notification fixed to the top of the viewport, above the nav. Use for outages, maintenance windows, or global announcements.
      </p>

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Variants</h2>
      <BannerDemos />

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-6 pt-8 border-t border-border">Usage</h2>
      <p className="text-sm text-fg-secondary leading-relaxed mb-4 max-w-xl">
        Render <code className="font-code text-xs bg-surface px-1 py-0.5 rounded-[3px]">Banner</code> above your nav in the root layout. It sets <code className="font-code text-xs bg-surface px-1 py-0.5 rounded-[3px]">--banner-height: 40px</code> on <code className="font-code text-xs bg-surface px-1 py-0.5 rounded-[3px]">:root</code> so the sticky nav offsets correctly. Pair with localStorage to persist dismissal across page loads.
      </p>
      <pre className="rounded-[6px] bg-surface border border-border p-4 text-xs font-code text-fg-secondary overflow-x-auto">{`// layout.tsx
const [visible, setVisible] = useState(
  () => localStorage.getItem('banner-dismissed') !== '1'
);

return (
  <>
    {visible && (
      <Banner
        variant="warning"
        message="Scheduled maintenance on Friday at 2 am UTC."
        action={{ label: 'Status page', href: '/status' }}
        onDismiss={() => {
          localStorage.setItem('banner-dismissed', '1');
          setVisible(false);
        }}
      />
    )}
    <Nav />
    {children}
  </>
);`}</pre>

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Props</h2>
      <PropsTable props={props} />
    </div>
  );
}
