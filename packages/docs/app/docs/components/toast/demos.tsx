'use client';

import { ToastProviderWithHook, useToast, Button } from '@dave/react';
import { Preview } from '@/components/Preview';

function ToastButtons() {
  const { toast } = useToast();
  return (
    <>
      <Preview code={`const { toast } = useToast();

// Wrap your app in <ToastProviderWithHook>
toast({ title: 'Changes saved', description: 'Your profile has been updated.' });`}>
        <div className="flex flex-wrap gap-2">
          <Button variant="secondary" onClick={() => toast({ title: 'Changes saved', description: 'Your profile has been updated.' })}>
            Default
          </Button>
          <Button variant="secondary" onClick={() => toast({ variant: 'success', title: 'Payment received', description: 'Invoice #1042 has been paid.' })}>
            Success
          </Button>
          <Button variant="secondary" onClick={() => toast({ variant: 'warning', title: 'Unsaved changes', description: 'Navigate away to discard.' })}>
            Warning
          </Button>
          <Button variant="secondary" onClick={() => toast({ variant: 'error', title: 'Something went wrong', description: 'Please try again or contact support.' })}>
            Error
          </Button>
        </div>
      </Preview>
    </>
  );
}

export function ToastDemos() {
  return (
    <ToastProviderWithHook>
      <ToastButtons />
    </ToastProviderWithHook>
  );
}
