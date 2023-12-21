import AdsComponent from '../../components/AdsComponent/AdsComponent'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Search from '../../components/Search/Search'
import {
  useGetUserInfoQuery,
} from '../../store/Service/Service'
import * as S from './Main.styled'
import { useAuth } from '../../hooks/use-auth'
import { useSelector } from 'react-redux'


const Main = () => {
  const { isAuth } = useAuth()
  const {
    data: userInfo, isLoading
  } = useGetUserInfoQuery()
  const ads = useSelector((state) => state.user.ads)

  //записываем данные текущего пользователя в localStorage
  if (userInfo) {
    localStorage.setItem('id_сur_user', userInfo.id)
    console.log('данные пользователя', userInfo)
  }

  if (isLoading) return <div>идет загрузка</div>

  return (
    <S.Wrapper>
      <S.Container>
        <Header isAuth={isAuth} />
        <S.Main>
          <Search />
          <S.MainContainer>
            <S.MainH2>Объявления</S.MainH2>
            <S.MainContent>
              <S.ContentCards>
                <AdsComponent ads={ads}/>
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
