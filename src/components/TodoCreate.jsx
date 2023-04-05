import React, { useState } from 'react'
import { useAuthContext } from '../context/AuthContext'
import { useTodoContext } from '../context/TodoContext'
import { createTodo } from '../api/todo'
import useInput from '../hooks/useInput'

const TodoCreate = () => {
    const { accessToken } = useAuthContext()
    const { addTodo } = useTodoContext()
    const { value, handleChange, reset } = useInput('')
    const [error, setError] = useState('')

    const handleAddTodo = async (e) => {
        e.preventDefault()
        try {
            const newTodo = await createTodo(accessToken, value)
            addTodo(newTodo)
            reset()
            setError('')
        } catch (error) {
            setError('Todo 생성 실패')
        }
    }
    return (
        <form onSubmit={handleAddTodo}>
            <input type='text' value={value} onChange={handleChange} data-testid='new-todo-input' />
            <button type='submit' data-testid='new-todo-add-button'>
                추가
            </button>
            {error}
        </form>
    )
}

export default TodoCreate
