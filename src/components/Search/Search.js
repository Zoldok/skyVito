import { useState } from 'react'
import * as S from './Search.styled'

const Search = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim() === '') {
      onSearch('')
    } else {
      onSearch(searchQuery)
    }
  }

  const handleClear = () => {
    setSearchQuery('')
    onSearch('')
  }

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleSearch(e)
    }
  }

  return (
    <S.MainSearch>
      <S.SearchLogoLink target="_blank">
        <S.SearchLogoImg src="img/logo.png" alt="logo" />
      </S.SearchLogoLink>
      <S.SearchLogoMobLink target="_blank">
        <S.SearchLogoMobImg src="img/logo-mob.png" alt="logo" />
      </S.SearchLogoMobLink>
      <S.SearchForm>
        <S.SearchText
          onKeyDown={handleInputKeyDown}
          placeholder="Поиск по объявлениям"
          name="search"
          value={searchQuery}
          onChange={handleInputChange}
        />
        <S.SearchTextMob
          onKeyDown={handleInputKeyDown}
          onSubmit={handleSearch}
          placeholder="Поиск"
          name="search-mob"
          value={searchQuery}
          onChange={handleInputChange}
        />
        {searchQuery && <S.ClearButton onClick={handleClear}>✖️</S.ClearButton>}
        <S.SearchBtn onClick={handleSearch}>Найти</S.SearchBtn>
      </S.SearchForm>
    </S.MainSearch>
  )
}

export default Search
