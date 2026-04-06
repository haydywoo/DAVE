'use client';

import * as React from 'react';

export function useCommandPalette() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    function onKeydown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen((v) => !v);
      }
    }
    function onEvent() { setOpen(true); }
    window.addEventListener('keydown', onKeydown);
    window.addEventListener('dave:open-search', onEvent);
    return () => {
      window.removeEventListener('keydown', onKeydown);
      window.removeEventListener('dave:open-search', onEvent);
    };
  }, []);

  return { open, setOpen };
}
