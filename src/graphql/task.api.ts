import { Task } from 'src/types/resolvers-types';
import { baseApi } from './api';
import { queryAllTasks } from './queries';

export const taskApi = baseApi.injectEndpoints({
  overrideExisting: false,
  endpoints: (builder) => ({
    getTasks: builder.query<Task[], void>({
      query: () => ({
        body: queryAllTasks
      })
    })
  })
});

export const { useGetTasksQuery } = taskApi;
