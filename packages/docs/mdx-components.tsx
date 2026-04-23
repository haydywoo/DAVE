import Link from 'next/link';
import type { MDXComponents } from 'mdx/types';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { Table } from '@haydywoo/dave-react';
import { DocCodeBlock } from '@/components/DocCodeBlock';

function getTextContent(node: ReactNode): string {
  if (typeof node === 'string') return node;
  if (typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(getTextContent).join('');
  if (node !== null && typeof node === 'object' && 'props' in node) {
    return getTextContent((node.props as { children?: ReactNode }).children);
  }
  return '';
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="font-display font-semibold text-4xl text-foreground mt-0 mb-3">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border first:mt-0 first:pt-0 first:border-0">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="text-sm text-fg-secondary leading-relaxed mb-3">{children}</p>
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
        const { style: _, ...rest } = props;
        return <code className={className} {...rest}>{children}</code>;
      }
      return (
        <code className="font-code text-[13px] bg-surface text-accent-foreground px-1.5 py-0.5 rounded-[3px] border border-border whitespace-nowrap">
          {children}
        </code>
      );
    },
    pre: ({ children, style: _, ...props }) => {
      const language = (props as Record<string, unknown>)['data-language'] as string | undefined;
      const code = getTextContent(children);
      return (
        <DocCodeBlock language={language} code={code} {...props}>
          {children}
        </DocCodeBlock>
      );
    },
    strong: ({ children }) => (
      <strong className="font-semibold text-foreground">{children}</strong>
    ),
    a: ({ children, href = '' }) => {
      const isInternal = href.startsWith('/');
      if (isInternal) {
        return (
          <Link href={href} className="prose-link">
            {children}
          </Link>
        );
      }
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="prose-link">
          {children}
        </a>
      );
    },
    figure: ({ children, ...props }) => (
      <figure className="m-0" {...props}>{children}</figure>
    ),
    hr: () => <hr className="border-t border-border my-10" />,
    table: ({ children }) => (
      <div className="mb-6">
        <Table>{children}</Table>
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
