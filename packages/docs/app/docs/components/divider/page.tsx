import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { DividerDemos } from './demos';

export const metadata: Metadata = { title: 'Divider' };

const props = [
  { name: 'orientation', type: "'horizontal' | 'vertical'", default: "'horizontal'", description: 'Direction of the dividing line.' },
  { name: 'label',       type: 'ReactNode',                                           description: 'Optional label centred within a horizontal divider.' },
  { name: 'className',   type: 'string',                                              description: 'Additional classes.' },
];

export default function DividerPage() {
  return (
    <div>
      <h1 className="font-display font-semibold text-4xl text-foreground mb-2">Divider</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        Visual separator between sections of content. Supports horizontal and vertical orientations, and an optional centred label.
      </p>

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Examples</h2>
      <DividerDemos />

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Props</h2>
      <PropsTable props={props} />
    </div>
  );
}
