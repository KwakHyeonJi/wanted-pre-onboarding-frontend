import { useNavigate } from 'react-router-dom'

import TodoCreate from '../components/TodoCreate'
import TodoList from '../components/TodoList'
import { TodoProvider } from '../context/todoContext'

function Todo() {
  const navigate = useNavigate()

  const handleSignOut = () => {
    localStorage.removeItem('accessToken')
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
