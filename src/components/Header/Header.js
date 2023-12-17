import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import * as S from './Header.styled'
import { useAuth } from '../../hooks/use-auth'
import AddModal from '../Modal/AddModal/AddModal'

const Header = ({ profileKey }) => {
  //ключь из хука, авторизован ли пользователь
  const { isAuth } = useAuth()
  // console.log(isAuth)
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false);
  //выход из приложения
  const Logut = () => {
    navigate('/')
    localStorage.clear()
    // window.location.reload() // Перезагрузка страницы
  }
  // console.log(profileKey)

  const openModal = () => {
    setIsModalOpen(true); // Открываем модальное окно
  };

  const closeModal = () => {
    setIsModalOpen(false); // Закрываем модальное окно
  };

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
            <S.HeaderBtnPutAd onClick={openModal}>Разместить объявление</S.HeaderBtnPutAd>
            <S.HeaderBtnLk onClick={Logut}>Выйти</S.HeaderBtnLk>
          </>
        ) : isAuth ? (
          <>
            <S.HeaderBtnPutAd onClick={openModal}>Разместить объявление</S.HeaderBtnPutAd>
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
      {isModalOpen && 
        <AddModal onClose={closeModal}/>}
    </S.Header>
  )
}

export default Header
