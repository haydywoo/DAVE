import type { Meta, StoryObj } from '@storybook/react-vite';
import { CodeBlock } from '@dave/react';

const meta: Meta<typeof CodeBlock> = {
  title: 'AI/CodeBlock',
  component: CodeBlock,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    language: { control: 'text' },
    code: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof CodeBlock>;

export const TypeScript: Story = {
  args: {
    language: 'typescript',
    code: `function greet(name: string): string {\n  return \`Hello, \${name}!\`;\n}\n\nconsole.log(greet('World'));`,
  },
};

export const Python: Story = {
  args: {
    language: 'python',
    code: `def fibonacci(n: int) -> list[int]:\n    a, b = 0, 1\n    result = []\n    for _ in range(n):\n        result.append(a)\n        a, b = b, a + b\n    return result`,
  },
};

export const Shell: Story = {
  args: {
    language: 'bash',
    code: `pnpm install\npnpm dev`,
  },
};
