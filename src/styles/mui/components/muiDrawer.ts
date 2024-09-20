import { palette } from 'src/styles/mui/muiDefaultTheme';

export const MuiDrawer = {
  defaultProps: {
    slotProps: {
      backdrop: {
        sx: {
          backgroundColor: palette.action.disabledBackground
        }
      }
    }
  }
};
