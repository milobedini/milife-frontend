import { gql } from 'graphql-request';

/** Queries. */

/** Tasks. */
export const queryAllTasks = gql`
  query AllTasks {
    allTasks {
      name
      id
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
  query Me {
    me {
      name
      id
      email
      tasks {
        name
        id
      }
      completions {
        task {
          name
        }
        date
      }
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

/** Tasks. */

/** Users. */
