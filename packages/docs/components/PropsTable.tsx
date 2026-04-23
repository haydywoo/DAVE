import { Table } from '@haydywoo/dave-react';

interface Prop {
  name: string;
  type: string;
  default?: string;
  description: string;
  required?: boolean;
}

interface PropsTableProps {
  props: Prop[];
}

export function PropsTable({ props }: PropsTableProps) {
  return (
    <>
      {/* ── Mobile: stacked cards ─────────────────────────────────────── */}
      <div className="sm:hidden divide-y divide-border rounded-[3px] border border-border mb-8 overflow-hidden">
        {props.map((prop) => (
          <div key={prop.name} className="px-4 py-3 bg-card">
            <div className="flex items-baseline justify-between gap-3 mb-1.5">
              <span className="font-code text-xs font-medium text-foreground">
                {prop.name}
                {prop.required && <span className="ml-1 text-error">*</span>}
              </span>
              {prop.default !== undefined && (
                <span className="font-code text-xs text-fg-secondary shrink-0">
                  = {prop.default}
                </span>
              )}
            </div>
            <div className="font-code text-xs text-accent-foreground leading-relaxed mb-2 break-words">
              {prop.type}
            </div>
            <div className="text-xs text-fg-secondary leading-relaxed">{prop.description}</div>
          </div>
        ))}
      </div>

      {/* ── Desktop: table ────────────────────────────────────────────── */}
      <div className="hidden sm:block mb-8">
        <Table>
          <thead>
            <tr className="bg-surface border-b border-border">
              <th className="text-left px-4 py-3 text-xs font-semibold text-fg-secondary uppercase tracking-wider">Prop</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-fg-secondary uppercase tracking-wider">Type</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-fg-secondary uppercase tracking-wider">Default</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-fg-secondary uppercase tracking-wider">Description</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border bg-card">
            {props.map((prop) => (
              <tr key={prop.name}>
                <td className="px-4 py-3 font-code text-xs text-foreground whitespace-nowrap">
                  {prop.name}
                  {prop.required && <span className="ml-1 text-error">*</span>}
                </td>
                <td className="px-4 py-3 font-code text-xs text-accent-foreground break-all">{prop.type}</td>
                <td className="px-4 py-3 font-code text-xs text-fg-secondary whitespace-nowrap">
                  {prop.default ?? <span className="text-fg-secondary opacity-40">—</span>}
                </td>
                <td className="px-4 py-3 text-xs text-fg-secondary">{prop.description}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}
