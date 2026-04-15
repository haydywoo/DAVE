import type { Metadata } from 'next';
import './globals.css';
import { Nav } from '@/components/Nav';
import { ThemeProvider } from '@/components/ThemeProvider';

export const metadata: Metadata = {
  title: { default: 'DAVE', template: '%s — DAVE' },
  description: 'An open-source design system built for teams who care about accessibility, consistency, and craft.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@800&family=Instrument+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-background text-foreground font-body">
        <ThemeProvider>
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
