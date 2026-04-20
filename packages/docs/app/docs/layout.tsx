'use client';

import { Sidebar } from '@/components/Sidebar';
import { CommandPalette } from '@/components/CommandPalette';
import { useCommandPalette } from '@/hooks/useCommandPalette';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const { open: paletteOpen, setOpen: setPaletteOpen } = useCommandPalette();

  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="flex">
        <Sidebar />
        <main className="flex-1 min-w-0 px-6 lg:px-12 pt-10 pb-16 [&>*:last-child]:mb-0">
          {children}
        </main>
      </div>
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
    </div>
  );
}
