import type { Meta, StoryObj } from '@storybook/react-vite';
import { Popover, PopoverTrigger, PopoverContent, PopoverClose, Button, Input } from '@haydywoo/dave-react';

const meta: Meta = {
  title: 'Components/Popover',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="secondary">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <p className="text-sm text-fg-secondary">This is a popover. Put anything here.</p>
      </PopoverContent>
    </Popover>
  ),
};

export const Form: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="secondary">Edit dimensions</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold text-foreground">Dimensions</p>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-fg-secondary">Width</label>
            <Input size="sm" placeholder="e.g. 100%" defaultValue="100%" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-fg-secondary">Height</label>
            <Input size="sm" placeholder="e.g. auto" defaultValue="auto" />
          </div>
          <div className="flex justify-end gap-2 pt-1">
            <PopoverClose asChild>
              <Button variant="ghost" size="sm">Cancel</Button>
            </PopoverClose>
            <PopoverClose asChild>
              <Button size="sm">Apply</Button>
            </PopoverClose>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const Sides: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      {(['top', 'right', 'bottom', 'left'] as const).map((side) => (
        <Popover key={side}>
          <PopoverTrigger asChild>
            <Button variant="secondary" size="sm">{side}</Button>
          </PopoverTrigger>
          <PopoverContent side={side}>
            <p className="text-sm text-fg-secondary">Appears on the {side}.</p>
          </PopoverContent>
        </Popover>
      ))}
    </div>
  ),
};
