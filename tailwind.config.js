/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.js',          // Main entry point
    './components/**/*.{js,jsx,ts,tsx}',   // All component files
    './screens/**/*.{js,jsx,ts,tsx}',      // All screen files
    "./app/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      // Custom Colors
      colors: {
        primary: '#90a5f2',  // Custom primary color
        secondary: '#9333EA', // Custom secondary color
        accent: '#F59E0B',    // Accent color
        black :'#212325',


      },
      // Custom Font Families
      fontFamily: {
        sans: ['Inter', 'sans-serif'],    // Custom sans-serif font
        serif: ['Merriweather', 'serif'], // Custom serif font
      },
      // Custom Spacing
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      // Custom Screen Sizes (optional, based on your app needs)
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      // Custom Box Shadow
      boxShadow: {
        'custom-light': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'custom-dark': '0 4px 6px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
};
