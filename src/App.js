import { Routes, Route, Navigate } from 'react-router-dom'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Todo from './pages/Todo'

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate replace to='/signin' />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/todo' element={<Todo />} />
        </Routes>
    )
}

export default App
