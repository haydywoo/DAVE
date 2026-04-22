'use client';

import { ApprovalGate } from '@haydywoo/dave-react';
import { Preview } from '@/components/Preview';

export function ApprovalGateDemos() {
  return (
    <>
      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Default</h3>
      <Preview
        code={`<ApprovalGate
  title="Run shell command"
  description="The agent wants to execute a shell command on your machine."
  tool="bash"
  input={{ command: 'rm -rf ./dist && npm run build' }}
  onApprove={() => console.log('approved')}
  onDeny={() => console.log('denied')}
/>`}
      >
        <ApprovalGate
          title="Run shell command"
          description="The agent wants to execute a shell command on your machine."
          tool="bash"
          input={{ command: 'rm -rf ./dist && npm run build' }}
          onApprove={() => console.log('approved')}
          onDeny={() => console.log('denied')}
        />
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Loading state</h3>
      <Preview
        code={`<ApprovalGate
  title="Write to database"
  tool="db_write"
  isLoading
/>`}
      >
        <ApprovalGate
          title="Write to database"
          tool="db_write"
          isLoading
        />
      </Preview>
    </>
  );
}
