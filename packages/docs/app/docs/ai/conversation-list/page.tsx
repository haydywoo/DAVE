import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { ConversationListDemos } from './demos';

export const metadata: Metadata = { title: 'ConversationList' };

const props = [
  { name: 'conversations', type: 'Conversation[] | ConversationGroup[]', required: true, description: 'Flat list or date-grouped list of conversations.' },
  { name: 'activeId', type: 'string', description: 'ID of the currently selected conversation.' },
  { name: 'onSelect', type: '(conversation: Conversation) => void', description: 'Called when a conversation item is clicked.' },
  { name: 'onDelete', type: '(id: string) => void', description: 'Shows a delete button on hover and calls back with the conversation ID.' },
  { name: 'onNewChat', type: '() => void', description: 'Renders a "New chat" button at the top when provided.' },
  { name: 'newChatLabel', type: 'string', default: "'New chat'", description: 'Label for the new chat button.' },
];

export default function ConversationListPage() {
  return (
    <div>
      <h1 className="font-display font-semibold text-4xl text-foreground mb-2">ConversationList</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        A sidebar list of past conversations. Supports flat and date-grouped layouts, active state, relative timestamps, unread badges, and a hover-reveal delete button.
      </p>

      <ConversationListDemos />

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Props</h2>
      <PropsTable props={props} />
    </div>
  );
}
