import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { TimelineDemos } from './demos';
import { AnatomyBlock } from '@/components/AnatomyBlock';

export const metadata: Metadata = { title: 'Timeline' };

const timelineProps = [
  { name: 'children',  type: 'ReactNode', required: true, description: 'TimelineItem elements.' },
  { name: 'className', type: 'string',                    description: 'Additional classes on the list.' },
];

const itemProps = [
  { name: 'title',       type: 'ReactNode',                                                         required: true, description: 'Primary label for the event.' },
  { name: 'description', type: 'ReactNode',                                                                         description: 'Supporting detail rendered below the title.' },
  { name: 'timestamp',   type: 'ReactNode',                                                                         description: 'Time or metadata displayed top-right.' },
  { name: 'icon',        type: 'ReactNode',                                                                         description: 'Icon in the track. When set, replaces the coloured dot.' },
  { name: 'color',       type: "'default' | 'success' | 'warning' | 'error' | 'info'", default: "'default'",       description: 'Dot colour when no icon is provided.' },
  { name: 'last',        type: 'boolean',                                               default: 'false',           description: 'Hides the connector line below the item. Set on the final item.' },
  { name: 'className',   type: 'string',                                                                            description: 'Additional classes on the item.' },
];

export default function TimelinePage() {
  return (
    <div>
      <h1 className="font-display font-extrabold text-3xl text-foreground mb-2">Timeline</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        Vertical list of chronological events. Use for activity feeds, audit logs, order tracking, and step history. Each item supports a coloured dot or custom icon.
      </p>

      <AnatomyBlock>{`<Timeline>
  <TimelineItem
    title="Event label"
    description="Detail text"
    timestamp="9:00 AM"
    color="success"        {/* dot colour */}
    icon={<Icon />}        {/* replaces dot */}
  />
  <TimelineItem … last />  {/* last hides the connector */}
</Timeline>`}</AnatomyBlock>

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Examples</h2>
      <TimelineDemos />

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Props</h2>
      <h3 className="text-sm font-medium text-foreground mb-3">Timeline</h3>
      <PropsTable props={timelineProps} />

      <h3 className="text-sm font-medium text-foreground mt-6 mb-3">TimelineItem</h3>
      <PropsTable props={itemProps} />
    </div>
  );
}
