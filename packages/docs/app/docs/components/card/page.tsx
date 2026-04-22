import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { CardDemos } from './demos';
import { AnatomyBlock } from '@/components/AnatomyBlock';

export const metadata: Metadata = { title: 'Card' };

const cardProps = [
  { name: 'noPadding', type: 'boolean', default: 'false', description: 'Removes default padding — useful for full-bleed images or tables.' },
  { name: 'children', type: 'ReactNode', description: 'Card content.' },
];

const titleProps = [
  { name: 'as', type: "'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'", default: "'h3'", description: 'HTML heading element to render.' },
];

const imageProps = [
  { name: 'src', type: 'string', required: true, description: 'Image URL.' },
  { name: 'alt', type: 'string', default: "''", description: 'Alt text for the image.' },
  { name: 'position', type: "'top' | 'bottom' | 'left' | 'right'", default: "'top'", description: 'Controls rounding and layout. Use left/right with flex flex-row on the Card.' },
];

export default function CardPage() {
  return (
    <div>
      <h1 className="font-display font-semibold text-4xl text-foreground mb-2">Card</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        Surface container with white background and subtle border. Compose with sub-components or use as a bare wrapper.
      </p>

      <AnatomyBlock>{`<Card>
  <CardImage position="top" />       {/* optional */}
  <CardHeader>
    <CardTitle />
    <CardDescription />
  </CardHeader>
  <CardContent />
  <CardDivider />                    {/* optional */}
  <CardFooter />
</Card>`}</AnatomyBlock>

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Examples</h2>
      <CardDemos />

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Card props</h2>
      <PropsTable props={cardProps} />

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">CardTitle props</h2>
      <PropsTable props={titleProps} />

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">CardImage props</h2>
      <PropsTable props={imageProps} />
    </div>
  );
}
