import { createElement } from 'react';
import { Icon } from 'src/components/Icon';

export const MuiAccordionSummary = {
  defaultProps: {
    expandIcon: createElement(Icon, { name: 'ExpandMore', fontSize: 'small' })
  },
  styleOverrides: {
    root: {
      minHeight: 0,
      paddingRight: '0.5rem',
      paddingLeft: 0,
      gap: '1rem',
      '&:hover': {
        backgroundColor: 'transparent'
      }
    },
    content: {
      marginTop: 0,
      marginBottom: 0
    }
  }
};
