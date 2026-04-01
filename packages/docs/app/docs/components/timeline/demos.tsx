'use client';

import { Timeline, TimelineItem } from '@dave/react';
import { Preview } from '@/components/Preview';

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

export function TimelineDemos() {
  return (
    <>
      <Preview
        center={false}
        code={`<Timeline>
  <TimelineItem title="Order placed"      timestamp="9:00 AM" color="info" />
  <TimelineItem title="Payment confirmed" timestamp="9:02 AM" color="success" />
  <TimelineItem title="Shipped"           timestamp="10:30 AM" />
  <TimelineItem title="Delivered"         timestamp="2:15 PM"  color="success" last />
</Timeline>`}
      >
        <div className="max-w-sm">
          <Timeline>
            <TimelineItem title="Order placed"      timestamp="9:00 AM"  description="Order #1234 was placed successfully." color="info" />
            <TimelineItem title="Payment confirmed" timestamp="9:02 AM"  color="success" />
            <TimelineItem title="Shipped"           timestamp="10:30 AM" description="Your items are on the way." />
            <TimelineItem title="Delivered"         timestamp="2:15 PM"  description="Package delivered to front door." color="success" last />
          </Timeline>
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">With icons</h3>
      <Preview
        center={false}
        code={`<Timeline>
  <TimelineItem icon={<UserIcon />} title="Account created" timestamp="Jan 12" />
  <TimelineItem icon={<CheckIcon />} title="Profile completed" timestamp="Jan 13" />
  <TimelineItem icon={<CheckIcon />} title="First project" timestamp="Jan 15" last />
</Timeline>`}
      >
        <div className="max-w-sm">
          <Timeline>
            <TimelineItem icon={<UserIcon />}  title="Account created"     timestamp="Jan 12" description="Welcome aboard!" />
            <TimelineItem icon={<CheckIcon />} title="Profile completed"   timestamp="Jan 13" description="All required fields filled." />
            <TimelineItem icon={<CheckIcon />} title="First project"       timestamp="Jan 15" description="Your first project is live." last />
          </Timeline>
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Status colours</h3>
      <Preview
        center={false}
        code={`<Timeline>
  <TimelineItem color="info"    title="Build started"  timestamp="12:00" />
  <TimelineItem color="success" title="Tests passed"   timestamp="12:03" />
  <TimelineItem color="warning" title="Lint warnings"  timestamp="12:04" />
  <TimelineItem color="error"   title="Deploy failed"  timestamp="12:06" last />
</Timeline>`}
      >
        <div className="max-w-sm">
          <Timeline>
            <TimelineItem color="info"    title="Build started"  timestamp="12:00" />
            <TimelineItem color="success" title="Tests passed"   timestamp="12:03" />
            <TimelineItem color="warning" title="Lint warnings"  timestamp="12:04" description="3 warnings — not blocking." />
            <TimelineItem color="error"   title="Deploy failed"  timestamp="12:06" description="Connection timeout on prod." last />
          </Timeline>
        </div>
      </Preview>
    </>
  );
}
