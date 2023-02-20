import { request, gql, GraphQLClient } from 'graphql-request'

const endpoint = 'http://localhost:4000/graphql'

const gqlClient = new GraphQLClient(endpoint)

// GraphQL Queries
const TODOS_QUERY = gql`
  {
    listTodos {
      id
      task
      is_done
    }
  }
`

const TODO_CREATE = gql`
  mutation ($task: String!) {
    createTodo(task: $task) {
      id
      task
      is_done
    }
  }
`

const TODO_DELETE = gql`
  mutation ($id: Float!) {
    deleteTodo(id: $id) {
      id
      task
      is_done
    }
  }
`

const TODO_UPDATE = gql`
  mutation ($id: Float!, $task: String!, $is_done: Boolean!) {
    updateTodo(id: $id, task: $task, is_done: $is_done) {
      id
      task
      is_done
    }
  }
`

// GraphQL Api Helpers
export const listTodos = () => gqlClient.request(TODOS_QUERY)

export const createTodo = (todo: any) => gqlClient.request(TODO_CREATE, todo)

export const deleteTodo = (todo: any) => gqlClient.request(TODO_DELETE, todo)

export const updateTodo = (todo: any) => gqlClient.request(TODO_UPDATE, todo)
