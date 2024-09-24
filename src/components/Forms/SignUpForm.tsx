import { useEffect } from 'react';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import LoadingButton from '@mui/lab/LoadingButton';
import { TextField } from '@mui/material';
import BasicAlert from 'src/components/ErrorStates/BasicAlert';
import ScrollTop from 'src/components/ScrollToTop';
import { useRegisterUserMutation } from 'src/graphql/user.api';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required').max(50, 'Name is too long'),
  email: Yup.string().email('Must be a valid email').required('Email is required'),
  password: Yup.string().required('Password is required').max(50, 'Password is too long')
});

function SignUpForm() {
  const router = useRouter();
  const [registerUser, { isError, error, isLoading, isSuccess }] = useRegisterUserMutation();

  const { values, touched, errors, handleChange, handleBlur, handleSubmit } = useFormik({
    validationSchema,
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    onSubmit: (input) => {
      registerUser(input);
    }
  });

  // Side Effects
  useEffect(() => {
    if (isSuccess) {
      router.push('/login');
    }
  }, [isSuccess, router]);

  useEffect(() => {
    if (isError) {
      // console.log(error);
    }
  }, [isError, error]);

  return (
    <div className="container">
      <div>
        <h1>Create new account</h1>
        <p>Improvement starts today</p>
      </div>
      <form onSubmit={handleSubmit} className="flex w-full flex-col items-center">
        <div className="mt-2 flex w-full max-w-screen-xl flex-col gap-4 p-4">
          <TextField
            name="name"
            label="Your name"
            type="text"
            fullWidth
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.name && Boolean(errors.name)}
            helperText={touched.name && errors.name}
          />
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
          Create account
        </LoadingButton>
      </form>
      <ScrollTop />
      {isError && <BasicAlert message={'An error occurred. Please try again.'} severity="error" />}
    </div>
  );
}

export default SignUpForm;
