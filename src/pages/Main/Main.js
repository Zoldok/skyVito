import AdsComponent from '../../components/AdsComponent/AdsComponent'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Search from '../../components/Search/Search'
import { useGetAdsQuery, useGetUserInfoQuery } from '../../store/Service/Service'
import * as S from './Main.styled'
import { useAuth } from '../../hooks/use-auth'
import {  useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { setAds } from '../../store/slices/userSlice'
import Preloader from '../../components/Preloader/Preloader'

const Main = () => {
  const dispatch = useDispatch()
  const { isAuth } = useAuth()
  const { data: userInfo, isLoading, refetch } = useGetUserInfoQuery()
  const {data, isLoading: isis, refetch: refetchAds} = useGetAdsQuery()
  const ads = useSelector((state) => state.user.ads)
  //для поиска
  const [searchResults, setSearchResults] = useState([]);
  const [hasNoResults, setHasNoResults] = useState(false);

  useEffect(()=> {
    if(!isis) {
      refetchAds()
      dispatch(setAds(data))
    }
  }, [])
  

  //возможно стоит удалить
  useEffect(() => {
    if (!isLoading) {
      refetch()
    }
  }, [])

  //записываем данные текущего пользователя в localStorage
  if (userInfo) {
    localStorage.setItem('id_сur_user', userInfo.id)
    // console.log('данные пользователя', userInfo)
  }

  //для поиска
  const handleSearch = (query) => {
    const filteredAds = ads.filter((ad) =>
      ad.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredAds);
    setHasNoResults(filteredAds.length === 0); // Проверяем, есть ли результаты поиска
  };


  if (isLoading ) {
    return <Preloader/>
  }

  return (
    <S.Wrapper>
      <S.Container>
        <Header isAuth={isAuth} />
        <S.Main>
          <Search onSearch={handleSearch}/>
          <S.MainContainer>
            <S.MainH2>Объявления</S.MainH2>
            <S.MainContent>
              <S.ContentCards>
                <AdsComponent ads={searchResults.length > 0 ? searchResults : ads} hasNoResults={hasNoResults} />
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
