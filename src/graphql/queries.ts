import { gql } from 'graphql-request';

/** Fragments. */
export const GenericTasks = gql`
  fragment GenericTasks on Task {
    id
    name
    description
    image
  }
`;

export const Completions = gql`
  fragment Completions on TaskCompletion {
    id
    date
    completed
    userTask {
      task {
        name
        id
      }
    }
  }
`;

export const DetailedUser = gql`
  ${Completions}
  fragment DetailedUser on User {
    id
    name
    email
    userTasks {
      task {
        id
        name
      }
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
    userTasks {
      task {
        name
        id
      }
      id
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
      name
      email
      id
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
        id
      }
    }
  }
`;

/** Tasks. */
export const mutationAddTask = gql`
  mutation AddMyTask($id: ID!) {
    addMyTask(id: $id) {
      id
      task {
        name
      }
      userId
    }
  }
`;

export const mutationRemoveTask = gql`
  mutation RemoveMyTask($id: ID!) {
    removeMyTask(id: $id) {
      message
    }
  }
`;

/** Users. */
