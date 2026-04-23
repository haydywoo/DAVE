import { Table } from '@haydywoo/dave-react';

interface Swatch {
  step: string;
  value: string;
  label?: string;
}

interface ColourScaleProps {
  name: string;
  swatches: Swatch[];
}

export function ColourScale({ name, swatches }: ColourScaleProps) {
  return (
    <div className="mb-8">
      <p className="text-xs font-semibold text-fg-subdued uppercase tracking-wider mb-3">{name}</p>
      <div className="flex gap-1">
        {swatches.map(({ step, value, label }) => (
          <div key={step} className="flex-1 min-w-0">
            <div
              className="h-10 rounded-[3px] border border-black/10 mb-1.5"
              style={{ backgroundColor: value }}
            />
            <p className="text-[10px] font-semibold text-fg-subdued truncate">{step}</p>
            {label && <p className="text-[10px] text-fg-disabled truncate">{label}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Semantic token table ────────────────────────────────────────────────────

interface SemanticToken {
  token: string;
  value: string;
  description: string;
}

interface SemanticGroupProps {
  label: string;
  tokens: SemanticToken[];
}

export function SemanticTokenGroup({ label, tokens }: SemanticGroupProps) {
  return (
    <>
      <tr className="bg-surface">
        <td colSpan={4} className="px-4 py-2 text-[10px] font-semibold text-fg-secondary uppercase tracking-wider border-b border-border">
          {label}
        </td>
      </tr>
      {tokens.map(({ token, value, description }) => (
        <tr key={token} className="border-b border-border last:border-0 hover:bg-surface/50 transition-colors">
          <td className="px-4 py-3 w-8">
            <div
              className="h-6 w-6 rounded-[3px] border border-black/10 shrink-0"
              style={{ backgroundColor: value }}
            />
          </td>
          <td className="px-4 py-3 font-code text-xs text-foreground whitespace-nowrap">{token}</td>
          <td className="px-4 py-3 font-code text-xs text-fg-secondary whitespace-nowrap">{value}</td>
          <td className="px-4 py-3 text-xs text-fg-secondary">{description}</td>
        </tr>
      ))}
    </>
  );
}

interface SemanticTableProps {
  groups: SemanticGroupProps[];
}

export function SemanticTable({ groups }: SemanticTableProps) {
  return (
    <Table>
      <thead>
        <tr className="bg-surface border-b border-border">
          <th className="px-4 py-3 text-left text-xs font-semibold text-fg-secondary uppercase tracking-wider w-10"></th>
          <th className="px-4 py-3 text-left text-xs font-semibold text-fg-secondary uppercase tracking-wider">Token</th>
          <th className="px-4 py-3 text-left text-xs font-semibold text-fg-secondary uppercase tracking-wider">Value</th>
          <th className="px-4 py-3 text-left text-xs font-semibold text-fg-secondary uppercase tracking-wider">Description</th>
        </tr>
      </thead>
      <tbody className="bg-card">
        {groups.map((group) => (
          <SemanticTokenGroup key={group.label} {...group} />
        ))}
      </tbody>
    </Table>
  );
}
