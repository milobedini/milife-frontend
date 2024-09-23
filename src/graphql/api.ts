import { ClientError, request } from 'graphql-request';
import { createApi } from '@reduxjs/toolkit/query/react';

const graphqlBaseQuery =
  ({ baseUrl }: { baseUrl: string }) =>
  async ({ body }: { body: string }) => {
    try {
      const result = await request(baseUrl, body);
      return { data: result };
    } catch (error) {
      if (error instanceof ClientError) {
        return { error: { status: error.response.status, data: error } };
      }
      return { error: { status: 500, data: error } };
    }
  };

// export const api = createApi({
//   baseQuery: graphqlBaseQuery({
//     baseUrl: 'http://localhost:4000/graphql'
//   }),
//   reducerPath: 'api',
//   endpoints: (builder) => ({
//     getTasks: builder.query<Task[], void>({
//       query: () => ({
//         body: queryAllTasks
//       })
//     })
//   })
// });
const baseApi = createApi({
  tagTypes: ['User', 'Tasks'],
  baseQuery: graphqlBaseQuery({
    baseUrl: 'http://localhost:4000/graphql'
  }),
  // reducerPath: 'api',
  endpoints: () => ({})
});

// export const { useGetTasksQuery } = api;
export { baseApi };
