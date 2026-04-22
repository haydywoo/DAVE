'use client';

import { useState } from 'react';
import { Rating } from '@haydywoo/dave-react';
import { Preview } from '@/components/Preview';

export function RatingDemos() {
  const [value, setValue] = useState(0);

  return (
    <>
      <Preview code={`<Rating defaultValue={3} />`}>
        <Rating defaultValue={3} />
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Sizes</h3>
      <Preview
        code={`<Rating size="sm" defaultValue={4} />
<Rating size="md" defaultValue={4} />
<Rating size="lg" defaultValue={4} />`}
      >
        <div className="flex flex-col gap-3">
          <Rating size="sm" defaultValue={4} />
          <Rating size="md" defaultValue={4} />
          <Rating size="lg" defaultValue={4} />
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Controlled</h3>
      <Preview
        code={`const [value, setValue] = useState(0);

<Rating value={value} onChange={setValue} />
<p>{value ? \`\${value} star\${value !== 1 ? 's' : ''}\` : 'Not rated'}</p>`}
      >
        <div className="flex flex-col gap-2">
          <Rating value={value} onChange={setValue} />
          <p className="text-sm text-fg-secondary">
            {value ? `${value} star${value !== 1 ? 's' : ''}` : 'Not rated'}
          </p>
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Custom max</h3>
      <Preview code={`<Rating max={10} defaultValue={7} />`}>
        <Rating max={10} defaultValue={7} />
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Read only</h3>
      <Preview code={`<Rating readOnly defaultValue={4} />`}>
        <Rating readOnly defaultValue={4} />
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Disabled</h3>
      <Preview code={`<Rating disabled defaultValue={3} />`}>
        <Rating disabled defaultValue={3} />
      </Preview>
    </>
  );
}
