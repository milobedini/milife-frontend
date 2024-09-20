import { type BrixColorOverrides } from 'src/styles/mui/muiThemeConfig';
import { palette } from 'src/styles/mui/theme/palette';

declare module '@mui/material/Chip' {
  interface ChipPropsColorOverrides extends BrixColorOverrides {}
  interface ChipPropsSizeOverrides {
    short: true;
    xSmall: true;
  }
}
export const MuiChip = {
  styleOverrides: {
    // Keys here are the props from https://mui.com/material-ui/api/chip/#props
    // Must include at least one recognised MUI color prop
    colorPrimary: {
      backgroundColor: palette.primary.main,
      color: palette.primary.contrastText,
      border: '1px solid',
      borderColor: palette.primary.light
    },
    colorGold: {
      backgroundColor: palette.gold.main,
      color: palette.white.main,
      border: '1px solid',
      borderColor: palette.gold.light
    },
    colorWhite: {
      backgroundColor: palette.white.main,
      color: palette.gold.main,
      border: '1px solid',
      borderColor: palette.gold.light
    },
    sizeShort: {
      height: 24
    },
    sizeXSmall: {
      height: 18,
      fontSize: 10,
      '.MuiChip-labelXSmall': {
        paddingRight: 4,
        paddingLeft: 4
      }
    }
  }
};
