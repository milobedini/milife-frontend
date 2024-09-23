import { palette as defaultPalette } from 'src/styles/mui/muiDefaultTheme';
import type { BrixColorOverrides } from 'src/styles/mui/muiThemeConfig';
import { palette } from 'src/styles/mui/theme/palette';

const { grey, text } = defaultPalette;

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides extends BrixColorOverrides {}
}

export const MuiButton = {
  defaultProps: {
    disableElevation: true,
    disableRipple: true
  },
  styleOverrides: {
    // Keys here are the "Rule-name" from here: https://mui.com/material-ui/api/button/#css
    root: {
      fontSize: 16,
      textTransform: 'none' as const,
      borderRadius: 0,
      paddingLeft: 16,
      paddingRight: 16,
      fontWeight: 600
    },
    contained: {
      boxShadow: 'none'
    },
    containedPrimary: {
      color: palette.white.main,
      backgroundColor: palette.gold.main,
      '&:hover': {
        backgroundColor: palette.blue.main
      },
      '&:active': {
        backgroundColor: palette.blue.main
      }
    },
    containedSecondary: {
      color: palette.secondary.contrastText,
      backgroundColor: palette.secondary.main,
      '&:hover': {
        backgroundColor: palette.secondary[400]
      }
    },
    containedClay: {
      color: palette.clay.contrastText,
      backgroundColor: palette.clay.main,
      '&:hover': {
        backgroundColor: palette.clay[400]
      }
    },
    containedWhite: {
      color: palette.black.main,
      backgroundColor: palette.white.main,
      fontSize: '15px',
      fontWeight: 400,
      textDecoration: 'underline'
    },
    outlined: {
      '&:hover': {
        backgroundColor: palette.clay.light,
        borderColor: palette.blue.dark
      }
    },
    outlinedPrimary: {
      borderColor: palette.blue.dark
    },
    outlinedSecondary: {
      borderColor: grey[300],
      color: text.primary
    },
    outlinedClay: {
      borderColor: grey[300],
      color: text.primary
    },
    textPrimary: {
      '&:hover': {
        backgroundColor: grey[200]
      }
    },
    textSecondary: {
      color: text.primary,
      '&:hover': {
        backgroundColor: grey[200]
      }
    },
    textClay: {
      color: text.primary,
      '&:hover': {
        backgroundColor: grey[200]
      }
    },
    outlinedWhite: {
      color: palette.white.main,
      borderColor: palette.white.main,
      '&:hover': {
        backgroundColor: palette.white.main,
        color: palette.white.contrastText,
        borderColor: palette.white.main
      }
    }
  }
};
