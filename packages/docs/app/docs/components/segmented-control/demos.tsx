'use client';

import { useState } from 'react';
import { SegmentedControl } from '@haydywoo/dave-react';
import { Preview } from '@/components/Preview';

const GridIcon = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>;
const ListIcon = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>;
const ColumnsIcon = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="8" height="18" rx="1"/><rect x="13" y="3" width="8" height="18" rx="1"/></svg>;

export function SegmentedControlDemos() {
  return (
    <>
      <Preview
        code={`<SegmentedControl
  value={value}
  onValueChange={setValue}
  options={[
    { value: 'day',   label: 'Day' },
    { value: 'week',  label: 'Week' },
    { value: 'month', label: 'Month' },
    { value: 'year',  label: 'Year' },
  ]}
/>`}
      >
        {(() => {
          const [value, setValue] = useState('month');
          return (
            <SegmentedControl
              value={value}
              onValueChange={setValue}
              options={[
                { value: 'day', label: 'Day' },
                { value: 'week', label: 'Week' },
                { value: 'month', label: 'Month' },
                { value: 'year', label: 'Year' },
              ]}
            />
          );
        })()}
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">With icons</h3>
      <Preview
        code={`<SegmentedControl
  options={[
    { value: 'grid',    label: 'Grid',    icon: <GridIcon /> },
    { value: 'list',    label: 'List',    icon: <ListIcon /> },
    { value: 'columns', label: 'Columns', icon: <ColumnsIcon /> },
  ]}
/>`}
      >
        {(() => {
          const [value, setValue] = useState('grid');
          return (
            <SegmentedControl
              value={value}
              onValueChange={setValue}
              options={[
                { value: 'grid', label: 'Grid', icon: <GridIcon /> },
                { value: 'list', label: 'List', icon: <ListIcon /> },
                { value: 'columns', label: 'Columns', icon: <ColumnsIcon /> },
              ]}
            />
          );
        })()}
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Icon only</h3>
      <Preview
        code={`<SegmentedControl
  options={[
    { value: 'grid',    label: <GridIcon /> },
    { value: 'list',    label: <ListIcon /> },
    { value: 'columns', label: <ColumnsIcon /> },
  ]}
/>`}
      >
        {(() => {
          const [value, setValue] = useState('grid');
          return (
            <SegmentedControl
              value={value}
              onValueChange={setValue}
              options={[
                { value: 'grid', label: <GridIcon /> },
                { value: 'list', label: <ListIcon /> },
                { value: 'columns', label: <ColumnsIcon /> },
              ]}
            />
          );
        })()}
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Full width</h3>
      <Preview
        code={`<SegmentedControl
  fullWidth
  options={[
    { value: 'monthly', label: 'Monthly' },
    { value: 'annual',  label: 'Annual' },
  ]}
/>`}
      >
        <div className="w-64">
          <SegmentedControl
            fullWidth
            defaultValue="monthly"
            options={[
              { value: 'monthly', label: 'Monthly' },
              { value: 'annual', label: 'Annual' },
            ]}
          />
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Sizes</h3>
      <Preview
        code={`<SegmentedControl size="sm" options={…} />
<SegmentedControl size="md" options={…} />
<SegmentedControl size="lg" options={…} />`}
      >
        <div className="flex flex-col gap-3 items-start">
          {(['sm', 'md', 'lg'] as const).map(size => (
            <SegmentedControl
              key={size}
              size={size}
              defaultValue="week"
              options={[
                { value: 'day', label: 'Day' },
                { value: 'week', label: 'Week' },
                { value: 'month', label: 'Month' },
              ]}
            />
          ))}
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Disabled option</h3>
      <Preview
        code={`<SegmentedControl
  options={[
    { value: 'free',       label: 'Free' },
    { value: 'pro',        label: 'Pro' },
    { value: 'enterprise', label: 'Enterprise', disabled: true },
  ]}
/>`}
      >
        <SegmentedControl
          defaultValue="free"
          options={[
            { value: 'free', label: 'Free' },
            { value: 'pro', label: 'Pro' },
            { value: 'enterprise', label: 'Enterprise', disabled: true },
          ]}
        />
      </Preview>
    </>
  );
}
