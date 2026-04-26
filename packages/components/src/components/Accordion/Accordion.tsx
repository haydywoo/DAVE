import * as React from 'react';
import { cn } from '../../lib/cn';

// ─── Context ─────────────────────────────────────────────────────────────────

interface AccordionCtx {
  openValues: string[];
  onToggle: (value: string) => void;
  rootRef: React.RefObject<HTMLDivElement>;
}

const AccordionContext = React.createContext<AccordionCtx | null>(null);

interface AccordionItemCtx {
  value: string;
  isOpen: boolean;
  triggerId: string;
  contentId: string;
}

const AccordionItemContext = React.createContext<AccordionItemCtx | null>(null);

function useAccordion() {
  const ctx = React.useContext(AccordionContext);
  if (!ctx) throw new Error('Accordion components must be used inside <Accordion>');
  return ctx;
}

function useAccordionItem() {
  const ctx = React.useContext(AccordionItemContext);
  if (!ctx) throw new Error('AccordionTrigger/Content must be used inside <AccordionItem>');
  return ctx;
}

// ─── Root ─────────────────────────────────────────────────────────────────────

interface AccordionSingleProps {
  type: 'single';
  collapsible?: boolean;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
}

interface AccordionMultipleProps {
  type: 'multiple';
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
}

export type AccordionProps = (AccordionSingleProps | AccordionMultipleProps) & {
  children: React.ReactNode;
  className?: string;
};

export function Accordion(props: AccordionProps) {
  const { type, children, className, ...rest } = props;
  const rootRef = React.useRef<HTMLDivElement>(null);

  const getDefault = (): string[] => {
    if (type === 'single') {
      const dv = (rest as AccordionSingleProps).defaultValue;
      return dv ? [dv] : [];
    }
    return (rest as AccordionMultipleProps).defaultValue ?? [];
  };

  const [internal, setInternal] = React.useState<string[]>(getDefault);
  const isControlled = rest.value !== undefined;
  const openValues: string[] = isControlled
    ? (Array.isArray(rest.value) ? (rest.value as string[]) : [(rest.value as string)])
    : internal;

  function onToggle(val: string) {
    let next: string[];
    if (type === 'single') {
      const collapsible = (rest as AccordionSingleProps).collapsible ?? false;
      next = openValues.includes(val) && collapsible ? [] : [val];
    } else {
      next = openValues.includes(val)
        ? openValues.filter(v => v !== val)
        : [...openValues, val];
    }
    if (!isControlled) setInternal(next);
    if (type === 'single') {
      (rest as AccordionSingleProps).onValueChange?.(next[0] ?? '');
    } else {
      (rest as AccordionMultipleProps).onValueChange?.(next);
    }
  }

  return (
    <AccordionContext.Provider value={{ openValues, onToggle, rootRef }}>
      <div ref={rootRef} className={cn('divide-y divide-border', className)}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

// ─── Item ─────────────────────────────────────────────────────────────────────

export interface AccordionItemProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

let itemId = 0;

export function AccordionItem({ value, children, className }: AccordionItemProps) {
  const { openValues } = useAccordion();
  const [uid] = React.useState(() => ++itemId);
  const triggerId = `accordion-trigger-${uid}`;
  const contentId = `accordion-content-${uid}`;
  const isOpen = openValues.includes(value);

  return (
    <AccordionItemContext.Provider value={{ value, isOpen, triggerId, contentId }}>
      <div className={className}>{children}</div>
    </AccordionItemContext.Provider>
  );
}

// ─── Trigger ─────────────────────────────────────────────────────────────────

export interface AccordionTriggerProps {
  children: React.ReactNode;
  className?: string;
}

export function AccordionTrigger({ children, className }: AccordionTriggerProps) {
  const { onToggle, rootRef } = useAccordion();
  const { value, isOpen, triggerId, contentId } = useAccordionItem();

  function handleKeyDown(e: React.KeyboardEvent<HTMLButtonElement>) {
    if (!rootRef.current) return;
    const triggers = Array.from(
      rootRef.current.querySelectorAll<HTMLButtonElement>('[data-accordion-trigger]')
    );
    const idx = triggers.indexOf(e.currentTarget);
    switch (e.key) {
      case 'ArrowDown': e.preventDefault(); triggers[(idx + 1) % triggers.length]?.focus(); break;
      case 'ArrowUp':   e.preventDefault(); triggers[(idx - 1 + triggers.length) % triggers.length]?.focus(); break;
      case 'Home':      e.preventDefault(); triggers[0]?.focus(); break;
      case 'End':       e.preventDefault(); triggers[triggers.length - 1]?.focus(); break;
    }
  }

  return (
    <button
      type="button"
      id={triggerId}
      data-accordion-trigger
      aria-expanded={isOpen}
      aria-controls={contentId}
      onClick={() => onToggle(value)}
      onKeyDown={handleKeyDown}
      className={cn(
        'flex w-full items-center justify-between py-4 text-sm font-semibold text-foreground',
        'hover:text-fg-secondary transition-colors text-left',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1 focus-visible:ring-offset-background',
        className,
      )}
    >
      {children}
      <svg
        width="16" height="16" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        aria-hidden="true"
        className={cn('shrink-0 transition-transform duration-200', isOpen && 'rotate-180')}
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </button>
  );
}

// ─── Content ─────────────────────────────────────────────────────────────────

export interface AccordionContentProps {
  children: React.ReactNode;
  className?: string;
}

export function AccordionContent({ children, className }: AccordionContentProps) {
  const { isOpen, triggerId, contentId } = useAccordionItem();

  return (
    <div
      id={contentId}
      role="region"
      aria-labelledby={triggerId}
      className={cn(
        'grid transition-all duration-200 ease-in-out',
        isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
      )}
    >
      <div className="overflow-hidden">
        <div className={cn('pb-4 text-sm text-fg-secondary', className)}>
          {children}
        </div>
      </div>
    </div>
  );
}
