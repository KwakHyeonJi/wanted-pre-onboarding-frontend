import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'
import { useTodoContext } from '../context/TodoContext'
import { getTodos, updateTodo } from '../api/todo'
import TodoEdit from '../components/TodoEdit'
import TodoItem from '../components/TodoItem'

const TodoList = () => {
    const navigate = useNavigate()
    const { accessToken } = useAuthContext()
    const { todos, setTodos, toggleTodo } = useTodoContext()
    const [editing, setEditing] = useState(null)
    const [error, setError] = useState('')

    const handleToggle = async (id, todo, isCompleted) => {
        try {
            await updateTodo(accessToken, id, todo, !isCompleted)
            toggleTodo(id)
            setError('')
        } catch (error) {
            setError('Todo 수정 실패')
        }
    }

    const handleEdit = (id) => {
        setEditing(id)
    }

    const handleCancel = () => {
        setEditing(null)
    }

    useEffect(() => {
        if (accessToken === null) {
            navigate('/signin')
        }

        const fetchInitialTodos = async () => {
            try {
                const data = await getTodos(accessToken)
                setTodos(data)
                setError('')
            } catch (error) {
                setError('Todo 조회 실패')
            }
        }
        fetchInitialTodos()
    }, [accessToken])

    return (
        <div>
            <ul>
                {todos.map(({ id, todo, isCompleted }) => (
                    <li key={id}>
                        {editing === id ? (
                            <TodoEdit
                                id={id}
                                todo={todo}
                                isCompleted={isCompleted}
                                handleToggle={handleToggle}
                                handleCancel={handleCancel}
                            />
                        ) : (
                            <TodoItem
                                id={id}
                                todo={todo}
                                isCompleted={isCompleted}
                                handleToggle={handleToggle}
                                handleEdit={handleEdit}
                            />
                        )}
                    </li>
                ))}
            </ul>
            {error}
        </div>
    )
}

export default TodoList
