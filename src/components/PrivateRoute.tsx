import { Navigate, Outlet } from 'react-router-dom'

interface PrivateRouteProps {
  requireAuth: boolean
}

const PrivateRoute = ({ requireAuth }: PrivateRouteProps) => {
  const isAuthenticated = localStorage.getItem('accessToken')

  if (requireAuth) {
    return isAuthenticated ? <Outlet /> : <Navigate to="/" />
  } else {
    return isAuthenticated ? <Navigate to="/todo" /> : <Outlet />
  }
}

export default PrivateRoute
