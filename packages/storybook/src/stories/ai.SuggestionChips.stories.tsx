import type { Meta, StoryObj } from '@storybook/react';
import { SuggestionChips } from '@dave/react';

const meta: Meta<typeof SuggestionChips> = {
  title: 'AI/SuggestionChips',
  component: SuggestionChips,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof SuggestionChips>;

const StarIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

export const Default: Story = {
  args: {
    suggestions: [
      { id: '1', label: 'Summarise this document' },
      { id: '2', label: 'What are the key points?' },
      { id: '3', label: 'Translate to Spanish' },
      { id: '4', label: 'Write a follow-up email' },
    ],
    onSelect: (chip) => console.log(chip.label),
  },
};

export const WithIcons: Story = {
  args: {
    suggestions: [
      { id: '1', label: 'Summarise', icon: <StarIcon /> },
      { id: '2', label: 'Translate', icon: <StarIcon /> },
      { id: '3', label: 'Improve writing', icon: <StarIcon /> },
    ],
    onSelect: (chip) => console.log(chip.label),
  },
};
