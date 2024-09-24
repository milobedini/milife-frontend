import { setCredentials } from 'src/store/slices/authSlice';
import { MutationLoginArgs, MutationSignupArgs, User } from 'src/types/resolvers-types';
import { baseApi } from './api';
import { mutationUserLogin, mutationUserSignup, queryMe } from './queries';

type LoginResponse = {
  login: {
    user: User;
    token: string;
  };
};

export const userApi = baseApi.injectEndpoints({
  overrideExisting: false,
  endpoints: (builder) => ({
    // Auth Routes
    registerUser: builder.mutation<User, MutationSignupArgs>({
      query: (variables) => ({
        body: mutationUserSignup,
        variables
      })
    }),
    loginUser: builder.mutation<LoginResponse, MutationLoginArgs>({
      query: (variables) => ({
        body: mutationUserLogin,
        variables
      }),
      //   Handle storing the token and user in the store.
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const { user, token } = data.login;

          // Store in localStorage for persistence
          if (typeof window !== 'undefined') {
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
          }

          dispatch(setCredentials({ user, token }));
        } catch (error) {
          console.log(error);
        }
      }
    }),
    // Other User Routes
    me: builder.query<User, void>({
      query: () => ({
        body: queryMe
      })
    })
  })
});

export const { useRegisterUserMutation, useLoginUserMutation, useMeQuery } = userApi;
