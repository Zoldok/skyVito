import { useRefreshTokenMutation } from '../store/Service/Service'

export const useTokenRefresh = () => {
  const [refreshToken, { isLoading, isError, isSuccess }] =
    useRefreshTokenMutation()

  const handleRefreshToken = () => {
    const access_token = localStorage.getItem('access_token')
    const refresh_token = localStorage.getItem('refresh_token')
    
    if (access_token && refresh_token) {
      try {
        refreshToken({
          access_token: access_token,
          refresh_token: refresh_token,
        })
      } catch (error) {
        console.log('Произошла ошибка при обновлении токена:', error)
      }
    }
  }

  return { handleRefreshToken, isLoading, isError, isSuccess }
}