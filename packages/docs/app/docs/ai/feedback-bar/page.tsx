import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { FeedbackBarDemos } from './demos';

export const metadata: Metadata = { title: 'FeedbackBar' };

const props = [
  { name: 'copyValue', type: 'string', description: 'Text copied when the copy button is clicked.' },
  { name: 'feedback', type: "'up' | 'down' | null", description: 'Controlled feedback state — fills the active thumb icon.' },
  { name: 'onThumbsUp', type: '() => void', description: 'Called when the thumbs-up button is clicked.' },
  { name: 'onThumbsDown', type: '() => void', description: 'Called when the thumbs-down button is clicked.' },
  { name: 'onRegenerate', type: '() => void', description: 'Called when the regenerate button is clicked.' },
  { name: 'hideCopy', type: 'boolean', default: 'false', description: 'Hides the copy button.' },
  { name: 'hideRegenerate', type: 'boolean', default: 'false', description: 'Hides the regenerate button.' },
  { name: 'hideFeedback', type: 'boolean', default: 'false', description: 'Hides the thumbs up/down buttons.' },
];

export default function FeedbackBarPage() {
  return (
    <div>
      <h1 className="font-display font-extrabold text-3xl text-foreground mb-2">FeedbackBar</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        A row of action buttons shown below assistant messages — copy, thumbs up/down, and regenerate. The active thumb icon fills when feedback is submitted. Used automatically inside Message but can be composed standalone.
      </p>

      <FeedbackBarDemos />

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Props</h2>
      <PropsTable props={props} />
    </div>
  );
}
