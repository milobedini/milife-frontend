// src/graphql/api.ts
import { ClientError, GraphQLClient } from 'graphql-request';
import { BaseQueryFn, createApi } from '@reduxjs/toolkit/query/react';
import type { RootState } from 'src/store';

const graphqlBaseQuery =
  ({
    baseUrl
  }: {
    baseUrl: string;
  }): BaseQueryFn<{ body: string; variables?: Record<string, any> }, unknown, unknown> =>
  async ({ body, variables }, { getState }) => {
    try {
      const { token } = (getState() as RootState).auth;
      const headers: Record<string, string> = {};

      if (token) {
        headers.Authorization = `Bearer ${token}`;
      }

      const client = new GraphQLClient(baseUrl, { headers });
      const result = await client.request(body, variables);

      return { data: result };
    } catch (error) {
      if (error instanceof ClientError) {
        return { error: { status: error.response.status, data: error } };
      }
      return { error: { status: 500, data: error } };
    }
  };

const baseApi = createApi({
  baseQuery: graphqlBaseQuery({ baseUrl: 'http://localhost:4000/graphql' }),
  tagTypes: ['User', 'Tasks', 'UserTasks'],
  endpoints: () => ({})
});

export { baseApi };
