import type { Meta, StoryObj } from '@storybook/react-vite';
import { FileAttachment } from '@dave/react';

const meta: Meta<typeof FileAttachment> = {
  title: 'AI/FileAttachment',
  component: FileAttachment,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    name:    { control: 'text' },
    type:    { control: 'text' },
    size:    { control: 'number' },
    compact: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof FileAttachment>;

export const PDF: Story = {
  args: { name: 'report.pdf', type: 'application/pdf', size: 204800, onRemove: () => {} },
};

export const Code: Story = {
  args: { name: 'index.tsx', type: 'text/typescript', size: 3120, onRemove: () => {} },
};

export const NoRemove: Story = {
  args: { name: 'attachment.pdf', type: 'application/pdf', size: 51200 },
};

export const Compact: Story = {
  args: { name: 'report.pdf', type: 'application/pdf', compact: true, onRemove: () => {} },
};

export const CompactAllTypes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <FileAttachment compact name="report.pdf"       type="application/pdf"               onRemove={() => {}} />
      <FileAttachment compact name="photo.jpg"        type="image/jpeg"                    onRemove={() => {}} />
      <FileAttachment compact name="data.csv"         type="text/csv"                      onRemove={() => {}} />
      <FileAttachment compact name="index.ts"         type="text/typescript"               onRemove={() => {}} />
      <FileAttachment compact name="archive.zip"      type="application/zip"               onRemove={() => {}} />
      <FileAttachment compact name="slides.pptx"      type="application/vnd.ms-powerpoint" onRemove={() => {}} />
      <FileAttachment compact name="clip.mp4"         type="video/mp4"                     onRemove={() => {}} />
      <FileAttachment compact name="track.mp3"        type="audio/mpeg"                    onRemove={() => {}} />
    </div>
  ),
};

export const AllTypes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <FileAttachment name="report.pdf"       type="application/pdf"               size={204800}  onRemove={() => {}} />
      <FileAttachment name="photo.jpg"        type="image/jpeg"                    size={512000}  onRemove={() => {}} />
      <FileAttachment name="data.csv"         type="text/csv"                      size={8192}    onRemove={() => {}} />
      <FileAttachment name="index.ts"         type="text/typescript"               size={3120}    onRemove={() => {}} />
      <FileAttachment name="archive.zip"      type="application/zip"               size={1048576} onRemove={() => {}} />
      <FileAttachment name="slides.pptx"      type="application/vnd.ms-powerpoint" size={2097152} onRemove={() => {}} />
      <FileAttachment name="clip.mp4"         type="video/mp4"                     size={10485760} onRemove={() => {}} />
      <FileAttachment name="track.mp3"        type="audio/mpeg"                    size={5242880} onRemove={() => {}} />
    </div>
  ),
};
