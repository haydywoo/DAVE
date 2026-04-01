import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { BreadcrumbDemos } from './demos';

export const metadata: Metadata = { title: 'Breadcrumb' };

const breadcrumbProps = [
  { name: 'children', type: 'ReactNode', required: true, description: 'BreadcrumbItem and BreadcrumbSeparator elements.' },
  { name: 'label', type: 'string', default: "'Breadcrumb'", description: 'Accessible label for the nav landmark.' },
  { name: 'className', type: 'string', description: 'Additional classes on the nav element.' },
];

const itemProps = [
  { name: 'children', type: 'ReactNode', required: true, description: 'Content — typically a BreadcrumbLink or plain text.' },
  { name: 'current', type: 'boolean', default: 'false', description: 'Marks this as the current page (adds aria-current and foreground colour).' },
  { name: 'className', type: 'string', description: 'Additional classes.' },
];

const linkProps = [
  { name: 'children', type: 'ReactNode', required: true, description: 'Link label.' },
  { name: 'href', type: 'string', description: 'Destination URL.' },
  { name: 'className', type: 'string', description: 'Additional classes.' },
];

const separatorProps = [
  { name: 'children', type: 'ReactNode', description: 'Custom separator content. Defaults to a chevron icon.' },
  { name: 'className', type: 'string', description: 'Additional classes.' },
];

export default function BreadcrumbPage() {
  return (
    <div>
      <h1 className="font-display font-extrabold text-3xl text-foreground mb-2">Breadcrumb</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        Composable navigation trail showing the user's location within a hierarchy. Fully accessible with a nav landmark and aria-current on the current page.
      </p>

      <h3 className="text-sm text-fg-secondary mb-2">Anatomy</h3>
      <pre className="font-code text-xs text-fg-secondary bg-surface border border-border rounded-[3px] p-4 mb-8 leading-relaxed">{`<Breadcrumb>
  <BreadcrumbItem>
    <BreadcrumbLink href="…">Home</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbSeparator />
  <BreadcrumbEllipsis />       {/* optional — for collapsed items */}
  <BreadcrumbSeparator />
  <BreadcrumbItem current>
    Current page
  </BreadcrumbItem>
</Breadcrumb>`}</pre>

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Examples</h2>
      <BreadcrumbDemos />

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Props</h2>
      <h3 className="font-semibold text-sm text-foreground mb-3">Breadcrumb</h3>
      <PropsTable props={breadcrumbProps} />
      <h3 className="font-semibold text-sm text-foreground mt-8 mb-3">BreadcrumbItem</h3>
      <PropsTable props={itemProps} />
      <h3 className="font-semibold text-sm text-foreground mt-8 mb-3">BreadcrumbLink</h3>
      <PropsTable props={linkProps} />
      <h3 className="font-semibold text-sm text-foreground mt-8 mb-3">BreadcrumbSeparator</h3>
      <PropsTable props={separatorProps} />
    </div>
  );
}
