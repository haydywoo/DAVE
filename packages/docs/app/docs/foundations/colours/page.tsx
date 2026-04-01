import type { Metadata } from 'next';
import { ColourScale, SemanticTable } from '@/components/ColourScale';

export const metadata: Metadata = { title: 'Colours' };

const neutral = [
  { step: '1', value: '#F7F5F0', label: 'Background' },
  { step: '2', value: '#F0EEE9', label: 'Surface' },
  { step: '3', value: '#E8E5DF' },
  { step: '4', value: '#E2DED7', label: 'Border' },
  { step: '5', value: '#D6D1CA' },
  { step: '6', value: '#C8C3BA', label: 'Border strong' },
  { step: '7', value: '#B0AAA1' },
  { step: '8', value: '#9E9890' },
  { step: '9', value: '#706A62', label: 'Secondary text' },
  { step: '10', value: '#4A4640' },
  { step: '11', value: '#2E2B27' },
  { step: '12', value: '#0F0E0C', label: 'Foreground' },
];

const accent = [
  { step: '1', value: '#F5F5FE' },
  { step: '2', value: '#EAEAFB', label: 'Subtle bg' },
  { step: '3', value: '#D9D8F7' },
  { step: '4', value: '#C5C4F2' },
  { step: '5', value: '#AEADEA' },
  { step: '6', value: '#9290E1' },
  { step: '7', value: '#7977D6', label: 'Focus ring' },
  { step: '8', value: '#5755C5' },
  { step: '9', value: '#2D24AE', label: 'Solid' },
  { step: '10', value: '#231B9A', label: 'Hover' },
  { step: '11', value: '#3B33BB', label: 'Text' },
  { step: '12', value: '#14107A' },
];

const green = [
  { step: '1', value: '#F0FDF4', label: 'Subtle bg' },
  { step: '2', value: '#DCFCE7' },
  { step: '3', value: '#BBF7D0', label: 'Border' },
  { step: '9', value: '#16A34A', label: 'Solid' },
  { step: '10', value: '#15803D', label: 'Hover' },
  { step: '11', value: '#166534', label: 'Text' },
];

const amber = [
  { step: '1', value: '#FFFBEB', label: 'Subtle bg' },
  { step: '2', value: '#FEF3C7' },
  { step: '3', value: '#FDE68A', label: 'Border' },
  { step: '9', value: '#D97706', label: 'Solid' },
  { step: '10', value: '#B45309', label: 'Hover' },
  { step: '11', value: '#92400E', label: 'Text' },
];

const red = [
  { step: '1', value: '#FFF5F5', label: 'Subtle bg' },
  { step: '2', value: '#FEE2E2' },
  { step: '3', value: '#FECACA', label: 'Border' },
  { step: '9', value: '#DC2626', label: 'Solid' },
  { step: '10', value: '#B91C1C', label: 'Hover' },
  { step: '11', value: '#991B1B', label: 'Text' },
];

const tokenGroups = [
  {
    label: 'Base',
    tokens: [
      { token: '--color-background',           value: '#F7F5F0', description: 'Page background' },
      { token: '--color-surface',              value: '#F0EEE9', description: 'Subtle surface, hover states' },
      { token: '--color-card',                 value: '#FFFFFF', description: 'Card and dialog backgrounds' },
      { token: '--color-foreground',           value: '#0F0E0C', description: 'Primary text' },
      { token: '--color-foreground-secondary', value: '#706A62', description: 'Secondary and placeholder text' },
      { token: '--color-border',               value: '#E2DED7', description: 'Default border' },
      { token: '--color-border-strong',        value: '#C8C3BA', description: 'Focused or prominent border' },
    ],
  },
  {
    label: 'Accent',
    tokens: [
      { token: '--color-accent',               value: '#2D24AE', description: 'Solid accent — buttons, focus' },
      { token: '--color-accent-hover',         value: '#231B9A', description: 'Hovered accent solid' },
      { token: '--color-accent-subtle',        value: '#EAEAFB', description: 'Accent tinted background' },
      { token: '--color-accent-subtle-border', value: '#D9D8F7', description: 'Subtle accent border' },
      { token: '--color-accent-border',        value: '#7977D6', description: 'Accent border and focus rings' },
      { token: '--color-accent-foreground',    value: '#3B33BB', description: 'Accent text on tinted background' },
    ],
  },
  {
    label: 'Success',
    tokens: [
      { token: '--color-success',              value: '#16A34A', description: 'Success solid' },
      { token: '--color-success-subtle',       value: '#F0FDF4', description: 'Success background' },
      { token: '--color-success-border',       value: '#BBF7D0', description: 'Success border' },
      { token: '--color-success-foreground',   value: '#166534', description: 'Success text' },
    ],
  },
  {
    label: 'Warning',
    tokens: [
      { token: '--color-warning',              value: '#D97706', description: 'Warning solid' },
      { token: '--color-warning-subtle',       value: '#FFFBEB', description: 'Warning background' },
      { token: '--color-warning-border',       value: '#FDE68A', description: 'Warning border' },
      { token: '--color-warning-foreground',   value: '#92400E', description: 'Warning text' },
    ],
  },
  {
    label: 'Error',
    tokens: [
      { token: '--color-error',                value: '#DC2626', description: 'Error solid' },
      { token: '--color-error-hover',          value: '#B91C1C', description: 'Hovered error solid' },
      { token: '--color-error-subtle',         value: '#FFF5F5', description: 'Error background' },
      { token: '--color-error-border',         value: '#FECACA', description: 'Error border' },
      { token: '--color-error-foreground',     value: '#991B1B', description: 'Error text' },
    ],
  },
];

export default function ColoursPage() {
  return (
    <div>
      <h1 className="font-display font-extrabold text-3xl text-foreground mb-2">Colours</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        DAVE uses a 12-step primitive scale for each colour family, with semantic aliases
        that map to specific stops. Override the primitives to theme the entire system.
      </p>

      <h2 className="font-display font-extrabold text-xl text-foreground mb-4">Primitive scales</h2>
      <ColourScale name="Neutral" swatches={neutral} />
      <ColourScale name="Accent (Indigo)" swatches={accent} />
      <ColourScale name="Success (Green)" swatches={green} />
      <ColourScale name="Warning (Amber)" swatches={amber} />
      <ColourScale name="Error (Red)" swatches={red} />

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-2 pt-8 border-t border-border">Semantic tokens</h2>
      <p className="text-sm text-fg-secondary leading-relaxed mb-6 max-w-xl">
        Components use these tokens, not the primitive scale directly.
        Override primitives and semantics update automatically.
      </p>
      <SemanticTable groups={tokenGroups} />
    </div>
  );
}
