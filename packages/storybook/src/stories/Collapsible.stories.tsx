import type { Meta, StoryObj } from '@storybook/react-vite';
import { Collapsible, CollapsibleTrigger, CollapsibleContent, Divider } from '@dave/react';

const meta: Meta<typeof Collapsible> = {
  title: 'Layout/Collapsible',
  component: Collapsible,
  parameters: { layout: 'padded' },
  decorators: [(Story) => <div className="max-w-md"><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof Collapsible>;

export const Default: Story = {
  render: () => (
    <Collapsible className="border border-border rounded-[3px] px-4">
      <CollapsibleTrigger>What is DAVE?</CollapsibleTrigger>
      <CollapsibleContent>
        DAVE is a design system built with React and Tailwind CSS, providing a consistent set of components for building modern interfaces.
      </CollapsibleContent>
    </Collapsible>
  ),
};

export const DefaultOpen: Story = {
  render: () => (
    <Collapsible defaultOpen className="border border-border rounded-[3px] px-4">
      <CollapsibleTrigger>What is DAVE?</CollapsibleTrigger>
      <CollapsibleContent>
        DAVE is a design system built with React and Tailwind CSS, providing a consistent set of components for building modern interfaces.
      </CollapsibleContent>
    </Collapsible>
  ),
};

export const FAQ: Story = {
  render: () => (
    <div className="border border-border rounded-[3px] divide-y divide-border">
      {[
        { q: 'Is it free?', a: 'Yes, DAVE is open source and free to use.' },
        { q: 'Which frameworks are supported?', a: 'Currently React with Tailwind CSS. Vue support is planned.' },
        { q: 'Can I customise the theme?', a: 'Yes — all colours and tokens are CSS variables you can override.' },
      ].map(({ q, a }) => (
        <Collapsible key={q} className="px-4">
          <CollapsibleTrigger>{q}</CollapsibleTrigger>
          <CollapsibleContent>{a}</CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  ),
};
