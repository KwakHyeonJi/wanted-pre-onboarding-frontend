import { createContext, useContext, useReducer } from 'react'

const initialState = []

const todoReducer = (state, action) => {
    switch (action.type) {
        case 'SET_TODOS':
            return action.payload
        case 'ADD_TODO':
            return [...state, action.payload]
        case 'REMOVE_TODO':
            return state.filter((todo) => todo.id !== action.payload)
        case 'EDIT_TODO':
            return state.map((todo) => (todo.id === action.payload.id ? { ...todo, todo: action.payload.todo } : todo))
        case 'TOGGLE_TODO':
            return state.map((todo) =>
                todo.id === action.payload ? { ...todo, isCompleted: !todo.isCompleted } : todo
            )
        default:
            return state
    }
}

const TodoContext = createContext()

const TodoProvider = ({ children }) => {
    const [todos, dispatch] = useReducer(todoReducer, initialState)

    const setTodos = (todos) => {
        dispatch({ type: 'SET_TODOS', payload: todos })
    }

    const addTodo = (todo) => {
        dispatch({ type: 'ADD_TODO', payload: todo })
    }

    const removeTodo = (id) => {
        dispatch({ type: 'REMOVE_TODO', payload: id })
    }

    const editTodo = (id, todo) => {
        dispatch({ type: 'EDIT_TODO', payload: { id, todo } })
    }

    const toggleTodo = (id) => {
        dispatch({ type: 'TOGGLE_TODO', payload: id })
    }

    return (
        <TodoContext.Provider value={{ todos, setTodos, addTodo, removeTodo, editTodo, toggleTodo }}>
            {children}
        </TodoContext.Provider>
    )
}

const useTodoContext = () => {
    const value = useContext(TodoContext)
    if (value === undefined) throw new Error('useTodoContext should be used within TodoProvider')
    return value
}

export { TodoProvider, useTodoContext }
