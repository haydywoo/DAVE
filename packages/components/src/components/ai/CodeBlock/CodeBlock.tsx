'use client';

import * as React from 'react';
import { cn } from '../../../lib/cn';
import { CopyButton } from '../../CopyButton/CopyButton';

// ─── Singleton highlighter ────────────────────────────────────────────────────
// shiki is ESM-only — dynamic import keeps it out of the webpack client bundle.

type ShikiHighlighter = Awaited<ReturnType<typeof import('shiki')['createHighlighter']>>;

let _highlighter: ShikiHighlighter | null = null;
let _promise: Promise<ShikiHighlighter> | null = null;

const LANGS = [
  'javascript', 'typescript', 'tsx', 'jsx',
  'python', 'bash', 'shell', 'sh',
  'json', 'jsonc', 'css', 'html', 'markdown',
  'sql', 'yaml', 'toml', 'rust', 'go',
  'ruby', 'java', 'c', 'cpp', 'csharp',
  'text', 'plaintext',
] as const;

function getHighlighter(): Promise<ShikiHighlighter> {
  if (_highlighter) return Promise.resolve(_highlighter);
  if (_promise) return _promise;
  _promise = import('shiki').then(({ createHighlighter }) =>
    createHighlighter({ themes: ['github-dark'], langs: [...LANGS] })
  ).then(h => {
    _highlighter = h;
    return h;
  });
  return _promise;
}

// ─── Types ────────────────────────────────────────────────────────────────────

export interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
  className?: string;
}

// ─── Language display names ───────────────────────────────────────────────────

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

// ─── Component ────────────────────────────────────────────────────────────────

export function CodeBlock({ code, language = 'text', filename, showLineNumbers = false, className }: CodeBlockProps) {
  const [html, setHtml] = React.useState<string | null>(null);
  const normalizedLang = language.toLowerCase().replace(/^language-/, '');
  const supportedLang = LANGS.includes(normalizedLang as typeof LANGS[number]) ? normalizedLang : 'text';

  React.useEffect(() => {
    let cancelled = false;
    getHighlighter().then(h => {
      if (cancelled) return;
      try {
        const highlighted = h.codeToHtml(code, {
          lang: supportedLang,
          theme: 'github-dark',
        });
        setHtml(highlighted);
      } catch {
        setHtml(null);
      }
    });
    return () => { cancelled = true; };
  }, [code, supportedLang]);

  const label = filename ?? LANG_LABELS[normalizedLang] ?? normalizedLang;

  return (
    <div className={cn('group relative rounded-[4px] overflow-hidden bg-[#0d1117] text-sm', className)}>
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/10">
        <span className="text-xs text-white/40 font-mono select-none">{label}</span>
        <CopyButton
          value={code}
          className="opacity-0 group-hover:opacity-100 transition-opacity [&_button]:text-white/40 [&_button:hover]:text-white/80 [&_button]:bg-transparent [&_button:hover]:bg-white/10"
        />
      </div>

      {/* Code body */}
      {html ? (
        <div
          className={cn(
            '[&>pre]:p-4 [&>pre]:overflow-x-auto [&>pre]:bg-transparent [&>pre]:m-0',
            '[&>pre]:text-sm [&>pre]:leading-relaxed [&>pre]:font-mono',
            showLineNumbers && '[counter-reset:line] [&_.line]:before:content-[counter(line)] [&_.line]:before:[counter-increment:line] [&_.line]:before:mr-6 [&_.line]:before:text-white/20 [&_.line]:before:text-right [&_.line]:before:min-w-[1.5rem] [&_.line]:before:inline-block',
          )}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      ) : (
        <pre className="p-4 overflow-x-auto text-sm leading-relaxed font-mono text-white/70 m-0">
          <code>{code}</code>
        </pre>
      )}
    </div>
  );
}
