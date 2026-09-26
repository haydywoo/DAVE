'use client';

import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { CopyButton } from '@haydywoo/dave-react';

const LANG_LABELS: Record<string, string> = {
  js: 'JavaScript', javascript: 'JavaScript',
  ts: 'TypeScript', typescript: 'TypeScript',
  tsx: 'TSX', jsx: 'JSX',
  py: 'Python', python: 'Python',
  bash: 'Bash', sh: 'Shell', shell: 'Shell',
  json: 'JSON', jsonc: 'JSON',
  css: 'CSS', html: 'HTML',
  md: 'Markdown', markdown: 'Markdown',
  sql: 'SQL', yaml: 'YAML', toml: 'TOML',
  rust: 'Rust', go: 'Go', rb: 'Ruby', ruby: 'Ruby',
  java: 'Java', c: 'C', cpp: 'C++', csharp: 'C#',
};

interface DocCodeBlockProps extends Omit<ComponentPropsWithoutRef<'pre'>, 'style'> {
  children: ReactNode;
  language?: string;
  code: string;
}

export function DocCodeBlock({ children, language, code, ...preProps }: DocCodeBlockProps) {
  const label = language ? (LANG_LABELS[language.toLowerCase()] ?? language) : null;

  return (
    <div className="group relative rounded-[6px] overflow-hidden border border-border bg-surface mb-6">
      <div className="flex items-center justify-between px-4 py-2 border-b border-border">
        <span className="text-xs text-fg-secondary font-mono select-none">{label ?? ''}</span>
        <CopyButton
          value={code}
          size="sm"
          variant="ghost"
          className="opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity"
        />
      </div>
      <pre
        className="p-4 overflow-x-auto text-sm leading-relaxed font-mono m-0 text-foreground [&_span]:text-[color:var(--shiki-light)] [.dark_&_span]:text-[color:var(--shiki-dark)]"
        {...preProps}
      >
        {children}
      </pre>
    </div>
  );
}
