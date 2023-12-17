import { useDispatch } from 'react-redux'
import AdsComponent from '../../components/AdsComponent/AdsComponent'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Search from '../../components/Search/Search'
import {
  useGetAdsQuery,
  useGetUserInfoQuery,
} from '../../store/Service/Service'
import * as S from './Main.styled'
import { setAds } from '../../store/slices/userSlice'
import { useEffect } from 'react'
import { useAuth } from '../../hooks/use-auth'
import useTokenRefresh from '../../hooks/useTokenRefresh'

const Main = () => {
  const dispatch = useDispatch()
  const { isAuth } = useAuth()
  const { handleRefreshToken } = useTokenRefresh()
  const { data, isLoading } = useGetAdsQuery()

  // eslint-disable-next-line no-unused-vars
  const {
    data: userInfo,
    isLoading: loadUser,
    isError: userInfoError,
  } = useGetUserInfoQuery()

  useEffect(() => {
    if (userInfoError && userInfoError.status === 401) {
      handleRefreshToken()
    }
  }, [userInfoError])

  //записываем данные текущего пользователя в localStorage
  if (userInfo) {
    localStorage.setItem('id_сur_user', userInfo.id)
    console.log('данные пользователя', userInfo)
  }

  useEffect(() => {
    if (!isLoading) {
      dispatch(setAds(data)) // Отправляем полученные данные объявлений в состояние
    }
  }, [data, isLoading])

  if (isLoading || loadUser) return <div>идет загрузка</div>

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
