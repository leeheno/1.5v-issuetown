/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'team-a': '#e8f4ff',
        'team-b': '#fff0f0',
      }
    },
  },
  plugins: [],
}

