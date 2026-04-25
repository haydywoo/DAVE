import { Badge } from '@haydywoo/dave-react';

interface ExperimentalChartPageProps {
  title:       string;
  description: React.ReactNode;
  children:    React.ReactNode;
  notes:       React.ReactNode[];
}

export function ExperimentalChartPage({ title, description, children, notes }: ExperimentalChartPageProps) {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="font-display font-semibold text-4xl text-foreground">{title}</h1>
        <Badge variant="warning" size="xs">Experimental</Badge>
      </div>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">{description}</p>
      <div className="rounded-[6px] border border-border bg-card p-6 mb-8">{children}</div>
      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Notes</h2>
      <ul className="list-disc list-outside pl-5 space-y-2 text-sm text-fg-secondary">
        {notes.map((note, i) => <li key={i}>{note}</li>)}
      </ul>
    </div>
  );
}
