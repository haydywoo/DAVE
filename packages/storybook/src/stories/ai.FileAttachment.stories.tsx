import type { Meta, StoryObj } from '@storybook/react';
import { FileAttachment } from '@dave/react';

const meta: Meta<typeof FileAttachment> = {
  title: 'AI/FileAttachment',
  component: FileAttachment,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    name: { control: 'text' },
    type: { control: 'text' },
    size: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj<typeof FileAttachment>;

export const PDF: Story = {
  args: { name: 'report.pdf', type: 'application/pdf', size: 204800, onRemove: () => {} },
};

export const JSON: Story = {
  args: { name: 'data.json', type: 'application/json', size: 8192, onRemove: () => {} },
};

export const Code: Story = {
  args: { name: 'index.tsx', type: 'text/typescript', size: 3120, onRemove: () => {} },
};

export const NoRemove: Story = {
  args: { name: 'attachment.pdf', type: 'application/pdf', size: 51200 },
};

export const AllTypes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <FileAttachment name="report.pdf"   type="application/pdf"     size={204800} onRemove={() => {}} />
      <FileAttachment name="data.json"    type="application/json"    size={8192}   onRemove={() => {}} />
      <FileAttachment name="index.ts"     type="text/typescript"     size={3120}   onRemove={() => {}} />
      <FileAttachment name="archive.zip"  type="application/zip"     size={1048576} onRemove={() => {}} />
    </div>
  ),
};
