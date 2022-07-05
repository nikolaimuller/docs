module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-accent)',
        neutral: {
          DEFAULT: 'var(--color-neutral)',
          secondary: 'var(--color-neutral-secondary)',
          hover: 'var(--color-neutral-hover)',
        },
      },
      fontFamily: {
        primary: 'var(--font-primary)',
        secondary: 'var(--font-secondary)',
        code: 'var(--font-code)',
      },
    },
  },
  plugins: [],
  prefix: 'docs-',
}
