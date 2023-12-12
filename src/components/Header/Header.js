import { useNavigate } from 'react-router-dom'
import * as S from './Header.styled'
import { useAuth } from '../../hooks/use-auth'

const Header = ({ profileKey }) => {
  const { isAuth } = useAuth()
  // console.log(isAuth)
  const navigate = useNavigate()
  const Logut = () => {
    navigate('/')
    localStorage.clear()
    // window.location.reload() // Перезагрузка страницы
  }
  // console.log(profileKey)
  return (
    <S.Header>
      <S.HeaderNav>
        <S.Logo>
          <S.LogoMobLink>
            <S.LogoMobImg src="img/logo-mob.png" alt="logo" />
          </S.LogoMobLink>
        </S.Logo>
        {profileKey ? (
          <>
            <S.HeaderBtnPutAd>Разместить объявление</S.HeaderBtnPutAd>
            <S.HeaderBtnLk onClick={Logut}>Выйти</S.HeaderBtnLk>
          </>
        ) : isAuth ? (
          <>
            <S.HeaderBtnPutAd>Разместить объявление</S.HeaderBtnPutAd>
            <S.HeaderBtnLk
              onClick={() => {
                navigate('/profile')
              }}
            >
              Личный кабинет
            </S.HeaderBtnLk>
          </>
        ) : (
          <S.HeaderBtnLkEnter
            onClick={() => {
              navigate('/login')
            }}
          >
            Вход в личный кабинет
          </S.HeaderBtnLkEnter>
        )}
      </S.HeaderNav>
    </S.Header>
  )
}

export default Header
