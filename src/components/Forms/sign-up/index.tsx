import { TextField } from '@mui/material';
import ScrollTop from 'src/components/ScrollToTop';

function SignUp() {
  const handleSubmit = () => {};
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Create new account</h1>
          <p>Improvement starts today</p>
        </div>
        <TextField
          name="name"
          label="Your name"
          type="text"
          variant="outlined"
          fullWidth
          className="text-white placeholder-white"
          hiddenLabel
          helperText="Helper Text"
        />
      </form>
      <ScrollTop />
    </div>
  );
}

export default SignUp;
