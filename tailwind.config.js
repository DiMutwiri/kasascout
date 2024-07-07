/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // checks the index.html and adds any dependencies to be created later
    "./src/**/*.{js,ts,jsx,tsx}", // checks all files with named extensions in src folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
