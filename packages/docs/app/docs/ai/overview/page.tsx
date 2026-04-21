import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@dave/react';

export const metadata: Metadata = { title: 'AI Components — Overview' };

export default function AIOverviewPage() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-2">
        <h1 className="font-display font-extrabold text-3xl text-foreground">AI Components</h1>
        <Badge variant="warning" appearance="solid" size="sm">Under development</Badge>
      </div>
      <p className="text-sm text-fg-secondary leading-relaxed mb-8 max-w-xl">
        A suite of production-ready components for building AI-powered chat interfaces, agent UIs, and generative experiences. All components dogfood DAVE primitives and follow the same design language.
      </p>

      <h2 className="font-display font-extrabold text-xl text-foreground mt-10 mb-4 pt-8 border-t border-border">Chat & Messaging</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        {[
          { name: 'ChatContainer', href: '/docs/ai/chat-container', desc: 'Scrollable message list with auto-scroll and jump-to-bottom.' },
          { name: 'Message', href: '/docs/ai/message', desc: 'Chat bubble for user, assistant, and system roles with markdown.' },
          { name: 'MessageInput', href: '/docs/ai/message-input', desc: 'Auto-growing input with send/stop, attachments, and toolbar slots.' },
          { name: 'ConversationList', href: '/docs/ai/conversation-list', desc: 'Sidebar list of past conversations with grouping and delete.' },
        ].map(item => (
          <Link key={item.name} href={item.href} className="rounded-[4px] border border-border bg-card p-4 hover:bg-surface hover:border-border-strong transition-colors">
            <p className="text-sm font-semibold text-foreground mb-1">{item.name}</p>
            <p className="text-xs text-fg-secondary leading-relaxed">{item.desc}</p>
          </Link>
        ))}
      </div>

      <h2 className="font-display font-extrabold text-xl text-foreground mt-10 mb-4 pt-8 border-t border-border">Streaming & Generation</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        {[
          { name: 'CodeBlock', href: '/docs/ai/code-block', desc: 'Syntax-highlighted code with language label and copy button.' },
          { name: 'StreamingText', href: '/docs/ai/streaming-text', desc: 'Text with an animated blinking cursor for streaming output.' },
          { name: 'ThinkingBlock', href: '/docs/ai/thinking-block', desc: 'Collapsible reasoning block shown while the model thinks.' },
        ].map(item => (
          <Link key={item.name} href={item.href} className="rounded-[4px] border border-border bg-card p-4 hover:bg-surface hover:border-border-strong transition-colors">
            <p className="text-sm font-semibold text-foreground mb-1">{item.name}</p>
            <p className="text-xs text-fg-secondary leading-relaxed">{item.desc}</p>
          </Link>
        ))}
      </div>

      <h2 className="font-display font-extrabold text-xl text-foreground mt-10 mb-4 pt-8 border-t border-border">Tools & Actions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        {[
          { name: 'ApprovalGate', href: '/docs/ai/approval-gate', desc: 'Human-in-the-loop confirmation card for agent tool calls.' },
          { name: 'FileAttachment', href: '/docs/ai/file-attachment', desc: 'Chip showing an attached file with thumbnail and remove button.' },
          { name: 'SourceCard', href: '/docs/ai/source-card', desc: 'Clickable citation card with favicon, domain, and snippet.' },
          { name: 'ToolCall', href: '/docs/ai/tool-call', desc: 'Collapsible card showing a tool invocation and its result.' },
        ].map(item => (
          <Link key={item.name} href={item.href} className="rounded-[4px] border border-border bg-card p-4 hover:bg-surface hover:border-border-strong transition-colors">
            <p className="text-sm font-semibold text-foreground mb-1">{item.name}</p>
            <p className="text-xs text-fg-secondary leading-relaxed">{item.desc}</p>
          </Link>
        ))}
      </div>

      <h2 className="font-display font-extrabold text-xl text-foreground mt-10 mb-4 pt-8 border-t border-border">Controls</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        {[
          { name: 'FeedbackBar', href: '/docs/ai/feedback-bar', desc: 'Thumbs up/down, copy, and regenerate actions on assistant messages.' },
          { name: 'ModelSelector', href: '/docs/ai/model-selector', desc: 'Dropdown for switching AI models with badge and group support.' },
          { name: 'SuggestionChips', href: '/docs/ai/suggestion-chips', desc: 'Pill-shaped prompt suggestions shown below the input.' },
        ].map(item => (
          <Link key={item.name} href={item.href} className="rounded-[4px] border border-border bg-card p-4 hover:bg-surface hover:border-border-strong transition-colors">
            <p className="text-sm font-semibold text-foreground mb-1">{item.name}</p>
            <p className="text-xs text-fg-secondary leading-relaxed">{item.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
