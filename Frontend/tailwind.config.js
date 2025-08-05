/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#7dd3fc',
          DEFAULT: '#0ea5e9',
          dark: '#0369a1',
        },
        accent: {
          light: '#fbbf24',
          DEFAULT: '#f59e42',
          dark: '#b45309',
        },
        background: {
          light: '#f6fafe',
          DEFAULT: '#eef0fb',
          dark: '#18181b',
        },
        surface: {
          light: '#fff',
          DEFAULT: '#f3f4f6',
          dark: '#23272f',
        },
      },
    },
  },
  plugins: [],
}