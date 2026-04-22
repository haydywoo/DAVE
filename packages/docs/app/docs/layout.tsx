'use client';

import { useState, useEffect } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { PrevNext } from '@/components/PrevNext';
import { CommandPalette } from '@/components/CommandPalette';
import { FeedbackWidget } from '@/components/FeedbackWidget';
import { useCommandPalette } from '@/hooks/useCommandPalette';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { open: paletteOpen, setOpen: setPaletteOpen } = useCommandPalette();

  useEffect(() => {
    function handler() { setSidebarOpen(true); }
    window.addEventListener('dave:open-sidebar', handler);
    return () => window.removeEventListener('dave:open-sidebar', handler);
  }, []);

  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="flex">
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-20 bg-foreground/20 backdrop-blur-sm lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <Sidebar
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <main className="flex-1 min-w-0 px-6 lg:px-12 pt-10 pb-16 [&>*:last-child]:mb-0">
          {children}
          <PrevNext />
        </main>
      </div>

      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
      <FeedbackWidget />
    </div>
  );
}
