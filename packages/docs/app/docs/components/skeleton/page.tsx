import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { SkeletonDemos } from './demos';

export const metadata: Metadata = { title: 'Skeleton' };

const skeletonProps = [
  { name: 'width', type: 'string | number', description: 'Width of the skeleton. Numbers are treated as px.' },
  { name: 'height', type: 'string | number', description: 'Height of the skeleton. Numbers are treated as px.' },
  { name: 'rounded', type: "'none' | 'sm' | 'md' | 'full'", default: "'sm'", description: 'Border radius preset.' },
  { name: 'className', type: 'string', description: 'Additional Tailwind classes — useful for responsive widths.' },
];

export default function SkeletonPage() {
  return (
    <div>
      <h1 className="font-display font-extrabold text-3xl text-foreground mb-2">Skeleton</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        Placeholder shapes that pulse while content is loading. Compose them to mirror the layout of real content.
      </p>

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Examples</h2>
      <SkeletonDemos />

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Props</h2>
      <PropsTable props={skeletonProps} />
    </div>
  );
}
