/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{ts,tsx}',
    '../components/src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background:   'var(--color-background)',
        surface:      'var(--color-surface)',
        card:         'var(--color-card)',
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
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
