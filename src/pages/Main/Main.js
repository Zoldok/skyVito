import AdsComponent from '../../components/AdsComponent/AdsComponent'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Search from '../../components/Search/Search'
import {
  useGetAdsQuery,
  useGetUserInfoQuery,
} from '../../store/Service/Service'
import * as S from './Main.styled'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { setAds } from '../../store/slices/userSlice'
import Preloader from '../../components/Preloader/Preloader'

const Main = () => {
  const dispatch = useDispatch()
  const { data: userInfo, isLoading, refetch } = useGetUserInfoQuery()
  const { data, isLoading: isis, refetch: refetchAds } = useGetAdsQuery()
  const ads = useSelector((state) => state.user.ads)
  const [searchResults, setSearchResults] = useState([])
  const [hasNoResults, setHasNoResults] = useState(false)

  useEffect(() => {
    if (!isis) {
      refetchAds()
      dispatch(setAds(data))
    }
  }, [])

  useEffect(() => {
    if (!isLoading) {
      refetch()
    }
  }, [])

  if (userInfo) {
    localStorage.setItem('id_сur_user', userInfo.id)
  }

  const handleSearch = (query) => {
    const filteredAds = ads.filter((ad) =>
      ad.title.toLowerCase().includes(query.toLowerCase())
    )
    setSearchResults(filteredAds)
    setHasNoResults(filteredAds.length === 0)
  }

  if (isLoading) {
    return <Preloader />
  }

  return (
    <S.Wrapper>
      <S.Container>
        <Header/>
        <S.Main>
          <Search onSearch={handleSearch} />
          <S.MainContainer>
            <S.MainH2>Объявления</S.MainH2>
            <S.MainContent>
              <S.ContentCards>
                <AdsComponent
                  ads={searchResults.length > 0 ? searchResults : ads}
                  hasNoResults={hasNoResults}
                />
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
