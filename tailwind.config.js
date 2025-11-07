/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        sage: '#8B9D83',
        slate: '#6B7F99',
        terracotta: '#C17B63',
        // Neutrals
        cream: '#F5F3ED',
        'warm-gray': '#D4CFC5',
        charcoal: '#2D3339',
        'medium-gray': '#6B7280',
      },
      fontFamily: {
        heading: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        body: ['Georgia', 'Times New Roman', 'serif'],
        mono: ['JetBrains Mono', 'SF Mono', 'Monaco', 'monospace'],
      },
      spacing: {
        'xs': '8px',
        'sm': '16px',
        'md': '24px',
        'lg': '32px',
        'xl': '48px',
        '2xl': '64px',
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
      },
      maxWidth: {
        'content': '1200px',
        'reading': '700px',
      },
    },
  },
  plugins: [],
}

