'use client';

import {
  FormField,
  FormLabel,
  FormControl,
  FormHint,
  FormSection,
  Input,
  Textarea,
  Switch,
  Button,
} from '@dave/react';
import { Preview } from '@/components/Preview';

export function FormFieldDemos() {
  return (
    <>
      <Preview
        center={false}
        code={`<FormField id="email">
  <FormLabel>Email address</FormLabel>
  <FormControl>
    <Input placeholder="you@example.com" />
  </FormControl>
  <FormHint>We'll never share your email.</FormHint>
</FormField>`}
      >
        <div className="w-full max-w-sm">
          <FormField id="email">
            <FormLabel>Email address</FormLabel>
            <FormControl>
              <Input placeholder="you@example.com" />
            </FormControl>
            <FormHint>We'll never share your email.</FormHint>
          </FormField>
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Error state</h3>
      <Preview
        center={false}
        code={`<FormField id="email" error>
  <FormLabel>Email address</FormLabel>
  <FormControl>
    <Input defaultValue="not-an-email" error />
  </FormControl>
  <FormHint>Please enter a valid email address.</FormHint>
</FormField>`}
      >
        <div className="w-full max-w-sm">
          <FormField id="email-err" error>
            <FormLabel>Email address</FormLabel>
            <FormControl>
              <Input defaultValue="not-an-email" error />
            </FormControl>
            <FormHint>Please enter a valid email address.</FormHint>
          </FormField>
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Required field</h3>
      <Preview
        center={false}
        code={`<FormField id="name" required>
  <FormLabel>Full name</FormLabel>
  <FormControl>
    <Input placeholder="Jane Smith" />
  </FormControl>
</FormField>`}
      >
        <div className="w-full max-w-sm">
          <FormField id="name" required>
            <FormLabel>Full name</FormLabel>
            <FormControl>
              <Input placeholder="Jane Smith" />
            </FormControl>
          </FormField>
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Section layout</h3>
      <Preview
        center={false}
        code={`<FormSection title="Personal details" description="Used for your profile.">
  <FormField id="fullname" required>
    <FormLabel>Full name</FormLabel>
    <FormControl><Input placeholder="Jane Smith" /></FormControl>
  </FormField>
  <FormField id="bio">
    <FormLabel>Bio</FormLabel>
    <FormControl><Textarea showCount maxLength={200} placeholder="About you…" /></FormControl>
    <FormHint>Shown on your public profile.</FormHint>
  </FormField>
</FormSection>`}
      >
        <div className="w-full max-w-sm flex flex-col gap-8">
          <FormSection title="Personal details" description="Used for your profile and notifications.">
            <FormField id="fullname2" required>
              <FormLabel>Full name</FormLabel>
              <FormControl><Input placeholder="Jane Smith" /></FormControl>
            </FormField>
            <FormField id="bio2">
              <FormLabel>Bio</FormLabel>
              <FormControl><Textarea showCount maxLength={200} placeholder="About you…" /></FormControl>
              <FormHint>Shown on your public profile.</FormHint>
            </FormField>
          </FormSection>
          <FormSection title="Preferences">
            <FormField id="notif">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <FormLabel>Email notifications</FormLabel>
                  <FormHint>Receive updates about activity.</FormHint>
                </div>
                <Switch />
              </div>
            </FormField>
          </FormSection>
          <div className="flex justify-end gap-3">
            <Button variant="secondary">Cancel</Button>
            <Button>Save changes</Button>
          </div>
        </div>
      </Preview>
    </>
  );
}
