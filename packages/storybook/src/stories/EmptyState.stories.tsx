import type { Meta, StoryObj } from '@storybook/react-vite';
import { EmptyState, Button } from '@haydywoo/dave-react';

const InboxIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
    <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
  </svg>
);

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
  </svg>
);

const meta: Meta<typeof EmptyState> = {
  title: 'Components/EmptyState',
  component: EmptyState,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {
  args: {
    title: 'No messages yet',
    description: 'When you receive messages they will appear here.',
  },
};

export const WithIcon: Story = {
  render: () => (
    <EmptyState
      icon={<InboxIcon />}
      title="No messages yet"
      description="When you receive messages they will appear here."
    />
  ),
};

export const WithAction: Story = {
  render: () => (
    <EmptyState
      icon={<InboxIcon />}
      title="No messages yet"
      description="When you receive messages they will appear here."
      action={<Button size="sm">Compose message</Button>}
    />
  ),
};

export const SearchEmpty: Story = {
  render: () => (
    <EmptyState
      icon={<SearchIcon />}
      title="No results found"
      description='No components match "comboselect". Try a different search term.'
      action={<Button variant="ghost" size="sm">Clear search</Button>}
    />
  ),
};
