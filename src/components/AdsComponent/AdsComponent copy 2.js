import { Link } from 'react-router-dom'
import * as S from './AdsComponent.styled'
import { useSelector } from 'react-redux'

const AdsComponent = () => {
  const ads = useSelector((state) => state.user.ads)
  console.log('АДС', ads)

  if (!ads) return <div>Loading</div>

  return (
    <>
      {ads.map((ad, index) => {
        console.log('Первое изображение:', ad.images[0])
        return (
          <S.CardsItem key={index}>
            <S.CardsCard>
              <S.CardsImage>
                <Link href="" target="_blank">
                  {ad.images[0] && ad.images[0].url && (
                    <S.CardsImageImg
                      src={`http://127.0.0.1:8090/${ad.images[0].url}`}
                      alt="picture"
                    />
                  )}
                </Link>
              </S.CardsImage>
              <S.CardContent>
                <a href="" target="_blank">
                  <S.CardTitle>{ad.title}</S.CardTitle>
                </a>
                <S.CardPrice>{ad.price.toLocaleString('ru-RU')} ₽</S.CardPrice>
                <S.CardPlace>Санкт Петербург</S.CardPlace>
                <S.CardDate>Сегодня в&nbsp;10:45</S.CardDate>
              </S.CardContent>
            </S.CardsCard>
          </S.CardsItem>
        )
      })}
    </>
  )
}

export default AdsComponent
