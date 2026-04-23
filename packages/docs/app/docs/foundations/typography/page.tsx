import type { Metadata } from 'next';
import { Card, Table } from '@haydywoo/dave-react';

export const metadata: Metadata = { title: 'Typography' };

const typeScale = [
  { class: 'text-xs',   size: '12px', usage: 'Captions, labels, table cells' },
  { class: 'text-sm',   size: '14px', usage: 'Body text, descriptions, UI copy' },
  { class: 'text-base', size: '16px', usage: 'Large body, input values' },
  { class: 'text-lg',   size: '18px', usage: 'Brand / wordmark, section intros' },
  { class: 'text-xl',   size: '20px', usage: 'Sub-headings, large callouts' },
  { class: 'text-2xl',  size: '24px', usage: 'Section headers (h2)' },
  { class: 'text-3xl',  size: '30px', usage: 'Dashboard / sidebar h1' },
  { class: 'text-4xl',  size: '36px', usage: 'Page titles (h1)' },
  { class: 'text-5xl',  size: '48px', usage: 'Marketing hero (mobile)' },
  { class: 'text-6xl',  size: '60px', usage: 'Marketing hero (md+)' },
];

const weights = [
  { class: 'font-normal',    value: '400', usage: 'Body copy' },
  { class: 'font-medium',    value: '500', usage: 'Slightly emphasised UI text' },
  { class: 'font-semibold',  value: '600', usage: 'Display headings (Syne), labels, buttons, table headers' },
  { class: 'font-bold',      value: '700', usage: 'Strong emphasis' },
  { class: 'font-extrabold', value: '800', usage: 'Brand / wordmark only (Syne)' },
];

export default function TypographyPage() {
  return (
    <div>
      <h1 className="font-display font-semibold text-4xl text-foreground mb-2">Typography</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        Three purposeful typefaces, set via CSS custom properties and mapped into Tailwind.
        Everything else — size, weight, leading — is standard Tailwind utility classes.
      </p>

      {/* Typefaces */}
      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-6 pt-8 border-t border-border">Typefaces</h2>

      <div className="flex flex-col gap-6 mb-12">
        {/* Display */}
        <Card>
          <p className="text-xs font-semibold text-fg-secondary uppercase tracking-wider mb-1">Display — Syne 600</p>
          <p className="text-xs font-code text-fg-secondary mb-4">font-display · var(--font-display) · Headings only</p>
          <p className="font-display font-semibold text-4xl text-foreground leading-tight">
            The quick brown fox
          </p>
        </Card>

        {/* Body */}
        <Card>
          <p className="text-xs font-semibold text-fg-secondary uppercase tracking-wider mb-1">Body — Instrument Sans 400 / 500 / 600</p>
          <p className="text-xs font-code text-fg-secondary mb-4">font-body · var(--font-body) · All UI copy</p>
          <p className="text-2xl text-foreground leading-relaxed">
            The quick brown fox jumps over the lazy dog
          </p>
        </Card>

        {/* Code */}
        <Card>
          <p className="text-xs font-semibold text-fg-secondary uppercase tracking-wider mb-1">Code — JetBrains Mono 400 / 500</p>
          <p className="text-xs font-code text-fg-secondary mb-4">font-code · var(--font-code) · Code blocks and token names</p>
          <p className="font-code text-base text-foreground leading-relaxed">
            const greeting = "Hello, world!";
          </p>
        </Card>
      </div>

      {/* Type scale */}
      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Scale</h2>
      <p className="text-sm text-fg-secondary mb-6">Standard Tailwind text sizes — no custom scale needed.</p>

      <div className="mb-12">
        <Table>
          <thead>
            <tr className="bg-surface border-b border-border">
              <th className="px-4 py-3 text-left text-xs font-semibold text-fg-secondary uppercase tracking-wider">Class</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-fg-secondary uppercase tracking-wider">Size</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-fg-secondary uppercase tracking-wider w-1/2">Preview</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-fg-secondary uppercase tracking-wider">Usage</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border bg-card">
            {typeScale.map(({ class: cls, size, usage }) => (
              <tr key={cls}>
                <td className="px-4 py-3 font-code text-xs text-accent-foreground whitespace-nowrap">{cls}</td>
                <td className="px-4 py-3 font-code text-xs text-fg-secondary whitespace-nowrap">{size}</td>
                <td className="px-4 py-3 text-foreground leading-snug" style={{ fontSize: size }}>Aa</td>
                <td className="px-4 py-3 text-xs text-fg-secondary">{usage}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* Weights */}
      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Weight</h2>

      <Table>
        <thead>
          <tr className="bg-surface border-b border-border">
            <th className="px-4 py-3 text-left text-xs font-semibold text-fg-secondary uppercase tracking-wider">Class</th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-fg-secondary uppercase tracking-wider">Value</th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-fg-secondary uppercase tracking-wider w-1/2">Preview</th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-fg-secondary uppercase tracking-wider">Usage</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border bg-card">
          {weights.map(({ class: cls, value, usage }) => (
            <tr key={cls}>
              <td className="px-4 py-3 font-code text-xs text-accent-foreground whitespace-nowrap">{cls}</td>
              <td className="px-4 py-3 font-code text-xs text-fg-secondary">{value}</td>
              <td className={`px-4 py-3 text-base text-foreground ${cls}`}>The quick brown fox</td>
              <td className="px-4 py-3 text-xs text-fg-secondary">{usage}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
