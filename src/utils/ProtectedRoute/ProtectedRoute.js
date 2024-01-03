import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../hooks/use-auth'

export const ProtectedRoute = ({ redirectPath = '/login' }) => {
  const { isAuth } = useAuth()
  if (!isAuth) {
    return <Navigate to={redirectPath} replace={true} />
  }

  return <Outlet />
}
