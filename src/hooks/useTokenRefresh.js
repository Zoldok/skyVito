import { useRefreshTokenMutation } from "../store/Service/Service";


const useTokenRefresh = () => {
  const [refreshToken, { isLoading, isError, isSuccess }] = useRefreshTokenMutation();

  const handleRefreshToken = () => {
    refreshToken({ access_token: localStorage.getItem('access_token'), refresh_token: localStorage.getItem('refresh_token') });
  };

  return { handleRefreshToken, isLoading, isError, isSuccess };
};

export default useTokenRefresh;