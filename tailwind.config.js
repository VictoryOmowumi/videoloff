/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A', // Blue for trust/security
        accent: '#F97316',  // Orange for CTA buttons
        background: '#F9FAFB', // Light background for modern feel
        textPrimary: '#111827', // Dark text color
        textSecondary: '#6B7280', // Muted text color
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Clean, modern font
        body: ['Roboto', 'sans-serif'], // Body text font
      },
      container: {
        center: true, // Center the container
        padding: '2rem', // Add default padding to container
      },
      maxWidth: {
        '8xl': '90rem', // Custom max-width for large screens
      },
    },
  },
  plugins: [],
}
