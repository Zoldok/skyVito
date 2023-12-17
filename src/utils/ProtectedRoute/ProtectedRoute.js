import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoute = ({ redirectPath = '/' }) => {
  const user = localStorage.getItem('refresh_token')
  if (!user) {
    return <Navigate to={redirectPath} replace={true} />
  }

  return <Outlet />
}
