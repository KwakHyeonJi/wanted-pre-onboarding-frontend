import client from './apiConfig'

const headers = (access_token) => {
    return { headers: { Authorization: `Bearer ${access_token}` } }
}

const createTodo = (access_token, todo) => client.post('/todos', { todo }, headers(access_token))

const getTodos = (access_token) => client.get('/todos', headers(access_token))

const updateTodo = (access_token, id, todo, isCompleted) =>
    client.put(`/todos/${id}`, { todo, isCompleted }, headers(access_token))

const deleteTodo = (access_token, id) => client.delete(`/todos/${id}`, headers(access_token))

export { createTodo, getTodos, updateTodo, deleteTodo }
