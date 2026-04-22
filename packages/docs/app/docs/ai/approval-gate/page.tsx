import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { ApprovalGateDemos } from './demos';

export const metadata: Metadata = { title: 'ApprovalGate' };

const props = [
  { name: 'title', type: 'string', required: true, description: 'Short description of the action the agent wants to take.' },
  { name: 'description', type: 'string', description: 'Longer explanation shown below the title.' },
  { name: 'tool', type: 'string', description: 'Tool or function name — rendered as a warning badge.' },
  { name: 'input', type: 'Record<string, unknown>', description: 'Structured arguments shown as a JSON preview.' },
  { name: 'onApprove', type: '() => void', description: 'Called when the Approve button is clicked.' },
  { name: 'onDeny', type: '() => void', description: 'Called when the Deny button is clicked.' },
  { name: 'isLoading', type: 'boolean', default: 'false', description: 'Shows a spinner on the Approve button and disables both actions.' },
];

export default function ApprovalGatePage() {
  return (
    <div>
      <h1 className="font-display font-semibold text-4xl text-foreground mb-2">ApprovalGate</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        A human-in-the-loop confirmation card displayed when an agent wants to perform a potentially sensitive action. The user can inspect the tool arguments and choose to approve or deny before execution proceeds.
      </p>

      <ApprovalGateDemos />

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Props</h2>
      <PropsTable props={props} />
    </div>
  );
}
