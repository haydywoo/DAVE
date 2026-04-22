'use client';

import { ToastProviderWithHook, useToast, ToastAction, Button } from '@haydywoo/dave-react';
import { Preview } from '@/components/Preview';

function ToastButtons() {
  const { toast } = useToast();
  return (
    <>
      <Preview code={`const { toast } = useToast();
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

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">With action</h3>
      <Preview code={`toast({
  title: 'File deleted',
  description: 'document.pdf has been moved to trash.',
  action: <ToastAction altText="Undo file deletion" onClick={handleUndo}>Undo</ToastAction>,
});`}>
        <Button
          variant="secondary"
          onClick={() =>
            toast({
              title: 'File deleted',
              description: 'document.pdf has been moved to trash.',
              action: <ToastAction altText="Undo file deletion">Undo</ToastAction>,
            })
          }
        >
          Delete file
        </Button>
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
