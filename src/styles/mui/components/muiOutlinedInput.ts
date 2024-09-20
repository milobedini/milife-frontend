import { grey } from '@mui/material/colors';

export const MuiOutlinedInput = {
  styleOverrides: {
    root: {
      borderRadius: 0,
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: grey[500]
      }
    }
  }
};
