
import * as S from './MainMenu.styled'

const MainMenu = () => {
  return (
    <S.MainMenu>
      <S.MenuLogoLink href="" target="_blank">
        <S.MenuLogoImg src="img/logo.png" alt="logo" />
      </S.MenuLogoLink>
      <S.MenuForm action="#">
        <S.MenuBtn id="btnGoBack">
          Вернуться на&nbsp;главную
        </S.MenuBtn>
      </S.MenuForm>
    </S.MainMenu>
  );
};

export default MainMenu;