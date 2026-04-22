'use client';

import { Input } from '@haydywoo/dave-react';
import { Preview } from '@/components/Preview';

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export function InputDemos() {
  return (
    <>
      <Preview
        center={false}
        code={`<Input label="Email" placeholder="you@example.com" />
<Input label="Email" hint="We'll never share your email." placeholder="you@example.com" />`}
      >
        <div className="w-full max-w-sm flex flex-col gap-4">
          <Input label="Email" placeholder="you@example.com" />
          <Input label="Email" hint="We'll never share your email." placeholder="you@example.com" />
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">With icons</h3>
      <Preview
        center={false}
        code={`<Input leftIcon={<SearchIcon />} placeholder="Search…" />
<Input leftIcon={<MailIcon />} label="Email" placeholder="you@example.com" />`}
      >
        <div className="w-full max-w-sm flex flex-col gap-4">
          <Input leftIcon={<SearchIcon />} placeholder="Search…" />
          <Input leftIcon={<MailIcon />} label="Email" placeholder="you@example.com" />
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">With addons</h3>
      <Preview
        center={false}
        code={`<Input prefix="https://" placeholder="yoursite.com" />
<Input suffix=".com" placeholder="yoursite" />
<Input prefix="https://" suffix="/path" placeholder="yoursite.com" />`}
      >
        <div className="w-full max-w-sm flex flex-col gap-4">
          <Input prefix="https://" placeholder="yoursite.com" />
          <Input suffix=".com" placeholder="yoursite" />
          <Input prefix="https://" suffix="/path" placeholder="yoursite.com" />
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Error state</h3>
      <Preview
        center={false}
        code={`<Input label="Email" error hint="Please enter a valid email address." defaultValue="not-an-email" />`}
      >
        <div className="w-full max-w-sm">
          <Input label="Email" error hint="Please enter a valid email address." defaultValue="not-an-email" />
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Sizes</h3>
      <Preview
        center={false}
        code={`<Input size="sm" placeholder="Small" />
<Input size="md" placeholder="Medium" />
<Input size="lg" placeholder="Large" />`}
      >
        <div className="w-full max-w-sm flex flex-col gap-3">
          <Input size="sm" placeholder="Small" />
          <Input size="md" placeholder="Medium" />
          <Input size="lg" placeholder="Large" />
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Disabled</h3>
      <Preview
        center={false}
        code={`<Input label="Email" placeholder="you@example.com" disabled />`}
      >
        <div className="w-full max-w-sm">
          <Input label="Email" placeholder="you@example.com" disabled />
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Clearable</h3>
      <Preview
        center={false}
        code={`<Input clearable placeholder="Type to see the clear button…" defaultValue="Hello, world!" />
<Input clearable leftIcon={<SearchIcon />} placeholder="Search…" defaultValue="react components" />`}
      >
        <div className="w-full max-w-sm flex flex-col gap-4">
          <Input clearable placeholder="Type to see the clear button…" defaultValue="Hello, world!" />
          <Input clearable leftIcon={<SearchIcon />} placeholder="Search…" defaultValue="react components" />
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Character count</h3>
      <Preview
        center={false}
        code={`<Input showCount placeholder="Type something…" />
<Input showCount maxLength={100} placeholder="Max 100 characters" hint="Keep it concise." />`}
      >
        <div className="w-full max-w-sm flex flex-col gap-4">
          <Input showCount placeholder="Type something…" />
          <Input showCount maxLength={100} placeholder="Max 100 characters" defaultValue="Start typing here…" hint="Keep it concise." />
        </div>
      </Preview>
    </>
  );
}
