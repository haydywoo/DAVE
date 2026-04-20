'use client';

import * as React from 'react';
import {
  ChatContainer,
  Message,
  MessageInput,
  ThinkingBlock,
  SuggestionChips,
  ModelSelector,
  ConversationList,
  Button,
} from '@dave/react';
import type { AIModel, ModelGroup, Conversation, ConversationGroup } from '@dave/react';

// ─── Mock data ────────────────────────────────────────────────────────────────

const models: ModelGroup[] = [
  {
    label: 'Anthropic',
    models: [
      { id: 'claude-opus-4',   name: 'Claude Opus 4',   badge: 'Smart',  badgeVariant: 'primary' },
      { id: 'claude-sonnet-4', name: 'Claude Sonnet 4', badge: 'Fast',   badgeVariant: 'success' },
      { id: 'claude-haiku-4',  name: 'Claude Haiku 4' },
    ],
  },
  {
    label: 'OpenAI',
    models: [
      { id: 'gpt-4o',     name: 'GPT-4o',     badge: 'New', badgeVariant: 'warning' },
      { id: 'gpt-4o-mini', name: 'GPT-4o mini' },
    ],
  },
];

const conversations: ConversationGroup[] = [
  {
    label: 'Today',
    items: [
      { id: 'c1', title: 'TypeScript generics', updatedAt: new Date(Date.now() - 5 * 60_000), unread: 2 },
      { id: 'c2', title: 'React hooks guide',   updatedAt: new Date(Date.now() - 42 * 60_000) },
    ],
  },
  {
    label: 'Yesterday',
    items: [
      { id: 'c3', title: 'CSS Grid deep dive',    updatedAt: new Date(Date.now() - 26 * 3_600_000) },
      { id: 'c4', title: 'API design patterns',   updatedAt: new Date(Date.now() - 31 * 3_600_000) },
    ],
  },
  {
    label: 'Last week',
    items: [
      { id: 'c5', title: 'Docker basics',   updatedAt: new Date(Date.now() - 5 * 86_400_000) },
      { id: 'c6', title: 'Git workflows',   updatedAt: new Date(Date.now() - 6 * 86_400_000) },
    ],
  },
];

const suggestions = [
  { id: 's1', label: 'Explain TypeScript generics' },
  { id: 's2', label: 'Write a React custom hook' },
  { id: 's3', label: 'Review my API design' },
  { id: 's4', label: 'Debug this error message' },
];

const THINKING_TEXT = `The user wants to understand TypeScript generics. I should start with the core concept — generics allow you to write reusable, type-safe code that works with multiple types. I'll explain with a simple identity function first, then move to more practical examples like typed arrays and constraints.`;

const MSG_1_CONTENT = `Can you explain TypeScript generics with some practical examples?`;

const MSG_2_CONTENT = `Generics let you write **reusable, type-safe code** that works with multiple types without losing type information.

## The basic idea

Without generics, you'd either use \`any\` (losing type safety) or write separate functions for each type:

\`\`\`typescript
// ❌ Loses type info
function identity(arg: any): any {
  return arg;
}

// ✅ Generic — preserves the type
function identity<T>(arg: T): T {
  return arg;
}

const str = identity('hello'); // type: string
const num = identity(42);      // type: number
\`\`\`

## Practical example — a typed fetch wrapper

\`\`\`typescript
async function fetchData<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
  return res.json() as Promise<T>;
}

interface User {
  id: number;
  name: string;
}

// TypeScript knows this is User, not unknown
const user = await fetchData<User>('/api/users/1');
console.log(user.name); // ✅ fully typed
\`\`\`

## Constraints with \`extends\`

You can restrict what types are allowed:

\`\`\`typescript
function getLength<T extends { length: number }>(arg: T): number {
  return arg.length;
}

getLength('hello');   // ✅ string has .length
getLength([1, 2, 3]); // ✅ array has .length
getLength(42);        // ❌ number has no .length
\`\`\`

Does that cover what you needed, or would you like to go deeper on a specific pattern?`;

const MSG_3_CONTENT = `That's really helpful! Can you show a more real-world example — like a generic hook for data fetching in React?`;

