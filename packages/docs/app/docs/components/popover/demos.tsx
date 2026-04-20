'use client';

import { Popover, PopoverTrigger, PopoverContent, PopoverClose, Button, Input, Select, SelectItem } from '@dave/react';
import { Preview } from '@/components/Preview';

export function PopoverDemos() {
  return (
    <>
      <Preview code={`<Popover>
  <PopoverTrigger asChild>
    <Button variant="secondary">Open popover</Button>
  </PopoverTrigger>
  <PopoverContent>
    <p className="text-sm text-fg-secondary">This is a popover.</p>
  </PopoverContent>
</Popover>`}>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="secondary">Open popover</Button>
          </PopoverTrigger>
          <PopoverContent>
            <p className="text-sm text-fg-secondary">This is a popover. Put anything here.</p>
          </PopoverContent>
        </Popover>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">With form</h3>
      <Preview code={`<Popover>
  <PopoverTrigger asChild>
    <Button variant="secondary">Edit dimensions</Button>
  </PopoverTrigger>
  <PopoverContent>
    <div className="flex flex-col gap-3">
      <p className="text-sm font-semibold text-foreground">Dimensions</p>
      <div className="flex flex-col gap-1.5">
        <label className="text-xs text-fg-secondary">Width</label>
        <Input size="sm" defaultValue="100%" />
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
</Popover>`}>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="secondary">Edit dimensions</Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold text-foreground">Dimensions</p>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="popover-width" className="text-xs text-fg-secondary">Width</label>
                <Input id="popover-width" size="sm" placeholder="e.g. 100%" defaultValue="100%" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="popover-height" className="text-xs text-fg-secondary">Height</label>
                <Input id="popover-height" size="sm" placeholder="e.g. auto" defaultValue="auto" />
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
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Filter panel</h3>
      <Preview code={`<Popover>
  <PopoverTrigger asChild>
    <Button variant="secondary">Filters</Button>
  </PopoverTrigger>
  <PopoverContent>
    <div className="flex flex-col gap-3">
      <p className="text-sm font-semibold text-foreground">Filter results</p>
      <Select placeholder="Status…">
        <SelectItem value="active">Active</SelectItem>
        <SelectItem value="inactive">Inactive</SelectItem>
        <SelectItem value="pending">Pending</SelectItem>
      </Select>
      <Select placeholder="Role…">
        <SelectItem value="admin">Admin</SelectItem>
        <SelectItem value="member">Member</SelectItem>
      </Select>
      <Button size="sm" className="w-full">Apply filters</Button>
    </div>
  </PopoverContent>
</Popover>`}>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="secondary">Filters</Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold text-foreground">Filter results</p>
              <Select placeholder="Status…">
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
              </Select>
              <Select placeholder="Role…">
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="member">Member</SelectItem>
              </Select>
              <Button size="sm" className="w-full">Apply filters</Button>
            </div>
          </PopoverContent>
        </Popover>
      </Preview>
    </>
  );
}
