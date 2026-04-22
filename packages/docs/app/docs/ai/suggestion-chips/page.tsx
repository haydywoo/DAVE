import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { SuggestionChipsDemos } from './demos';

export const metadata: Metadata = { title: 'SuggestionChips' };

const props = [
  { name: 'suggestions', type: 'SuggestionChip[]', required: true, description: 'Array of chip objects with id, label, and optional icon.' },
  { name: 'onSelect', type: '(chip: SuggestionChip) => void', description: 'Called with the full chip object when a chip is clicked.' },
];

export default function SuggestionChipsPage() {
  return (
    <div>
      <h1 className="font-display font-semibold text-4xl text-foreground mb-2">SuggestionChips</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        Pill-shaped prompt suggestions displayed below the message input or at the start of a conversation. Clicking a chip typically pre-fills or submits a message. Each chip can include an optional leading icon.
      </p>

      <SuggestionChipsDemos />

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Props</h2>
      <PropsTable props={props} />
    </div>
  );
}
