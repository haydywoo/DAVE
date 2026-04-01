'use client';

import { useState } from 'react';
import { Stepper, Button } from '@dave/react';
import { Preview } from '@/components/Preview';

const steps = [
  { title: 'Account',  description: 'Your details'   },
  { title: 'Profile',  description: 'Who you are'    },
  { title: 'Review',   description: 'Check and done' },
];

export function StepperDemos() {
  const [step1, setStep1] = useState(1);
  const [step2, setStep2] = useState(1);

  return (
    <>
      <Preview
        center={false}
        code={`const [step, setStep] = useState(1);

<Stepper steps={steps} currentStep={step} />`}
      >
        <div className="w-full flex flex-col gap-6">
          <Stepper steps={steps} currentStep={step1} />
          <div className="flex gap-2">
            <Button variant="secondary" size="sm" disabled={step1 === 0} onClick={() => setStep1(s => s - 1)}>Back</Button>
            <Button size="sm" disabled={step1 === steps.length - 1} onClick={() => setStep1(s => s + 1)}>Next</Button>
          </div>
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Vertical</h3>
      <Preview
        center={false}
        code={`<Stepper
  steps={steps}
  currentStep={step}
  orientation="vertical"
/>`}
      >
        <div className="flex gap-12 items-start">
          <Stepper steps={steps} currentStep={step2} orientation="vertical" />
          <div className="flex gap-2 pt-1">
            <Button variant="secondary" size="sm" disabled={step2 === 0} onClick={() => setStep2(s => s - 1)}>Back</Button>
            <Button size="sm" disabled={step2 === steps.length - 1} onClick={() => setStep2(s => s + 1)}>Next</Button>
          </div>
        </div>
      </Preview>
    </>
  );
}
