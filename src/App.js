import { useEffect } from 'react';
import * as S from './App.styled';
import AppRoutes from './routes';
import useTokenRefresh from './hooks/useTokenRefresh';
import { useGetAdsQuery } from './store/Service/Service';
import { setAds } from './store/slices/userSlice';
import { useDispatch } from 'react-redux';
import Preloader from './components/Preloader/Preloader';

function App() {
  const dispatch = useDispatch()
  const { handleRefreshToken } = useTokenRefresh();

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
      dispatch(setAds(data))
    }
  }, [data, isLoading])

  if (isLoading ) {
    return <Preloader/>
  }

  return (
    <S.MainApp>
      <AppRoutes />
    </S.MainApp>
  );
}

export default App;