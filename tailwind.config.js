/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        backgroundImage: {
            "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        },
        fontFamily: {
            junction: ['junction', 'sans-serif'],
        }, 
        colors: {
            'tdgreen': { 
                300: '#3d5354',
                400: '#0C2829',
                500: '#0a2021'
            },
            'tgreen': 'rgb(21, 89, 93)',
            'tlgrey': 'rgb(100, 100, 100)',
            'tdgrey': 'rgb(55, 55, 55)',
        },         
    },
  },
  plugins: [],
};
