'use client';

import { Stat } from '@haydywoo/dave-react';
import { Preview } from '@/components/Preview';

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export function StatDemos() {
  return (
    <>
      <Preview
        center={false}
        code={`<Stat
  label="Total revenue"
  value="$45,231"
  change={20.1}
  changeLabel="vs last month"
/>`}
      >
        <div className="w-56">
          <Stat label="Total revenue" value="$45,231" change={20.1} changeLabel="vs last month" />
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Negative trend</h3>
      <Preview
        center={false}
        code={`<Stat label="Bounce rate" value="54.2%" change={-3.4} changeLabel="vs last month" />`}
      >
        <div className="w-56">
          <Stat label="Bounce rate" value="54.2%" change={-3.4} changeLabel="vs last month" />
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">With icon</h3>
      <Preview
        center={false}
        code={`<Stat label="Active users" value="2,350" change={12.5} changeLabel="vs last week" icon={<UsersIcon />} />`}
      >
        <div className="w-56">
          <Stat label="Active users" value="2,350" change={12.5} changeLabel="vs last week" icon={<UsersIcon />} />
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Grid</h3>
      <Preview
        center={false}
        code={`<div className="grid grid-cols-2 gap-4">
  <Stat label="Revenue"      value="$45,231" change={20.1}  changeLabel="vs last month" />
  <Stat label="Orders"       value="1,284"   change={-2.3}  changeLabel="vs last month" />
  <Stat label="Active users" value="2,350"   change={12.5}  changeLabel="vs last week" />
  <Stat label="Churn rate"   value="3.2%"    change={-0.8}  changeLabel="vs last month" />
</div>`}
      >
        <div className="grid grid-cols-2 gap-4 w-full max-w-md">
          <Stat label="Revenue"      value="$45,231" change={20.1}  changeLabel="vs last month" />
          <Stat label="Orders"       value="1,284"   change={-2.3}  changeLabel="vs last month" />
          <Stat label="Active users" value="2,350"   change={12.5}  changeLabel="vs last week" />
          <Stat label="Churn rate"   value="3.2%"    change={-0.8}  changeLabel="vs last month" />
        </div>
      </Preview>
    </>
  );
}
