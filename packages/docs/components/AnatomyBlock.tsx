import { CodeBlock } from '@dave/react';

interface AnatomyBlockProps {
  children: string;
}

export function AnatomyBlock({ children }: AnatomyBlockProps) {
  return (
    <CodeBlock
      code={children.replace(/^\n/, '').replace(/\n$/, '')}
      language="jsx"
      filename="Anatomy"
      className="mb-8"
    />
  );
}
