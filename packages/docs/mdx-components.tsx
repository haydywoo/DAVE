import Link from 'next/link';
import type { MDXComponents } from 'mdx/types';
import type { ComponentPropsWithoutRef } from 'react';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="font-display font-extrabold text-3xl text-foreground mt-0 mb-3">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border first:mt-0 first:pt-0 first:border-0">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="text-sm text-fg-secondary leading-relaxed mb-4">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-outside pl-5 mb-6 space-y-1.5 text-sm text-fg-secondary">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-outside pl-5 mb-6 space-y-1.5 text-sm text-fg-secondary">{children}</ol>
    ),
    li: ({ children }) => <li className="leading-relaxed">{children}</li>,
    // Block code detection:
    //   1. rehype-pretty-code adds data-language for fenced blocks with a language
    //   2. className="language-*" also works
    //   3. Fenced blocks without a language come through as plain <pre><code> — detect via newlines
    //      (inline code is always single-line; block code almost always has newlines)
    code: ({ children, className, ...props }: ComponentPropsWithoutRef<'code'>) => {
      const hasNewline = typeof children === 'string' && children.includes('\n');
      const isBlock = Boolean(className) || 'data-language' in props || hasNewline;
      if (isBlock) {
        return <code className={className} {...props}>{children}</code>;
      }
      return (
        <code className="font-code text-[13px] bg-surface text-accent-foreground px-1.5 py-0.5 rounded-[3px] border border-border">
          {children}
        </code>
      );
    },
    pre: ({ children, ...props }) => (
      <div className="relative group mb-6">
        <pre
          className="rounded-lg bg-[#0d1117] text-[#e6edf3] text-xs font-code p-5 overflow-x-auto leading-relaxed"
          {...props}
        >
          {children}
        </pre>
      </div>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold text-foreground">{children}</strong>
    ),
    a: ({ children, href = '' }) => {
      const isInternal = href.startsWith('/');
      if (isInternal) {
        return (
          <Link href={href} className="text-accent-foreground underline underline-offset-4 hover:text-accent transition-colors">
            {children}
          </Link>
        );
      }
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="text-accent-foreground underline underline-offset-4 hover:text-accent transition-colors">
          {children}
        </a>
      );
    },
    figure: ({ children, ...props }) => (
      <figure className="m-0" {...props}>{children}</figure>
    ),
    hr: () => <hr className="border-t border-border my-10" />,
    table: ({ children }) => (
      <div className="rounded-lg border border-border overflow-hidden mb-6">
        <table className="w-full text-sm">{children}</table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="bg-surface border-b border-border">{children}</thead>
    ),
    tbody: ({ children }) => (
      <tbody className="divide-y divide-border bg-card">{children}</tbody>
    ),
    tr: ({ children }) => <tr>{children}</tr>,
    th: ({ children }) => (
      <th className="px-4 py-3 text-left text-xs font-semibold text-fg-secondary uppercase tracking-wider">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="px-4 py-3 text-sm text-fg-secondary">{children}</td>
    ),
    ...components,
  };
}
