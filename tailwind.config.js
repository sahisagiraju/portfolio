/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Warm paper / ink editorial palette
        paper: '#F3EEE3',       // page background — warm bone
        'paper-2': '#EAE3D4',   // recessed panels / alt rows
        'paper-3': '#E1D8C6',   // borders on paper
        ink: '#1A1613',         // primary text — warm near-black
        'ink-2': '#4A433B',     // secondary text
        'ink-3': '#8A8072',     // muted / metadata
        rule: 'rgba(122, 51, 80, 0.24)', // hairline rules — soft maroon tint
        // Signature wine accent (kept from original)
        wine: '#7A3350',
        'wine-light': '#A84870',
        'wine-dark': '#5A2438',
        'wine-soft': '#DB93AD',  // light rose — legible accent on maroon backgrounds
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', 'ui-monospace', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      animation: {
        'fade-in': 'fadeIn 0.7s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        marquee: 'marquee 32s linear infinite',
        'marquee-rev': 'marquee-rev 40s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-rev': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
