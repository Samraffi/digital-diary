import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'floating': 'floating 5s ease-in-out infinite',
        'spotlight': 'spotlight 3s ease-in-out infinite',
        'task-appear': 'task-appear 0.5s ease-out forwards',
        'task-complete': 'task-complete 0.5s ease-out forwards',
        'curtain-wave': 'curtain-wave 8s ease-in-out infinite',
        'dust-float': 'dust-float 8s ease-in-out infinite',
        'fade-in': 'fade-in 0.3s ease-out forwards',
        'fade-out': 'fade-out 0.3s ease-out forwards',
        'scale-in': 'scale-in 0.3s ease-out forwards',
        'scale-out': 'scale-out 0.3s ease-out forwards'
      },
      keyframes: {
        floating: {
          '0%, 100%': {
            transform: 'translateY(0) translateX(0)',
            opacity: '0'
          },
          '50%': {
            transform: 'translateY(-20px) translateX(10px)',
            opacity: '1'
          }
        },
        spotlight: {
          '0%, 100%': {
            opacity: '0.1',
            transform: 'scale(1)'
          },
          '50%': {
            opacity: '0.15',
            transform: 'scale(1.05)'
          }
        },
        'task-appear': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'task-complete': {
          '0%': {
            transform: 'scale(1)'
          },
          '50%': {
            transform: 'scale(1.05)'
          },
          '100%': {
            transform: 'scale(1)'
          }
        },
        'curtain-wave': {
          '0%, 100%': {
            transform: 'skewX(0deg)'
          },
          '50%': {
            transform: 'skewX(-2deg)'
          }
        },
        'dust-float': {
          '0%, 100%': {
            transform: 'translateY(0) rotate(0)',
            opacity: '0'
          },
          '50%': {
            transform: 'translateY(-30px) rotate(180deg)',
            opacity: '0.5'
          }
        },
        'fade-in': {
          '0%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          }
        },
        'fade-out': {
          '0%': {
            opacity: '1'
          },
          '100%': {
            opacity: '0'
          }
        },
        'scale-in': {
          '0%': {
            transform: 'scale(0.9)',
            opacity: '0'
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1'
          }
        },
        'scale-out': {
          '0%': {
            transform: 'scale(1)',
            opacity: '1'
          },
          '100%': {
            transform: 'scale(0.9)',
            opacity: '0'
          }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
      },
      fontFamily: {
        medieval: ['MedievalSharp', 'cursive']
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true })
  ],
};

export default config;
