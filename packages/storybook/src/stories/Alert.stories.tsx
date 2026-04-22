import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Alert } from '@haydywoo/dave-react';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Info: Story = {
  args: {
    variant: 'info',
    title: 'Heads up',
    children: 'Your trial expires in 3 days. Upgrade to keep your data.',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Payment received',
    children: 'Your payment of £49 has been processed successfully.',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Unsaved changes',
    children: 'You have unsaved changes. They will be lost if you navigate away.',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    title: 'Something went wrong',
    children: 'We couldn\'t process your request. Please try again or contact support.',
  },
};

export const AllVariants: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-3 w-full max-w-lg">
      <Alert variant="info" title="Info">An informational message.</Alert>
      <Alert variant="success" title="Success">The action completed successfully.</Alert>
      <Alert variant="warning" title="Warning">Something needs your attention.</Alert>
      <Alert variant="error" title="Error">The action failed.</Alert>
    </div>
  ),
};

export const WithoutTitle: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-3 w-full max-w-lg">
      <Alert variant="info">An informational message without a title.</Alert>
      <Alert variant="error">Something went wrong. Please try again.</Alert>
    </div>
  ),
};

export const Dismissible: StoryObj = {
  render: function DismissibleDemo() {
    const [visible, setVisible] = useState(true);
    return (
      <div className="w-full max-w-lg">
        {visible ? (
          <Alert
            variant="warning"
            title="Unsaved changes"
            onDismiss={() => setVisible(false)}
          >
            You have unsaved changes. They will be lost if you navigate away.
          </Alert>
        ) : (
          <p className="text-sm text-fg-secondary">Alert dismissed.</p>
        )}
      </div>
    );
  },
};
