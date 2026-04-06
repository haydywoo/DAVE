import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { ButtonDemos } from './demos';

export const metadata: Metadata = { title: 'Button' };

const props = [
  { name: 'variant', type: "'primary' | 'secondary' | 'ghost' | 'soft' | 'link' | 'inverse'", default: "'primary'", description: 'Visual style of the button.' },
  { name: 'size', type: "'sm' | 'md' | 'lg' | 'xl'", default: "'md'", description: 'Controls height and padding.' },
  { name: 'isLoading', type: 'boolean', default: 'false', description: 'Shows a spinner and disables interaction.' },
  { name: 'icon', type: 'ReactNode', description: 'Renders a square icon-only button when provided without children. Set aria-label for accessibility.' },
  { name: 'leftIcon', type: 'ReactNode', description: 'Icon rendered before the label.' },
  { name: 'rightIcon', type: 'ReactNode', description: 'Icon rendered after the label.' },
  { name: 'asChild', type: 'boolean', default: 'false', description: 'Merges props onto the child element — use with an <a> or Next.js Link to render a link styled as a button.' },
  { name: 'disabled', type: 'boolean', description: 'Disables the button.' },
  { name: 'children', type: 'ReactNode', description: 'Button label content.' },
];

export default function ButtonPage() {
  return (
    <div>
      <h1 className="font-display font-extrabold text-3xl text-foreground mb-2">Button</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        Triggers an action or event. Supports four visual variants and three sizes, with built-in loading and icon states.
      </p>

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Variants</h2>
      <ButtonDemos />

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Props</h2>
      <PropsTable props={props} />
    </div>
  );
}
