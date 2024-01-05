import { Link } from 'react-router-dom'
import * as S from './AdsComponent.styled'
import { formatTime } from '../../utils/FormatteTime'

export const AdsComponent = ({ ads, hasNoResults }) => {
  if (!ads) return <div>Обьявлений не наидено</div>

  if (hasNoResults) {
    return <div>Ничего не найдено</div>
  }

  const reversedAds = ads.slice().reverse()

  return (
    <>
      {reversedAds.map((ad, index) => (
        <Link to={`/ad/${ad.id}`} key={index}>
          <S.CardsItem>
            <S.CardsCard>
              <S.CardsImage>
                <S.CardsImageImg
                  src={
                    ad.images[0]?.url
                      ? `http://127.0.0.1:8090/${ad.images[0].url}`
                      : '../img/NoPhoto.png'
                  }
                  alt="picture"
                />
              </S.CardsImage>
              <S.CardContent>
                <S.CardTitle>{ad.title}</S.CardTitle>
                <S.CardPrice>{ad.price.toLocaleString('ru-RU')} ₽</S.CardPrice>
                <S.CardPlace>{ad.user.city}</S.CardPlace>
                <S.CardDate>{formatTime(ad.created_on)}</S.CardDate>
              </S.CardContent>
            </S.CardsCard>
          </S.CardsItem>
        </Link>
      ))}
    </>
  )
}
