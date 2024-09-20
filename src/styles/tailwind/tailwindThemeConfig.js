const Typography = require('@tailwindcss/typography');
const { fontFamily } = require('tailwindcss/defaultTheme');
const ContainerMaxWidth = require('./plugins/pluginContainerMaxWidth');
const MuiTypography = require('./plugins/pluginMuiTypography');
const ContainerOffsetSize = require('./plugins/pluginContainerOffsetSize');

/**
 * This file should include all MUI based configs to the tailwind theme.
 * Learn more about tailwind presets here: https://tailwindcss.com/docs/presets
 */
module.exports = {
  /** Theme key should include MUI theme defaults ONLY. */
  theme: {
    /** Breakpoints. */
    screens: {
      sm: '768px',
      md: '1024px',
      lg: '1280px',
      xl: '1440px'
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '16px',
        sm: '24px',
        lg: '40px'
      }
    },
    /** Font family. */
    fontFamily: {
      inter: ['var(--font-inter)', ...fontFamily.sans],
      canelaMedium: ['var(--font-canela)', ...fontFamily.sans],
      canelaTextWeb: ['var(--font-canela-text)', ...fontFamily.sans]
    },
    /** Color palette. */
    colors: {
      common: {
        black: '#000000',
        white: '#ffffff'
      },
      grey: {
        DEFAULT: '#9e9e9e',
        50: '#fafafa',
        100: '#f5f5f5',
        200: '#eeeeee',
        300: '#e0e0e0',
        400: '#bdbdbd',
        500: '#9e9e9e',
        600: '#757575',
        700: '#616161',
        800: '#424242',
        900: '#212121',
        A100: '#f5f5f5',
        A200: '#eeeeee',
        A400: '#bdbdbd',
        A700: '#616161'
      },
      black: {
        DEFAULT: '#000000',
        main: '#000000',
        light: '#333333',
        dark: '#000000'
      },
      clay: {
        DEFAULT: '#EFEDEA',
        main: '#EFEDEA',
        light: '#F9F8F7',
        dark: '#A8A29B',
        100: '#F9F8F7',
        200: '#F5F4F2',
        300: '#EFEDEA',
        400: '#EBE8E5',
        500: '#D2CCC5',
        600: '#A8A29B'
      },
      blue: {
        DEFAULT: '#374753',
        main: '#374753',
        light: '#E9EFF3',
        dark: '#131820',
        contrastText: '#ffffff'
      },
      gold: {
        DEFAULT: '#84691F',
        main: '#84691F',
        secondary: '#B08F3B',
        light: '#D9C49D',
        dark: '#8B6C33',
        contrastText: '#ffffff'
      },
      red: {
        DEFAULT: '#831616',
        main: '#831616',
        light: '#9B4444',
        dark: '#5B0F0F',
        tint: '#F0E3E3',
        contrastText: '#ffffff'
      },
      success: {
        DEFAULT: '#629B06',
        main: '#629B06',
        light: '#E6EFD7',
        dark: '#236600',
        contrastText: '#ffffff'
      },
      primary: {
        DEFAULT: '#000',
        main: '#000',
        light: 'rgb(51, 51, 51)',
        dark: 'rgb(0, 0, 0)',
        contrastText: '#ffffff'
      },
      secondary: {
        DEFAULT: '#EFEDEA',
        main: '#EFEDEA',
        light: '#F9F8F7',
        dark: '#A8A29B',
        contrastText: '#A8A29B'
      },
      text: {
        DEFAULT: 'rgba(0, 0, 0, 0.87)',
        primary: 'rgba(0, 0, 0, 0.87)',
        secondary: 'rgba(0, 0, 0, 0.6)',
        disabled: 'rgba(0, 0, 0, 0.38)'
      },
      error: {
        DEFAULT: '#d32f2f',
        main: '#d32f2f',
        light: '#ef5350',
        dark: '#c62828',
        contrastText: '#ffffff'
      },
      info: {
        DEFAULT: '#0288d1',
        main: '#0288d1',
        light: '#03a9f4',
        dark: '#01579b',
        contrastText: '#ffffff'
      },
      warning: {
        DEFAULT: '#ed6c02',
        main: '#ed6c02',
        light: '#ff9800',
        dark: '#e65100',
        contrastText: '#ffffff'
      },
      action: {
        active: 'rgba(0, 0, 0, 0.54)',
        disabled: 'rgba(0, 0, 0, 0.26)',
        disabledBackground: 'rgba(0, 0, 0, 0.12)',
        focus: 'rgba(0, 0, 0, 0.12)',
        hover: 'rgba(0, 0, 0, 0.04)',
        selected: 'rgba(0, 0, 0, 0.08)'
      },
      divider: 'rgba(0, 0, 0, 0.12)'
    },
    /** Spacing. */
    spacing: {
      1: '8px',
      2: '16px',
      3: '24px',
      4: '32px',
      5: '40px',
      6: '48px',
      7: '56px',
      8: '64px',
      9: '72px',
      10: '80px'
    },
    /** Extend key should include all non-MUI extra variables, to have a clear separation. */
    extend: {
      spacing: {
        0: 0,
        px: '1px',
        0.25: '2px',
        0.5: '4px',
        0.75: '6px',
        1.5: '12px',
        2.5: '20px',
        3.5: '28px'
      },
      colors: {
        black: '#000000',
        white: '#ffffff',
        transparent: 'transparent',
        currentColor: 'currentColor'
      },
      maxWidth: {
        text: 866,
        form: 400,
        search: 720,
        modal: 600,
        order: 600
      },
      gridTemplateRows: {
        6: 'repeat(6, minmax(0, 1fr))',
        7: 'repeat(7, minmax(0, 1fr))',
        8: 'repeat(8, minmax(0, 1fr))',
        9: 'repeat(9, minmax(0, 1fr))',
        10: 'repeat(10, minmax(0, 1fr))',
        11: 'repeat(11, minmax(0, 1fr))',
        12: 'repeat(12, minmax(0, 1fr))',
        13: 'repeat(13, minmax(0, 1fr))',
        14: 'repeat(14, minmax(0, 1fr))',
        15: 'repeat(15, minmax(0, 1fr))',
        16: 'repeat(16, minmax(0, 1fr))',
        17: 'repeat(17, minmax(0, 1fr))',
        18: 'repeat(18, minmax(0, 1fr))',
        19: 'repeat(19, minmax(0, 1fr))',
        20: 'repeat(20, minmax(0, 1fr))'
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            h1: {
              marginBottom: theme('spacing.1'),
              fontFamily: 'var(--font-inter)',
              fontSize: '20px',
              fontWeight: 600,
              lineHeight: '24px',
              color: theme('colors.text.primary')
            },
            h2: {
              marginBottom: theme('spacing.1'),
              fontFamily: 'var(--font-inter)',
              fontSize: '20px',
              fontWeight: 600,
              lineHeight: '24px',
              color: theme('colors.text.primary')
            },
            h3: {
              marginBottom: theme('spacing.1'),
              fontFamily: 'var(--font-inter)',
              fontSize: '18px',
              fontWeight: 600,
              lineHeight: '22px',
              color: theme('colors.text.primary')
            },
            h4: {
              marginBottom: theme('spacing.1'),
              fontFamily: 'var(--font-inter)',
              fontSize: '14px',
              fontWeight: 600,
              lineHeight: '18px',
              color: theme('colors.text.primary')
            },
            p: {
              marginBottom: theme('spacing.4'),
              fontFamily: 'var(--font-inter)',
              fontSize: '18px',
              fontWeight: 400,
              lineHeight: '32px',
              color: theme('colors.text.primary')
            },
            blockquote: {
              marginBottom: theme('spacing.4'),
              paddingTop: theme('spacing.3'),
              paddingBottom: theme('spacing.3'),
              fontFamily: 'var(--font-canela-text)',
              fontSize: '30px',
              fontWeight: 500,
              lineHeight: '40px',
              color: theme('colors.text.primary'),
              borderTop: `1px solid ${theme('colors.grey.300')}`,
              borderBottom: `1px solid ${theme('colors.grey.300')}`,
              borderLeft: 'none',
              paddingLeft: 0
            },
            ul: {
              fontFamily: 'var(--font-inter)',
              marginBottom: theme('spacing.3'),
              marginTop: theme('spacing.2'),
              paddingLeft: '22px',
              listStyleType: 'disc',
              listStylePosition: 'outside'
            },
            ol: {
              fontFamily: 'var(--font-inter)',
              marginBottom: theme('spacing.3'),
              marginTop: theme('spacing.2'),
              paddingLeft: '22px',
              listStyleType: 'decimal',
              listStylePosition: 'outside'
            },
            li: {
              fontFamily: 'var(--font-inter)',
              display: 'list-item'
            },
            a: {
              fontFamily: 'var(--font-inter)',
              textDecoration: 'underline'
            },
            figure: {
              fontFamily: 'var(--font-inter)',
              display: 'flex',
              marginBottom: theme('spacing.4')
            },
            figcaption: {
              marginBottom: theme('spacing.1'),
              fontFamily: 'var(--font-inter)',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '19px',
              color: theme('colors.text.secondary')
            }
          }
        }
      })
    }
  },
  plugins: [ContainerMaxWidth, MuiTypography, ContainerOffsetSize, Typography]
};
