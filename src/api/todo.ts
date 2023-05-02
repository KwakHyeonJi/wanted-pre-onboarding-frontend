import { Todo } from '../types/todo'

import { authInstance } from './apiConfig'

const createTodo = (todo: string): Promise<Todo> =>
  authInstance.post('/todos', { todo })

const getTodos = (): Promise<Todo[]> => authInstance.get('/todos')

const updateTodo = ({ id, todo, isCompleted }: Todo) =>
  authInstance.put(`/todos/${id}`, { todo, isCompleted })

const deleteTodo = (id: number) => authInstance.delete(`/todos/${id}`)

export { createTodo, getTodos, updateTodo, deleteTodo }
