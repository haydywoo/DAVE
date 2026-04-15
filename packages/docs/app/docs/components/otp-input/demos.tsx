'use client';

import { useState } from 'react';
import { OTPInput } from '@dave/react';
import { Preview } from '@/components/Preview';

export function OTPInputDemos() {
  const [value, setValue] = useState('');

  return (
    <>
      <Preview code={`<OTPInput onComplete={(v) => console.log(v)} />`}>
        <OTPInput onComplete={(v) => console.log('complete', v)} />
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Sizes</h3>
      <Preview
        code={`<OTPInput size="sm" />
<OTPInput size="md" />
<OTPInput size="lg" />
<OTPInput size="xl" />`}
      >
        <div className="flex flex-col gap-4">
          <OTPInput size="sm" />
          <OTPInput size="md" />
          <OTPInput size="lg" />
          <OTPInput size="xl" />
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Custom length</h3>
      <Preview code={`<OTPInput length={4} />`}>
        <OTPInput length={4} />
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Masked</h3>
      <Preview code={`<OTPInput mask />`}>
        <OTPInput mask />
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Controlled</h3>
      <Preview
        code={`const [value, setValue] = useState('');

<OTPInput value={value} onChange={setValue} />
<p>Value: {value}</p>`}
      >
        <div className="flex flex-col gap-3">
          <OTPInput value={value} onChange={setValue} />
          <p className="text-sm text-fg-secondary font-code">Value: {value || '—'}</p>
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Error state</h3>
      <Preview code={`<OTPInput error />`}>
        <OTPInput error />
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Disabled</h3>
      <Preview code={`<OTPInput disabled value="123" />`}>
        <OTPInput disabled value="123" />
      </Preview>
    </>
  );
}
