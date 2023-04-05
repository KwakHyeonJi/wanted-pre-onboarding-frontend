import React, { useState } from 'react'
import { useAuthContext } from '../context/AuthContext'
import { useTodoContext } from '../context/TodoContext'
import { deleteTodo } from '../api/todo'

const TodoItem = ({ id, todo, isCompleted, handleToggle, handleEdit }) => {
    const { accessToken } = useAuthContext()
    const { removeTodo } = useTodoContext()
    const [error, setError] = useState('')

    const handleRemove = async () => {
        try {
            await deleteTodo(accessToken, id)
            removeTodo(id)
            setError('')
        } catch (error) {
            setError('Todo 삭제 실패')
        }
    }

    return (
        <div>
            <label>
                <input type='checkbox' onChange={() => handleToggle(id, todo, isCompleted)} checked={isCompleted} />
                <span>{todo}</span>
            </label>
            <button type='button' onClick={() => handleEdit(id)} data-testid='modify-button'>
                수정
            </button>
            <button type='button' onClick={handleRemove} data-testid='delete-button'>
                삭제
            </button>
            {error}
        </div>
    )
}

export default TodoItem
