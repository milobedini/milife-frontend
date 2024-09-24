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

const baseApi = createApi({
  tagTypes: ['User', 'Tasks'],
  baseQuery: graphqlBaseQuery({
    baseUrl: 'http://localhost:4000/graphql'
  }),
  endpoints: () => ({})
});

export { baseApi };
