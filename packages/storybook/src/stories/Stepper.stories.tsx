import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Stepper, Button } from '@haydywoo/dave-react';

const steps = [
  { title: 'Account',  description: 'Your details'   },
  { title: 'Profile',  description: 'Who you are'    },
  { title: 'Review',   description: 'Check and done' },
];

const meta: Meta<typeof Stepper> = {
  title: 'Components/Stepper',
  component: Stepper,
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof Stepper>;

export const Horizontal: Story = {
  render: () => {
    const [step, setStep] = useState(1);
    return (
      <div className="flex flex-col gap-8 max-w-lg">
        <Stepper steps={steps} currentStep={step} />
        <div className="flex gap-2">
          <Button variant="secondary" disabled={step === 0} onClick={() => setStep(s => s - 1)}>Back</Button>
          <Button disabled={step === steps.length - 1} onClick={() => setStep(s => s + 1)}>Next</Button>
        </div>
      </div>
    );
  },
};

export const Vertical: Story = {
  render: () => {
    const [step, setStep] = useState(1);
    return (
      <div className="flex gap-12">
        <Stepper steps={steps} currentStep={step} orientation="vertical" />
        <div className="flex gap-2 items-start pt-1">
          <Button variant="secondary" disabled={step === 0} onClick={() => setStep(s => s - 1)}>Back</Button>
          <Button disabled={step === steps.length - 1} onClick={() => setStep(s => s + 1)}>Next</Button>
        </div>
      </div>
    );
  },
};

export const Complete: Story = {
  render: () => <Stepper steps={steps} currentStep={3} />,
};

export const FirstStep: Story = {
  render: () => <Stepper steps={steps} currentStep={0} />,
};
