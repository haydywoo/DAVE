'use client';

import { Tooltip, Button, Badge, Avatar } from '@dave/react';
import { Preview } from '@/components/Preview';

export function TooltipDemos() {
  return (
    <>
      <Preview code={`<Tooltip content="Save your changes">
  <Button variant="secondary">Hover me</Button>
</Tooltip>`}>
        <Tooltip content="Save your changes">
          <Button variant="secondary">Hover me</Button>
        </Tooltip>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Sides</h3>
      <Preview code={`<Tooltip content="Tooltip text" side="top">…</Tooltip>
<Tooltip content="Tooltip text" side="right">…</Tooltip>
<Tooltip content="Tooltip text" side="bottom">…</Tooltip>
<Tooltip content="Tooltip text" side="left">…</Tooltip>`}>
        <div className="flex flex-wrap gap-3">
          {(['top', 'right', 'bottom', 'left'] as const).map((side) => (
            <Tooltip key={side} content={`Side: ${side}`} side={side}>
              <Button variant="secondary" size="sm">{side}</Button>
            </Tooltip>
          ))}
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">On any element</h3>
      <Preview code={`<Tooltip content="Haydn Phillips · Admin" side="right">
  <Avatar initials="HP" size="md" />
</Tooltip>`}>
        <div className="flex gap-4">
          <Tooltip content="Haydn Phillips · Admin" side="right">
            <Avatar initials="HP" size="md" />
          </Tooltip>
          <Tooltip content="Experimental feature" side="right">
            <Badge variant="warning">Beta</Badge>
          </Tooltip>
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Rich content</h3>
      <Preview code={`<Tooltip
  content={
    <span>
      Open command palette{' '}
      <kbd className="rounded bg-background/20 px-1 font-mono text-[11px]">⌘K</kbd>
    </span>
  }
>
  <Button variant="secondary">Keyboard shortcut</Button>
</Tooltip>`}>
        <Tooltip
          content={
            <span>
              Open command palette{' '}
              <kbd className="rounded bg-background/20 px-1 font-mono text-[11px]">⌘K</kbd>
            </span>
          }
        >
          <Button variant="secondary">Keyboard shortcut</Button>
        </Tooltip>
      </Preview>
    </>
  );
}