const STREAMING_CONTENT = `Great question — here's a \`useFetch\` hook that's fully generic:

\`\`\`typescript
import { useState, useEffect } from 'react';

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

function useFetch<T>(url: string): FetchState<T> {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
        const data: T = await res.json();
        if (!cancelled) setState({ data, loading: false, error: null });
      } catch (error) {
        if (!cancelled) setState({ data: null, loading: false, error: error as Error });
      }
    }

    load();
    return () => { cancelled = true; };
  }, [url]);

  return state;
}
\`\`\`

**Usage** is clean and fully typed:

\`\`\`typescript
interface Post {
  id: number;
  title: string;
  body: string;
}

function BlogPost({ id }: { id: number }) {
  const { data, loading, error } = useFetch<Post>(\`/api/posts/\${id}\`);

  if (loading) return <Skeleton />;
  if (error)   return <p>Error: {error.message}</p>;
  if (!data)   return null;

  return <article><h1>{data.title}</h1><p>{data.body}</p></article>;
}
\`\`\`

The key insight: TypeScript infers the return type from the generic \`T\` you pass in, so \`data\` is typed as \`Post | null\` — no casting needed.`;

// ─── Types ────────────────────────────────────────────────────────────────────

type ChatMessage = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  thinking?: string;
  feedback?: 'up' | 'down' | null;
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ChatPage() {
  const [activeId, setActiveId]     = React.useState('c1');
  const [model, setModel]           = React.useState('claude-sonnet-4');
  const [input, setInput]           = React.useState('');
  const [isStreaming, setIsStreaming] = React.useState(false);
  const [streamedContent, setStreamedContent] = React.useState('');
  const [showThinking, setShowThinking] = React.useState(false);
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const [messages, setMessages] = React.useState<ChatMessage[]>([
    { id: 'm1', role: 'user',      content: MSG_1_CONTENT,  timestamp: new Date(Date.now() - 12 * 60_000) },
    { id: 'm2', role: 'assistant', content: MSG_2_CONTENT,  timestamp: new Date(Date.now() - 11 * 60_000), thinking: THINKING_TEXT, feedback: null },
    { id: 'm3', role: 'user',      content: MSG_3_CONTENT,  timestamp: new Date(Date.now() - 2 * 60_000) },
  ]);

  // Fake streaming the last assistant response on mount
  React.useEffect(() => {
    const thinkTimer = setTimeout(() => setShowThinking(true), 300);
    const streamTimer = setTimeout(() => {
      setShowThinking(false);
      setIsStreaming(true);
      let i = 0;
      const interval = setInterval(() => {
        i += 12;
        setStreamedContent(STREAMING_CONTENT.slice(0, i));
        if (i >= STREAMING_CONTENT.length) {
          clearInterval(interval);
          setIsStreaming(false);
          setStreamedContent('');
          setMessages(prev => [
            ...prev,
            { id: 'm4', role: 'assistant', content: STREAMING_CONTENT, timestamp: new Date(), thinking: undefined, feedback: null },
          ]);
        }
      }, 16);
      return () => clearInterval(interval);
    }, 2200);

    return () => {
      clearTimeout(thinkTimer);
      clearTimeout(streamTimer);
    };
  }, []);

  function handleSubmit(value: string) {
    if (!value.trim() || isStreaming) return;
    const userMsg: ChatMessage = {
      id: `m-${Date.now()}`,
      role: 'user',
      content: value,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    // Fake a reply
    setTimeout(() => {
      setIsStreaming(true);
      let i = 0;
      const reply = `That's a great follow-up. Let me think through that for you...\n\nIn TypeScript, the pattern you're describing is closely related to **conditional types** and **mapped types**, which extend generics further. Here's a quick example:\n\n\`\`\`typescript\ntype Nullable<T> = T | null;\ntype Optional<T> = T | undefined;\ntype Maybe<T> = T | null | undefined;\n\nconst value: Maybe<string> = null; // ✅\n\`\`\`\n\nWould you like me to go deeper on any of these?`;
      const interval = setInterval(() => {
        i += 10;
        setStreamedContent(reply.slice(0, i));
        if (i >= reply.length) {
          clearInterval(interval);
          setIsStreaming(false);
          setStreamedContent('');
          setMessages(prev => [
            ...prev,
            { id: `m-${Date.now()}-a`, role: 'assistant', content: reply, timestamp: new Date(), feedback: null },
          ]);
        }
      }, 16);
    }, 800);
  }

  function handleFeedback(id: string, feedback: 'up' | 'down') {
    setMessages(prev => prev.map(m => m.id === id ? { ...m, feedback } : m));
  }

  const isEmpty = messages.length === 0 && !isStreaming && !showThinking;

  return (
    <div className="flex h-[calc(100vh-3.5rem)] overflow-hidden bg-background">

      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
        <div
          className="fixed inset-0 z-20 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={[
        'z-30 flex flex-col gap-0 border-r border-border bg-background transition-transform duration-200 w-64 shrink-0',
        'fixed inset-y-0 top-14 lg:relative lg:top-0 lg:translate-x-0',
        sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
      ].join(' ')}>
        <div className="flex-1 overflow-y-auto p-3">
          <ConversationList
            conversations={conversations}
            activeId={activeId}
            onSelect={(c) => { setActiveId(c.id); setSidebarOpen(false); }}
            onNewChat={() => { setMessages([]); setActiveId(''); setSidebarOpen(false); }}
            onDelete={(id) => console.log('delete', id)}
          />
        </div>
      </aside>

      {/* Main chat */}
      <div className="flex flex-1 flex-col min-w-0">

        {/* Mobile header */}
        <div className="flex items-center gap-3 border-b border-border px-4 py-2 lg:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open conversations"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </Button>
          <span className="text-sm font-semibold text-foreground truncate">
            {conversations.flatMap(g => g.items).find(c => c.id === activeId)?.title ?? 'New chat'}
          </span>
        </div>

        {/* Messages */}
        <ChatContainer className="flex-1">
          {isEmpty ? (
            <div className="flex flex-col items-center justify-center h-full gap-6 py-16">
              <div className="text-center">
                <p className="font-display font-extrabold text-2xl text-foreground mb-2">What can I help with?</p>
                <p className="text-sm text-fg-secondary">Ask anything, or pick a suggestion below.</p>
              </div>
              <SuggestionChips
                suggestions={suggestions}
                onSelect={(chip) => handleSubmit(chip.label)}
              />
            </div>
          ) : (
            <>
              {messages.map((msg) => (
                <Message
                  key={msg.id}
                  role={msg.role}
                  content={msg.content}
                  timestamp={msg.timestamp}
                  avatar={msg.role === 'user' ? '/avatar.jpg' : undefined}
                  name={msg.role === 'user' ? 'Haydn' : 'Assistant'}
                  feedback={msg.feedback}
                  onThumbsUp={() => handleFeedback(msg.id, 'up')}
                  onThumbsDown={() => handleFeedback(msg.id, 'down')}
                  actions={
                    msg.role === 'assistant' && msg.thinking ? (
                      <ThinkingBlock defaultOpen={false} duration="1.8s">
                        {msg.thinking}
                      </ThinkingBlock>
                    ) : undefined
                  }
                />
              ))}

              {/* Live thinking block */}
              {showThinking && (
                <div className="flex gap-3">
                  <div className="shrink-0 mt-0.5 w-8" />
                  <ThinkingBlock isStreaming>
                    Analysing your question…
                  </ThinkingBlock>
                </div>
              )}

              {/* Streaming assistant message */}
              {isStreaming && streamedContent && (
                <Message
                  role="assistant"
                  content={streamedContent}
                  timestamp={new Date()}
                  name="Assistant"
                  isStreaming
                  hideFeedback
                />
              )}
            </>
          )}
        </ChatContainer>

        {/* Input */}
        <div className="border-t border-border p-4">
          <div className="max-w-3xl mx-auto">
            {isEmpty && (
              <SuggestionChips
                suggestions={suggestions}
                onSelect={(chip) => handleSubmit(chip.label)}
                className="mb-3"
              />
            )}
            <MessageInput
              value={input}
              onChange={setInput}
              onSubmit={handleSubmit}
              onStop={() => setIsStreaming(false)}
              isStreaming={isStreaming}
              placeholder="Message…"
              hideAttach={false}
              toolbarLeft={
                <ModelSelector
                  models={models}
                  value={model}
                  onValueChange={setModel}
                />
              }
            />
          </div>
        </div>

      </div>
    </div>
  );
}
