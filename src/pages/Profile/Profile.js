import * as S from './Profile.styled'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import CenterBlockProfile from '../../components/CenterBlockProfile/CenterBlockProfile'
import AdsComponent from '../../components/AdsComponent/AdsComponent'
import { useGetUserInfoQuery } from '../../store/Service/Service'


const Profile = () => {
  const profileKey = true

  const { data: userInfo } = useGetUserInfoQuery()
  if (!userInfo) return <div>load</div>

  return (
    <S.Wrapper>
      <S.Container>
        <Header profileKey={profileKey} />
        <S.MainContainer>
          <CenterBlockProfile currentUser={userInfo} />
          <S.MainContent>
            <S.ContentCards>
              <AdsComponent />
            </S.ContentCards>
          </S.MainContent>
        </S.MainContainer>
        <Footer />
      </S.Container>
    </S.Wrapper>
  )
}

export default Profile
