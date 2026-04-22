import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { MessageInputDemos } from './demos';

export const metadata: Metadata = { title: 'MessageInput' };

const props = [
  { name: 'value', type: 'string', description: 'Controlled value.' },
  { name: 'defaultValue', type: 'string', default: "''", description: 'Initial value for uncontrolled mode.' },
  { name: 'onChange', type: '(value: string) => void', description: 'Called on every keystroke.' },
  { name: 'onSubmit', type: '(value: string) => void', description: 'Called when the user clicks Send or presses Enter.' },
  { name: 'onStop', type: '() => void', description: 'Called when the Stop button is clicked during streaming.' },
  { name: 'isStreaming', type: 'boolean', default: 'false', description: 'Disables input and shows a Stop button.' },
  { name: 'placeholder', type: 'string', default: "'Message…'", description: 'Textarea placeholder text.' },
  { name: 'attachments', type: 'AttachedFile[]', description: 'Files shown as chips above the input.' },
  { name: 'onAttachmentRemove', type: '(id: string) => void', description: 'Called when a file chip remove button is clicked.' },
  { name: 'onAttach', type: '() => void', description: 'Called when the paperclip button is clicked.' },
  { name: 'hideAttach', type: 'boolean', default: 'false', description: 'Hides the attach button.' },
  { name: 'toolbarLeft', type: 'ReactNode', description: 'Extra controls inserted on the left side of the toolbar.' },
  { name: 'toolbarRight', type: 'ReactNode', description: 'Extra controls inserted before the send button.' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the entire input.' },
  { name: 'maxLength', type: 'number', description: 'Maximum character count.' },
];

export default function MessageInputPage() {
  return (
    <div>
      <h1 className="font-display font-semibold text-4xl text-foreground mb-2">MessageInput</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        An auto-growing message composition area with send/stop actions, file attachment chips, and extensible toolbar slots. Pressing Enter submits; Shift+Enter inserts a newline.
      </p>

      <MessageInputDemos />

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Props</h2>
      <PropsTable props={props} />
    </div>
  );
}
