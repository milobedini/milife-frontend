import type { BrixColorOverrides } from 'src/styles/mui/muiThemeConfig';

declare module '@mui/material/CircularProgress' {
  interface CircularProgressPropsColorOverrides extends BrixColorOverrides {}
}

export const MuiCircularProgress = {};
