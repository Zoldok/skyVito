import { useEffect } from 'react';
import * as S from './App.styled';
import AppRoutes from './routes';
import useTokenRefresh from './hooks/useTokenRefresh';
import { useGetAdsQuery } from './store/Service/Service';
import { setAds } from './store/slices/userSlice';
import { useDispatch } from 'react-redux';
// import { useRefreshTokenMutation } from './store/Service/Service';


function App() {
  const dispatch = useDispatch()
  const { handleRefreshToken } = useTokenRefresh();

  // const token = localStorage.getItem('access_token')
  // console.log("текущий токен", token);

  useEffect(() => {
    handleRefreshToken();
    const interval = setInterval(() => {
      handleRefreshToken();
    }, 240000);

    return () => clearInterval(interval); 
  }, []); 

  const { data, isLoading } = useGetAdsQuery()

  useEffect(() => {
    if (!isLoading) {
      dispatch(setAds(data)) // Отправляем полученные данные в состояние
    }
  }, [data, isLoading])

  if (isLoading) return <div>идет загрузка</div>

  return (
    <S.MainApp>
      <AppRoutes />
    </S.MainApp>
  );
}

export default App;