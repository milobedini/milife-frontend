import { palette as defaultPalette } from 'src/styles/mui/muiDefaultTheme';

const { common } = defaultPalette;

export const brixColors = {
  clay: {
    main: '#EFEDEA',
    light: '#F9F8F7',
    dark: '#A8A29B',
    contrastText: common.black,
    100: '#F9F8F7',
    200: '#F5F4F2',
    300: '#EFEDEA',
    400: '#EBE8E5',
    500: '#D2CCC5',
    600: '#A8A29B'
  },
  blue: {
    main: '#374753',
    light: '#E9EFF3',
    dark: '#131820',
    contrastText: common.white
  },
  gold: {
    main: '#84691F',
    secondary: '#B08F3B',
    light: '#D9C49D',
    dark: '#8B6C33',
    contrastText: common.white
  },
  red: {
    main: '#831616',
    light: '#9B4444',
    dark: '#5B0F0F',
    tint: '#F0E3E3',
    contrastText: common.white
  },
  success: {
    main: '#629B06',
    light: '#E6EFD7',
    dark: '#236600',
    contrastText: common.white
  },
  black: {
    main: common.black,
    light: '#333333',
    dark: '#000000',
    contrastText: common.white
  },
  white: {
    main: common.white,
    light: '#FFFFFF',
    dark: '#FFFFFF',
    contrastText: common.black
  }
};

export const palette = {
  primary: brixColors.black,
  secondary: brixColors.clay,
  ...brixColors
};
