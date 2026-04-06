'use client';

import { useState } from 'react';
import { ModelSelector } from '@dave/react';
import { Preview } from '@/components/Preview';

const FLAT_MODELS = [
  { id: 'gpt-4o', name: 'GPT-4o', badge: 'Fast', badgeVariant: 'success' as const },
  { id: 'gpt-4-turbo', name: 'GPT-4 Turbo' },
  { id: 'gpt-3.5-turbo', name: 'GPT-3.5 Turbo' },
];

const GROUPED_MODELS = [
  {
    label: 'Anthropic',
    models: [
      { id: 'claude-opus', name: 'Claude Opus', badge: 'Powerful', badgeVariant: 'primary' as const },
      { id: 'claude-sonnet', name: 'Claude Sonnet', badge: 'Balanced' },
      { id: 'claude-haiku', name: 'Claude Haiku', badge: 'Fast', badgeVariant: 'success' as const },
    ],
  },
  {
    label: 'OpenAI',
    models: [
      { id: 'gpt-4o', name: 'GPT-4o' },
      { id: 'gpt-4-turbo', name: 'GPT-4 Turbo' },
    ],
  },
];

export function ModelSelectorDemos() {
  const [flat, setFlat] = useState('gpt-4o');
  const [grouped, setGrouped] = useState('claude-sonnet');

  return (
    <>
      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Flat list</h3>
      <Preview
        code={`<ModelSelector models={models} value={model} onValueChange={setModel} />`}
      >
        <ModelSelector models={FLAT_MODELS} value={flat} onValueChange={setFlat} />
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Grouped</h3>
      <Preview
        code={`<ModelSelector models={grouped} value={model} onValueChange={setModel} />`}
      >
        <ModelSelector models={GROUPED_MODELS} value={grouped} onValueChange={setGrouped} />
      </Preview>
    </>
  );
}
