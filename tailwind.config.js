/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Not using orange, purple, blue gradients as requested
        // Keeping neutral/gray tones and custom accent colors
      },
    },
  },
  plugins: [],
}