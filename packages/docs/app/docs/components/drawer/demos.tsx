'use client';

import { useState } from 'react';
import {
  Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle,
  DrawerDescription, DrawerBody, DrawerFooter, DrawerClose, Button,
} from '@haydywoo/dave-react';
import { Preview } from '@/components/Preview';

export function DrawerDemos() {
  return (
    <>
      <Preview
        code={`<Drawer>
  <DrawerTrigger asChild>
    <Button variant="secondary">Open drawer</Button>
  </DrawerTrigger>
  <DrawerContent side="right">
    <DrawerHeader>
      <DrawerTitle>Settings</DrawerTitle>
      <DrawerDescription>Manage your account preferences.</DrawerDescription>
    </DrawerHeader>
    <DrawerBody>
      <p className="text-sm text-fg-secondary">Content goes here.</p>
    </DrawerBody>
    <DrawerFooter>
      <DrawerClose asChild>
        <Button variant="secondary">Cancel</Button>
      </DrawerClose>
      <Button>Save changes</Button>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`}
      >
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="secondary">Open drawer</Button>
          </DrawerTrigger>
          <DrawerContent side="right">
            <DrawerHeader>
              <DrawerTitle>Settings</DrawerTitle>
              <DrawerDescription>Manage your account preferences.</DrawerDescription>
            </DrawerHeader>
            <DrawerBody>
              <p className="text-sm text-fg-secondary">Content goes here.</p>
            </DrawerBody>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="secondary">Cancel</Button>
              </DrawerClose>
              <Button>Save changes</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Sides</h3>
      <Preview
        code={`<Drawer><DrawerTrigger asChild><Button variant="secondary">Left</Button></DrawerTrigger><DrawerContent side="left">…</DrawerContent></Drawer>
<Drawer><DrawerTrigger asChild><Button variant="secondary">Bottom</Button></DrawerTrigger><DrawerContent side="bottom">…</DrawerContent></Drawer>`}
      >
        <div className="flex gap-3">
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="secondary">Left</Button>
            </DrawerTrigger>
            <DrawerContent side="left">
              <DrawerHeader>
                <DrawerTitle>Left drawer</DrawerTitle>
              </DrawerHeader>
              <DrawerBody>
                <p className="text-sm text-fg-secondary">Slides in from the left.</p>
              </DrawerBody>
            </DrawerContent>
          </Drawer>

          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="secondary">Bottom</Button>
            </DrawerTrigger>
            <DrawerContent side="bottom">
              <DrawerHeader>
                <DrawerTitle>Bottom drawer</DrawerTitle>
                <DrawerDescription>Great for mobile action sheets.</DrawerDescription>
              </DrawerHeader>
              <DrawerBody>
                <p className="text-sm text-fg-secondary">Slides up from the bottom.</p>
              </DrawerBody>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button variant="secondary">Close</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Detail view (no footer)</h3>
      <Preview
        code={`<Drawer>
  <DrawerTrigger asChild>
    <Button variant="secondary">View order</Button>
  </DrawerTrigger>
  <DrawerContent side="right">
    <DrawerHeader>
      <DrawerTitle>Order #1042</DrawerTitle>
      <DrawerDescription>Placed 12 March 2026</DrawerDescription>
    </DrawerHeader>
    <DrawerBody>
      <p className="text-sm text-fg-secondary">Read-only content — no footer needed.</p>
    </DrawerBody>
  </DrawerContent>
</Drawer>`}
      >
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="secondary">View order</Button>
          </DrawerTrigger>
          <DrawerContent side="right">
            <DrawerHeader>
              <DrawerTitle>Order #1042</DrawerTitle>
              <DrawerDescription>Placed 12 March 2026</DrawerDescription>
            </DrawerHeader>
            <DrawerBody>
              <p className="text-sm text-fg-secondary">Read-only content — no footer needed.</p>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Preview>
    </>
  );
}
