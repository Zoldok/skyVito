import * as S from './Preloader.styles'

function Preloader() {
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

export default Preloader
