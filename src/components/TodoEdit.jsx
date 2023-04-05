import React, { useState } from 'react'
import { useAuthContext } from '../context/AuthContext'
import { useTodoContext } from '../context/TodoContext'
import { updateTodo } from '../api/todo'
import useInput from '../hooks/useInput'

const TodoEdit = ({ id, todo, isCompleted, handleToggle, handleCancel }) => {
    const { editTodo } = useTodoContext()
    const { accessToken } = useAuthContext()
    const { value, handleChange } = useInput(todo)
    const [error, setError] = useState('')

    const handleSave = async () => {
        try {
            await updateTodo(accessToken, id, value, isCompleted)
            editTodo(id, todo)
            setError('')
        } catch (error) {
            setError('Todo 수정 실패')
        }
    }

    return (
        <form onSubmit={handleSave}>
            <label>
                <input type='checkbox' onChange={() => handleToggle(id, todo, isCompleted)} checked={isCompleted} />
                <input type='text' value={value} onChange={handleChange} data-testid='modify-input' />
            </label>
            <button type='submit' data-testid='submit-button'>
                제출
            </button>
            <button type='button' onClick={handleCancel} data-testid='cancel-button'>
                취소
            </button>
            {error}
        </form>
    )
}

export default TodoEdit
