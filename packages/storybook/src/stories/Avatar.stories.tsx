import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar, AvatarGroup } from '@dave/react';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    shape: {
      control: 'select',
      options: ['circle', 'square'],
    },
    status: {
      control: 'select',
      options: [undefined, 'online', 'offline', 'busy', 'away'],
    },
    src:      { control: 'text' },
    alt:      { control: 'text' },
    fallback: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const WithImage: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=11',
    alt: 'Haydn Phillips',
    size: 'md',
    shape: 'circle',
  },
};

export const WithFallback: Story = {
  args: {
    fallback: 'HP',
    size: 'md',
    shape: 'circle',
  },
};

export const WithIcon: Story = {
  args: {
    size: 'md',
    shape: 'circle',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <Avatar src="https://i.pravatar.cc/150?img=11" alt="User" size="xs" />
      <Avatar src="https://i.pravatar.cc/150?img=11" alt="User" size="sm" />
      <Avatar src="https://i.pravatar.cc/150?img=11" alt="User" size="md" />
      <Avatar src="https://i.pravatar.cc/150?img=11" alt="User" size="lg" />
      <Avatar src="https://i.pravatar.cc/150?img=11" alt="User" size="xl" />
    </div>
  ),
};

export const Shapes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar src="https://i.pravatar.cc/150?img=11" alt="User" shape="circle" />
      <Avatar src="https://i.pravatar.cc/150?img=11" alt="User" shape="square" />
    </div>
  ),
};

export const Fallbacks: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar src="https://i.pravatar.cc/150?img=11" alt="User" />
      <Avatar fallback="HP" />
      <Avatar fallback="AB" />
      <Avatar />
    </div>
  ),
};

export const WithStatus: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar src="https://i.pravatar.cc/150?img=11" alt="User" status="online" size="lg" />
      <Avatar src="https://i.pravatar.cc/150?img=22" alt="User" status="busy"   size="lg" />
      <Avatar src="https://i.pravatar.cc/150?img=33" alt="User" status="away"   size="lg" />
      <Avatar src="https://i.pravatar.cc/150?img=44" alt="User" status="offline" size="lg" />
    </div>
  ),
};

export const Group: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <AvatarGroup>
        <Avatar src="https://i.pravatar.cc/150?img=11" alt="User 1" />
        <Avatar src="https://i.pravatar.cc/150?img=22" alt="User 2" />
        <Avatar src="https://i.pravatar.cc/150?img=33" alt="User 3" />
      </AvatarGroup>

      <AvatarGroup max={3}>
        <Avatar src="https://i.pravatar.cc/150?img=11" alt="User 1" />
        <Avatar src="https://i.pravatar.cc/150?img=22" alt="User 2" />
        <Avatar src="https://i.pravatar.cc/150?img=33" alt="User 3" />
        <Avatar src="https://i.pravatar.cc/150?img=44" alt="User 4" />
        <Avatar src="https://i.pravatar.cc/150?img=55" alt="User 5" />
      </AvatarGroup>
    </div>
  ),
};
