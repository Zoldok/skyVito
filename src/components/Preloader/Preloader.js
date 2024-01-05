import * as S from './Preloader.styles'

export function Preloader() {
  return (
    <S.HeaderStyleMyProfile>
      <S.RippleLoaderContainer>
        <S.RippleLoader>
          <S.RippleDiv />
          <S.RippleDiv />
        </S.RippleLoader>
      </S.RippleLoaderContainer>
    </S.HeaderStyleMyProfile>
  )
}

