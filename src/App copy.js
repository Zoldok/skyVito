import { useEffect } from 'react';
import * as S from './App.styled';
import AppRoutes from './routes';
import useTokenRefresh from './hooks/useTokenRefresh';
// import { useRefreshTokenMutation } from './store/Service/Service';


function App() {

  const token = localStorage.getItem('access_token')
  if(token) {


    
  }
  const { handleRefreshToken, error } = useTokenRefresh();
  console.log('Ошибка', error);
  // const { handleRefreshToken, isLoading: load2, isSuccess } = useTokenRefresh();
  // console.log(load2, isSuccess);

  // const token = localStorage.getItem('access_token')
  // console.log("текущий токен", token);

  useEffect(() => {
    handleRefreshToken();
    const interval = setInterval(() => {
      handleRefreshToken();
    }, 240000);

    return () => clearInterval(interval); 
  }, []); 



  return (
    <S.MainApp>
      <AppRoutes />
    </S.MainApp>
  );
}

export default App;