/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', ...fontFamily.sans],
      },
      colors: {
        // primary: {
        //   // Customize it on globals.css :root
        //   50: 'rgb(var(--tw-color-primary-50) / <alpha-value>)',
        //   100: 'rgb(var(--tw-color-primary-100) / <alpha-value>)',
        //   200: 'rgb(var(--tw-color-primary-200) / <alpha-value>)',
        //   300: 'rgb(var(--tw-color-primary-300) / <alpha-value>)',
        //   400: 'rgb(var(--tw-color-primary-400) / <alpha-value>)',
        //   500: 'rgb(var(--tw-color-primary-500) / <alpha-value>)',
        //   600: 'rgb(var(--tw-color-primary-600) / <alpha-value>)',
        //   700: 'rgb(var(--tw-color-primary-700) / <alpha-value>)',
        //   800: 'rgb(var(--tw-color-primary-800) / <alpha-value>)',
        //   900: 'rgb(var(--tw-color-primary-900) / <alpha-value>)',
        // },
        primary: '#FF6C44', //orange
        orange: '#FFA133',
        lightOrange: '#FFA133',
        lightOrange2: '#FDDED4',
        lightOrange3: '#FFD9AD',
        green: '#27AE60',
        red: '#FF1717',
        blue: '#0064C0',
        darkBlue: '#111A2C',
        darkGray: '#525C67',
        darkGray2: '#757D85',
        gray: '#898B9A',
        gray2: '#BBBDC1',
        gray3: '#CFD0D7',
        lightGray1: '#DDDDDD',
        lightGray2: '#F5F5F8',
        white2: '#FBFBFB',
        white: '#FFFFFF',
        black: '#000000',

        transparent: 'transparent',
        transparentPrimary: 'rgba(227, 120, 75, 0.4)',
        transparentBlack1: 'rgba(0, 0, 0, 0.1)',
        transparentBlack7: 'rgba(0, 0, 0, 0.7)',

        dark: '#222222',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: 0.99,
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: 0.4,
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
