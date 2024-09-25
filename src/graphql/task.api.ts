import { MutationAddMyTaskArgs, MutationRemoveMyTaskArgs, Task, UserTask } from 'src/types/resolvers-types';
import { baseApi } from './api';
import { mutationAddTask, mutationRemoveTask, queryAllTasks, queryMyTasks } from './queries';

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
    getUserTasks: builder.query<UserTask[], void>({
      query: () => ({
        body: queryMyTasks
      }),
      providesTags: ['UserTasks'],
      transformResponse: (response: { userTasks: UserTask[] }) => response.userTasks
    }),
    addMyTask: builder.mutation<Task, MutationAddMyTaskArgs>({
      query: (variables) => ({
        body: mutationAddTask,
        variables
      }),
      invalidatesTags: ['UserTasks']
    }),
    removeMyTask: builder.mutation<Task, MutationRemoveMyTaskArgs>({
      query: (variables) => ({
        body: mutationRemoveTask,
        variables
      }),
      invalidatesTags: ['UserTasks']
    })
  })
});

export const { useGetTasksQuery, useAddMyTaskMutation, useRemoveMyTaskMutation, useGetUserTasksQuery } = taskApi;
