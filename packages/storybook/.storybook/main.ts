import path from 'path';
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-a11y'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  typescript: {
    reactDocgen: false,
  },
  viteFinal: async (config) => {
    config.resolve ??= {};
    config.resolve.alias = {
      ...config.resolve.alias,
      // Resolve @dave/react directly from source — no build step needed
      '@dave/react': path.resolve(__dirname, '../../components/src/index.ts'),
      '@dave/charts': path.resolve(__dirname, '../../charts/src/index.ts'),
      '@dave/tokens': path.resolve(__dirname, '../../tokens'),
    };
    config.optimizeDeps ??= {};
    config.optimizeDeps.include = [
      ...(config.optimizeDeps.include ?? []),
      'date-fns',
    ];
    return config;
  },
};

export default config;
