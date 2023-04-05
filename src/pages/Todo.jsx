import React from 'react'
import { TodoProvider } from '../context/TodoContext'
import TodoCreate from '../components/TodoCreate'
import TodoList from '../components/TodoList'

const Todo = () => {
    return (
        <main>
            <h1>Todo</h1>
            <TodoProvider>
                <TodoCreate />
                <TodoList />
            </TodoProvider>
        </main>
    )
}

export default Todo
