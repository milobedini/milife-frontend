export const MuiDataGrid = {
  defaultProps: {},
  styleOverrides: {
    root: {
      '& .MuiDataGrid-cell:focus': {
        outline: 'none'
      },
      '& .MuiDataGrid-cell:focus-within': {
        outline: 'none'
      },
      // Ensure we use a smaller arrow indicating when sorted
      '& .MuiDataGrid-columnHeader .MuiButtonBase-root': {
        width: '10px',
        height: '10px',
        cursor: 'pointer',
        marginLeft: '4px'
      }
    }
  }
};
