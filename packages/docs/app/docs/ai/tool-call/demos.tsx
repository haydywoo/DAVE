'use client';

import { ToolCall, ToolResult } from '@haydywoo/dave-react';
import { Preview } from '@/components/Preview';

export function ToolCallDemos() {
  return (
    <>
      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Running</h3>
      <Preview
        code={`<ToolCall
  name="search_web"
  input={{ query: 'DAVE design system', max_results: 5 }}
  status="running"
/>`}
      >
        <ToolCall
          name="search_web"
          input={{ query: 'DAVE design system', max_results: 5 }}
          status="running"
        />
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Success with result</h3>
      <Preview
        code={`<div className="flex flex-col gap-2">
  <ToolCall name="read_file" input={{ path: '/config/settings.json' }} status="success" defaultOpen />
  <ToolResult output={{ name: 'settings', theme: 'dark', version: '2.0' }} />
</div>`}
      >
        <div className="flex flex-col gap-2">
          <ToolCall name="read_file" input={{ path: '/config/settings.json' }} status="success" defaultOpen />
          <ToolResult output={{ name: 'settings', theme: 'dark', version: '2.0' }} />
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Error</h3>
      <Preview
        code={`<ToolResult output="File not found: /config/missing.json" isError />`}
      >
        <ToolResult output="File not found: /config/missing.json" isError />
      </Preview>
    </>
  );
}
