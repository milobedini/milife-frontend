import { palette } from 'src/styles/mui/muiDefaultTheme';

export const MuiAccordion = {
  defaultProps: {
    disableGutters: true,
    square: true
  },
  styleOverrides: {
    root: {
      borderBottom: `1px solid ${palette.divider}`,
      boxShadow: 'none',
      '&::before': {
        content: 'none'
      }
    }
  }
};
