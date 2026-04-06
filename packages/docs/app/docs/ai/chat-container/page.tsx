import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { ChatContainerDemos } from './demos';

export const metadata: Metadata = { title: 'ChatContainer' };

const props = [
  { name: 'children', type: 'ReactNode', required: true, description: 'Message list — typically an array of Message components.' },
  { name: 'onScrollUp', type: '() => void', description: 'Called when the user scrolls up, useful for pausing auto-scroll.' },
  { name: 'className', type: 'string', description: 'Applied to the outer container.' },
];

export default function ChatContainerPage() {
  return (
    <div>
      <h1 className="font-display font-extrabold text-3xl text-foreground mb-2">ChatContainer</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        A scrollable shell that renders a message list and auto-scrolls to the bottom as new messages arrive. When the user scrolls up, auto-scroll pauses and a "Jump to bottom" button appears.
      </p>

      <ChatContainerDemos />

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Props</h2>
      <PropsTable props={props} />
    </div>
  );
}
