'use client';

import { Badge } from '@haydywoo/dave-react';
import { Preview } from '@/components/Preview';

export function BadgeDemos() {
  return (
    <>
      <Preview
        code={`<Badge variant="neutral">Neutral</Badge>
<Badge variant="primary">Primary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>`}
      >
        <Badge variant="neutral">Neutral</Badge>
        <Badge variant="primary">Primary</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="error">Error</Badge>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Outline</h3>
      <Preview
        code={`<Badge appearance="outline" variant="neutral">Neutral</Badge>
<Badge appearance="outline" variant="primary">Primary</Badge>
<Badge appearance="outline" variant="success">Success</Badge>
<Badge appearance="outline" variant="warning">Warning</Badge>
<Badge appearance="outline" variant="error">Error</Badge>`}
      >
        <Badge appearance="outline" variant="neutral">Neutral</Badge>
        <Badge appearance="outline" variant="primary">Primary</Badge>
        <Badge appearance="outline" variant="success">Success</Badge>
        <Badge appearance="outline" variant="warning">Warning</Badge>
        <Badge appearance="outline" variant="error">Error</Badge>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Dashed</h3>
      <Preview
        code={`<Badge appearance="dashed" variant="neutral">Draft</Badge>
<Badge appearance="dashed" variant="primary">In review</Badge>
<Badge appearance="dashed" variant="success">Provisional</Badge>
<Badge appearance="dashed" variant="warning">Pending</Badge>
<Badge appearance="dashed" variant="error">Blocked</Badge>`}
      >
        <Badge appearance="dashed" variant="neutral">Draft</Badge>
        <Badge appearance="dashed" variant="primary">In review</Badge>
        <Badge appearance="dashed" variant="success">Provisional</Badge>
        <Badge appearance="dashed" variant="warning">Pending</Badge>
        <Badge appearance="dashed" variant="error">Blocked</Badge>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">With dot</h3>
      <Preview
        code={`<Badge dot variant="neutral">Offline</Badge>
<Badge dot variant="primary">Syncing</Badge>
<Badge dot variant="success">Active</Badge>
<Badge dot variant="warning">Degraded</Badge>
<Badge dot variant="error">Incident</Badge>`}
      >
        <Badge dot variant="neutral">Offline</Badge>
        <Badge dot variant="primary">Syncing</Badge>
        <Badge dot variant="success">Active</Badge>
        <Badge dot variant="warning">Degraded</Badge>
        <Badge dot variant="error">Incident</Badge>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Sizes</h3>
      <Preview
        code={`<Badge size="xs">Extra small</Badge>
<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>
<Badge size="lg">Large</Badge>`}
      >
        <Badge size="xs">Extra small</Badge>
        <Badge size="sm">Small</Badge>
        <Badge size="md">Medium</Badge>
        <Badge size="lg">Large</Badge>
      </Preview>
    </>
  );
}
