import { useNavigate } from 'react-router-dom'
import * as S from './MainMenu.styled'

export const MainMenu = () => {
  const navigate = useNavigate()

  return (
    <S.MainMenu>
      <S.MenuLogoLink target="_blank">
        <S.MenuLogoImg src="../img/logo.png" alt="logo" />
      </S.MenuLogoLink>
      <S.MenuForm action="#">
        <S.MenuBtn onClick={() => navigate('/')}>
          Вернуться на&nbsp;главную
        </S.MenuBtn>
      </S.MenuForm>
    </S.MainMenu>
  )
}
