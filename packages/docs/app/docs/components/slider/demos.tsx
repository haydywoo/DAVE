'use client';

import { useState } from 'react';
import { Slider } from '@dave/react';
import { Preview } from '@/components/Preview';

export function SliderDemos() {
  const [volume, setVolume] = useState([60]);
  const [range, setRange] = useState([200, 800]);

  return (
    <>
      <Preview
        center={false}
        code={`<Slider
  label="Volume"
  showValue
  defaultValue={[60]}
/>`}
      >
        <div className="w-80">
          <Slider label="Volume" showValue defaultValue={[60]} />
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Custom format</h3>
      <Preview
        center={false}
        code={`<Slider
  label="Price"
  showValue
  defaultValue={[250]}
  min={0}
  max={1000}
  step={10}
  formatValue={(v) => \`$\${v}\`}
/>`}
      >
        <div className="w-80">
          <Slider
            label="Price"
            showValue
            defaultValue={[250]}
            min={0}
            max={1000}
            step={10}
            formatValue={(v) => `$${v}`}
          />
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Range (two thumbs)</h3>
      <Preview
        center={false}
        code={`const [range, setRange] = useState([200, 800]);

<Slider
  label="Price range"
  showValue
  value={range}
  onValueChange={setRange}
  min={0}
  max={1000}
  step={10}
  formatValue={(v) => \`$\${v}\`}
/>`}
      >
        <div className="w-80">
          <Slider
            label="Price range"
            showValue
            value={range}
            onValueChange={setRange}
            min={0}
            max={1000}
            step={10}
            formatValue={(v) => `$${v}`}
          />
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Sizes</h3>
      <Preview
        center={false}
        code={`<Slider size="sm" label="Small"  showValue defaultValue={[40]} />
<Slider size="md" label="Medium" showValue defaultValue={[60]} />
<Slider size="lg" label="Large"  showValue defaultValue={[80]} />`}
      >
        <div className="w-80 flex flex-col gap-6">
          <Slider size="sm" label="Small"  showValue defaultValue={[40]} />
          <Slider size="md" label="Medium" showValue defaultValue={[60]} />
          <Slider size="lg" label="Large"  showValue defaultValue={[80]} />
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Controlled</h3>
      <Preview
        center={false}
        code={`const [volume, setVolume] = useState([60]);

<Slider
  label="Volume"
  showValue
  value={volume}
  onValueChange={setVolume}
/>`}
      >
        <div className="w-80 space-y-3">
          <Slider
            label="Volume"
            showValue
            value={volume}
            onValueChange={setVolume}
          />
          <p className="text-sm text-fg-secondary">Value: {volume[0]}</p>
        </div>
      </Preview>
    </>
  );
}
