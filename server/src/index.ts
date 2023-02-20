import * as express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { buildSchema } from 'graphql'

import { DataStore } from 'notarealdb'
import { report } from 'process'
import * as fs from 'fs'
import * as cors from 'cors'

interface TodoConfig {
  id?: number;
  task?: string;
  is_done?: boolean;
}

// Setup dummy database
const db = new DataStore(`${__dirname}/db`)
const todoDB = db.collection<any>('database')

// GraphQL Schema
const schema = buildSchema(fs.readFileSync(`${__dirname}/schema.graphql`).toString())

// GraphQL Resolvers
const root = {
  listTodos: (): Array<TodoConfig | any> => {
    return todoDB.list() 
  },
  createTodo: ({task}: any): TodoConfig => {
    const todoObj: any = { 
      id: new Date().getTime(), 
      task, 
      is_done: false 
    }
    todoDB.create(todoObj)
    return todoDB.get(todoObj.id)
  },
  deleteTodo: ({id}) => {
    const todoObj = todoDB.get(id)
    todoDB.delete(id)
    return todoObj
  },
  updateTodo: ({id, task, is_done}: any): TodoConfig => {
    todoDB.update({id, task, is_done})
    return todoDB.get(id)
  }
}

// GraphQL Server
const app = express();

app.use( cors() )

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(4000);

console.log('Running a GraphQL API server at http://localhost:4000/graphql');
