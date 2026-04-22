import type { Meta, StoryObj } from '@storybook/react-vite';
import { SourceCard } from '@haydywoo/dave-react';

const meta: Meta<typeof SourceCard> = {
  title: 'AI/SourceCard',
  component: SourceCard,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof SourceCard>;

export const Default: Story = {
  args: {
    title: 'React — The library for web and native user interfaces',
    url: 'https://react.dev',
    snippet: 'React lets you build user interfaces out of individual pieces called components.',
    index: 1,
  },
};

export const Minimal: Story = {
  args: {
    title: 'MDN Web Docs',
    url: 'https://developer.mozilla.org',
  },
};

export const Grid: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-3 max-w-lg">
      <SourceCard title="React" url="https://react.dev" snippet="Build user interfaces out of components." index={1} />
      <SourceCard title="Tailwind CSS" url="https://tailwindcss.com" snippet="A utility-first CSS framework." index={2} />
      <SourceCard title="TypeScript" url="https://typescriptlang.org" snippet="JavaScript with syntax for types." index={3} />
      <SourceCard title="Next.js" url="https://nextjs.org" snippet="The React framework for the web." index={4} />
    </div>
  ),
};
