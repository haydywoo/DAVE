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
    <div className="rounded-[3px] border border-border overflow-hidden mb-8">
      <table className="w-full text-sm">
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
      </table>
    </div>
  );
}
