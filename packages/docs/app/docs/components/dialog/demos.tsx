'use client';

import {
  Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle,
  DialogDescription, DialogBody, DialogFooter, DialogClose,
  Button, Input, Alert,
} from '@dave/react';
import { Preview } from '@/components/Preview';

export function DialogDemos() {
  return (
    <>
      <Preview code={`<Dialog>
  <DialogTrigger asChild>
    <Button variant="secondary">Edit profile</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit profile</DialogTitle>
      <DialogDescription>Make changes to your profile here.</DialogDescription>
    </DialogHeader>
    <DialogBody className="flex flex-col gap-4">
      <Input label="Display name" defaultValue="Haydn Phillips" />
      <Input label="Email" type="email" defaultValue="haydn@example.com" />
    </DialogBody>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="secondary">Cancel</Button>
      </DialogClose>
      <Button>Save changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="secondary">Edit profile</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>Make changes to your profile here.</DialogDescription>
            </DialogHeader>
            <DialogBody className="flex flex-col gap-4">
              <Input label="Display name" defaultValue="Haydn Phillips" />
              <Input label="Email" type="email" defaultValue="haydn@example.com" />
            </DialogBody>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="secondary">Cancel</Button>
              </DialogClose>
              <Button>Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Destructive</h3>
      <Preview code={`<Dialog>
  <DialogTrigger asChild>
    <Button variant="secondary">Delete workspace</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Delete workspace</DialogTitle>
      <DialogDescription>This action cannot be undone.</DialogDescription>
    </DialogHeader>
    <DialogBody className="flex flex-col gap-4">
      <Alert variant="error">All members will lose access immediately.</Alert>
      <Input label="Type the workspace name to confirm" placeholder="my-workspace" />
    </DialogBody>
    <DialogFooter>
      <DialogClose asChild><Button variant="secondary">Cancel</Button></DialogClose>
      <Button className="bg-error hover:bg-error-hover text-accent-on">Delete workspace</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="secondary">Delete workspace</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Delete workspace</DialogTitle>
              <DialogDescription>This action cannot be undone.</DialogDescription>
            </DialogHeader>
            <DialogBody className="flex flex-col gap-4">
              <Alert variant="error">All members will immediately lose access and all data will be permanently deleted.</Alert>
              <Input label="Type the workspace name to confirm" placeholder="my-workspace" />
            </DialogBody>
            <DialogFooter>
              <DialogClose asChild><Button variant="secondary">Cancel</Button></DialogClose>
              <Button className="bg-error hover:bg-error-hover text-accent-on">Delete workspace</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Sizes</h3>
      <Preview code={`<DialogContent size="sm">…</DialogContent>
<DialogContent size="md">…</DialogContent>
<DialogContent size="lg">…</DialogContent>
<DialogContent size="xl">…</DialogContent>`}>
        <div className="flex gap-2 flex-wrap">
          {(['sm', 'md', 'lg', 'xl'] as const).map(size => (
            <Dialog key={size}>
              <DialogTrigger asChild>
                <Button variant="secondary" size="sm">{size.toUpperCase()}</Button>
              </DialogTrigger>
              <DialogContent size={size}>
                <DialogHeader>
                  <DialogTitle>Size: {size}</DialogTitle>
                  <DialogDescription>This dialog uses the {size} size variant.</DialogDescription>
                </DialogHeader>
                <DialogBody><p className="text-sm text-fg-secondary">Content goes here.</p></DialogBody>
                <DialogFooter>
                  <DialogClose asChild><Button variant="secondary">Close</Button></DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </Preview>
    </>
  );
}
