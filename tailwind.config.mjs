/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'color-mix(in srgb, var(--primary-base), white 90%)',
          100: 'color-mix(in srgb, var(--primary-base), white 80%)',
          200: 'color-mix(in srgb, var(--primary-base), white 60%)',
          300: 'color-mix(in srgb, var(--primary-base), white 40%)',
          400: 'color-mix(in srgb, var(--primary-base), white 20%)',
          500: 'var(--primary-base)',
          600: 'color-mix(in srgb, var(--primary-base), black 10%)',
          700: 'color-mix(in srgb, var(--primary-base), black 20%)',
          800: 'color-mix(in srgb, var(--primary-base), black 30%)',
          900: 'color-mix(in srgb, var(--primary-base), black 40%)',
        },
        accent: {
          50: 'color-mix(in srgb, var(--accent-base), white 90%)',
          100: 'color-mix(in srgb, var(--accent-base), white 80%)',
          200: 'color-mix(in srgb, var(--accent-base), white 60%)',
          300: 'color-mix(in srgb, var(--accent-base), white 40%)',
          400: 'color-mix(in srgb, var(--accent-base), white 20%)',
          500: 'var(--accent-base)',
          600: 'color-mix(in srgb, var(--accent-base), black 10%)',
          700: 'color-mix(in srgb, var(--accent-base), black 20%)',
          800: 'color-mix(in srgb, var(--accent-base), black 30%)',
          900: 'color-mix(in srgb, var(--accent-base), black 40%)',
        },
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        }
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'blob': 'blob 7s infinite',
        'fadeIn': 'fadeIn 0.8s ease-out forwards',
        'fadeInLeft': 'fadeInLeft 0.8s ease-out forwards',
        'fadeInRight': 'fadeInRight 0.8s ease-out forwards',
        'fadeInUp': 'fadeInUp 0.6s ease-out forwards',
        'spin-slow': 'spin 20s linear infinite',
        'spin-reverse': 'spin 25s linear infinite reverse',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
        'scale-up': 'scaleUp 0.3s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

