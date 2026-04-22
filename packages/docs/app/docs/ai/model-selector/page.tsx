import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { ModelSelectorDemos } from './demos';

export const metadata: Metadata = { title: 'ModelSelector' };

const props = [
  { name: 'models', type: 'AIModel[] | ModelGroup[]', required: true, description: 'Flat or grouped list of models.' },
  { name: 'value', type: 'string', description: 'ID of the currently selected model.' },
  { name: 'onValueChange', type: '(modelId: string) => void', description: 'Called when the user selects a model.' },
  { name: 'placeholder', type: 'string', default: "'Select model…'", description: 'Placeholder text shown when no model is selected.' },
];

export default function ModelSelectorPage() {
  return (
    <div>
      <h1 className="font-display font-semibold text-4xl text-foreground mb-2">ModelSelector</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        A dropdown for switching between AI models. Supports flat lists and provider-grouped layouts. Each model can have a badge (e.g. "Fast", "New") and a disabled state. The selected model&apos;s name and badge are shown in the trigger button.
      </p>

      <ModelSelectorDemos />

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Props</h2>
      <PropsTable props={props} />
    </div>
  );
}
