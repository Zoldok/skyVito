import * as S from './NotFound.styled'

export const NotFound = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Message>404</S.Message>
        <S.TextMessage>Упс... страница не наидена</S.TextMessage>
      </S.Container>
    </S.Wrapper>
  )
}
