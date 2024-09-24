import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

type BasicAlertProps = {
  message: string;
  severity: 'error' | 'info' | 'success' | 'warning';
};

function BasicAlert({ message, severity }: BasicAlertProps) {
  return (
    <Stack sx={{ width: '100%' }} spacing={2} position={'absolute'} bottom={0}>
      <Alert variant="filled" severity={severity}>
        {message}
      </Alert>
    </Stack>
  );
}

export default BasicAlert;
