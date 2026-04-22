import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Chip } from '@haydywoo/dave-react';

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: { children: 'Design' },
};

export const AllVariants: StoryObj = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Chip variant="neutral">Neutral</Chip>
      <Chip variant="primary">Primary</Chip>
      <Chip variant="success">Success</Chip>
      <Chip variant="warning">Warning</Chip>
      <Chip variant="error">Error</Chip>
    </div>
  ),
};

export const Sizes: StoryObj = {
  render: () => (
    <div className="flex items-center gap-2">
      <Chip size="sm">Small</Chip>
      <Chip size="md">Medium</Chip>
    </div>
  ),
};

export const Selected: StoryObj = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Chip variant="neutral"  selected>Neutral</Chip>
      <Chip variant="primary"  selected>Primary</Chip>
      <Chip variant="success"  selected>Success</Chip>
      <Chip variant="warning"  selected>Warning</Chip>
      <Chip variant="error"    selected>Error</Chip>
    </div>
  ),
};

export const Toggleable: StoryObj = {
  render: function ToggleDemo() {
    const filters = ['Design', 'Engineering', 'Product', 'Marketing', 'Research'];
    const [active, setActive] = useState<string[]>(['Design']);

    function toggle(f: string) {
      setActive(prev => prev.includes(f) ? prev.filter(x => x !== f) : [...prev, f]);
    }

    return (
      <div className="flex flex-wrap gap-2">
        {filters.map(f => (
          <Chip
            key={f}
            variant="primary"
            selected={active.includes(f)}
            onClick={() => toggle(f)}
          >
            {f}
          </Chip>
        ))}
      </div>
    );
  },
};

export const Dismissible: StoryObj = {
  render: function DismissDemo() {
    const [chips, setChips] = useState(['React', 'TypeScript', 'Tailwind', 'Next.js', 'Radix UI']);

    return (
      <div className="flex flex-wrap gap-2 min-w-[300px]">
        {chips.map(c => (
          <Chip key={c} onRemove={() => setChips(prev => prev.filter(x => x !== c))}>
            {c}
          </Chip>
        ))}
        {chips.length === 0 && (
          <p className="text-sm text-fg-secondary">All removed.</p>
        )}
      </div>
    );
  },
};

export const WithIcon: StoryObj = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Chip
        variant="success"
        selected
        icon={
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        }
      >
        Approved
      </Chip>
      <Chip
        variant="error"
        selected
        icon={
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10" /><path d="m15 9-6 6M9 9l6 6" />
          </svg>
        }
      >
        Rejected
      </Chip>
      <Chip
        variant="warning"
        selected
        icon={
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" />
          </svg>
        }
      >
        Pending
      </Chip>
    </div>
  ),
};

export const Disabled: StoryObj = {
  render: () => (
    <div className="flex gap-2">
      <Chip disabled onClick={() => {}}>Disabled</Chip>
      <Chip disabled selected onClick={() => {}}>Disabled selected</Chip>
    </div>
  ),
};
