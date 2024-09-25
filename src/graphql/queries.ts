import { gql } from 'graphql-request';

/** Fragments. */
export const GenericTasks = gql`
  fragment GenericTasks on Task {
    id
    name
    description
  }
`;

export const Completions = gql`
  fragment Completions on TaskCompletion {
    id
    date
    completed
    task {
      name
    }
  }
`;

export const DetailedUser = gql`
  ${Completions}
  fragment DetailedUser on User {
    id
    name
    email
    tasks {
      name
      id
    }
    completions {
      ...Completions
    }
  }
`;

/** Queries. */

/** Tasks. */
export const queryAllTasks = gql`
  ${GenericTasks}
  query AllTasks {
    allTasks {
      ...GenericTasks
    }
  }
`;

export const queryMyTasks = gql`
  query MyTasks {
    myTasks {
      name
      id
    }
  }
`;

export const queryMyTaskCompletions = gql`
  query MyTaskCompletions {
    myTaskCompletions(taskId: "66eaf0215be1c5c004651914") {
      task {
        name
      }
      date
      user {
        name
      }
      completed
    }
  }
`;

/** Users. */
export const queryMe = gql`
  ${DetailedUser}
  query Me {
    me {
      ...DetailedUser
    }
  }
`;

/** Mutations. */

export const mutationUserSignup = gql`
  mutation SignUp($email: String!, $name: String!, $password: String!) {
    signup(email: $email, name: $name, password: $password) {
      id
      name
      email
    }
  }
`;

export const mutationUserLogin = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        name
        email
      }
    }
  }
`;

/** Tasks. */

/** Users. */
