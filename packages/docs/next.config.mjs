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

const daveDist  = path.resolve(__dirname, '../components/dist/index.js');
const chartsDist = path.resolve(__dirname, '../charts/dist/index.js');

const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  basePath: isProd ? '/DAVE' : '',
  assetPrefix: isProd ? '/DAVE/' : '',
  images: { unoptimized: true },
  transpilePackages: ['recharts', 'victory-vendor', 'd3-scale', 'd3-format', 'd3-shape', 'd3-path'],
  experimental: {
    optimizePackageImports: ['@dave/react'],
  },
  webpack: (config) => {
    config.resolve.alias['@dave/react'] = daveDist;
    config.resolve.alias['@dave/charts'] = chartsDist;
    return config;
  },
};

export default withMDX(nextConfig);
