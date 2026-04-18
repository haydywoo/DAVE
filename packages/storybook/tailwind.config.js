/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{ts,tsx}',
    '../components/src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      spacing: {
        13: '3.25rem',
      },
      colors: {
        background:   'var(--color-background)',
        surface:      'var(--color-surface)',
        card:         'var(--color-card)',
        raised:       'var(--color-raised)',
        foreground:   'var(--color-foreground)',
        'fg-secondary': 'var(--color-foreground-secondary)',
        'fg-subdued':   'var(--color-foreground-subdued)',
        'fg-disabled':  'var(--color-foreground-disabled)',

        border: {
          DEFAULT: 'var(--color-border)',
          strong:  'var(--color-border-strong)',
        },

        inverse: {
          DEFAULT: 'var(--color-inverse)',
          hover:   'var(--color-inverse-hover)',
        },

        accent: {
          DEFAULT:         'var(--color-accent)',
          hover:           'var(--color-accent-hover)',
          subtle:          'var(--color-accent-subtle)',
          'subtle-border': 'var(--color-accent-subtle-border)',
          border:          'var(--color-accent-border)',
          foreground:      'var(--color-accent-foreground)',
          on:              'var(--color-on-accent)',
        },

        success: {
          subtle:     'var(--color-success-subtle)',
          border:     'var(--color-success-border)',
          DEFAULT:    'var(--color-success)',
          foreground: 'var(--color-success-foreground)',
        },

        warning: {
          subtle:     'var(--color-warning-subtle)',
          border:     'var(--color-warning-border)',
          DEFAULT:    'var(--color-warning)',
          foreground: 'var(--color-warning-foreground)',
        },

        error: {
          subtle:     'var(--color-error-subtle)',
          border:     'var(--color-error-border)',
          DEFAULT:    'var(--color-error)',
          hover:      'var(--color-error-hover)',
          foreground: 'var(--color-error-foreground)',
        },

        chart: {
          1: 'var(--color-chart-1)',
          2: 'var(--color-chart-2)',
          3: 'var(--color-chart-3)',
          4: 'var(--color-chart-4)',
          5: 'var(--color-chart-5)',
          6: 'var(--color-chart-6)',
          7: 'var(--color-chart-7)',
          8: 'var(--color-chart-8)',
        },
      },
      boxShadow: {
        card:   'var(--shadow-card)',
        raised: 'var(--shadow-raised)',
      },
      keyframes: {
        'collapsible-down': {
          from: { height: '0', opacity: '0' },
          to:   { height: 'var(--radix-collapsible-content-height)', opacity: '1' },
        },
        'collapsible-up': {
          from: { height: 'var(--radix-collapsible-content-height)', opacity: '1' },
          to:   { height: '0', opacity: '0' },
        },
      },
      animation: {
        'collapsible-down': 'collapsible-down 180ms cubic-bezier(0.4,0,0.2,1)',
        'collapsible-up':   'collapsible-up 160ms cubic-bezier(0.4,0,0.2,1)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
