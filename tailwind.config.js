/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        'primary-dark': 'var(--primary-dark)',
        'primary-hover': 'var(--primary-hover)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        'accent-soft': 'var(--accent-soft)',
        background: 'var(--background)',
        'background-soft': 'var(--background-soft)',
        surface: 'var(--surface)',
        'surface-light': 'var(--surface-light)',
        'surface-subtle': 'var(--surface-subtle)',
        'text-color': 'var(--text)',
        'text-soft': 'var(--text-soft)',
        'border-color': 'var(--border)',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'soft-sm': '0 2px 8px -2px rgba(0, 0, 0, 0.4), 0 1px 4px -1px rgba(228, 91, 131, 0.05)',
        'soft': '0 8px 24px -8px rgba(0, 0, 0, 0.5), 0 2px 6px -1px rgba(228, 91, 131, 0.08)',
        'soft-lg': '0 16px 36px -12px rgba(0, 0, 0, 0.6), 0 4px 12px -2px rgba(228, 91, 131, 0.12)',
        'glow-pink': '0 0 25px rgba(228, 91, 131, 0.25)',
        'glow-soft': '0 0 20px rgba(201, 79, 117, 0.2)',
        'paper': '0 16px 40px -10px rgba(0, 0, 0, 0.7), 0 0 0 1px var(--border)',
      },
    },
  },
  plugins: [],
}
