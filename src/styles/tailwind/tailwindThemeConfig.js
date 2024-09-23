const Typography = require('@tailwindcss/typography');
const { fontFamily } = require('tailwindcss/defaultTheme');
const ContainerMaxWidth = require('./plugins/pluginContainerMaxWidth');
const MuiTypography = require('./plugins/pluginMuiTypography');
const ContainerOffsetSize = require('./plugins/pluginContainerOffsetSize');

module.exports = {
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '16px',
        sm: '20px',
        lg: '40px'
      }
    },
    fontFamily: {
      poppins: ['Poppins', ...fontFamily.sans],
      playfair: ['Playfair Display', 'serif']
    },
    colors: {
      background: {
        DEFAULT: '#212121'
      },
      primary: {
        DEFAULT: '#BB86FC',
        50: '#F2E7FE',
        100: '#DBB2FF',
        200: '#BB86FC',
        300: '#985EFF',
        400: '#7F39FB',
        500: '#6200EE',
        600: '#5600E8',
        700: '#3700B3',
        800: '#30009C',
        900: '#23036A',
        text: '#000000',
        textAlt: '#FFFFFF'
      },
      secondary: {
        DEFAULT: '#03DAC5',
        50: '#C8FFF4',
        100: '#70EFDE',
        200: '#03DAC5',
        300: '#00C4B4',
        400: '#00B3A6',
        500: '#01A299',
        600: '#019592',
        700: '#018786',
        800: '#017374',
        900: '#005457',
        text: '#000000'
      },
      outline: {
        DEFAULT: '#FFFFFF12'
      },
      error: {
        DEFAULT: '#CF6679'
      },
      gray: {
        DEFAULT: '#E0E0E0',
        100: '#F5F5F5',
        200: '#EEEEEE',
        300: '#E0E0E0',
        400: '#BDBDBD',
        500: '#9E9E9E',
        600: '#757575',
        700: '#616161',
        800: '#424242',
        900: '#212121'
      },
      white: {
        DEFAULT: '#FFFFFF'
      },
      black: {
        DEFAULT: '#000000'
      }
      // shadow: {
      //   main: 'rgba(0, 0, 0, 0.5)',
      //   prominent: 'rgba(0, 0, 0, 0.6)',
      //   soft: 'rgba(0, 0, 0, 0.3)',
      //   verySoft: 'rgba(0, 0, 0, 0.5)',
      //   diffuse: 'rgba(0, 0, 0, 0.4)'
      // }
    },
    extend: {
      spacing: {
        1: '8px',
        2: '12px',
        3: '16px',
        4: '24px',
        5: '32px',
        6: '40px',
        7: '48px',
        8: '56px',
        9: '64px'
      },
      borderRadius: {
        xl: '12px',
        '2xl': '16px'
      },
      opacity: {
        surfaceHigh: '0.87',
        surfaceMed: '0.60',
        surfaceLow: '0.38',
        primaryHigh: '0.1',
        primaryMed: '0.74',
        primaryLow: '0.38'
      },
      boxShadow: {
        main: '0 2px 4px rgba(0, 0, 0, 0.5)',
        prominent: '0 4px 8px rgba(0, 0, 0, 0.6)',
        soft: '0 1px 3px rgba(0, 0, 0, 0.3)',
        verySoft: '0 1px 2px rgba(0, 0, 0, 0.5)',
        diffuse: '0 8px 16px rgba(0, 0, 0, 0.4)'
      }
    }
  },
  plugins: [ContainerMaxWidth, MuiTypography, ContainerOffsetSize, Typography]
};
