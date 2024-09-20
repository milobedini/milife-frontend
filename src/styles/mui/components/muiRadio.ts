import type { BrixColorOverrides } from 'src/styles/mui/muiThemeConfig';

declare module '@mui/material/Radio' {
  interface RadioPropsColorOverrides extends BrixColorOverrides {}
}

export const MuiRadio = {};
