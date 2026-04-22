'use client';

import { useState } from 'react';
import { MessageInput } from '@haydywoo/dave-react';
import { Preview } from '@/components/Preview';

export function MessageInputDemos() {
  const [value, setValue] = useState('');

  return (
    <>
      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Default</h3>
      <Preview code={`<MessageInput onSubmit={(v) => console.log(v)} />`}>
        <MessageInput onSubmit={(v) => console.log(v)} />
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Streaming state</h3>
      <Preview
        code={`<MessageInput isStreaming onStop={() => console.log('stop')} />`}
      >
        <MessageInput isStreaming onStop={() => console.log('stop')} />
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">With attachments</h3>
      <Preview
        code={`<MessageInput
  attachments={[
    { id: '1', name: 'report.pdf', type: 'application/pdf', size: 204800 },
    { id: '2', name: 'screenshot.png', type: 'image/png', size: 51200 },
  ]}
  onAttachmentRemove={(id) => console.log('remove', id)}
/>`}
      >
        <MessageInput
          attachments={[
            { id: '1', name: 'report.pdf', type: 'application/pdf', size: 204800 },
            { id: '2', name: 'screenshot.png', type: 'image/png', size: 51200 },
          ]}
          onAttachmentRemove={(id) => console.log('remove', id)}
        />
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">No attach button</h3>
      <Preview code={`<MessageInput hideAttach />`}>
        <MessageInput hideAttach />
      </Preview>
    </>
  );
}
