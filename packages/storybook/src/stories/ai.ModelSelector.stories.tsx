import type { Meta, StoryObj } from '@storybook/react-vite';
import { ModelSelector } from '@dave/react';

const meta: Meta<typeof ModelSelector> = {
  title: 'AI/ModelSelector',
  component: ModelSelector,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof ModelSelector>;

const FLAT = [
  { id: 'gpt-4o', name: 'GPT-4o', badge: 'Fast', badgeVariant: 'success' as const },
  { id: 'gpt-4-turbo', name: 'GPT-4 Turbo' },
  { id: 'gpt-3.5-turbo', name: 'GPT-3.5 Turbo' },
];

const GROUPED = [
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
      { id: 'gpt-4-turbo', name: 'GPT-4 Turbo', disabled: true },
    ],
  },
];

export const Flat: Story = {
  args: { models: FLAT, value: 'gpt-4o', onValueChange: (v) => console.log(v) },
};

export const Grouped: Story = {
  args: { models: GROUPED, value: 'claude-sonnet', onValueChange: (v) => console.log(v) },
};

export const NoSelection: Story = {
  args: { models: FLAT, placeholder: 'Choose a model…' },
};
