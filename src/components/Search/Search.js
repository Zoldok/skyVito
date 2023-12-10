
import * as S from './Search.styled'

const Search = () => {
  return (
    <S.MainSearch>
    <S.SearchLogoLink href="#" target="_blank">
      <S.SearchLogoImg src="img/logo.png" alt="logo" />
    </S.SearchLogoLink>
    <S.SearchLogoMobLink href="#" target="_blank">
      <S.SearchLogoMobImg src="img/logo-mob.png" alt="logo" />
    </S.SearchLogoMobLink>
    <S.SearchForm action="#">
      <S.SearchText
        type="search"
        placeholder="Поиск по объявлениям"
        name="search"
      />
      <S.SearchTextMob
        type="search"
        placeholder="Поиск"
        name="search-mob"
      />
      <S.SearchBtn>Найти</S.SearchBtn>
    </S.SearchForm>
  </S.MainSearch>
  );
};

export default Search;