import type { Meta, StoryObj } from '@storybook/react';
import {
  Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle,
  DialogDescription, DialogBody, DialogFooter, DialogClose,
  Button, Input, Alert,
} from '@dave/react';

const meta: Meta = {
  title: 'Components/Dialog',
  parameters: { layout: 'centered' },
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">Open dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>Make changes to your profile here.</DialogDescription>
        </DialogHeader>
        <DialogBody className="flex flex-col gap-4">
          <Input label="Display name" defaultValue="Haydn Phillips" />
          <Input label="Email" defaultValue="haydn@example.com" type="email" />
        </DialogBody>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="secondary">Cancel</Button>
          </DialogClose>
          <Button>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const WithAlert: StoryObj = {
  render: () => (
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
          <DialogClose asChild>
            <Button variant="secondary">Cancel</Button>
          </DialogClose>
          <Button variant="primary" className="bg-error hover:bg-error-hover text-accent-on">Delete workspace</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const Sizes: StoryObj = {
  render: () => (
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
            <DialogBody>
              <p className="text-sm text-fg-secondary">Content goes here.</p>
            </DialogBody>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="secondary">Close</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  ),
};
