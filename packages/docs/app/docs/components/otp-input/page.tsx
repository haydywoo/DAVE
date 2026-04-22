import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { OTPInputDemos } from './demos';

export const metadata: Metadata = { title: 'OTP Input' };

const props = [
  { name: 'length',     type: 'number',                        default: '6',       description: 'Number of digit slots.' },
  { name: 'size',       type: "'sm' | 'md' | 'lg' | 'xl'",    default: "'md'",    description: 'Controls slot dimensions and text size.' },
  { name: 'value',      type: 'string',                                             description: 'Controlled value string, e.g. "123456".' },
  { name: 'onChange',   type: '(value: string) => void',                            description: 'Called on every keystroke with the full current value.' },
  { name: 'onComplete', type: '(value: string) => void',                            description: 'Called when all slots are filled.' },
  { name: 'mask',       type: 'boolean',                        default: 'false',   description: 'Masks input like a password field.' },
  { name: 'disabled',   type: 'boolean',                        default: 'false',   description: 'Prevents all interaction.' },
  { name: 'error',      type: 'boolean',                        default: 'false',   description: 'Applies error styling to all slots.' },
  { name: 'className',  type: 'string',                                             description: 'Extra class on the outer wrapper.' },
];

export default function OTPInputPage() {
  return (
    <div>
      <h1 className="font-display font-semibold text-4xl text-foreground mb-2">OTP Input</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        Segmented digit input for one-time passwords and verification codes. Supports keyboard navigation, paste, controlled and uncontrolled modes, and auto-submit via <code className="font-code text-xs bg-surface px-1 py-0.5 rounded-[3px] border border-border">onComplete</code>.
      </p>

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Examples</h2>
      <OTPInputDemos />

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Props</h2>
      <PropsTable props={props} />
    </div>
  );
}
