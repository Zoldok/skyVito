import { useDispatch } from 'react-redux'
import AdsComponent from '../../components/AdsComponent/AdsComponent'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Search from '../../components/Search/Search'
import { useGetObjQuery } from '../../store/Service/Service'
import * as S from './Main.styled'
import { setAds } from '../../store/slices/userSlice'
import { useEffect } from 'react'
import { useAuth } from '../../hooks/use-auth'

const Main = () => {
  const dispatch = useDispatch()
  const { data, isLoading } = useGetObjQuery()
  // const storedEmail = localStorage.getItem('email');
  // console.log(storedEmail); 
const {isAuth} = useAuth()
console.log(isAuth);
  

  // console.log(data)
  useEffect(() => {
    if (!isLoading) {
      dispatch(setAds(data)) // Отправляем полученные данные в состояние
    }
  }, [data, isLoading])

  if (isLoading) return <div>идет загрузка</div>

  const Logut = () => {
    localStorage.clear();
    window.location.reload(); // Перезагрузка страницы
  }

  return  (

    <S.Wrapper>
      <S.Container>
        <Header isAuth={isAuth} />
        <button onClick={Logut}>Выйти</button>
        <S.Main>
          <Search />
          <S.MainContainer>
            <S.MainH2>Объявления</S.MainH2>
            <S.MainContent>
              <S.ContentCards>
                <AdsComponent />
              </S.ContentCards>
            </S.MainContent>
          </S.MainContainer>
        </S.Main>
        <Footer />
      </S.Container>
    </S.Wrapper>
  )
}

export default Main
