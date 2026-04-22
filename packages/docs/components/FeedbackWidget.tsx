'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Popover, PopoverTrigger, PopoverContent, Button, Textarea } from '@haydywoo/dave-react';

type Rating = 'up' | 'down';
type View = 'ask' | 'comment' | 'thanks';

export function FeedbackWidget() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<View>('ask');
  const [rating, setRating] = useState<Rating | null>(null);
  const [comment, setComment] = useState('');

  function reset() {
    // wait for the close animation before resetting so the UI doesn't flicker
    setTimeout(() => {
      setView('ask');
      setRating(null);
      setComment('');
    }, 180);
  }

  function onOpenChange(next: boolean) {
    setOpen(next);
    if (!next) reset();
  }

  function handleThumb(r: Rating) {
    setRating(r);
    setView('comment');
    // TODO: fire Clarity event here
    console.log('[feedback] rating', { page: pathname, rating: r });
  }

  function handleSend() {
    // TODO: POST to Formspree (or similar) here
    console.log('[feedback] submit', { page: pathname, rating, comment });
    setView('thanks');
    setTimeout(() => {
      setOpen(false);
      reset();
    }, 1400);
  }

  function handleSkip() {
    setOpen(false);
    reset();
  }

  return (
    <Popover open={open} onOpenChange={onOpenChange}>
      <PopoverTrigger asChild>
        <button
          type="button"
          aria-label="Give feedback on this page"
          className="hidden sm:flex fixed bottom-6 right-6 z-40 w-11 h-11 items-center justify-center rounded-full bg-accent text-accent-on shadow-raised hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-colors"
        >
          <ChatIcon />
        </button>
      </PopoverTrigger>

      <PopoverContent side="top" align="end" sideOffset={12} className="w-80">
        {view === 'ask' && (
          <div>
            <p className="text-sm font-semibold text-foreground mb-1">Was this page helpful?</p>
            <p className="text-xs text-fg-secondary mb-4">A tap on either — nothing else needed.</p>
            <div className="flex gap-2">
              <Button
                variant="secondary"
                size="sm"
                className="flex-1"
                onClick={() => handleThumb('up')}
                leftIcon={<ThumbUpIcon />}
              >
                Yes
              </Button>
              <Button
                variant="secondary"
                size="sm"
                className="flex-1"
                onClick={() => handleThumb('down')}
                leftIcon={<ThumbDownIcon />}
              >
                No
              </Button>
            </div>
          </div>
        )}

        {view === 'comment' && (
          <div>
            <p className="text-sm font-semibold text-foreground mb-1">Thanks.</p>
            <p className="text-xs text-fg-secondary mb-3">
              Anything specific? (optional)
            </p>
            <Textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={3}
              placeholder={
                rating === 'up'
                  ? 'e.g. the examples really clicked'
                  : 'e.g. missing accessibility notes'
              }
              autoFocus
            />
            <div className="flex justify-end gap-2 mt-3">
              <Button variant="ghost" size="sm" onClick={handleSkip}>
                Skip
              </Button>
              <Button variant="primary" size="sm" onClick={handleSend}>
                Send
              </Button>
            </div>
          </div>
        )}

        {view === 'thanks' && (
          <div>
            <p className="text-sm font-semibold text-foreground mb-1">Got it — noted.</p>
            <p className="text-xs text-fg-secondary">Thanks for the signal.</p>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}

// ─── Icons ───────────────────────────────────────────────────────────────────

function ChatIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function ThumbUpIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 10v12M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  );
}

function ThumbDownIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 14V2M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" />
    </svg>
  );
}
