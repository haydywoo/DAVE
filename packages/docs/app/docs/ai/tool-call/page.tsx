import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { ToolCallDemos } from './demos';

export const metadata: Metadata = { title: 'ToolCall' };

const toolCallProps = [
  { name: 'name', type: 'string', required: true, description: 'The tool or function name, displayed in monospace.' },
  { name: 'input', type: 'Record<string, unknown>', description: 'Arguments passed to the tool — shown as collapsible JSON.' },
  { name: 'status', type: "'pending' | 'running' | 'success' | 'error'", default: "'running'", description: 'Current execution state.' },
  { name: 'defaultOpen', type: 'boolean', default: 'false', description: 'Expands the input JSON by default.' },
];

const toolResultProps = [
  { name: 'output', type: 'string | Record<string, unknown>', required: true, description: 'Tool output — string or JSON object.' },
  { name: 'status', type: "'success' | 'error'", default: "'success'", description: 'Determines the icon and color.' },
  { name: 'defaultOpen', type: 'boolean', default: 'false', description: 'Expands the output by default.' },
];

export default function ToolCallPage() {
  return (
    <div>
      <h1 className="font-display font-extrabold text-3xl text-foreground mb-2">ToolCall</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        Displays an agent tool invocation with its arguments and status. Pair with <code className="font-mono text-xs bg-surface px-1 py-0.5 rounded border border-border">ToolResult</code> to show the output once the call completes.
      </p>

      <ToolCallDemos />

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">ToolCall Props</h2>
      <PropsTable props={toolCallProps} />

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">ToolResult Props</h2>
      <PropsTable props={toolResultProps} />
    </div>
  );
}
