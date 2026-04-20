import type { Meta, StoryObj } from '@storybook/react-vite';
import { Timeline, TimelineItem } from '@dave/react';

const meta: Meta<typeof Timeline> = {
  title: 'Data Display/Timeline',
  component: Timeline,
  parameters: { layout: 'padded' },
  decorators: [(Story) => <div className="max-w-md"><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof Timeline>;

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const UserIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
  </svg>
);

export const Default: Story = {
  render: () => (
    <Timeline>
      <TimelineItem title="Order placed" timestamp="9:00 AM" description="Order #1234 was placed successfully." color="info" />
      <TimelineItem title="Payment confirmed" timestamp="9:02 AM" color="success" />
      <TimelineItem title="Preparing shipment" timestamp="10:30 AM" description="Your items are being packed." color="default" />
      <TimelineItem title="Delivered" timestamp="2:15 PM" description="Package delivered to front door." color="success" last />
    </Timeline>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Timeline>
      <TimelineItem icon={<UserIcon />} title="Account created" timestamp="Jan 12" description="Welcome aboard! Your account is ready." />
      <TimelineItem icon={<CheckIcon />} title="Profile completed" timestamp="Jan 13" description="You filled in all required profile fields." />
      <TimelineItem icon={<CheckIcon />} title="First project created" timestamp="Jan 15" description="You created your first project." />
      <TimelineItem icon={<CheckIcon />} title="Team member invited" timestamp="Jan 18" description="You invited alice@example.com to your team." last />
    </Timeline>
  ),
};

export const StatusColors: Story = {
  render: () => (
    <Timeline>
      <TimelineItem color="info"    title="Build started"  timestamp="12:00" />
      <TimelineItem color="success" title="Tests passed"   timestamp="12:03" />
      <TimelineItem color="warning" title="Lint warnings"  timestamp="12:04" description="3 warnings found — not blocking." />
      <TimelineItem color="error"   title="Deploy failed"  timestamp="12:06" description="Connection timeout on prod server." last />
    </Timeline>
  ),
};
