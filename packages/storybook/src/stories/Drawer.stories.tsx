import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle,
  DrawerDescription, DrawerBody, DrawerFooter, DrawerClose,
} from '@dave/react';
import { Button } from '@dave/react';

const meta: Meta = {
  title: 'Components/Drawer',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const Right: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="secondary">Open right drawer</Button>
      </DrawerTrigger>
      <DrawerContent side="right">
        <DrawerHeader>
          <DrawerTitle>Settings</DrawerTitle>
          <DrawerDescription>Manage your account preferences.</DrawerDescription>
        </DrawerHeader>
        <DrawerBody>
          <p className="text-sm text-fg-secondary">Drawer body content goes here.</p>
        </DrawerBody>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="secondary">Cancel</Button>
          </DrawerClose>
          <Button>Save changes</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

export const Left: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="secondary">Open left drawer</Button>
      </DrawerTrigger>
      <DrawerContent side="left">
        <DrawerHeader>
          <DrawerTitle>Navigation</DrawerTitle>
        </DrawerHeader>
        <DrawerBody>
          <p className="text-sm text-fg-secondary">Left drawer content.</p>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  ),
};

export const Bottom: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="secondary">Open bottom drawer</Button>
      </DrawerTrigger>
      <DrawerContent side="bottom">
        <DrawerHeader>
          <DrawerTitle>Share</DrawerTitle>
          <DrawerDescription>Share this item with others.</DrawerDescription>
        </DrawerHeader>
        <DrawerBody>
          <p className="text-sm text-fg-secondary">Bottom drawer — great for mobile action sheets.</p>
        </DrawerBody>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="secondary">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

export const NoFooter: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="secondary">Detail view</Button>
      </DrawerTrigger>
      <DrawerContent side="right">
        <DrawerHeader>
          <DrawerTitle>Order #1042</DrawerTitle>
          <DrawerDescription>Placed 12 March 2026</DrawerDescription>
        </DrawerHeader>
        <DrawerBody>
          <p className="text-sm text-fg-secondary">Read-only detail panel — no footer needed.</p>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  ),
};
