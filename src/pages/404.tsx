import React from 'react';
import { Button } from '@mui/material';

function NotFound() {
  return (
    <div className="container flex flex-col items-center gap-12">
      <h2 className="text-center">This page does not exist</h2>
      <Button href={'/'} variant="contained">
        Back to home
      </Button>
    </div>
  );
}

export default NotFound;
