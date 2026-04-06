import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [rehypePrettyCode, {
        theme: 'github-dark',
        keepBackground: false,
      }],
    ],
  },
});

const daveSrc = path.resolve(__dirname, '../components/src/index.ts');
const chartsSrc = path.resolve(__dirname, '../charts/src/index.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  experimental: {
    // Let Next.js tree-shake the components package per-page
    optimizePackageImports: ['@dave/react'],
  },
  // Alias for webpack (production build)
  webpack: (config) => {
    config.resolve.alias['@dave/react'] = daveSrc;
    config.resolve.alias['@dave/charts'] = chartsSrc;
    return config;
  },
};

export default withMDX(nextConfig);
