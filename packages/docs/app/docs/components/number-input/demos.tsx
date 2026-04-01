'use client';

import { useState } from 'react';
import { NumberInput } from '@dave/react';
import { Preview } from '@/components/Preview';

export function NumberInputDemos() {
  const [qty, setQty] = useState(1);

  return (
    <>
      <Preview
        center={false}
        code={`<NumberInput
  label="Quantity"
  defaultValue={1}
  min={0}
  max={99}
/>`}
      >
        <div className="w-64">
          <NumberInput label="Quantity" defaultValue={1} min={0} max={99} />
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">With step</h3>
      <Preview
        center={false}
        code={`<NumberInput
  label="Price"
  defaultValue={10}
  min={0}
  max={100}
  step={5}
/>`}
      >
        <div className="w-64">
          <NumberInput label="Price" defaultValue={10} min={0} max={100} step={5} />
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Controlled</h3>
      <Preview
        center={false}
        code={`const [qty, setQty] = useState(1);

<NumberInput
  label="Seats"
  value={qty}
  onChange={setQty}
  min={1}
  max={10}
  hint={\`\${qty} seat\${qty !== 1 ? 's' : ''} selected\`}
/>`}
      >
        <div className="w-64">
          <NumberInput
            label="Seats"
            value={qty}
            onChange={setQty}
            min={1}
            max={10}
            hint={`${qty} seat${qty !== 1 ? 's' : ''} selected`}
          />
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Sizes</h3>
      <Preview
        center={false}
        code={`<NumberInput size="sm" label="Small"  defaultValue={1} />
<NumberInput size="md" label="Medium" defaultValue={1} />
<NumberInput size="lg" label="Large"  defaultValue={1} />`}
      >
        <div className="w-64 flex flex-col gap-4">
          <NumberInput size="sm" label="Small"  defaultValue={1} />
          <NumberInput size="md" label="Medium" defaultValue={1} />
          <NumberInput size="lg" label="Large"  defaultValue={1} />
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Error state</h3>
      <Preview
        center={false}
        code={`<NumberInput
  label="Quantity"
  hint="Must be at least 1."
  defaultValue={0}
  error
/>`}
      >
        <div className="w-64">
          <NumberInput label="Quantity" hint="Must be at least 1." defaultValue={0} error />
        </div>
      </Preview>
    </>
  );
}
