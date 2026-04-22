'use client';

import { SuggestionChips } from '@haydywoo/dave-react';
import { Preview } from '@/components/Preview';

const CHIPS = [
  { id: '1', label: 'Summarise this document' },
  { id: '2', label: 'What are the key points?' },
  { id: '3', label: 'Translate to Spanish' },
  { id: '4', label: 'Write a follow-up email' },
];

const StarIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const CHIPS_WITH_ICONS = [
  { id: '1', label: 'Summarise', icon: <StarIcon /> },
  { id: '2', label: 'Translate', icon: <StarIcon /> },
  { id: '3', label: 'Improve writing', icon: <StarIcon /> },
];

export function SuggestionChipsDemos() {
  return (
    <>
      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Default</h3>
      <Preview
        code={`<SuggestionChips
  suggestions={chips}
  onSelect={(chip) => console.log(chip.label)}
/>`}
      >
        <SuggestionChips suggestions={CHIPS} onSelect={(chip) => console.log(chip.label)} />
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">With icons</h3>
      <Preview
        code={`<SuggestionChips suggestions={chipsWithIcons} onSelect={(chip) => console.log(chip.label)} />`}
      >
        <SuggestionChips suggestions={CHIPS_WITH_ICONS} onSelect={(chip) => console.log(chip.label)} />
      </Preview>
    </>
  );
}
