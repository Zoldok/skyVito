export function useAuth() {
  const token = localStorage.getItem('access_token') || ''
  return {
    isAuth: !!token,
  }
}
