/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,md}'],
  theme: {
    extend: {
      colors: {
        archive: {
          paper: '#F8F6F0',
          ink: '#111111',
          muted: '#6F6A60',
          line: '#DCD6C9',
          gold: '#74805B',
          olive: '#74805B',
          coal: '#1E1C19',
        },
      },
      fontFamily: {
        display: ['Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        archive: '0 24px 70px rgba(17, 17, 17, 0.08)',
      },
    },
  },
  plugins: [],
};
