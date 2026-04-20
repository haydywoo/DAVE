import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Dropzone } from '@dave/react';

const meta: Meta<typeof Dropzone> = {
  title: 'Forms/Dropzone',
  component: Dropzone,
  parameters: { layout: 'padded' },
  decorators: [(Story) => <div className="max-w-md"><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof Dropzone>;

export const Default: Story = {
  render: () => {
    const [files, setFiles] = useState<File[]>([]);
    return (
      <div className="flex flex-col gap-3">
        <Dropzone onFiles={(f) => setFiles((prev) => [...prev, ...f])} multiple />
        {files.length > 0 && (
          <ul className="text-sm text-fg-secondary space-y-1">
            {files.map((f, i) => <li key={i}>{f.name} — {(f.size / 1024).toFixed(1)} KB</li>)}
          </ul>
        )}
      </div>
    );
  },
};

export const ImagesOnly: Story = {
  render: () => (
    <Dropzone
      onFiles={console.log}
      accept="image/*"
      label="Profile photo"
      hint="PNG, JPG or GIF · Max 2 MB"
      maxSize={2 * 1024 * 1024}
    />
  ),
};

export const WithError: Story = {
  render: () => (
    <Dropzone
      onFiles={console.log}
      error
      hint="File type not supported."
    />
  ),
};

export const Disabled: Story = {
  render: () => (
    <Dropzone onFiles={console.log} disabled />
  ),
};
