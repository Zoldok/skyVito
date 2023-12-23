
import { useState } from 'react';
import * as S from './Search.styled'

const Search = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');


  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   onSearch(searchQuery);
  // }
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      onSearch(''); // Передаем пустую строку, чтобы получить все объявления
    } else {
      onSearch(searchQuery);
    }
  };


  const handleClear = () => {
    setSearchQuery(''); // Сбросить поисковый запрос
    onSearch(''); // Также сбросить результаты поиска
  };
  return (
    <S.MainSearch>
    <S.SearchLogoLink  target="_blank">
      <S.SearchLogoImg src="img/logo.png" alt="logo" />
    </S.SearchLogoLink>
    <S.SearchLogoMobLink  target="_blank">
      <S.SearchLogoMobImg src="img/logo-mob.png" alt="logo" />
    </S.SearchLogoMobLink>
    <S.SearchForm  onSubmit={handleSearch}>
      <S.SearchText
        // type="search"
        placeholder="Поиск по объявлениям"
        name="search"
        value={searchQuery}
        onChange={handleInputChange}
        // onSearch={handleClear} 
        // onReset={handleInputClear} 
        
      />
      <S.SearchTextMob onSubmit={handleSearch}
        // type="search"
        placeholder="Поиск"
        name="search-mob"
        value={searchQuery}
        onChange={handleInputChange}
      />
              {searchQuery && ( // Показываем кнопку очистки, если поле не пустое
          <S.ClearButton onClick={handleClear}>✖️</S.ClearButton>
        )}
      <S.SearchBtn>Найти</S.SearchBtn>
    </S.SearchForm>
  </S.MainSearch>
  );
};

export default Search