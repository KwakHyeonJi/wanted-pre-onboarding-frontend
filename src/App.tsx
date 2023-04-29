import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom'

import PrivateRoute from './components/PrivateRoute'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Todo from './pages/Todo'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute requireAuth={false} />}>
          <Route path="/" element={<Navigate replace to="/signin" />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Route>

        <Route element={<PrivateRoute requireAuth={true} />}>
          <Route path="/todo" element={<Todo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
