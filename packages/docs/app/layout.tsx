import type { Metadata } from 'next';
import { Syne, Instrument_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Nav } from '@/components/Nav';
import { ThemeProvider } from '@/components/ThemeProvider';

const syne = Syne({
  subsets: ['latin'],
  weight: ['800'],
  variable: '--font-display',
});

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-code',
});

export const metadata: Metadata = {
  title: { default: 'DAVE', template: '%s — DAVE' },
  description: 'An open-source design system built for teams who care about accessibility, consistency, and craft.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${syne.variable} ${instrumentSans.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-background text-foreground font-body">
        <ThemeProvider>
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
