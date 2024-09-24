import { MutationSignupArgs, User } from 'src/types/resolvers-types';
import { baseApi } from './api';
import { mutationUserSignup } from './queries';

const userApi = baseApi.injectEndpoints({
  overrideExisting: false,
  endpoints: (builder) => ({
    registerUser: builder.mutation<User, MutationSignupArgs>({
      query: (variables) => ({
        body: mutationUserSignup,
        variables
      })
    })
  })
});

export const { useRegisterUserMutation } = userApi;
