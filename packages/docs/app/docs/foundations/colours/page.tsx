import type { Metadata } from 'next';
import { ColourScale, SemanticTable } from '@/components/ColourScale';

export const metadata: Metadata = { title: 'Colours' };

const neutral = [
  { step: '1', value: 'var(--neutral-1)', label: 'Background' },
  { step: '2', value: 'var(--neutral-2)', label: 'Surface' },
  { step: '3', value: 'var(--neutral-3)', label: 'Hover' },
  { step: '4', value: 'var(--neutral-4)', label: 'Border' },
  { step: '5', value: 'var(--neutral-5)' },
  { step: '6', value: 'var(--neutral-6)', label: 'Border strong' },
  { step: '7', value: 'var(--neutral-7)' },
  { step: '8', value: 'var(--neutral-8)', label: 'Subdued text' },
  { step: '9', value: 'var(--neutral-9)', label: 'Secondary text' },
  { step: '10', value: 'var(--neutral-10)' },
  { step: '11', value: 'var(--neutral-11)' },
  { step: '12', value: 'var(--neutral-12)', label: 'Foreground' },
];

const accent = [
  { step: '1', value: 'var(--accent-1)' },
  { step: '2', value: 'var(--accent-2)', label: 'Subtle bg' },
  { step: '3', value: 'var(--accent-3)' },
  { step: '4', value: 'var(--accent-4)' },
  { step: '5', value: 'var(--accent-5)' },
  { step: '6', value: 'var(--accent-6)' },
  { step: '7', value: 'var(--accent-7)', label: 'Border' },
  { step: '8', value: 'var(--accent-8)' },
  { step: '9', value: 'var(--accent-9)', label: 'Solid' },
  { step: '10', value: 'var(--accent-10)', label: 'Hover' },
  { step: '11', value: 'var(--accent-11)', label: 'Text' },
  { step: '12', value: 'var(--accent-12)' },
];

const green = [
  { step: '1', value: 'var(--green-1)', label: 'Subtle bg' },
  { step: '2', value: 'var(--green-2)' },
  { step: '3', value: 'var(--green-3)', label: 'Border' },
  { step: '9', value: 'var(--green-9)', label: 'Solid' },
  { step: '10', value: 'var(--green-10)', label: 'Hover' },
  { step: '11', value: 'var(--green-11)', label: 'Text' },
];

const amber = [
  { step: '1', value: 'var(--amber-1)', label: 'Subtle bg' },
  { step: '2', value: 'var(--amber-2)' },
  { step: '3', value: 'var(--amber-3)', label: 'Border' },
  { step: '9', value: 'var(--amber-9)', label: 'Solid' },
  { step: '10', value: 'var(--amber-10)', label: 'Hover' },
  { step: '11', value: 'var(--amber-11)', label: 'Text' },
];

const red = [
  { step: '1', value: 'var(--red-1)', label: 'Subtle bg' },
  { step: '2', value: 'var(--red-2)' },
  { step: '3', value: 'var(--red-3)', label: 'Border' },
  { step: '9', value: 'var(--red-9)', label: 'Solid' },
  { step: '10', value: 'var(--red-10)', label: 'Hover' },
  { step: '11', value: 'var(--red-11)', label: 'Text' },
];

const tokenGroups = [
  {
    label: 'Base',
    tokens: [
      { token: '--color-background',           value: 'var(--neutral-1)', description: 'Page background' },
      { token: '--color-surface',              value: 'var(--neutral-2)', description: 'Subtle fill, inputs' },
      { token: '--color-surface-hovered',      value: 'var(--neutral-3)', description: 'Hover and highlight fill' },
      { token: '--color-card',                 value: 'oklch(100% 0 0)', description: 'Card and dialog backgrounds' },
      { token: '--color-foreground',           value: 'var(--neutral-12)', description: 'Primary text' },
      { token: '--color-foreground-secondary', value: 'var(--neutral-9)', description: 'Secondary and placeholder text' },
      { token: '--color-foreground-subdued',   value: 'var(--neutral-8)', description: 'Muted hint text' },
      { token: '--color-border',               value: 'var(--neutral-4)', description: 'Default border' },
      { token: '--color-border-strong',        value: 'var(--neutral-6)', description: 'Focused or prominent border' },
    ],
  },
  {
    label: 'Accent',
    tokens: [
      { token: '--color-accent',               value: 'var(--accent-9)', description: 'Solid accent — buttons, focus' },
      { token: '--color-accent-hover',         value: 'var(--accent-10)', description: 'Hovered accent solid' },
      { token: '--color-accent-subtle',        value: 'var(--accent-2)', description: 'Accent tinted background' },
      { token: '--color-accent-subtle-border', value: 'var(--accent-3)', description: 'Subtle accent border' },
      { token: '--color-accent-border',        value: 'var(--accent-7)', description: 'Accent border and focus rings' },
      { token: '--color-accent-foreground',    value: 'var(--accent-11)', description: 'Accent text on tinted background' },
    ],
  },
  {
    label: 'Success',
    tokens: [
      { token: '--color-success',              value: 'var(--green-9)', description: 'Success solid' },
      { token: '--color-success-subtle',       value: 'var(--green-1)', description: 'Success background' },
      { token: '--color-success-border',       value: 'var(--green-3)', description: 'Success border' },
      { token: '--color-success-foreground',   value: 'var(--green-11)', description: 'Success text' },
    ],
  },
  {
    label: 'Warning',
    tokens: [
      { token: '--color-warning',              value: 'var(--amber-9)', description: 'Warning solid' },
      { token: '--color-warning-subtle',       value: 'var(--amber-1)', description: 'Warning background' },
      { token: '--color-warning-border',       value: 'var(--amber-3)', description: 'Warning border' },
      { token: '--color-warning-foreground',   value: 'var(--amber-11)', description: 'Warning text' },
    ],
  },
  {
    label: 'Error',
    tokens: [
      { token: '--color-error',                value: 'var(--red-9)', description: 'Error solid' },
      { token: '--color-error-hover',          value: 'var(--red-10)', description: 'Hovered error solid' },
      { token: '--color-error-subtle',         value: 'var(--red-1)', description: 'Error background' },
      { token: '--color-error-border',         value: 'var(--red-3)', description: 'Error border' },
      { token: '--color-error-foreground',     value: 'var(--red-11)', description: 'Error text' },
    ],
  },
];

export default function ColoursPage() {
  return (
    <div>
      <h1 className="font-display font-semibold text-4xl text-foreground mb-2">Colours</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        DAVE uses a 12-step primitive scale for each colour family, with semantic aliases
        that map to specific stops. Override the primitives to theme the entire system.
      </p>

      <h2 className="font-display font-semibold text-2xl text-foreground mb-4">Primitive scales</h2>
      <ColourScale name="Neutral" swatches={neutral} />
      <ColourScale name="Accent (Indigo)" swatches={accent} />
      <ColourScale name="Success (Green)" swatches={green} />
      <ColourScale name="Warning (Amber)" swatches={amber} />
      <ColourScale name="Error (Red)" swatches={red} />

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-2 pt-8 border-t border-border">Semantic tokens</h2>
      <p className="text-sm text-fg-secondary leading-relaxed mb-6 max-w-xl">
        Components use these tokens, not the primitive scale directly.
        Override primitives and semantics update automatically.
      </p>
      <SemanticTable groups={tokenGroups} />
    </div>
  );
}
