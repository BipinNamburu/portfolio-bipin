/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      colors: {
        // CSS-variable-backed — all support opacity modifiers (e.g. bg-surface/90)
        bg:      'rgb(var(--bg-rgb) / <alpha-value>)',
        surface: {
          DEFAULT: 'rgb(var(--surface-rgb) / <alpha-value>)',
          2:       'rgb(var(--surface-2-rgb) / <alpha-value>)',
          3:       'rgb(var(--surface-3-rgb) / <alpha-value>)',
        },
        border: {
          DEFAULT: 'rgb(var(--border-rgb) / <alpha-value>)',
          strong:  'rgb(var(--border-strong-rgb) / <alpha-value>)',
        },
        t1:    'rgb(var(--t1-rgb) / <alpha-value>)',
        t2:    'rgb(var(--t2-rgb) / <alpha-value>)',
        t3:    'rgb(var(--t3-rgb) / <alpha-value>)',
        green: 'rgb(var(--green-rgb) / <alpha-value>)',
      },
      maxWidth: {
        content: '76rem',
      },
      boxShadow: {
        card:      '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.08)',
        'card-md': '0 4px 12px rgba(0,0,0,0.10)',
        'card-lg': '0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 50s linear infinite',
      },
    },
  },
  plugins: [],
};
