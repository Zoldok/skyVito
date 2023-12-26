import * as S from './Profile.styled'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import CenterBlockProfile from '../../components/CenterBlockProfile/CenterBlockProfile'
import AdsComponent from '../../components/AdsComponent/AdsComponent'
import { useGetUserInfoQuery } from '../../store/Service/Service'
import { useSelector } from 'react-redux'
import Preloader from '../../components/Preloader/Preloader'

const Profile = () => {
  const profileKey = true
  const { data: userInfo } = useGetUserInfoQuery()
  const ads = useSelector((state) => state.user.ads)
  let matchedAds = []

  if (!userInfo) {
    return <Preloader />
  }

  console.log(userInfo.id)

  ads.forEach((ad) => {
    if (ad.user.id === userInfo.id) {
      matchedAds.push(ad)
    }
  })

  return (
    <S.Wrapper>
      <S.Container>
        <Header profileKey={profileKey} />
        <S.MainContainer>
          <CenterBlockProfile currentUser={userInfo} />
          <S.MainContent>
            <S.ContentCards>
              <AdsComponent ads={matchedAds} />
            </S.ContentCards>
          </S.MainContent>
        </S.MainContainer>
        <Footer />
      </S.Container>
    </S.Wrapper>
  )
}

export default Profile
