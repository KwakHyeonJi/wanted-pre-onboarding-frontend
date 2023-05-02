import { Navigate, Outlet } from 'react-router-dom'

import { ACCESS_TOKEN_KEY } from '../types/auth'

interface ProtectedRouteProps {
  requireAuth: boolean
}

const ProtectedRoute = ({ requireAuth }: ProtectedRouteProps) => {
  const isAuthenticated = localStorage.getItem(ACCESS_TOKEN_KEY)

  if (requireAuth) {
    return isAuthenticated ? <Outlet /> : <Navigate to="/" />
  } else {
    return isAuthenticated ? <Navigate to="/todo" /> : <Outlet />
  }
}

export default ProtectedRoute
