import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { StepperDemos } from './demos';

export const metadata: Metadata = { title: 'Stepper' };

const props = [
  { name: 'steps',       type: 'Step[]',                             required: true, description: 'Array of step objects with title and optional description.' },
  { name: 'currentStep', type: 'number',                             required: true, description: '0-indexed active step. Steps below this are marked complete.' },
  { name: 'orientation', type: "'horizontal' | 'vertical'", default: "'horizontal'", description: 'Layout direction.' },
  { name: 'className',   type: 'string',                                             description: 'Additional classes on the nav wrapper.' },
];

const stepProps = [
  { name: 'title',       type: 'string', required: true, description: 'Step label.' },
  { name: 'description', type: 'string',                 description: 'Supporting text shown below the title.' },
];

export default function StepperPage() {
  return (
    <div>
      <h1 className="font-display font-semibold text-4xl text-foreground mb-2">Stepper</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        Progress indicator for multi-step flows. Shows completed, active, and upcoming steps. Supports horizontal and vertical orientations.
      </p>

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Examples</h2>
      <StepperDemos />

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Props</h2>
      <PropsTable props={props} />

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Step</h2>
      <PropsTable props={stepProps} />
    </div>
  );
}
