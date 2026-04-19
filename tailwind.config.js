/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Core surface
        cream: {
          50: '#FEFCF7',
          100: '#FBF7F0',
          200: '#F4EDDF',
          300: '#E8DDC5',
        },
        ink: {
          50: '#F5F6F8',
          100: '#E4E6EC',
          400: '#6B7280',
          600: '#374151',
          800: '#1F2937',
          900: '#0E1724',
          950: '#070B14',
        },
        // Brand
        indigo: {
          DEFAULT: '#4F46E5',
          soft: '#EEF0FF',
          deep: '#3730A3',
        },
        terracotta: {
          DEFAULT: '#E85D3E',
          soft: '#FCEBE5',
          deep: '#B13E22',
        },
        lime: {
          DEFAULT: '#BEF264',
          soft: '#F2FBDD',
          deep: '#65A30D',
        },
        flame: {
          DEFAULT: '#F59E0B',
          soft: '#FEF3C7',
          deep: '#B45309',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Manrope"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display-lg': ['clamp(2rem, 7vw, 3rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.5rem, 5vw, 2.25rem)', { lineHeight: '1.1', letterSpacing: '-0.015em' }],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2.5rem',
      },
      boxShadow: {
        'card': '0 1px 2px rgba(14, 23, 36, 0.04), 0 8px 24px -8px rgba(14, 23, 36, 0.08)',
        'card-lg': '0 2px 4px rgba(14, 23, 36, 0.04), 0 20px 48px -12px rgba(14, 23, 36, 0.12)',
        'pop': '0 1px 0 rgba(14, 23, 36, 0.06), 0 4px 0 0 rgba(14, 23, 36, 0.9)',
        'pop-indigo': '0 4px 0 0 #3730A3',
        'pop-terracotta': '0 4px 0 0 #B13E22',
        'pop-lime': '0 4px 0 0 #65A30D',
        'inner-soft': 'inset 0 1px 2px rgba(14, 23, 36, 0.06)',
      },
      animation: {
        'fade-up': 'fadeUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'pop-in': 'popIn 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'streak-flame': 'flameFlicker 1.8s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        popIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        flameFlicker: {
          '0%, 100%': { transform: 'rotate(-3deg) scale(1)' },
          '50%': { transform: 'rotate(3deg) scale(1.08)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
      },
    },
  },
  plugins: [],
};
