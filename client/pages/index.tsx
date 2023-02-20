import { useState } from 'react'

import { Container, Heading } from '@chakra-ui/react'

import { useQuery, useQueryClient, useMutation } from 'react-query'

import AddTodo from '../components/add-todo'
import TodoList from '../components/todo-list'
import { listTodos, updateTodo, createTodo, deleteTodo } from '../utils/graphql'

const Home = () => {
  const { data, isLoading, error } = useQuery('todos', listTodos)

  const queryClient = useQueryClient()

  const { mutate: useUpdateTodo } = useMutation(updateTodo, {
    onSettled: () => queryClient.invalidateQueries(['todos'])
  })
  const { mutate: useCreateTodo } = useMutation(createTodo, {
    onSettled: () => queryClient.invalidateQueries(['todos'])
  })
  const { mutate: useDeleteTodo } = useMutation(deleteTodo, {
    onSettled: () => queryClient.invalidateQueries(['todos'])
  })

  const [inputOpen, setInputOpen] = useState(false)
  const [selected, setSelected] = useState(false)

  const resetInput = () => {
    setInputOpen(false)
    setSelected(false)
  }

  const useToggle = todo => {
    useUpdateTodo({ ...todo, is_done: !todo.is_done })
    resetInput()
  }

  const useDelete = ({ id }) => {
    useDeleteTodo({ id })
    resetInput()
  }

  const useCreate = () => {
    useCreateTodo(selected)
    resetInput()
  }

  const useUpdate = () => {
    useUpdateTodo(selected)
    resetInput()
  }

  return (
    <>
      <Container pt={94} pb={400} color="black" minH="100vh">
        <Heading fontSize={24} mb="30px">
          {isLoading ? (
            'LOADING...'
          ) : error ? (
            <pre>{error.message?.toUpperCase()}</pre>
          ) : (
            'TODO'
          )}
        </Heading>

        <TodoList
          onToggle={useToggle}
          onDelete={useDelete}
          onSelect={data => {
            setInputOpen(true)
            setSelected(data)
          }}
          data={data}
        />
      </Container>

      <AddTodo
        value={selected}
        onChange={setSelected}
        onSubmit={Boolean(selected?.id) ? useUpdate : useCreate}
        isOpen={inputOpen}
        onOpen={() => {
          setInputOpen(true)
        }}
        onClose={() => {
          if (Boolean(selected?.id)) setSelected(false)
          setInputOpen(false)
        }}
      />
    </>
  )
}

export default Home
