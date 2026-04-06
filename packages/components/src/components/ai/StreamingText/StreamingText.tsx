'use client';

import * as React from 'react';
import { cn } from '../../../lib/cn';

export interface StreamingTextProps {
  text: string;
  /** When true, renders a blinking cursor at the end of the text. */
  isStreaming?: boolean;
  className?: string;
}

export function StreamingText({ text, isStreaming = false, className }: StreamingTextProps) {
  return (
    <span className={cn('whitespace-pre-wrap break-words', className)}>
      {text}
      {isStreaming && (
        <span
          aria-hidden="true"
          className="inline-block w-0.5 h-[1em] ml-px align-text-bottom bg-current animate-pulse"
        />
      )}
    </span>
  );
}
