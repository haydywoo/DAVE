import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { MessageDemos } from './demos';

export const metadata: Metadata = { title: 'Message' };

const props = [
  { name: 'role', type: "'user' | 'assistant' | 'system'", required: true, description: 'Determines layout, bubble style, and avatar display.' },
  { name: 'content', type: 'string', required: true, description: 'Markdown content. User messages render as plain text.' },
  { name: 'name', type: 'string', description: 'Override the display name. Defaults to role label.' },
  { name: 'avatar', type: 'string', description: 'Avatar image URL.' },
  { name: 'timestamp', type: 'string | Date', description: 'ISO string or Date — renders as a localised time.' },
  { name: 'isStreaming', type: 'boolean', default: 'false', description: 'Shows a blinking cursor at the end of the content.' },
  { name: 'hideFeedback', type: 'boolean', default: 'false', description: 'Hides the FeedbackBar on assistant messages.' },
  { name: 'feedback', type: "'up' | 'down' | null", description: 'Controlled feedback state for thumbs.' },
  { name: 'onCopy', type: '() => void', description: 'Called when the copy button is clicked.' },
  { name: 'onThumbsUp', type: '() => void', description: 'Called when the thumbs-up button is clicked.' },
  { name: 'onThumbsDown', type: '() => void', description: 'Called when the thumbs-down button is clicked.' },
  { name: 'onRegenerate', type: '() => void', description: 'Called when the regenerate button is clicked.' },
  { name: 'actions', type: 'ReactNode', description: 'Slot for additional actions below the message bubble.' },
];

export default function MessagePage() {
  return (
    <div>
      <h1 className="font-display font-semibold text-4xl text-foreground mb-2">Message</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        A single chat message that adapts its layout and style to the sender role. Assistant messages render full markdown including code blocks. User messages render as plain text. System messages appear centered without an avatar.
      </p>

      <MessageDemos />

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Props</h2>
      <PropsTable props={props} />
    </div>
  );
}
