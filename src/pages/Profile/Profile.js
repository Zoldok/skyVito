import * as S from './Profile.styled'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import CenterBlockProfile from '../../components/CenterBlockProfile/CenterBlockProfile'
import AdsComponent from '../../components/AdsComponent/AdsComponent'

const Profile = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <Header />
        <S.MainContainer>
          <CenterBlockProfile />
          <AdsComponent />
        </S.MainContainer>
        <Footer />
      </S.Container>
    </S.Wrapper>
  )
}

export default Profile
