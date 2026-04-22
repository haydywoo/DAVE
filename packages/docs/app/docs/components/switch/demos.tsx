'use client';

import { Switch } from '@haydywoo/dave-react';
import { Preview } from '@/components/Preview';

export function SwitchDemos() {
  return (
    <>
      <Preview code={`<Switch defaultChecked />`}>
        <Switch defaultChecked />
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">With label</h3>
      <Preview code={`<Switch label="Email notifications" defaultChecked />`}>
        <Switch label="Email notifications" defaultChecked />
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">With description</h3>
      <Preview code={`<Switch
  label="Marketing emails"
  description="Receive updates about new features and promotions."
/>`}>
        <Switch
          label="Marketing emails"
          description="Receive updates about new features and promotions."
        />
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Sizes</h3>
      <Preview code={`<Switch size="sm" label="Small" defaultChecked />
<Switch size="md" label="Medium" defaultChecked />`}>
        <div className="flex flex-col gap-4">
          <Switch size="sm" label="Small" defaultChecked />
          <Switch size="md" label="Medium" defaultChecked />
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Settings list</h3>
      <Preview code={`<div className="flex flex-col gap-5">
  <Switch label="Email notifications" description="Get notified about activity." defaultChecked />
  <Switch label="Push notifications"  description="Receive push alerts on mobile." />
  <Switch label="Weekly digest"       description="A summary of your week every Monday." defaultChecked />
</div>`}>
        <div className="flex flex-col gap-5 w-80">
          <Switch label="Email notifications" description="Get notified about activity." defaultChecked />
          <Switch label="Push notifications"  description="Receive push alerts on mobile." />
          <Switch label="Weekly digest"       description="A summary of your week every Monday." defaultChecked />
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Disabled</h3>
      <Preview code={`<Switch label="Disabled off" disabled />
<Switch label="Disabled on"  disabled defaultChecked />`}>
        <div className="flex flex-col gap-4">
          <Switch label="Disabled off" disabled />
          <Switch label="Disabled on"  disabled defaultChecked />
        </div>
      </Preview>
    </>
  );
}
