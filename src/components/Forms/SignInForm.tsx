import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import LoadingButton from '@mui/lab/LoadingButton';
import { TextField } from '@mui/material';
import BasicAlert from 'src/components/ErrorStates/BasicAlert';
import ScrollTop from 'src/components/ScrollToTop';
import { useLoginUserMutation } from 'src/graphql/user.api';
import { RootState } from 'src/store';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Must be a valid email').required('Email is required'),
  password: Yup.string().required('Password is required').max(50, 'Password is too long')
});

function SignInForm() {
  const router = useRouter();
  const [loginUser, { isError, error, isLoading, isSuccess }] = useLoginUserMutation();
  const auth = useSelector((state: RootState) => state.auth);

  const { values, touched, errors, handleChange, handleBlur, handleSubmit } = useFormik({
    validationSchema,
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (input) => {
      loginUser(input);
    }
  });

  // Side Effects
  useEffect(() => {
    if (auth.token && isSuccess) {
      router.push('/dashboard');
    }
  }, [router, auth.token, isSuccess]);

  useEffect(() => {
    if (isError) {
      //   console.log(error);
    }
  }, [isError, error]);

  return (
    <div className="container">
      <div>
        <h1>Sign in</h1>
        <p>Every day counts</p>
      </div>
      <form onSubmit={handleSubmit} className="flex w-full flex-col items-center">
        <div className="mt-2 flex w-full max-w-screen-xl flex-col gap-4 p-4">
          <TextField
            name="email"
            label="Your email"
            type="email"
            fullWidth
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
          />
          <TextField
            name="password"
            label="Your password"
            type="password"
            fullWidth
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
          />
        </div>
        <LoadingButton
          variant="contained"
          type="submit"
          color="primary"
          sx={{
            width: '320px',
            maxWidth: '100%'
          }}
          loading={isLoading}
        >
          Sign in
        </LoadingButton>
      </form>
      <ScrollTop />
      {isError && <BasicAlert message={'An error occurred. Please try again.'} severity="error" />}
    </div>
  );
}

export default SignInForm;
