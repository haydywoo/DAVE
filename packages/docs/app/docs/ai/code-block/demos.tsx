'use client';

import { CodeBlock } from '@dave/react';
import { Preview } from '@/components/Preview';

const TS_EXAMPLE = `function greet(name: string): string {
  return \`Hello, \${name}!\`;
}

console.log(greet('DAVE'));`;

const PYTHON_EXAMPLE = `def fibonacci(n: int) -> list[int]:
    a, b = 0, 1
    result = []
    for _ in range(n):
        result.append(a)
        a, b = b, a + b
    return result`;

export function CodeBlockDemos() {
  return (
    <>
      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">TypeScript</h3>
      <Preview code={`<CodeBlock language="typescript" code={code} />`}>
        <CodeBlock language="typescript" code={TS_EXAMPLE} />
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Python</h3>
      <Preview code={`<CodeBlock language="python" code={code} />`}>
        <CodeBlock language="python" code={PYTHON_EXAMPLE} />
      </Preview>
    </>
  );
}
