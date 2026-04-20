import type { Meta, StoryObj } from '@storybook/react-vite';
import { CopyButton } from '@dave/react';

const meta: Meta<typeof CopyButton> = {
  title: 'Components/CopyButton',
  component: CopyButton,
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<typeof CopyButton>;

export const Default: Story = {
  args: { value: 'npm install @dave/react' },
};

export const WithLabel: Story = {
  args: { value: 'npm install @dave/react', label: 'Copy' },
};

export const Variants: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <CopyButton value="text" variant="ghost" />
      <CopyButton value="text" variant="outline" />
      <CopyButton value="text" variant="solid" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <CopyButton value="text" size="sm" variant="outline" />
      <CopyButton value="text" size="md" variant="outline" />
      <CopyButton value="text" size="lg" variant="outline" />
    </div>
  ),
};

export const InCodeBlock: Story = {
  render: () => (
    <div className="flex items-center justify-between gap-4 rounded-[3px] border border-border bg-surface px-4 py-3 font-mono text-sm w-72">
      <code className="text-foreground">npm install @dave/react</code>
      <CopyButton value="npm install @dave/react" variant="ghost" size="sm" />
    </div>
  ),
};
