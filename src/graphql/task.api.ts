import { MutationAddMyTaskArgs, MutationRemoveMyTaskArgs, Task } from 'src/types/resolvers-types';
import { baseApi } from './api';
import { mutationAddTask, mutationRemoveTask, queryAllTasks } from './queries';

export const taskApi = baseApi.injectEndpoints({
  overrideExisting: false,
  endpoints: (builder) => ({
    getTasks: builder.query<Task[], void>({
      query: () => ({
        body: queryAllTasks
      }),
      providesTags: ['Tasks'],
      transformResponse: (response: { allTasks: Task[] }) => response.allTasks
    }),
    addMyTask: builder.mutation<Task, MutationAddMyTaskArgs>({
      query: (variables) => ({
        body: mutationAddTask,
        variables
      }),
      invalidatesTags: ['Tasks', 'User']
    }),
    removeMyTask: builder.mutation<Task, MutationRemoveMyTaskArgs>({
      query: (variables) => ({
        body: mutationRemoveTask,
        variables
      }),
      invalidatesTags: ['Tasks', 'User']
    })
  })
});

export const { useGetTasksQuery, useAddMyTaskMutation, useRemoveMyTaskMutation } = taskApi;
