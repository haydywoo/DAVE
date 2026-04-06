import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { SourceCardDemos } from './demos';

export const metadata: Metadata = { title: 'SourceCard' };

const props = [
  { name: 'title', type: 'string', required: true, description: 'Page or document title.' },
  { name: 'url', type: 'string', required: true, description: 'Destination URL — the card is a native anchor element.' },
  { name: 'favicon', type: 'string', description: 'Favicon URL — falls back to a globe icon.' },
  { name: 'snippet', type: 'string', description: 'A short excerpt from the source, clamped to 2 lines.' },
  { name: 'index', type: 'number', description: 'Citation number shown as a small badge, e.g. 1, 2, 3.' },
];

export default function SourceCardPage() {
  return (
    <div>
      <h1 className="font-display font-extrabold text-3xl text-foreground mb-2">SourceCard</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        A clickable citation card linking to a web source. Typically rendered in a grid below an assistant message to surface the references used by the model. Each card shows a favicon, domain, title, and optional snippet.
      </p>

      <SourceCardDemos />

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Props</h2>
      <PropsTable props={props} />
    </div>
  );
}
