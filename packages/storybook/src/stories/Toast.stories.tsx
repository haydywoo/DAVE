import type { Meta, StoryObj } from '@storybook/react';
import { ToastProviderWithHook, useToast, Button } from '@dave/react';

const meta: Meta = {
  title: 'Components/Toast',
  parameters: { layout: 'centered' },
  decorators: [Story => <ToastProviderWithHook><Story /></ToastProviderWithHook>],
};

export default meta;

function ToastDemo({ title, description, variant }: { title: string; description?: string; variant?: any }) {
  const { toast } = useToast();
  return (
    <Button variant="secondary" onClick={() => toast({ title, description, variant })}>
      Show toast
    </Button>
  );
}

export const Default: StoryObj = {
  render: () => <ToastDemo title="Changes saved" description="Your profile has been updated." />,
};

export const Success: StoryObj = {
  render: () => <ToastDemo variant="success" title="Payment received" description="Invoice #1042 has been paid." />,
};

export const Warning: StoryObj = {
  render: () => <ToastDemo variant="warning" title="Unsaved changes" description="Navigate away to discard." />,
};

export const Error: StoryObj = {
  render: () => <ToastDemo variant="error" title="Something went wrong" description="Please try again or contact support." />,
};

export const AllVariants: StoryObj = {
  render: function AllDemo() {
    const { toast } = useToast();
    return (
      <div className="flex gap-2 flex-wrap">
        <Button variant="secondary" size="sm" onClick={() => toast({ title: 'Default', description: 'A default notification.' })}>Default</Button>
        <Button variant="secondary" size="sm" onClick={() => toast({ variant: 'success', title: 'Success', description: 'Action completed.' })}>Success</Button>
        <Button variant="secondary" size="sm" onClick={() => toast({ variant: 'warning', title: 'Warning', description: 'Something needs attention.' })}>Warning</Button>
        <Button variant="secondary" size="sm" onClick={() => toast({ variant: 'error', title: 'Error', description: 'Something went wrong.' })}>Error</Button>
      </div>
    );
  },
};
