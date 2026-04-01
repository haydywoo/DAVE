'use client';

import { Textarea } from '@dave/react';
import { Preview } from '@/components/Preview';

export function TextareaDemos() {
  return (
    <>
      <Preview code={`<Textarea placeholder="Write something…" />`}>
        <div className="w-72">
          <Textarea placeholder="Write something…" />
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">With label and hint</h3>
      <Preview code={`<Textarea
  label="Bio"
  placeholder="Tell us about yourself…"
  hint="Shown on your public profile. Max 200 characters."
/>`}>
        <div className="w-72">
          <Textarea label="Bio" placeholder="Tell us about yourself…" hint="Shown on your public profile. Max 200 characters." />
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Error state</h3>
      <Preview code={`<Textarea
  label="Message"
  hint="Message cannot be empty."
  error
/>`}>
        <div className="w-72">
          <Textarea label="Message" placeholder="Your message…" hint="Message cannot be empty." error />
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Disabled</h3>
      <Preview code={`<Textarea label="Notes" defaultValue="Read-only content." disabled />`}>
        <div className="w-72">
          <Textarea label="Notes" defaultValue="This field is disabled." disabled />
        </div>
      </Preview>
    </>
  );
}
