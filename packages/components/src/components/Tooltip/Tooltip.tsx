import * as React from 'react';
import * as RadixTooltip from '@radix-ui/react-tooltip';
import { cn } from '../../lib/cn';

export type TooltipSide = 'top' | 'right' | 'bottom' | 'left';

export interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  side?: TooltipSide;
  sideOffset?: number;
  delayDuration?: number;
}

export function Tooltip({
  content,
  children,
  side = 'top',
  sideOffset = 6,
  delayDuration = 300,
}: TooltipProps) {
  return (
    <RadixTooltip.Provider delayDuration={delayDuration}>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>
          {children}
        </RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content
            side={side}
            sideOffset={sideOffset}
            className={cn(
              'z-50 max-w-xs rounded-[3px] bg-foreground px-2.5 py-1.5 text-xs text-background shadow-md',
              'animate-in fade-in-0 zoom-in-95',
              'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
              'data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2',
              'data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2',
            )}
          >
            {content}
            <RadixTooltip.Arrow className="fill-foreground" />
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
}
