'use client';

import { Textarea } from '@dave/react';
import { Preview } from '@/components/Preview';

export function TextareaDemos() {
  return (
    <>
      <Preview center={false} code={`<Textarea placeholder="Write something…" />`}>
        <div className="w-full max-w-sm">
          <Textarea placeholder="Write something…" />
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">With label and hint</h3>
      <Preview center={false} code={`<Textarea
  label="Bio"
  placeholder="Tell us about yourself…"
  hint="Shown on your public profile. Max 200 characters."
/>`}>
        <div className="w-full max-w-sm">
          <Textarea label="Bio" placeholder="Tell us about yourself…" hint="Shown on your public profile. Max 200 characters." />
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Error state</h3>
      <Preview center={false} code={`<Textarea
  label="Message"
  hint="Message cannot be empty."
  error
/>`}>
        <div className="w-full max-w-sm">
          <Textarea label="Message" placeholder="Your message…" hint="Message cannot be empty." error />
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Character count</h3>
      <Preview center={false} code={`<Textarea showCount placeholder="Type something…" />
<Textarea showCount maxLength={200} label="Bio" placeholder="Tell us about yourself…" hint="Keep it concise." />`}>
        <div className="w-full max-w-sm flex flex-col gap-4">
          <Textarea showCount placeholder="Type something…" />
          <Textarea showCount maxLength={200} label="Bio" placeholder="Tell us about yourself…" hint="Keep it concise." />
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Disabled</h3>
      <Preview center={false} code={`<Textarea label="Notes" defaultValue="Read-only content." disabled />`}>
        <div className="w-full max-w-sm">
          <Textarea label="Notes" defaultValue="This field is disabled." disabled />
        </div>
      </Preview>
    </>
  );
}
