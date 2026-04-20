import type { Preview } from '@storybook/react-vite';
import '../src/styles.css';

const preview: Preview = {
  parameters: {
    layout: 'centered',
    backgrounds: {
      options: {
        warm: { name: 'warm',  value: '#F7F5F0' },
        white: { name: 'white', value: '#ffffff' },
        dark: { name: 'dark',  value: '#0F0E0C' }
      }
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  initialGlobals: {
    backgrounds: {
      value: 'warm'
    }
  }
};

export default preview;
