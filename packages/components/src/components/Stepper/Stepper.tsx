import * as React from 'react';
import { cn } from '../../lib/cn';

// ─── Types ────────────────────────────────────────────────────────────────────

export type StepStatus = 'complete' | 'current' | 'upcoming';
export type StepperOrientation = 'horizontal' | 'vertical';

export interface Step {
  title: string;
  description?: string;
}

export interface StepperProps {
  steps: Step[];
  currentStep: number; // 0-indexed
  orientation?: StepperOrientation;
  className?: string;
}

// ─── Icons ────────────────────────────────────────────────────────────────────

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ─── Step indicator ───────────────────────────────────────────────────────────

interface IndicatorProps {
  index: number;
  status: StepStatus;
}

function StepIndicator({ index, status }: IndicatorProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 text-sm font-semibold transition-colors',
        status === 'complete' && 'bg-accent border-accent text-accent-on',
        status === 'current'  && 'bg-card border-accent text-accent',
        status === 'upcoming' && 'bg-card border-border text-fg-secondary',
      )}
    >
      {status === 'complete' ? <CheckIcon /> : index + 1}
    </div>
  );
}

// ─── Connector line ───────────────────────────────────────────────────────────

function Connector({ complete, orientation }: { complete: boolean; orientation: StepperOrientation }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'transition-colors',
        orientation === 'horizontal'
          ? 'flex-1 h-0.5 mx-2 self-center'
          : 'w-0.5 my-1 min-h-[1.5rem]',
        complete ? 'bg-accent' : 'bg-border',
      )}
    />
  );
}

// ─── Stepper ──────────────────────────────────────────────────────────────────

export function Stepper({
  steps,
  currentStep,
  orientation = 'horizontal',
  className,
}: StepperProps) {
  function getStatus(index: number): StepStatus {
    if (index < currentStep)  return 'complete';
    if (index === currentStep) return 'current';
    return 'upcoming';
  }

  if (orientation === 'vertical') {
    return (
      <nav aria-label="Progress" className={cn('flex flex-col', className)}>
        <ol className="flex flex-col">
          {steps.map((step, i) => {
            const status = getStatus(i);
            const isLast = i === steps.length - 1;
            return (
              <li key={i}>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <StepIndicator index={i} status={status} />
                    {!isLast && <Connector complete={status === 'complete'} orientation="vertical" />}
                  </div>
                  <div className={cn('pb-6', isLast && 'pb-0')}>
                    <p
                      className={cn(
                        'text-sm font-medium leading-8',
                        status === 'upcoming' ? 'text-fg-secondary' : 'text-foreground',
                      )}
                      aria-current={status === 'current' ? 'step' : undefined}
                    >
                      {step.title}
                    </p>
                    {step.description && (
                      <p className="text-sm text-fg-secondary">{step.description}</p>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </nav>
    );
  }

  // Horizontal — two-row layout so connectors align with circle centres
  return (
    <nav aria-label="Progress" className={cn('w-full', className)}>
      {/* Row 1: indicators + connectors */}
      <div className="flex items-center">
        {steps.map((step, i) => {
          const status = getStatus(i);
          const isLast = i === steps.length - 1;
          return (
            <React.Fragment key={i}>
              <StepIndicator index={i} status={status} />
              {!isLast && <Connector complete={status === 'complete'} orientation="horizontal" />}
            </React.Fragment>
          );
        })}
      </div>

      {/* Row 2: labels — each label is spaced to sit under its indicator */}
      <div className="flex mt-2">
        {steps.map((step, i) => {
          const status = getStatus(i);
          const isLast = i === steps.length - 1;
          return (
            <React.Fragment key={i}>
              {/* Label pinned under its indicator (w-8 = indicator width) */}
              <div className="flex flex-col items-center text-center w-8 shrink-0">
                <p
                  className={cn(
                    'text-xs font-medium whitespace-nowrap',
                    status === 'upcoming' ? 'text-fg-secondary' : 'text-foreground',
                  )}
                  aria-current={status === 'current' ? 'step' : undefined}
                >
                  {step.title}
                </p>
                {step.description && (
                  <p className="text-xs text-fg-secondary whitespace-nowrap">{step.description}</p>
                )}
              </div>
              {/* Spacer matching the connector width */}
              {!isLast && <div className="flex-1 mx-2" />}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
}
