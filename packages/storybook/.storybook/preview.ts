import type { Preview } from '@storybook/react';
import '../src/styles.css';

const preview: Preview = {
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'warm',
      values: [
        { name: 'warm',  value: '#F7F5F0' },
        { name: 'white', value: '#ffffff' },
        { name: 'dark',  value: '#0F0E0C' },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
