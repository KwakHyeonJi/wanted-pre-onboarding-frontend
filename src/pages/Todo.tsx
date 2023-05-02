import { useNavigate } from 'react-router-dom'

import TodoCreate from '../components/TodoCreate'
import TodoList from '../components/TodoList'
import { TodoProvider } from '../context/todoContext'
import { ACCESS_TOKEN_KEY } from '../types/auth'

function Todo() {
  const navigate = useNavigate()

  const handleSignOut = () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY)
    navigate('/')
  }

  return (
    <main>
      <h1>Todo</h1>
      <TodoProvider>
        <TodoCreate />
        <TodoList />
      </TodoProvider>
      <button type="button" onClick={handleSignOut}>
        로그아웃
      </button>
    </main>
  )
}

export default Todo
